/* Shared components: Nav, Footer, Marquee, Reveal, CursorBlob, Icons */
const { useState, useEffect, useRef, useCallback } = React;

/* ---- Icons ---- */
const LogoChip = ({ size = 24 }) => (
  <svg viewBox="0 0 160 160" width={size} height={size} className="logo-chip" aria-hidden="true">
    {[32, 54, 76, 98, 120].map(x => <rect key={'t'+x} x={x} y="6" width="10" height="14" fill="var(--violet)" rx="1" />)}
    {[32, 54, 76, 98, 120].map(x => <rect key={'b'+x} x={x} y="140" width="10" height="14" fill="var(--violet)" rx="1" />)}
    {[32, 54, 76, 98, 120].map(y => <rect key={'l'+y} x="6" y={y} width="14" height="10" fill="var(--violet)" rx="1" />)}
    {[32, 54, 76, 98, 120].map(y => <rect key={'r'+y} x="140" y={y} width="14" height="10" fill="var(--violet)" rx="1" />)}
    <rect x="20" y="20" width="120" height="120" fill="var(--ink-2)" stroke="var(--violet)" strokeWidth="3" rx="10" />
    <text x="80" y="96" textAnchor="middle" fontFamily="var(--f-display)" fontWeight="800" fontSize="56" fill="var(--paper)" letterSpacing="-0.04em">MT</text>
    <circle cx="36" cy="36" r="6" fill="var(--lime)" />
  </svg>
);

/* ---- Icons ---- */
const Icon = {
  Sun: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>,
  Moon: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>,
  Arrow: (p) => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  ArrowUp: (p) => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M5 12l7-7 7 7M12 19V5"/></svg>,
  Plus: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 5v14M5 12h14"/></svg>,
  Download: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>,
  Mail: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>,
  Phone: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Pin: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Github: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...p}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.01-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49 1 .11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02.01 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  X: (p) => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Linkedin: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...p}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>,
  Menu: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M3 7h18M3 12h18M3 17h18"/></svg>
};

/* ---- useReveal hook (IntersectionObserver) ---- */
function useReveal(ref, opts = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reveal anything already in viewport on mount synchronously
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      el.classList.add('in');
      if (opts.once !== false) return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add('in');
          if (opts.once !== false) io.unobserve(el);
        } else if (opts.once === false) {
          el.classList.remove('in');
        }
      });
    }, { threshold: opts.threshold ?? 0.05, rootMargin: '0px 0px -10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
}

/* ---- Reveal wrapper ---- */
function Reveal({ as: Tag = 'div', stagger = false, className = '', children, ...rest }) {
  const ref = useRef(null);
  useReveal(ref);
  const cls = (stagger ? 'reveal-stagger' : 'reveal') + (className ? ' ' + className : '');
  return <Tag ref={ref} className={cls} {...rest}>{children}</Tag>;
}

