/* ===== Contact Page — letter format (BACKUP) =====
   Active version is in pages/contact.jsx (terminal/CLI format).
   To switch: in app.jsx, swap <ContactPage> for <ContactPageLetter>.
   ============================================================ */

/* ===== Contact Page — letter format ===== */
function ContactPageLetter({ t, setPage, lang }) {
  const c = t.contact;
  const isFr = lang === 'fr';
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '', budget: c.budgets[2] });
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1800));
    setStatus('sent');
  };

  const greeting = isFr ? "Cher MisTech," : "Dear MisTech,";
  const signoff = isFr ? "Cordialement" : "Best regards";

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

      <section className="ct-section">
        <div className="wrap ct-grid">
          <Reveal as="div" className="ct-letter-wrap">
            {status === 'sent' ? (
              <SentStateLetter lang={lang} setPage={setPage} reset={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', subject: '', message: '', budget: c.budgets[2] }); }} />
            ) : (
              <form className={"ct-letter" + (status === 'sending' ? " is-sending" : "")} onSubmit={submit}>
                <header className="ct-letter-head">
                  <div className="ct-letter-meta mono">
                    <span>{isFr ? "Lettre" : "Letter"} #{Math.floor(Math.random() * 9000) + 1000}</span>
                    <span>·</span>
                    <span>{new Date().toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <div className="ct-stamp">
                    <span className="ct-stamp-circle">
                      <span className="ct-stamp-icon">✦</span>
                    </span>
                    <span className="ct-stamp-text mono">
                      MISTECH<br />
                      WEB STUDIO<br />
                      MG · 2026
                    </span>
                  </div>
                </header>

                <h3 className="ct-greet display-i">{greeting}</h3>

                <div className="ct-prose">
                  <p>
                    {isFr ? "Je m'appelle " : "My name is "}
                    <InlineFieldLetter id="name" placeholder={isFr ? "votre nom" : "your name"} value={form.name} onChange={update('name')} required />
                    {isFr ? " et je travaille " : " and I work "}
                    <InlineFieldLetter id="company" placeholder={isFr ? "chez (optionnel)" : "at (optional)"} value={form.company} onChange={update('company')} />.
                  </p>
                  <p>
                    {isFr ? "Je voudrais qu'on parle de " : "I'd like to talk about "}
                    <InlineFieldLetter id="subject" placeholder={isFr ? "site, app, autre…" : "site, app, other…"} value={form.subject} onChange={update('subject')} />.
                  </p>
                  <p className="ct-prose-line">{isFr ? "Voici l'idée :" : "Here's the idea:"}</p>
                  <textarea
                    className="ct-letter-textarea"
                    placeholder={isFr ? "Décrivez-le en quelques mots, on revient sous 24h." : "A few words about it, we'll get back within 24h."}
                    value={form.message}
                    onChange={update('message')}
                    required
                    rows={4}
                  />
                  <div className="ct-budget-row">
                    <span className="ct-prose-line">{isFr ? "Côté budget, on est plutôt sur" : "Budget-wise, we're closer to"}</span>
                    <div className="ct-budget-pills">
                      {c.budgets.map(b => (
                        <button key={b} type="button" className={"ct-budget-pill" + (form.budget === b ? " is-active" : "")} onClick={() => setForm(f => ({ ...f, budget: b }))}>{b}</button>
                      ))}
                    </div>
                  </div>
                  <p>
                    {isFr ? "Vous pouvez me joindre à " : "Reach me at "}
                    <InlineFieldLetter id="email" type="email" placeholder={isFr ? "vous@email.com" : "you@email.com"} value={form.email} onChange={update('email')} required wide />.
                  </p>
                </div>

                <footer className="ct-signoff">
                  <div className="ct-signoff-text display-i">— {signoff},</div>
                  <div className="ct-signoff-name display-i">{form.name || (isFr ? "votre signature" : "your signature")}</div>
                  <button type="submit" className="ct-send magnet" disabled={status === 'sending'} aria-label={c.submit}>
                    <span className="ct-send-plane" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
                    </span>
                    <span className="ct-send-label">{status === 'sending' ? c.submitting : c.submit}</span>
                  </button>
                </footer>
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
                <li><Icon.Github /> <a href="https://github.com/Soa-Soa-Soa" target="_blank" rel="noopener noreferrer">github.com/Soa-Soa-Soa</a></li>
                <li><Icon.Github /> <a href="https://github.com/Tsikiniony" target="_blank" rel="noopener noreferrer">github.com/Tsikiniony</a></li>
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
              <LiveClockLetter />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function InlineFieldLetter({ id, placeholder, value, onChange, type = 'text', required, wide }) {
  const len = Math.max(placeholder.length, value.length) + (wide ? 4 : 3);
  return (
    <input
      type={type}
      id={id}
      className={"ct-inline" + (value ? " is-filled" : "") + (required ? " is-required" : "")}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      autoComplete="off"
      style={{ width: len + 'ch' }}
    />
  );
}

function SentStateLetter({ lang, setPage, reset }) {
  const isFr = lang === 'fr';
  return (
    <div className="ct-sent">
      <div className="ct-sent-plane" aria-hidden="true">
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M60 4L26 38" />
          <path d="M60 4L42 60L26 38L4 22L60 4Z" />
        </svg>
      </div>
      <h3 className="display ct-sent-title">{isFr ? "Lettre envoyée !" : "Letter sent!"}</h3>
      <p className="ct-sent-text">
        {isFr ? "On vous répond sous 24h. En attendant," : "We'll reply within 24h. In the meantime,"}{' '}
        <a onClick={() => setPage('projects')} className="ct-sent-link">{isFr ? "jetez un œil à nos projets" : "have a look at our projects"}</a>.
      </p>
      <button className="btn btn--ghost" style={{ marginTop: 28 }} onClick={reset}>
        {isFr ? 'Écrire une autre lettre' : 'Write another letter'}
      </button>
    </div>
  );
}

function LiveClockLetter() {
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

window.ContactPageLetter = ContactPageLetter;
/* Not the active version anymore — postcard is in pages/contact.jsx */
