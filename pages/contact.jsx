/* ===== Contact Page — POSTCARD format (active) =====
   Other variants kept as backups:
   - pages/contact-letter.jsx  (editorial letter, exported as ContactPageLetter)
   - this file below: CLI/terminal version is preserved between markers
     CONTACT_CLI_START and CONTACT_CLI_END (inner end-comment chars neutralized).
   ============================================================ */

/* === EmailJS configuration ===
   Sign up at https://www.emailjs.com (free up to 200 emails/month).
   1. Connect your Gmail in "Email Services" → get the SERVICE_ID
   2. Create a template in "Email Templates" → get the TEMPLATE_ID
      Use variables: {{name}}, {{email}}, {{company}}, {{subject}}, {{message}}, {{budget}}
      Set "To Email" in the template to hello@mistech.mg
   3. Account → API Keys → copy your PUBLIC_KEY
   4. Paste the three values below, save the file, you're done.
   ============================================================ */
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';

const EMAILJS_CONFIGURED =
  EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE' &&
  EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID_HERE' &&
  EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID_HERE';

/* Init EmailJS once when config is ready */
if (typeof window !== 'undefined' && window.emailjs && EMAILJS_CONFIGURED && !window.__emailjsInit) {
  window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  window.__emailjsInit = true;
}