/* ---- Nav ---- */
function Nav({ page, setPage, theme, setTheme, lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'stack', label: t.nav.stack },
    { id: 'contact', label: t.nav.contact }
  ];
  const go = (id) => { setPage(id); setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <nav className="nav">
      <div className="wrap nav-row">
        <button onClick={() => go('home')} style={{ border: 0, background: 'transparent', padding: 0, cursor: 'pointer' }} className="nav-logo" aria-label="Home">
          <LogoChip size={28} />
          <span><span style={{ fontStyle: 'italic' }}>Mis</span>Tech<span style={{ color: 'var(--accent)' }}>.</span></span>
        </button>
        <div className="nav-links">
          {links.map(l => (
            <button key={l.id} className={"nav-link" + (page === l.id ? " is-active" : "")} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <div className="lang-toggle">
            <button className={lang === 'fr' ? 'is-active' : ''} onClick={() => setLang('fr')}>FR</button>
            <button className={lang === 'en' ? 'is-active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <button className="icon-btn" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="theme">
            {theme === 'light' ? <Icon.Moon /> : <Icon.Sun />}
          </button>
          <button className="icon-btn" onClick={() => setOpen(!open)} aria-label="menu" style={{ display: 'none' }} id="mobile-menu-btn">
            {open ? <Icon.X /> : <Icon.Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="wrap" style={{ paddingTop: 16, paddingBottom: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(l => (
            <button key={l.id} className={"nav-link" + (page === l.id ? " is-active" : "")} onClick={() => go(l.id)} style={{ textAlign: 'left' }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ---- Marquee ---- */
function Marquee({ items, sep = '✦', speed = 40, italic = false }) {
  const content = items.concat(items);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" style={{ animationDuration: speed + 's' }}>
        {content.map((it, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 48,
            fontFamily: italic ? 'var(--f-display)' : 'var(--f-sans)',
            fontStyle: italic ? 'italic' : 'normal',
            fontSize: italic ? 'clamp(48px, 8vw, 120px)' : 18,
            fontWeight: italic ? 400 : 600,
            letterSpacing: italic ? '-0.02em' : '0',
            whiteSpace: 'nowrap'
          }}>
            {it}
            <span style={{ color: 'var(--lime)', fontSize: italic ? '0.5em' : 14 }}>{sep}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---- Footer ---- */
function Footer({ t, setPage, lang }) {
  const f = t.footer;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-marquees">
          <FooterBigMarquee lang={lang} />
        </div>
        <div className="footer-grid">
          <div>
            <div className="nav-logo" style={{ marginBottom: 14 }}>
              <LogoChip size={36} />
              <span style={{ fontSize: 26 }}><span style={{ fontStyle: 'italic' }}>Mis</span>Tech<span style={{ color: 'var(--accent)' }}>.</span></span>
            </div>
            <p style={{ maxWidth: 360, color: 'var(--fg-soft)', fontSize: 15, lineHeight: 1.55, margin: 0 }}>
              {f.tagline}
            </p>
            <div style={{ marginTop: 18 }} className="tag"><span className="dot" style={{ background: 'var(--lime)', boxShadow: '0 0 12px var(--lime)' }} /> {lang === 'fr' ? 'Dispo pour de nouvelles missions' : 'Available for new missions'}</div>
          </div>
          <div>
            <h4>{f.explore}</h4>
            <div className="footer-links">
              <a onClick={() => setPage('home')}>{t.nav.home}</a>
              <a onClick={() => setPage('about')}>{t.nav.about}</a>
              <a onClick={() => setPage('projects')}>{t.nav.projects}</a>
              <a onClick={() => setPage('stack')}>{t.nav.stack}</a>
              <a onClick={() => setPage('contact')}>{t.nav.contact}</a>
            </div>
          </div>
          <div>
            <h4>{f.reach}</h4>
            <div className="footer-links">
              <a href="mailto:hello@mistech.mg">hello@mistech.mg</a>
              <a href="tel:+261382186660">+261 38 21 866 60</a>
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4>{lang === 'fr' ? 'Localisation' : 'Location'}</h4>
            <div className="footer-links">
              <a>Antananarivo</a>
              <a>Madagascar</a>
              <a style={{ color: 'var(--fg-soft)' }}>UTC +3 · GMT+3</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 60, paddingTop: 24, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13, color: 'var(--fg-soft)' }}>
          <div>{f.legal}</div>
          <div className="mono">{f.builtWith}</div>
        </div>
      </div>
    </footer>
  );
}

/* ---- Cursor blob ---- */
function CursorBlob() {
  useEffect(() => {
    if (matchMedia('(hover: none)').matches) return;
    const blob = document.createElement('div');
    blob.className = 'cursor-blob';
    document.body.appendChild(blob);
    let raf, tx = 0, ty = 0, x = 0, y = 0;
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; blob.classList.add('is-visible'); };
    const onOver = (e) => {
      const el = e.target;
      if (el && el.closest && (el.closest('a, button, .magnet'))) blob.classList.add('is-large');
      else blob.classList.remove('is-large');
    };
    const tick = () => {
      x += (tx - x) * 0.2; y += (ty - y) * 0.2;
      blob.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    tick();
    return () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseover', onOver); cancelAnimationFrame(raf); blob.remove(); };
  }, []);
  return null;
}

/* ---- Project visual: tech mockup chooser ---- */
function ProjectShape({ shape, accent, link, videoSrc, name }) {
  if (shape === 'live' && link) return <LivePreview url={link} label={name} />;
  if (shape === 'video')        return <VideoSlot src={videoSrc} label={name ? name.toLowerCase().replace(/\s+/g, '-') + '.mp4' : 'demo.mp4'} />;
  if (shape === 'dashboard')    return <DashboardMockup dark />;
  if (shape === 'api')          return <ApiMockup dark />;
  if (shape === 'mobile')       return <div className="project-phone-wrap"><MobileMockup /></div>;
  if (shape === 'shop')         return <EcommerceMockup dark />;
  if (shape === 'code')         return <CodeMockup dark />;
  if (shape === 'terminal')     return <TerminalMockup />;
  if (shape === 'site')         return <SiteMockup dark />;
  return null;
}

/* ---- Footer composition: small ticker + big mixed marquee ---- */
function FooterTicker({ lang }) {
  const items = lang === 'fr'
    ? ["Disponibles pour de nouvelles missions", "Réponse sous 24h", "Devis sous 72h", "Sites · E-commerce · Apps de gestion"]
    : ["Available for new missions", "Reply within 24h", "Estimate within 72h", "Sites · E-commerce · Business apps"];
  const content = items.concat(items);
  return (
    <div className="ft-ticker">
      <div className="ft-ticker-track">
        {content.map((it, i) => (
          <span key={i} className="ft-ticker-item">
            <span className="ft-ticker-dot" />
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function FooterBigMarquee({ lang }) {
  // Mixed sans + italic + outlined words alternating
  const words = lang === 'fr'
    ? [
        { t: "MisTech", k: "sans" },
        { t: "studio web", k: "italic" },
        { t: "Sur mesure", k: "outline" },
        { t: "On code", k: "sans" },
        { t: "des choses", k: "italic" },
        { t: "qui marchent", k: "outline" }
      ]
    : [
        { t: "MisTech", k: "sans" },
        { t: "web studio", k: "italic" },
        { t: "Bespoke", k: "outline" },
        { t: "We build", k: "sans" },
        { t: "things", k: "italic" },
        { t: "that ship", k: "outline" }
      ];
  const content = words.concat(words);
  return (
    <div className="ft-bigmarquee">
      <div className="ft-bigmarquee-track">
        {content.map((w, i) => (
          <React.Fragment key={i}>
            <span className={"ft-word ft-word--" + w.k}>{w.t}</span>
            <span className="ft-sep">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Icon, LogoChip, Reveal, useReveal, Nav, Marquee, Footer, CursorBlob, ProjectShape, FooterTicker, FooterBigMarquee });
