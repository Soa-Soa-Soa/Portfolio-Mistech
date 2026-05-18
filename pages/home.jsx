/* ===== Home Page ===== */
function HomePage({ t, setPage, tweaks, lang }) {
  const h = t.home;
  const heroLayout = tweaks.heroLayout || 'split';

  return (
    <div className="page page-enter">
      {/* Hero */}
      <section className="hero" data-layout={heroLayout}>
        <div className="wrap">
          {heroLayout === 'centered' && <HeroCentered h={h} setPage={setPage} />}
          {heroLayout === 'split' && <HeroSplit h={h} setPage={setPage} />}
          {heroLayout === 'stacked' && <HeroStacked h={h} setPage={setPage} />}
        </div>
        <div className="hero-marquee">
          <Marquee items={h.ticker} sep="●" speed={50} />
        </div>
      </section>

      {/* Services — editorial alternating rows (no cards) */}
      <section className="tech-bg" style={{ padding: '120px 0' }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="tag" style={{ marginBottom: 16 }}><span className="dot" /> 01 — {h.servicesTitle}</div>
              <h2>{h.servicesTitle}</h2>
            </div>
            <p>{h.servicesLead}</p>
          </Reveal>
          <ServicesEditorial services={h.services} />
        </div>
      </section>

      {/* Featured projects — press clippings (editorial newspaper) */}
      <section style={{ padding: '40px 0 120px' }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="tag" style={{ marginBottom: 16 }}><span className="dot" /> 02 — {t.nav.projects}</div>
              <h2>{h.featuredTitle}</h2>
            </div>
            <p>{h.featuredLead}</p>
          </Reveal>
          <FeaturedBoard projects={t.projects.items.slice(0, 3)} setPage={setPage} lang={lang} />
          <div style={{ marginTop: 56, textAlign: 'center' }}>
            <button className="btn btn--ghost magnet" onClick={() => setPage('projects')}>
              {lang === 'fr' ? 'Tous les projets' : 'All projects'} <span className="arr"><Icon.Arrow /></span>
            </button>
          </div>
        </div>
      </section>

      {/* Process — terminal-style listing */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="tag" style={{ marginBottom: 16 }}><span className="dot" /> 03 — Process</div>
              <h2>{h.processTitle}</h2>
            </div>
          </Reveal>
          <Reveal><ProcessTerminal steps={h.process} lang={lang} /></Reveal>
        </div>
      </section>

      {/* CTA big */}
      <section style={{ padding: '40px 0 140px' }}>
        <FooterTicker lang={lang} />
        <div className="wrap" style={{ marginTop: 100 }}>
          <Reveal className="cta-big magnet">
            <h2 className="display" style={{ fontSize: 'clamp(36px, 6vw, 80px)', margin: 0, lineHeight: 0.95 }}>
              {h.ctaBig.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="display-i" style={{ color: 'var(--accent)' }}>{h.ctaBig.split(' ').slice(-1)}</span>
            </h2>
            <p style={{ marginTop: 16, color: 'var(--fg-soft)', fontSize: 18 }}>{h.ctaBigSub}</p>
            <button className="btn btn--accent" style={{ marginTop: 36, fontSize: 17, padding: '18px 28px' }} onClick={() => setPage('contact')}>
              {h.ctaSecondary} <span className="arr"><Icon.Arrow /></span>
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* === Services as interactive showcase (description-first, real images) === */
function ServicesEditorial({ services }) {
  const [active, setActive] = useState(0);
  const accentMap = {
    violet: 'var(--violet)',
    coral: 'var(--lime)',
    lime: 'var(--violet-soft)',
    sky: 'var(--violet-deep)'
  };
  const slotIds = ['srv-sites', 'srv-shop', 'srv-apps', 'srv-api'];
  const slotPlaceholders = [
    'Glissez une image de site vitrine ici',
    'Glissez une image de boutique e-commerce',
    'Glissez une capture d\u2019app de gestion',
    'Glissez un schéma ou une capture d\u2019API'
  ];
  const current = services[active];
  const accent = accentMap[current.color];

  return (
    <div className="srv-show" style={{ '--c-active': accent }}>
      <div className="srv-show-list">
        {services.map((s, i) => (
          <button
            key={i}
            type="button"
            className={"srv-show-item" + (i === active ? " is-active" : "")}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            style={{ '--c-item': accentMap[s.color] }}
          >
            <span className="srv-show-n mono">0{i + 1}</span>
            <span className="srv-show-name display">{s.name}</span>
            <span className="srv-show-arrow" aria-hidden="true"><Icon.Arrow /></span>
          </button>
        ))}
      </div>
      <div className="srv-show-stage">
        <div className="srv-show-info" key={"info-" + active}>
          <div className="mono srv-show-pill">↳ {current.n} · {current.name}</div>
          <p className="srv-show-desc display">{current.desc}</p>
          <div className="srv-show-tags">
            {current.tags.map(tg => <span key={tg} className="tech-tag">{tg}</span>)}
          </div>
        </div>
        <div className="srv-show-frame">
          {services.map((s, i) => {
            const realMap = [
              <SiteRealMockup key="site" />,
              <ShopRealMockup key="shop" />,
              <AppRealMockup key="app" />,
              <SwaggerMockup key="api" />
            ];
            return (
              <div key={i} className={"srv-slot srv-slot--real" + (i === active ? " is-active" : "")} style={{ '--c-slot': accentMap[s.color] }}>
                {realMap[i] || null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* === Featured projects — split-flap departures board === */
function FeaturedBoard({ projects, setPage, lang }) {
  if (!projects.length) return null;
  const isFr = lang === 'fr';
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 12000);
    return () => clearInterval(id);
  }, []);
  // pseudo-time per project (deterministic)
  const slotTimes = ['07:42', '09:18', '14:03', '17:55'];
  const gates = ['A4', 'B2', 'C7', 'D1'];

  return (
    <div className="brd-wrap">
      <div className="brd">
        <div className="brd-frame">
          <div className="brd-head">
            <span className="brd-head-led" />
            <span className="brd-head-title mono">MISTECH · LIVE PROJECTS</span>
            <span className="brd-head-clock mono">
              <BoardClock />
            </span>
          </div>
          <div className="brd-cols mono">
            <span>{isFr ? 'HEURE' : 'TIME'}</span>
            <span>{isFr ? 'PROJET' : 'PROJECT'}</span>
            <span className="brd-col-type">{isFr ? 'TYPE' : 'TYPE'}</span>
            <span className="brd-col-year">{isFr ? 'ANNÉE' : 'YEAR'}</span>
            <span>{isFr ? 'STATUT' : 'STATUS'}</span>
            <span className="brd-col-gate">REF</span>
          </div>
          <div className="brd-rows">
            {projects.map((p, i) => (
              <BoardRow key={p.slug + tick} p={p} time={slotTimes[i]} gate={gates[i]} index={i} setPage={setPage} isFr={isFr} />
            ))}
          </div>
          <div className="brd-foot mono">
            <span>↳ {isFr ? 'CLIQUEZ UNE LIGNE POUR EMBARQUER' : 'CLICK A ROW TO BOARD'}</span>
            <span className="brd-foot-led">● <span className="mono">{isFr ? 'EN DIRECT' : 'LIVE'}</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BoardRow({ p, time, gate, index, setPage, isFr }) {
  return (
    <button
      type="button"
      className="brd-row"
      style={{ '--c-row': p.accent, animationDelay: (index * 0.15) + 's' }}
      onClick={() => setPage('projects')}
    >
      <span className="brd-time"><FlapText text={time} /></span>
      <span className="brd-name"><FlapText text={p.name.toUpperCase()} /></span>
      <span className="brd-type brd-col-type mono"><FlapText text={p.type.toUpperCase().slice(0, 22)} /></span>
      <span className="brd-year brd-col-year mono"><FlapText text={String(p.year)} /></span>
      <span className="brd-status">
        <span className="brd-status-pill">
          <span className="brd-status-dot" />
          {isFr ? 'LIVRÉ' : 'SHIPPED'}
        </span>
      </span>
      <span className="brd-gate brd-col-gate mono"><FlapText text={gate} /></span>
    </button>
  );
}

/* Split-flap text effect (each character flips on mount) */
function FlapText({ text }) {
  return (
    <span className="flap" aria-label={text}>
      {String(text).split('').map((ch, i) => (
        <span key={i} className="flap-ch" style={{ animationDelay: (i * 0.04) + 's' }}>
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </span>
  );
}

function BoardClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const t = new Date(now.getTime() + (now.getTimezoneOffset() + 180) * 60000);
  const hh = String(t.getHours()).padStart(2, '0');
  const mm = String(t.getMinutes()).padStart(2, '0');
  const ss = String(t.getSeconds()).padStart(2, '0');
  return <>{hh}<span className="brd-clock-blink">:</span>{mm}<span className="brd-clock-ss">:{ss}</span></>;
}

/* === Process as a terminal listing === */
function ProcessTerminal({ steps, lang }) {
  // Convert "Cadrage" → "cadrage", "Mise en ligne" → "mise-en-ligne"
  const slug = (s) => s.toLowerCase().replace(/['']/g, '').replace(/\s+/g, '-').replace(/[éè]/g, 'e').replace(/à/g, 'a');
  const intro = lang === 'fr'
    ? '› 4 phases. Toutes documentées, toutes négociables sauf la dernière.'
    : '› 4 phases. All documented, all negotiable except the last.';
  const ready = lang === 'fr' ? 'ready · répondre sous 24h' : 'ready · reply within 24h';
  return (
    <div className="proc-term mock-terminal">
      <div className="mock-terminal-bar">
        <span className="mock-dots"><span /><span /><span /></span>
        <span className="mono" style={{ fontSize: 11, opacity: 0.55 }}>~/mistech/how-we-work.sh</span>
      </div>
      <div className="mock-terminal-body proc-term-body">
        <div className="proc-line"><span className="t-prompt">$</span> ./how-we-work --start</div>
        <div className="t-muted proc-intro">{intro}</div>
        <div className="proc-spacer" />
        {steps.map((p, i) => (
          <div key={i} className="proc-step-line">
            <span className="proc-num">[{p.n}]</span>
            <span className="proc-arrow">→</span>
            <span className="proc-label">{slug(p.t)}</span>
            <span className="proc-desc">{p.d}</span>
          </div>
        ))}
        <div className="proc-spacer" />
        <div><span className="t-prompt">$</span> <span className="t-ok">✓ {ready}</span></div>
      </div>
    </div>
  );
}

/* === Hero variations === */
function HeroSplit({ h, setPage }) {
  return (
    <div className="hero-split">
      <div>
        <div className="tag" style={{ marginBottom: 28 }}>
          <span className="dot" /> {h.kicker}
        </div>
        <h1 className="hero-title display">
          {h.titlePre} <span className="hero-paint">{h.titleMid}</span>
          <br />
          <span className="display-i" style={{ color: 'var(--accent)' }}>{h.titleItalic}</span>
        </h1>
        <p className="hero-lead">{h.lead}</p>
        <div className="hero-actions">
          <button className="btn btn--accent magnet" onClick={() => setPage('projects')}>
            {h.ctaPrimary} <span className="arr"><Icon.Arrow /></span>
          </button>
          <button className="btn btn--ghost magnet" onClick={() => setPage('contact')}>
            {h.ctaSecondary}
          </button>
        </div>
      </div>
      <div className="hero-art">
        <HeroComposition />
      </div>
    </div>
  );
}

function HeroCentered({ h, setPage }) {
  return (
    <div className="hero-centered">
      <div className="tag" style={{ marginBottom: 28 }}>
        <span className="dot" /> {h.kicker}
      </div>
      <h1 className="hero-title display" style={{ fontSize: 'clamp(42px, 7vw, 96px)', textAlign: 'center' }}>
        {h.titlePre} <span className="hero-paint">{h.titleMid}</span><br />
        <span className="display-i" style={{ color: 'var(--accent)' }}>{h.titleItalic}</span>
      </h1>
      <p className="hero-lead" style={{ maxWidth: 640, margin: '24px auto 0', textAlign: 'center' }}>{h.lead}</p>
      <div className="hero-actions" style={{ justifyContent: 'center' }}>
        <button className="btn btn--accent magnet" onClick={() => setPage('projects')}>
          {h.ctaPrimary} <span className="arr"><Icon.Arrow /></span>
        </button>
        <button className="btn btn--ghost magnet" onClick={() => setPage('contact')}>
          {h.ctaSecondary}
        </button>
      </div>
      <div style={{ marginTop: 64, height: 280, position: 'relative' }}>
        <HeroComposition />
      </div>
    </div>
  );
}

function HeroStacked({ h, setPage }) {
  return (
    <div className="hero-stacked">
      <div className="hero-stacked-top">
        <div className="tag"><span className="dot" /> {h.kicker}</div>
        <div className="mono" style={{ fontSize: 12, color: 'var(--fg-soft)' }}>EST. 2025</div>
      </div>
      <h1 className="hero-title display" style={{ fontSize: 'clamp(64px, 14vw, 220px)' }}>
        {h.titlePre}
        <br />
        <span className="hero-paint">{h.titleMid}</span>{' '}
        <span className="display-i" style={{ color: 'var(--accent)' }}>{h.titleItalic}</span>
      </h1>
      <div className="hero-stacked-bottom">
        <p className="hero-lead" style={{ maxWidth: 520 }}>{h.lead}</p>
        <div className="hero-actions">
          <button className="btn btn--accent magnet" onClick={() => setPage('projects')}>
            {h.ctaPrimary} <span className="arr"><Icon.Arrow /></span>
          </button>
          <button className="btn btn--ghost magnet" onClick={() => setPage('contact')}>
            {h.ctaSecondary}
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroComposition() {
  return (
    <div className="hero-comp">
      <div className="hero-comp-main float-b">
        <DashboardMockup dark />
      </div>
      <div className="hero-comp-phone float-a">
        <MobileMockup />
      </div>
      <div className="hero-comp-term float-c">
        <TerminalMockup />
      </div>
      <div className="hc-glow" />
    </div>
  );
}

window.HomePage = HomePage;
