/* ===== About Page ===== */
function AboutPage({ t, setPage, lang }) {
  const a = t.about;
  return (
    <div className="page page-enter">
      {/* Hero */}
      <section style={{ padding: '60px 0 80px' }}>
        <div className="wrap">
          <Reveal>
            <div className="tag" style={{ marginBottom: 28 }}><span className="dot" /> {a.kicker}</div>
            <h1 className="display" style={{ fontSize: 'clamp(42px, 7vw, 96px)', lineHeight: 0.96, margin: 0, letterSpacing: '-0.04em' }}>
              {a.title}<br />
              <span className="display-i" style={{ color: 'var(--accent)' }}>{a.titleItalic}</span>{' '}
              {a.titleEnd}
            </h1>
          </Reveal>
          <Reveal>
            <p style={{ marginTop: 48, fontSize: 20, lineHeight: 1.5, maxWidth: 720, color: 'var(--fg)' }}>{a.lead}</p>
          </Reveal>
        </div>
      </section>

      {/* Duo — distinct presentations */}
      <section style={{ padding: '60px 0 120px' }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="tag" style={{ marginBottom: 16 }}><span className="dot" /> 01 — {a.duoTitle}</div>
              <h2>{a.duoTitle}</h2>
            </div>
          </Reveal>
          <div className="duo-distinct">
            {/* Card A — Fenosoa */}
            <DuoMagCard person={a.duo[0]} variant={0} stamp="01 / Designer-coder" lang={lang} />
            {/* Card B — Brady (same magazine style) */}
            <DuoMagCard person={a.duo[1]} variant={1} stamp="02 / Builder de systèmes" lang={lang} />
          </div>
        </div>
      </section>

      {/* Experiences pro */}
      <section className="tech-bg" style={{ padding: '100px 0' }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="tag" style={{ marginBottom: 16 }}><span className="dot" /> 02 — {a.experiencesTitle}</div>
              <h2>{a.experiencesTitle}</h2>
            </div>
            <p>{a.experiencesLead}</p>
          </Reveal>
          <ExperienceColumns experiences={a.experiences} />
        </div>
      </section>

      {/* Diplomas */}
      <section style={{ padding: '100px 0' }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="tag" style={{ marginBottom: 16 }}><span className="dot" /> 03 — {a.diplomasTitle}</div>
              <h2>{a.diplomasTitle}</h2>
            </div>
            <p>{a.diplomasLead}</p>
          </Reveal>
          <div className="dip-list">
            {a.diplomas.map((d, i) => (
              <Reveal key={i} as="article" className="dip-row">
                <div className="dip-year display-i">{d.year}</div>
                <div className="dip-body">
                  <h3 className="display dip-name">{d.name}</h3>
                  <div className="mono dip-school">{d.school}</div>
                  <div className="dip-fields">
                    {d.fields.map(f => <span key={f} className="tech-tag">{f}</span>)}
                  </div>
                </div>
                <div className="dip-who mono">— {d.who}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values — editorial open letter */}
      <ManifestLetter lang={lang} a={a} />


      {/* CTA to contact */}
      <section style={{ padding: '40px 0 120px' }}>
        <FooterTicker lang={lang} />
        <div className="wrap" style={{ textAlign: 'center', marginTop: 80 }}>
          <Reveal>
            <h2 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', margin: 0, lineHeight: 1 }}>
              {t.home.ctaBig.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="display-i" style={{ color: 'var(--accent)' }}>{t.home.ctaBig.split(' ').slice(-1)}</span>
            </h2>
            <button className="btn btn--accent magnet" style={{ marginTop: 32 }} onClick={() => setPage('contact')}>
              {t.home.ctaSecondary} <span className="arr"><Icon.Arrow /></span>
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* === Manifest as an editorial open letter === */
function ManifestLetter({ lang, a }) {
  const isFr = lang === 'fr';
  return (
    <section className="manifest-letter">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <div className="tag" style={{ marginBottom: 16 }}><span className="dot" /> 04 — Manifest</div>
            <h2>{a.valuesTitle}</h2>
          </div>
          <p className="mono" style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            {isFr ? "Lettre ouverte · non négociable" : "Open letter · non-negotiable"}
          </p>
        </Reveal>
        <Reveal as="article" className="letter">
          <div className="letter-stamp">
            <span className="letter-stamp-circle"><span /></span>
            <div className="mono letter-stamp-text">
              <div>MisTech / 2026</div>
              <div>{isFr ? "Manifeste · v.1" : "Manifesto · v.1"}</div>
            </div>
          </div>
          <div className="mono letter-head">{isFr ? "— Lettre ouverte / à qui veut nous lire" : "— Open letter / to whoever's reading"}</div>
          <h3 className="letter-greeting display-i">
            {isFr ? "Voici ce qui ne change jamais chez nous." : "Here's what doesn't change about us."}
          </h3>
          {isFr ? (
            <div className="letter-body">
              <p>On écrit du <em data-v="code">code lisible</em>, parce que quelqu'un d'autre devra l'ouvrir un jour — y compris nous, dans six mois. C'est pour cette personne-là qu'on l'écrit, pas pour briller.</p>
              <p>On évite <em data-v="magie">la magie</em>. On préfère expliquer dix fois plutôt que vous laisser face à une boîte noire qu'on serait les seuls à pouvoir ouvrir.</p>
              <p>On obsède sur <em data-v="perf">la performance</em>. Un site qui rame est un site mort — on benchmark, on optimise, on coupe le superflu avant de livrer.</p>
              <p>On considère <em data-v="sec">la sécurité</em> comme acquise. Auth, validation, sanitisation, backups. C'est dans le prix par défaut, jamais en option.</p>
            </div>
          ) : (
            <div className="letter-body">
              <p>We write <em data-v="code">readable code</em>, because someone else will have to open it one day — including us, six months from now. We write it for that person, not to show off.</p>
              <p>We skip <em data-v="magie">the magic</em>. We'd rather explain ten times than leave you facing a black box only we can open.</p>
              <p>We obsess over <em data-v="perf">performance</em>. A slow site is a dead site — we benchmark, we optimize, we cut the fat before shipping.</p>
              <p>We treat <em data-v="sec">security</em> as a given. Auth, validation, sanitization, backups. Built in by default, never optional.</p>
            </div>
          )}
          <div className="letter-sign">
            <div className="letter-sign-names display-i">— Fenosoa &amp; Brady</div>
            <div className="letter-sign-meta mono">{isFr ? "MisTech · 2026 · toujours en vigueur" : "MisTech · 2026 · still in effect"}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* === Duo magazine card (used for both members) === */
function DuoMagCard({ person, variant, stamp, lang }) {
  const isFr = lang === 'fr';
  return (
    <Reveal as="article" className="duo-A">
      <div className="duo-A-portrait">
        <DuoPortrait variant={variant} />
        <span className="duo-A-stamp mono">{stamp}</span>
      </div>
      <div className="duo-A-body">
        <div className="mono duo-A-loc">— {person.location}</div>
        <h3 className="display duo-A-name">{person.name}</h3>
        <div className="duo-A-role">{person.role}</div>
        <p className="duo-A-bio">{person.bio}</p>
        <div className="duo-A-tags">
          {person.tags.map(tg => <span key={tg} className="tech-tag">{tg}</span>)}
        </div>
        <div className="duo-A-links">
          {person.github && (
            <a className="duo-A-link" href={person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon.Github /> <span>GitHub</span>
            </a>
          )}
          {person.linkedin && (
            <a className="duo-A-link" href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon.Linkedin /> <span>LinkedIn</span>
            </a>
          )}
          {person.cv && (
            <a className="duo-A-link duo-A-link--cv" href={person.cv} download>
              <Icon.Download /> <span>{isFr ? "CV" : "Resume"}</span>
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/* === Experience columns — 2 columns, one per person === */
function ExperienceColumns({ experiences }) {
  const byPerson = experiences.reduce((acc, e) => {
    if (!acc[e.who]) acc[e.who] = [];
    acc[e.who].push(e);
    return acc;
  }, {});
  const order = ["Fenosoa", "Brady"];
  return (
    <div className="exp-cols">
      {order.map((person, idx) => (
        <Reveal key={person} as="div" className="exp-col">
          <div className="exp-col-head">
            <span className="mono exp-col-n">0{idx + 1}</span>
            <h3 className="display exp-col-name">{person}</h3>
            <span className="exp-col-bar" style={{ background: idx === 0 ? 'var(--violet)' : 'var(--lime)' }} />
          </div>
          <div className="exp-items">
            {(byPerson[person] || []).map((e, i) => (
              <article key={i} className="exp-item">
                <div className="exp-meta">
                  <span className="mono exp-date">{e.date}</span>
                  <span className={"exp-kind " + (e.kind === 'Stage' || e.kind === 'Internship' ? 'is-stage' : 'is-mission')}>{e.kind}</span>
                </div>
                <h4 className="display exp-name">{e.name}</h4>
                <div className="exp-role mono">{e.role}</div>
                <p className="exp-desc">{e.desc}</p>
                <div className="exp-stack">
                  {e.stack.map(s => <span key={s} className="tech-tag">{s}</span>)}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* Real photos */
function DuoPortrait({ variant }) {
  const src = variant === 0 ? 'assets/photo-fenosoa.jpeg' : 'assets/photo-brady.jpeg';
  const alt = variant === 0 ? 'Fenosoa Eliane Tovoniaina' : 'Brady Andriamalala Tsikiniony';
  return <img className="duo-photo" src={src} alt={alt} loading="lazy" />;
}

window.AboutPage = AboutPage;