function ContactPage({ t, setPage, lang }) {
  const c = t.contact;
  const isFr = lang === 'fr';
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '', budget: c.budgets[2] });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');
  const [focused, setFocused] = useState(null);

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    setErrorMsg('');

    if (!EMAILJS_CONFIGURED) {
      // Demo / fallback: simulate a send so the UX still works while the dev wires EmailJS.
      console.warn('[Contact] EmailJS not configured — using demo simulation. No email is actually sent.');
      await new Promise(r => setTimeout(r, 1800));
      setStatus('sent');
      return;
    }

    try {
      if (!window.emailjs) throw new Error('EmailJS SDK not loaded');
      // Make sure init ran (in case the SDK arrived after this module)
      if (!window.__emailjsInit) {
        window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
        window.__emailjsInit = true;
      }
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: form.name,
        email: form.email,
        company: form.company || '—',
        subject: form.subject || '—',
        message: form.message,
        budget: form.budget,
        lang: isFr ? 'FR' : 'EN',
        sent_at: new Date().toISOString()
      });
      setStatus('sent');
    } catch (err) {
      console.error('[Contact] EmailJS error:', err);
      setErrorMsg(err && err.text ? err.text : (err && err.message ? err.message : 'Unknown error'));
      setStatus('error');
    }
  };

  return (
    <div className="page page-enter">
      <section className="ct-hero">
        <div className="wrap">
          <Reveal>
            <div className="tag" style={{ marginBottom: 28 }}><span className="dot" /> {c.kicker}</div>
            <h1 className="display ct-hero-title">
              {c.title}{' '}
              <span className="display-i" style={{ color: 'var(--accent)' }}>{c.titleItalic}</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="ct-hero-lead">{c.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="ct-section ct-section--pc">
        <div className="wrap ct-grid">
          <Reveal as="div" className="pc-wrap">
            {status === 'sent' ? (
              <PostcardSent lang={lang} setPage={setPage} reset={() => { setStatus('idle'); setErrorMsg(''); setForm({ name: '', email: '', company: '', subject: '', message: '', budget: c.budgets[2] }); setFocused(null); }} />
            ) : (
              <form className={"pc" + (status === 'sending' ? " is-sending" : "")} onSubmit={submit}>
                <div className="pc-divider" aria-hidden="true" />

                {/* LEFT side — message area (verso classique d'une carte postale) */}
                <div className="pc-left">
                  <div className="pc-greet">
                    <span className="display-i pc-greet-text">{isFr ? "Cher MisTech," : "Dear MisTech,"}</span>
                    <span className="pc-date mono">{new Date().toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>

                  <div className="pc-fields">
                    <PCField num="01" label={isFr ? "Je m'appelle…" : "My name is…"}
                      name="name" value={form.name} onChange={update('name')} required
                      placeholder={isFr ? "Fenosoa" : "Jane"}
                      focused={focused} setFocused={setFocused} />

                    <PCField num="02" label={isFr ? "Je travaille chez…" : "I work at…"}
                      name="company" value={form.company} onChange={update('company')}
                      placeholder={isFr ? "(optionnel)" : "(optional)"}
                      focused={focused} setFocused={setFocused} />

                    <PCField num="03" label={isFr ? "Mon projet, en bref…" : "My project, in short…"}
                      name="subject" value={form.subject} onChange={update('subject')}
                      placeholder={isFr ? "site, e-commerce, app de gestion…" : "site, e-commerce, business app…"}
                      focused={focused} setFocused={setFocused} />

                    <PCField num="04" textarea
                      label={isFr ? "L'idée :" : "The idea:"}
                      name="message" value={form.message} onChange={update('message')} required
                      placeholder={isFr ? "Décrivez-le en quelques mots…" : "Tell us about it…"}
                      focused={focused} setFocused={setFocused} />
                  </div>

                  <div className="pc-budget">
                    <div className="pc-budget-label">
                      <span className="pc-budget-n mono">05</span>
                      <span>{isFr ? "Côté budget" : "Budget"}</span>
                    </div>
                    <div className="pc-budget-pills">
                      {c.budgets.map(b => (
                        <button key={b} type="button"
                          className={"pc-budget-pill" + (form.budget === b ? " is-active" : "")}
                          onClick={() => setForm(f => ({ ...f, budget: b }))}>{b}</button>
                      ))}
                    </div>
                  </div>

                  <div className="pc-signoff">
                    <span className="pc-signoff-prefix display-i">{isFr ? "À bientôt," : "Talk soon,"}</span>
                    <span className="pc-signoff-name display-i">{form.name || (isFr ? "votre signature" : "your signature")}</span>
                  </div>
                </div>

                {/* RIGHT side — stamp + address + send */}
                <div className="pc-right">
                  <div className="pc-stamp" aria-hidden="true">
                    <div className="pc-stamp-inner">
                      <div className="pc-stamp-corner pc-stamp-corner--tl">★</div>
                      <div className="pc-stamp-corner pc-stamp-corner--tr">★</div>
                      <div className="pc-stamp-corner pc-stamp-corner--bl">★</div>
                      <div className="pc-stamp-corner pc-stamp-corner--br">★</div>
                      <div className="pc-stamp-art display">M·T</div>
                      <div className="pc-stamp-foot mono">
                        <div>MISTECH</div>
                        <div>MG · 2026</div>
                      </div>
                    </div>
                  </div>

                  <div className="pc-postmark" aria-hidden="true">
                    <svg viewBox="-50 -50 100 100">
                      <defs>
                        <path id="pmCirc" d="M 0 0 m -36 0 a 36 36 0 1 1 72 0 a 36 36 0 1 1 -72 0" />
                      </defs>
                      <circle cx="0" cy="0" r="40" fill="none" stroke="var(--violet)" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="34" fill="none" stroke="var(--violet)" strokeWidth="1" strokeDasharray="2 3" />
                      <text fontFamily="var(--f-mono)" fontSize="7" fontWeight="600" fill="var(--violet)" letterSpacing="2">
                        <textPath href="#pmCirc" startOffset="6%">MISTECH · ANTANANARIVO · {String(new Date().getFullYear())}</textPath>
                      </text>
                      <text x="0" y="-2" textAnchor="middle" fontFamily="var(--f-display)" fontWeight="700" fontSize="9" fill="var(--violet)">REÇU</text>
                      <text x="0" y="9" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="6" fill="var(--violet)" letterSpacing="1.5">SOUS 24H</text>
                    </svg>
                  </div>

                  <div className="pc-address">
                    <div className="pc-address-label mono">{isFr ? "À renvoyer à :" : "Reply to:"}</div>
                    <div className="pc-address-lines">
                      <input
                        className="pc-input pc-input--email"
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        required
                        placeholder={isFr ? "vous@email.com" : "you@email.com"}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        autoComplete="off"
                      />
                      <div className="pc-address-line mono">hello@mistech.mg</div>
                      <div className="pc-address-line mono">MisTech · Web Studio</div>
                      <div className="pc-address-line mono">Antananarivo · MG</div>
                    </div>
                  </div>

                  <button type="submit" className="pc-send" disabled={status === 'sending'}>
                    <span className="pc-send-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
                    </span>
                    <span>{status === 'sending' ? (isFr ? "Envoi…" : "Sending…") : (isFr ? "Poster la carte" : "Mail the card")}</span>
                  </button>
                  {status === 'error' && (
                    <div className="pc-error" role="alert">
                      <span className="pc-error-icon">⚠</span>
                      <span>
                        {isFr ? "L'envoi a échoué. " : "Sending failed. "}
                        {errorMsg && <span className="mono pc-error-detail">({errorMsg})</span>}
                        <a className="pc-error-fallback" href={`mailto:hello@mistech.mg?subject=${encodeURIComponent(form.subject || (isFr ? 'Nouveau projet' : 'New project'))}&body=${encodeURIComponent((form.message || '') + '\n\n— ' + (form.name || ''))}`}>
                          {isFr ? "Envoyer par mail directement" : "Send by email directly"} ↗
                        </a>
                      </span>
                    </div>
                  )}
                  {!EMAILJS_CONFIGURED && status !== 'error' && (
                    <div className="pc-error pc-error--info" role="status">
                      <span className="pc-error-icon">ⓘ</span>
                      <span className="mono">
                        {isFr
                          ? "Mode démo — l'envoi est simulé. Renseignez les clés EmailJS dans pages/contact.jsx pour activer l'envoi réel."
                          : "Demo mode — sending is simulated. Add EmailJS keys in pages/contact.jsx to enable real sending."}
                      </span>
                    </div>
                  )}
                </div>
              </form>
            )}
          </Reveal>

          <Reveal as="aside" className="ct-side pc-side">
            <div className="pc-tag-block pc-tag-block--combined">
              <span className="pc-tape" aria-hidden="true" />
              <div className="pc-tag-head">
                <span className="pc-tag-label">{c.coords}</span>
                <PCInlineClock lang={lang} />
              </div>
              <ul className="pc-tag-list">
                <li><Icon.Mail /> <a href="mailto:hello@mistech.mg">hello@mistech.mg</a></li>
                <li><Icon.Phone /> <a href="tel:+261382186660">+261 38 21 866 60</a></li>
                <li><Icon.Pin /> {c.addr}</li>
                <li><Icon.Github /> <a href="https://github.com/Soa-Soa-Soa" target="_blank" rel="noopener noreferrer">Soa-Soa-Soa</a></li>
                <li><Icon.Github /> <a href="https://github.com/Tsikiniony" target="_blank" rel="noopener noreferrer">Tsikiniony</a></li>
                <li><Icon.Linkedin /> <a href="https://www.linkedin.com/in/fenosoa-eliane-tovoniaina-ab84a6362" target="_blank" rel="noopener noreferrer">Fenosoa</a></li>
                <li><Icon.Linkedin /> <a href="https://www.linkedin.com/in/tsikiniony-brady-andriamalala-b85511281" target="_blank" rel="noopener noreferrer">Brady</a></li>
              </ul>
              <div className="pc-tag-avail">
                <span className="pc-tag-avail-dot" />
                {c.avail}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function PCField({ num, label, name, type = 'text', value, onChange, placeholder, required, textarea, focused, setFocused }) {
  const isFocused = focused === name;
  const hasValue = value && value.length > 0;
  return (
    <div className={"pc-field" + (isFocused ? " is-focused" : "") + (hasValue ? " is-filled" : "")}>
      <div className="pc-field-label">
        <span className="pc-field-n mono">{num}</span>
        <span className="pc-field-l">{label}</span>
        {required && <span className="pc-field-req">★</span>}
      </div>
      {textarea ? (
        <textarea
          className="pc-input pc-textarea"
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          rows={3}
          spellCheck={false}
        />
      ) : (
        <input
          className="pc-input"
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          autoComplete="off"
          spellCheck={false}
        />
      )}
    </div>
  );
}

function PostcardSent({ lang, setPage, reset }) {
  const isFr = lang === 'fr';
  return (
    <div className="pc pc--sent">
      <div className="pc-divider" aria-hidden="true" />
      <div className="pc-left">
        <div className="pc-sent-stamp" aria-hidden="true">
          <svg viewBox="-60 -60 120 120">
            <circle cx="0" cy="0" r="52" fill="none" stroke="var(--lime)" strokeWidth="3" />
            <circle cx="0" cy="0" r="44" fill="none" stroke="var(--lime)" strokeWidth="1" strokeDasharray="3 4" />
            <text x="0" y="-8" textAnchor="middle" fontFamily="var(--f-display)" fontWeight="800" fontSize="20" fill="var(--lime)">{isFr ? "REÇU" : "RECEIVED"}</text>
            <text x="0" y="14" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="9" fill="var(--lime)" letterSpacing="2">MISTECH · 2026</text>
          </svg>
        </div>
        <h3 className="display pc-sent-title">{isFr ? "Carte postée." : "Postcard sent."}</h3>
        <p className="pc-sent-text">
          {isFr ? "On vous répond sous 24h. En attendant," : "We'll reply within 24h. In the meantime,"}{' '}
          <a className="pc-sent-link" onClick={() => setPage('projects')}>{isFr ? "voir nos projets" : "see our projects"}</a>.
        </p>
      </div>
      <div className="pc-right">
        <div className="pc-postmark pc-postmark--big" aria-hidden="true">
          <svg viewBox="-50 -50 100 100">
            <defs>
              <path id="pmCircSent" d="M 0 0 m -36 0 a 36 36 0 1 1 72 0 a 36 36 0 1 1 -72 0" />
            </defs>
            <circle cx="0" cy="0" r="40" fill="none" stroke="var(--lime)" strokeWidth="2" />
            <circle cx="0" cy="0" r="34" fill="none" stroke="var(--lime)" strokeWidth="1" strokeDasharray="2 3" />
            <text fontFamily="var(--f-mono)" fontSize="7" fontWeight="600" fill="var(--lime)" letterSpacing="2">
              <textPath href="#pmCircSent" startOffset="6%">DELIVERED · MISTECH · {String(new Date().getFullYear())}</textPath>
            </text>
            <text x="0" y="-2" textAnchor="middle" fontFamily="var(--f-display)" fontWeight="800" fontSize="9" fill="var(--lime)">✓</text>
            <text x="0" y="10" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="6" fill="var(--lime)" letterSpacing="1.5">DELIVERED</text>
          </svg>
        </div>
        <button className="pc-send" type="button" onClick={reset}>
          <span className="pc-send-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 6.36 2.64L21 8"/><path d="M21 3v5h-5"/></svg>
          </span>
          <span>{isFr ? "Envoyer une autre carte" : "Send another card"}</span>
        </button>
      </div>
    </div>
  );
}

function PCInlineClock({ lang }) {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const tana = new Date(time.getTime() + (time.getTimezoneOffset() + 180) * 60000);
  const h = tana.getHours() % 12;
  const m = tana.getMinutes();
  const s = tana.getSeconds();
  const hh = String(tana.getHours()).padStart(2, '0');
  const mm = String(tana.getMinutes()).padStart(2, '0');
  // angles: 12 o'clock = -90deg
  const hourDeg = -90 + (h * 30) + (m * 0.5);
  const minDeg  = -90 + (m * 6);
  const secDeg  = -90 + (s * 6);
  return (
    <div className="pc-watch" title={`${hh}:${mm} · Antananarivo GMT+3`}>
      <svg viewBox="-50 -50 100 100" width="64" height="64" className="pc-watch-svg">
        {/* Outer ring (case) */}
        <circle cx="0" cy="0" r="46" fill="none" stroke="#B8901A" strokeWidth="3" />
        <circle cx="0" cy="0" r="42" fill="#FDF8EA" stroke="rgba(42,30,20,0.15)" strokeWidth="0.8" />
        {/* Hour ticks */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => {
          const a = (i * 30 - 90) * Math.PI / 180;
          const isQ = i % 3 === 0;
          const r1 = isQ ? 32 : 36;
          const r2 = 40;
          return (
            <line key={i}
              x1={Math.cos(a) * r1} y1={Math.sin(a) * r1}
              x2={Math.cos(a) * r2} y2={Math.sin(a) * r2}
              stroke="#2A1E14" strokeWidth={isQ ? 2 : 1} strokeLinecap="round" />
          );
        })}
        {/* Hour hand */}
        <line x1="0" y1="0" x2="0" y2="-20" stroke="#2A1E14" strokeWidth="3.5" strokeLinecap="round" transform={`rotate(${hourDeg + 90})`} />
        {/* Minute hand */}
        <line x1="0" y1="0" x2="0" y2="-30" stroke="#2A1E14" strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${minDeg + 90})`} />
        {/* Second hand */}
        <line x1="0" y1="6" x2="0" y2="-34" stroke="#5C2EB0" strokeWidth="1.2" strokeLinecap="round" transform={`rotate(${secDeg + 90})`} />
        {/* Center pin */}
        <circle cx="0" cy="0" r="3" fill="#2A1E14" />
        <circle cx="0" cy="0" r="1.5" fill="#B8901A" />
      </svg>
      <div className="pc-watch-meta">
        <div className="pc-watch-time mono">{hh}:{mm}</div>
        <div className="pc-watch-tz mono">GMT+3</div>
      </div>
    </div>
  );
}

function PCLiveClock() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const tana = new Date(time.getTime() + (time.getTimezoneOffset() + 180) * 60000);
  const hh = String(tana.getHours()).padStart(2, '0');
  const mm = String(tana.getMinutes()).padStart(2, '0');
  const ss = String(tana.getSeconds()).padStart(2, '0');
  return (
    <div>
      <div className="pc-clock-time">
        {hh}<span className="pc-clock-sep">:</span>{mm}<span className="pc-clock-ss mono">:{ss}</span>
      </div>
      <div className="pc-clock-meta mono">Antananarivo · GMT+3</div>
    </div>
  );
}

window.ContactPage = ContactPage;


/* ===== Contact Page — CLI / terminal format (COMMENTED BACKUP) =====
   This version is kept for reference. The active ContactPage is now
   defined in pages/contact-letter.jsx. To reactivate the CLI version:
     1. Uncomment everything below this block.
     2. Remove or comment the line "window.ContactPage = ContactPageLetter;"
        at the bottom of pages/contact-letter.jsx.
   ============================================================ */

/* CONTACT_CLI_START
/* ===== Contact Page — CLI / terminal format =====
   The "letter" version lives in pages/contact-letter.jsx (as ContactPageLetter).
   To switch: in app.jsx, swap <ContactPage> for <ContactPageLetter>.
   =============================================================== * /

function ContactPage({ t, setPage, lang }) {
  const c = t.contact;
  const isFr = lang === 'fr';
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '', budget: c.budgets[2] });
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [focused, setFocused] = useState(null);

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1600));
    setStatus('sent');
  };

  // Calculate completion
  const filled = ['name', 'email', 'subject', 'message'].filter(k => form[k] && form[k].length > 0).length;
  const total = 6; // 4 required + budget + company

  return (
    <div className="page page-enter">
      <section className="ct-hero">
        <div className="wrap">
          <Reveal>
            <div className="tag" style={{ marginBottom: 28 }}><span className="dot" /> {c.kicker}</div>
            <h1 className="display ct-hero-title">
              {c.title}{' '}
              <span className="display-i" style={{ color: 'var(--accent)' }}>{c.titleItalic}</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="ct-hero-lead">{c.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="ct-section ct-section--cli">
        <div className="wrap ct-grid">
          <Reveal as="div" className="ct-cli-wrap">
            {status === 'sent' ? (
              <SentStateCLI lang={lang} setPage={setPage} reset={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', subject: '', message: '', budget: c.budgets[2] }); setFocused(null); }} />
            ) : (
              <form className={"ct-cli" + (status === 'sending' ? " is-sending" : "")} onSubmit={submit}>
                <div className="ct-cli-bar">
                  <span className="mock-dots"><span /><span /><span /></span>
                  <span className="ct-cli-file mono">~/mistech/new-project.sh</span>
                  <span className="ct-cli-progress mono">{filled}/4 {isFr ? "rempli" : "filled"}</span>
                </div>
                <div className="ct-cli-body">
                  <div className="ct-cli-intro">
                    <div className="ct-cli-line"><span className="t-prompt">$</span> ./new-project --start</div>
                    <div className="ct-cli-line t-muted">› {isFr ? "Briefez-nous votre projet. Réponse sous 24h, devis sous 72h. Pas de blabla." : "Brief us. Reply within 24h, quote within 72h. No fluff."}</div>
                  </div>

                  <CLIField num="01" label={isFr ? "Votre nom" : "Your name"}
                    name="name" value={form.name} onChange={update('name')} required
                    placeholder={isFr ? "Fenosoa" : "Jane"}
                    focused={focused} setFocused={setFocused} />

                  <CLIField num="02" label={isFr ? "Email" : "Email"}
                    name="email" type="email" value={form.email} onChange={update('email')} required
                    placeholder="vous@email.com"
                    focused={focused} setFocused={setFocused} />

                  <CLIField num="03" label={isFr ? "Société (optionnel)" : "Company (optional)"}
                    name="company" value={form.company} onChange={update('company')}
                    placeholder={isFr ? "votre boîte ou rien" : "your company or skip"}
                    focused={focused} setFocused={setFocused} />

                  <CLIField num="04" label={isFr ? "Type de projet" : "Project type"}
                    name="subject" value={form.subject} onChange={update('subject')}
                    placeholder={isFr ? "site, e-commerce, app de gestion…" : "site, e-commerce, business app…"}
                    focused={focused} setFocused={setFocused} />

                  <div className="ct-cli-field">
                    <div className="ct-cli-label">
                      <span className="t-prompt">[05]</span>
                      <span className="ct-cli-label-text">{isFr ? "Budget estimé" : "Estimated budget"}</span>
                    </div>
                    <div className="ct-cli-options">
                      {c.budgets.map((b, i) => {
                        const key = String.fromCharCode(97 + i);
                        const active = form.budget === b;
                        return (
                          <button key={b} type="button"
                            className={"ct-cli-opt" + (active ? " is-active" : "")}
                            onClick={() => setForm(f => ({ ...f, budget: b }))}>
                            <span className="ct-cli-opt-key">[{key}]</span>
                            <span className="ct-cli-opt-text">{b}</span>
                            {active && <span className="ct-cli-opt-check">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <CLIField num="06" textarea
                    label={isFr ? "Le projet en quelques mots" : "Tell us about it"}
                    name="message" value={form.message} onChange={update('message')} required
                    placeholder={isFr ? "Ce que vous voulez faire, pour qui, pour quand…" : "What you want to build, for whom, by when…"}
                    focused={focused} setFocused={setFocused} />

                  <div className="ct-cli-spacer" />
                  <button type="submit" className="ct-cli-send" disabled={status === 'sending'}>
                    <span className="t-prompt">$</span>
                    <span className="ct-cli-send-cmd">./send.sh</span>
                    {status === 'sending' ? (
                      <span className="ct-cli-sending mono">— {isFr ? "envoi en cours" : "sending"}…</span>
                    ) : (
                      <span className="ct-cli-send-hint mono">↵ {isFr ? "envoyer" : "send"}</span>
                    )}
                    {status === 'sending' && <span className="t-cursor" />}
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal as="aside" className="ct-side">
            <div className="ct-side-block">
              <div className="label" style={{ marginBottom: 14 }}>{c.coords}</div>
              <ul className="ct-list">
                <li><Icon.Mail /> <a href="mailto:hello@mistech.mg">hello@mistech.mg</a></li>
                <li><Icon.Phone /> <a href="tel:+261382186660">+261 38 21 866 60</a></li>
                <li><Icon.Pin /> {c.addr}</li>
                <li><Icon.Github /> <a href="https://github.com/Soa-Soa-Soa" target="_blank" rel="noopener noreferrer">Soa-Soa-Soa</a></li>
                <li><Icon.Github /> <a href="https://github.com/Tsikiniony" target="_blank" rel="noopener noreferrer">Tsikiniony</a></li>
              </ul>
              <div className="tag" style={{ marginTop: 18 }}>
                <span className="dot" style={{ background: 'var(--lime)', boxShadow: '0 0 12px var(--lime)' }} />
                {c.avail}
              </div>
            </div>

            <div className="ct-side-block">
              <div className="label" style={{ marginBottom: 6 }}>{c.cvTitle}</div>
              <p style={{ color: 'var(--fg-soft)', fontSize: 13.5, margin: '0 0 14px' }}>{c.cvSub}</p>
              <div className="cv-list">
                <a className="cv-row" href="assets/cv-fenosoa.png" download>
                  <div className="cv-thumb"><img src="assets/cv-fenosoa.png" alt="" /></div>
                  <div className="cv-meta">
                    <div className="display" style={{ fontSize: 18, lineHeight: 1.1, fontWeight: 700 }}>Fenosoa Eliane</div>
                    <div className="mono" style={{ fontSize: 10.5, color: 'var(--fg-soft)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 2 }}>Dev fullstack · UI/UX</div>
                  </div>
                  <span className="cv-dl"><Icon.Download /></span>
                </a>
                <a className="cv-row" href="assets/cv-brady.png" download>
                  <div className="cv-thumb"><img src="assets/cv-brady.png" alt="" /></div>
                  <div className="cv-meta">
                    <div className="display" style={{ fontSize: 18, lineHeight: 1.1, fontWeight: 700 }}>Brady Andriamalala</div>
                    <div className="mono" style={{ fontSize: 10.5, color: 'var(--fg-soft)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 2 }}>Dev fullstack · Back-end</div>
                  </div>
                  <span className="cv-dl"><Icon.Download /></span>
                </a>
              </div>
            </div>

            <div className="ct-side-block ct-clock-block">
              <div className="label" style={{ marginBottom: 14 }}>{lang === 'fr' ? 'Heure locale' : 'Local time'}</div>
              <LiveClockCLI />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function CLIField({ num, label, name, type = 'text', value, onChange, placeholder, required, textarea, focused, setFocused }) {
  const isFocused = focused === name;
  const hasValue = value && value.length > 0;
  return (
    <div className={"ct-cli-field" + (isFocused ? " is-focused" : "") + (hasValue ? " is-filled" : "")}>
      <div className="ct-cli-label">
        <span className="t-prompt">[{num}]</span>
        <span className="ct-cli-label-text">{label}</span>
        {required && <span className="ct-cli-req">*</span>}
      </div>
      <div className="ct-cli-input-row">
        <span className="ct-cli-caret">›</span>
        {textarea ? (
          <textarea
            className="ct-cli-input ct-cli-textarea"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            onFocus={() => setFocused(name)}
            onBlur={() => setFocused(null)}
            rows={4}
            spellCheck={false}
          />
        ) : (
          <input
            className="ct-cli-input"
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            onFocus={() => setFocused(name)}
            onBlur={() => setFocused(null)}
            autoComplete="off"
            spellCheck={false}
          />
        )}
        {isFocused && !textarea && <span className="t-cursor ct-cli-cursor" />}
      </div>
    </div>
  );
}

function SentStateCLI({ lang, setPage, reset }) {
  const isFr = lang === 'fr';
  return (
    <div className="ct-cli ct-cli--sent">
      <div className="ct-cli-bar">
        <span className="mock-dots"><span /><span /><span /></span>
        <span className="ct-cli-file mono">~/mistech/new-project.sh</span>
      </div>
      <div className="ct-cli-body">
        <div className="ct-cli-line"><span className="t-prompt">$</span> ./send.sh</div>
        <div className="ct-cli-line t-muted">› {isFr ? "uploading payload…" : "uploading payload…"}</div>
        <div className="ct-cli-line t-muted">› {isFr ? "encrypting…" : "encrypting…"}</div>
        <div className="ct-cli-line t-muted">› {isFr ? "delivered to mistech inbox" : "delivered to mistech inbox"}</div>
        <div className="ct-cli-spacer" />
        <div className="ct-cli-line t-ok" style={{ fontSize: '20px', fontWeight: 600 }}>✓ {isFr ? "Lettre reçue. Réponse sous 24h." : "Message received. Reply within 24h."}</div>
        <div className="ct-cli-spacer" />
        <div className="ct-cli-line t-muted">
          › {isFr ? "en attendant," : "in the meantime,"}{' '}
          <a className="ct-cli-link" onClick={() => setPage('projects')}>{isFr ? "voir nos projets" : "see our projects"}</a>
        </div>
        <div className="ct-cli-spacer" />
        <button className="ct-cli-send" type="button" onClick={reset}>
          <span className="t-prompt">$</span>
          <span className="ct-cli-send-cmd">./reset.sh</span>
          <span className="ct-cli-send-hint mono">↵ {isFr ? "nouveau message" : "new message"}</span>
        </button>
      </div>
    </div>
  );
}

function LiveClockCLI() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const tana = new Date(time.getTime() + (time.getTimezoneOffset() + 180) * 60000);
  const hh = String(tana.getHours()).padStart(2, '0');
  const mm = String(tana.getMinutes()).padStart(2, '0');
  const ss = String(tana.getSeconds()).padStart(2, '0');
  return (
    <div>
      <div className="display" style={{ fontSize: 44, lineHeight: 1, fontVariantNumeric: 'tabular-nums', fontWeight: 700, letterSpacing: '-0.03em' }}>
        {hh}<span style={{ color: 'var(--accent)' }}>:</span>{mm}<span className="mono" style={{ fontSize: 16, color: 'var(--fg-soft)' }}>:{ss}</span>
      </div>
      <div className="mono" style={{ fontSize: 10.5, color: 'var(--fg-soft)', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Antananarivo · GMT+3</div>
    </div>
  );
}

window.ContactPage = ContactPage;

CONTACT_CLI_END */
