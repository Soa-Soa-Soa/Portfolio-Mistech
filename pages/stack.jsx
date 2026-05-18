/* ===== Stack Page ===== */
function StackPage({ t, setPage, lang }) {
  const s = t.stack;
  return (
    <div className="page page-enter">
      <section style={{ padding: '60px 0 80px' }}>
        <div className="wrap">
          <Reveal>
            <div className="tag" style={{ marginBottom: 28 }}><span className="dot" /> {s.kicker}</div>
            <h1 className="display" style={{ fontSize: 'clamp(42px, 7vw, 96px)', lineHeight: 0.96, margin: 0, letterSpacing: '-0.04em' }}>
              {s.title}{' '}
              {s.titleItalic && <span className="display-i" style={{ color: 'var(--accent)' }}>{s.titleItalic}</span>}
            </h1>
          </Reveal>
          <Reveal>
            <p style={{ marginTop: 32, fontSize: 20, lineHeight: 1.45, maxWidth: 640, color: 'var(--fg-soft)' }}>{s.lead}</p>
          </Reveal>
        </div>
      </section>

      {/* Stack — interactive dial spinner */}
      <section style={{ padding: '40px 0 100px' }}>
        <div className="wrap">
          <StackDial groups={s.groups} />
        </div>
      </section>

      {/* GitHub — real profiles */}
      <section className="gh-section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <div className="tag" style={{ marginBottom: 16 }}><Icon.Github /> GitHub</div>
              <h2>{s.ghTitle}</h2>
            </div>
            <p>{s.ghSub}</p>
          </Reveal>
          <div className="gh-profiles">
            {s.ghProfiles.map((p, i) => (
              <Reveal key={p.handle} as="article" className="gh-profile">
                <div className="gh-profile-head">
                  <a className="gh-avatar" href={p.url} target="_blank" rel="noopener noreferrer">
                    <img src={`https://github.com/${p.handle}.png?size=200`} alt={p.who} loading="lazy" />
                  </a>
                  <div className="gh-id">
                    <div className="mono gh-n">0{i + 1} · {p.who}</div>
                    <a className="display gh-handle" href={p.url} target="_blank" rel="noopener noreferrer">@{p.handle}</a>
                    <div className="gh-role mono">{p.role}</div>
                  </div>
                </div>
                <GhRepos user={p.handle} pinned={p.pinned} lang={lang} />
                <a className="btn btn--ghost gh-visit magnet" href={p.url} target="_blank" rel="noopener noreferrer">
                  <Icon.Github /> {lang === 'fr' ? 'Voir tous les repos' : 'See all repos'} <Icon.Arrow />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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

function ContribGraph() {
  // Build 52 weeks x 7 days = 364 cells with seeded random intensity
  const cells = [];
  let seed = 7;
  const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  for (let w = 0; w < 52; w++) {
    const col = [];
    for (let d = 0; d < 7; d++) {
      const r = rand();
      const intensity = r < 0.35 ? 0 : r < 0.55 ? 1 : r < 0.75 ? 2 : r < 0.9 ? 3 : 4;
      col.push(intensity);
    }
    cells.push(col);
  }
  const opacity = [0.08, 0.25, 0.5, 0.75, 1];
  return (
    <div className="gh-cells">
      {cells.map((col, w) => (
        <div key={w} className="gh-col">
          {col.map((v, d) => (
            <span key={d} style={{ background: 'var(--accent)', opacity: opacity[v] }} />
          ))}
        </div>
      ))}
    </div>
  );
}

/* === Stack as interactive dial spinner === */
function StackDial({ groups }) {
  const [active, setActive] = useState(0);
  const N = groups.length; // 3
  const stepDeg = 360 / N;
  const discRotation = -active * stepDeg;
  const activeGroup = groups[active];
  const accent = ['var(--violet)', 'var(--lime)', 'var(--violet-soft)'][active];

  const onSpin = (dir) => setActive(prev => (prev + dir + N) % N);

  return (
    <div className="dial-block">
      <div className="dial-side">
        <div className="dial-stage">
          <svg className="dial-bg" viewBox="-130 -130 260 260" aria-hidden="true">
            <circle cx="0" cy="0" r="118" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
            <circle cx="0" cy="0" r="92" fill="none" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="2 4" />
            <circle cx="0" cy="0" r="64" fill="none" stroke="var(--line)" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="22" fill={accent} />
            <circle cx="0" cy="0" r="6" fill="var(--bg)" />
          </svg>
          <div className="dial-pointer">
            <svg viewBox="0 0 24 18" width="24" height="18"><path d="M 12 18 L 0 0 L 24 0 Z" fill="var(--lime)" /></svg>
          </div>
          <div className="dial-disc" style={{ transform: `rotate(${discRotation}deg)`, '--c-active': accent }}>
            {groups.map((g, i) => (
              <button
                key={i}
                type="button"
                className={"dial-btn" + (i === active ? " is-active" : "")}
                style={{ '--angle': (i * stepDeg) + 'deg', '--counter': (-i * stepDeg) + 'deg' }}
                onClick={() => setActive(i)}
                aria-label={g.name}
              >
                <span className="dial-btn-inner">
                  <span className="dial-btn-n mono">0{i + 1}</span>
                  <span className="dial-btn-sym display">{g.name.split(/\s|\&|·/)[0].slice(0, 4)}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="dial-controls">
          <button className="dial-arr" onClick={() => onSpin(-1)} aria-label="Previous"><Icon.Arrow style={{ transform: 'rotate(180deg)' }} /></button>
          <div className="dial-readout">
            <span className="dial-readout-n mono">0{active + 1} / 0{N}</span>
            <span className="dial-readout-cat display">{activeGroup.name}.</span>
          </div>
          <button className="dial-arr" onClick={() => onSpin(1)} aria-label="Next"><Icon.Arrow /></button>
        </div>
      </div>
      <div className="dial-content" style={{ '--c-active': accent }}>
        <div className="dial-content-head">
          <span className="mono dial-content-tag">↳ {activeGroup.items.length} technologies</span>
        </div>
        <ul className="dial-techs">
          {activeGroup.items.map((it, j) => (
            <li key={j} className="dial-tech" style={{ animationDelay: (j * 0.05) + 's' }}>
              <span className="dial-tech-rank mono">0{j + 1}</span>
              <span className="dial-tech-name display">{it.n}</span>
              <span className="dial-tech-bar"><span className="dial-tech-bar-fill" style={{ width: it.lvl + '%' }} /></span>
              <span className="dial-tech-lvl mono">{it.lvl}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* === Stack as periodic table of skills === */
const SKILL_SYM = {
  "React": "Re",
  "Angular": "An",
  "TypeScript": "Ts",
  "Tailwind CSS": "Tw",
  "HTML / CSS": "Ht",
  "Java + Spring Boot": "Sb",
  "PHP + Laravel": "Lv",
  "Node.js": "Nd",
  ".NET / C#": "C#",
  "Python": "Py",
  "PostgreSQL": "Pg",
  "MySQL": "My",
  "Docker": "Dk",
  "API REST": "Ar",
  "REST API": "Ar",
  "Git / GitHub": "Gh"
};

function StackPeriodic({ groups }) {
  return (
    <div className="periodic">
      {groups.map((g, i) => {
        const colorVar = ['var(--violet)', 'var(--lime)', 'var(--violet-soft)'][i];
        return (
          <Reveal key={i} as="div" className="periodic-row" style={{ '--c-row': colorVar }}>
            <div className="periodic-meta">
              <span className="mono periodic-n">0{i + 1}</span>
              <h3 className="periodic-cat display">{g.name}.</h3>
              <span className="periodic-count mono">{g.items.length} elements</span>
            </div>
            <div className="periodic-cells">
              {g.items.map((it, j) => {
                const sym = SKILL_SYM[it.n] || it.n.replace(/\s+/g, '').slice(0, 2);
                return (
                  <div key={j} className="periodic-cell" title={it.n + ' · ' + it.lvl + '%'}>
                    <span className="pc-num mono">{it.lvl}</span>
                    <span className="pc-sym">{sym}</span>
                    <span className="pc-name mono">{it.n}</span>
                    <span className="pc-bar"><span className="pc-bar-fill" style={{ width: it.lvl + '%' }} /></span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/* === Lab notebook (tabbed single panel, no card grid) === */
function LabNotebook({ items }) {
  const [active, setActive] = useState(0);
  const demos = [<LabGrid key="g" />, <LabType key="t" />, <LabCursor key="c" />, <LabMarquee key="m" />];
  const item = items[active] || items[0];
  return (
    <div className="lab-book">
      <div className="lab-book-tabs">
        {items.map((l, i) => (
          <button
            key={i}
            className={"lab-tab" + (active === i ? " is-active" : "")}
            onClick={() => setActive(i)}
          >
            <span className="lab-tab-n mono">0{i + 1}</span>
            <span className="lab-tab-t">{l.t}</span>
          </button>
        ))}
      </div>
      <div className="lab-book-body">
        <div className="lab-book-demo">
          {demos[active]}
        </div>
        <div className="lab-book-info">
          <span className="tech-tag">{item.tag}</span>
          <h3 className="display lab-book-title">{item.t}</h3>
          <p className="lab-book-desc">{item.d}</p>
          <div className="lab-book-meta mono">↳ Experiment 0{active + 1} / 0{items.length}</div>
        </div>
      </div>
    </div>
  );
}

function LabCard({ l, i }) {
  return (
    <article className={"lab-card lab-card-" + i}>
      <div className="lab-art">
        {i === 0 && <LabGrid />}
        {i === 1 && <LabType />}
        {i === 2 && <LabCursor />}
        {i === 3 && <LabMarquee />}
      </div>
      <div className="lab-meta">
        <span className="tag" style={{ fontSize: 10 }}>{l.tag}</span>
        <h3 className="display" style={{ fontSize: 20, margin: '10px 0 6px', lineHeight: 1 }}>{l.t}</h3>
        <p style={{ color: 'var(--fg-soft)', margin: 0, fontSize: 14, lineHeight: 1.55 }}>{l.d}</p>
      </div>
    </article>
  );
}

function LabGrid() {
  const cells = [];
  for (let y = 0; y < 6; y++) for (let x = 0; x < 6; x++) {
    cells.push(<span key={`${x}-${y}`} style={{ animationDelay: ((x+y)*0.1) + 's' }} />);
  }
  return <div className="lg-grid">{cells}</div>;
}

function LabType() {
  return (
    <div className="lt-type" style={{ fontFamily: 'var(--f-display)' }}>
      <span className="lt-1">Aa</span>
      <span className="lt-2">Bb</span>
      <span className="lt-3">Cc</span>
    </div>
  );
}

function LabCursor() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <div className="lc-area" onMouseMove={(e) => {
      const r = e.currentTarget.getBoundingClientRect();
      setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    }}>
      <div className="lc-dot" style={{ left: pos.x + '%', top: pos.y + '%' }} />
      <span className="mono" style={{ fontSize: 11, color: 'var(--fg-soft)' }}>hover me</span>
    </div>
  );
}

function LabMarquee() {
  return (
    <div className="lm-marquee">
      <div className="lm-track">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i}>● mistech</span>
        ))}
      </div>
    </div>
  );
}

/* === Live GitHub repos fetcher === */
function GhRepos({ user, pinned, lang }) {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${user}/repos?sort=updated&direction=desc&per_page=30&type=owner`)
      .then(r => r.ok ? r.json() : Promise.reject(new Error('http ' + r.status)))
      .then(data => {
        if (cancelled) return;
        if (!Array.isArray(data)) { setRepos([]); return; }
        let list = data.filter(r => !r.fork);
        if (pinned && pinned.length) {
          const pinnedRepos = pinned.map(name => list.find(r => r.name === name)).filter(Boolean);
          const rest = list.filter(r => !pinned.includes(r.name));
          list = [...pinnedRepos, ...rest];
        }
        setRepos(list.slice(0, 4));
      })
      .catch(() => { if (!cancelled) setError(true); });
    return () => { cancelled = true; };
  }, [user, pinned && pinned.join(',')]);
  const tr = lang === 'fr' ? {
    loading: 'Chargement des repos…',
    error: 'Repos non chargés — visitez le profil.',
    empty: 'Aucun repo public.',
    updated: 'MAJ'
  } : {
    loading: 'Loading repos…',
    error: 'Repos failed to load — visit the profile.',
    empty: 'No public repos yet.',
    updated: 'Updated'
  };
  if (error) return <div className="gh-repos-empty mono">{tr.error}</div>;
  if (!repos) return <div className="gh-repos-empty mono">{tr.loading}</div>;
  if (repos.length === 0) return <div className="gh-repos-empty mono">{tr.empty}</div>;
  const fmtDate = (s) => new Date(s).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { month: 'short', year: 'numeric' });
  return (
    <div className="gh-repos">
      {repos.map(r => (
        <a key={r.id} className="gh-repo" href={r.html_url} target="_blank" rel="noopener noreferrer">
          <div className="gh-repo-head">
            <span className="gh-repo-name">{r.name}</span>
            {r.language && <span className="gh-repo-lang mono">{r.language}</span>}
          </div>
          {r.description && <p className="gh-repo-desc">{r.description}</p>}
          <div className="gh-repo-meta mono">
            <span>★ {r.stargazers_count}</span>
            <span>⤴ {r.forks_count}</span>
            <span>{tr.updated} {fmtDate(r.updated_at)}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

window.StackPage = StackPage;
