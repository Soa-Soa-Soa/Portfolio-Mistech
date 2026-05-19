/* ===== Projects Page ===== */
function ProjectsPage({ t, setPage, tweaks, lang }) {
  const p = t.projects;
  const [active, setActive] = useState(null);
  const cardStyle = tweaks.cardStyle || 'soft';

  return (
    <div className="page page-enter">
      <section style={{ padding: '60px 0 60px' }}>
        <div className="wrap">
          <Reveal>
            <div className="tag" style={{ marginBottom: 28 }}><span className="dot" /> {p.kicker}</div>
            <h1 className="display" style={{ fontSize: 'clamp(42px, 7vw, 96px)', lineHeight: 0.96, margin: 0, letterSpacing: '-0.04em' }}>
              {p.title}<br />
              <span className="display-i" style={{ color: 'var(--accent)' }}>{p.titleItalic}</span>
            </h1>
          </Reveal>
          <Reveal>
            <p style={{ marginTop: 32, fontSize: 20, lineHeight: 1.45, maxWidth: 640, color: 'var(--fg-soft)' }}>{p.lead}</p>
          </Reveal>
        </div>
      </section>

      {/* Big project cards */}
      <section style={{ padding: '40px 0 100px' }}>
        <div className="wrap">
          <div className="projects-list">
            {p.items.map((proj, i) => (
              <ProjectRow key={proj.slug} proj={proj} i={i} cardStyle={cardStyle} onOpen={() => setActive(proj)} />
            ))}
          </div>
        </div>
      </section>

      {/* And also */}
      <section style={{ padding: '80px 0', background: 'var(--bg-soft)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="tag" style={{ marginBottom: 16 }}><span className="dot" /> +</div>
              <h2>{p.moreTitle}</h2>
            </div>
          </Reveal>
          <Reveal stagger className="more-grid">
            {p.more.map((m, i) => (
              <div key={i} className="more-card">
                <div className="display-i" style={{ fontSize: 40, lineHeight: 1, color: 'var(--accent)' }}>{m.n}</div>
                <h3 className="display" style={{ fontSize: 22, margin: '10px 0 8px', lineHeight: 1.05 }}>{m.t}</h3>
                <p style={{ color: 'var(--fg-soft)', margin: '0 0 16px', fontSize: 14.5, lineHeight: 1.55 }}>{m.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {m.tags.map(tg => <span key={tg} className="tag" style={{ fontSize: 10 }}>{tg}</span>)}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
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

      {/* Project modal */}
      {active && <ProjectModal proj={active} onClose={() => setActive(null)} />}
    </div>
  );
}

function ProjectRow({ proj, i, cardStyle, onOpen }) {
  const flip = i % 2 === 1;
  return (
    <Reveal as="article" className={"project-row" + (flip ? " is-flip" : "") + " project-row--" + cardStyle} style={{ '--accent-card': proj.accent }}>
      <div className="pr-art">
        <ProjectShape shape={proj.shape} accent={proj.accent} link={proj.link} videoSrc={proj.videoSrc} name={proj.name} slug={proj.slug} />
      </div>
      <div className="pr-meta">
        <div className="label" style={{ color: proj.accent }}>{proj.type}</div>
        <h3 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', margin: '8px 0 18px', lineHeight: 0.95 }}>{proj.name}</h3>
        <p style={{ color: 'var(--fg-soft)', margin: '0 0 24px', fontSize: 17, lineHeight: 1.5 }}>{proj.summary}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
          {proj.tags.map(tg => <span key={tg} className="tag" style={{ fontSize: 11 }}>{tg}</span>)}
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn btn--ghost magnet" onClick={onOpen}>
            Case study <span className="arr"><Icon.Arrow /></span>
          </button>
          {proj.link && (
            <a className="btn btn--accent magnet" href={proj.link} target="_blank" rel="noopener noreferrer">
              Voir le site <Icon.Arrow />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

function ProjectModal({ proj, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); };
  }, []);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close icon-btn" onClick={onClose} aria-label="close"><Icon.X /></button>
        <div className="modal-art">
          <ProjectShape shape={proj.shape} accent={proj.accent} link={proj.link} videoSrc={proj.videoSrc} name={proj.name} slug={proj.slug} />
        </div>
        <div className="modal-body">
          <div className="label" style={{ color: proj.accent }}>{proj.n} / {proj.type} · {proj.year}</div>
          <h2 className="display" style={{ fontSize: 'clamp(30px, 4.5vw, 56px)', margin: '8px 0 24px', lineHeight: 0.95 }}>{proj.name}</h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--fg)' }}>{proj.desc}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
            {proj.tags.map(tg => <span key={tg} className="tag">{tg}</span>)}
          </div>
          {proj.link && (
            <a className="btn btn--accent magnet" style={{ marginTop: 28 }} href={proj.link} target="_blank" rel="noopener noreferrer">
              Voir le site en ligne <Icon.Arrow />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

window.ProjectsPage = ProjectsPage;
