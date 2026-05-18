/* Reusable tech mockup SVG components */

/* ---- Mini browser window chrome wrapper ---- */
function BrowserChrome({ url, children, dark, style }) {
  const bg = dark ? '#0E0B18' : '#FFFCF4';
  const fg = dark ? '#F4EFE3' : '#14111F';
  const sub = dark ? '#6B6577' : '#9A93AD';
  const line = dark ? 'rgba(244,239,227,0.10)' : 'rgba(20,17,31,0.08)';
  return (
    <div className="mock-browser" style={{ background: bg, color: fg, borderColor: line, ...style }}>
      <div className="mock-bar" style={{ borderBottom: '1px solid ' + line }}>
        <span className="mock-dots"><span /><span /><span /></span>
        <span className="mock-url" style={{ color: sub, background: dark ? 'rgba(244,239,227,0.05)' : 'rgba(20,17,31,0.04)' }}>{url}</span>
        <span style={{ width: 36 }} />
      </div>
      <div className="mock-body">{children}</div>
    </div>
  );
}

/* ---- Phone frame wrapper ---- */
function PhoneFrame({ children, style }) {
  return (
    <div className="mock-phone" style={style}>
      <div className="mock-phone-notch" />
      <div className="mock-phone-screen">{children}</div>
    </div>
  );
}

/* ---- Dashboard mockup (admin panel) ---- */
function DashboardMockup({ dark = true }) {
  return (
    <BrowserChrome url="app.mistech.mg/dashboard" dark={dark}>
      <div className="mock-dash">
        <aside className="mock-dash-side">
          <div className="mock-dash-logo">
            <span className="mock-dash-logo-dot" />
            <span className="mock-dash-logo-bar" />
          </div>
          <ul>
            <li className="is-active"><span /> Overview</li>
            <li><span /> Ventes</li>
            <li><span /> Stock</li>
            <li><span /> Clients</li>
            <li><span /> Rapports</li>
            <li><span /> Paramètres</li>
          </ul>
        </aside>
        <div className="mock-dash-main">
          <div className="mock-dash-kpis">
            {[
              { l: 'Revenue', v: '17.4k', d: '+12%' },
              { l: 'Orders', v: '284', d: '+8%' },
              { l: 'Stock', v: '1.2k', d: '−3%' }
            ].map((k, i) => (
              <div key={i} className="mock-kpi">
                <div className="mock-kpi-l">{k.l}</div>
                <div className="mock-kpi-v">{k.v}</div>
                <div className="mock-kpi-d">{k.d}</div>
              </div>
            ))}
          </div>
          <div className="mock-dash-chart">
            <svg viewBox="0 0 400 120" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6B4EFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6B4EFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M 0 90 L 40 70 L 80 80 L 120 50 L 160 60 L 200 30 L 240 45 L 280 25 L 320 35 L 360 15 L 400 25 L 400 120 L 0 120 Z" fill="url(#chartFill)" />
              <path d="M 0 90 L 40 70 L 80 80 L 120 50 L 160 60 L 200 30 L 240 45 L 280 25 L 320 35 L 360 15 L 400 25" fill="none" stroke="#6B4EFF" strokeWidth="2" />
              {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
                <circle key={i} cx={x} cy={[70, 80, 50, 60, 30, 45, 25, 35, 15][i]} r="2.5" fill="#6B4EFF" />
              ))}
            </svg>
          </div>
          <div className="mock-dash-table">
            {[1, 2, 3].map(i => (
              <div key={i} className="mock-dash-row">
                <span className="mock-dot" />
                <span className="mock-bar w-40" />
                <span className="mock-bar w-20" />
                <span className="mock-pill">PAID</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

/* ---- E-commerce mockup ---- */
function EcommerceMockup({ dark = true }) {
  return (
    <BrowserChrome url="shop.mistech.mg" dark={dark}>
      <div className="mock-shop">
        <div className="mock-shop-head">
          <span className="mock-shop-logo">◐ STORE</span>
          <span className="mock-bar w-30" />
          <span className="mock-shop-cart">🛒 3</span>
        </div>
        <div className="mock-shop-grid">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="mock-shop-card">
              <div className="mock-shop-img">
                <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                  <rect width="100" height="100" fill={i % 2 ? '#6B4EFF' : '#4A2EE8'} opacity={0.2 + (i * 0.1)} />
                  <circle cx="50" cy="50" r={20 + i * 4} fill={i % 2 ? '#6B4EFF' : '#9A85FF'} opacity="0.8" />
                </svg>
              </div>
              <div className="mock-bar w-60" />
              <div className="mock-shop-price">€ {12 + i * 7}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

/* ---- Code mockup ---- */
function CodeMockup({ dark = true }) {
  return (
    <BrowserChrome url="VS Code — api.controller.ts" dark={dark}>
      <div className="mock-code">
        <div className="mock-code-tabs">
          <span className="is-active">api.controller.ts</span>
          <span>service.ts</span>
          <span>routes.ts</span>
        </div>
        <div className="mock-code-body">
          <pre>{`@RestController
@RequestMapping("/api/orders")
export class OrderController {
  @Get(":id")
  async findOne(@Param() id: string) {
    return this.svc.findOne(id);
  }

  @Post()
  async create(@Body() dto: OrderDto) {
    const order = await this.svc.create(dto);
    this.events.emit("order.created", order);
    return order;
  }
}`}</pre>
        </div>
      </div>
    </BrowserChrome>
  );
}

/* ---- Terminal mockup ---- */
function TerminalMockup({ dark = true }) {
  return (
    <div className="mock-terminal" data-dark={dark}>
      <div className="mock-terminal-bar">
        <span className="mock-dots"><span /><span /><span /></span>
        <span className="mono" style={{ fontSize: 10, opacity: 0.5 }}>~/mistech/api</span>
      </div>
      <div className="mock-terminal-body">
        <div><span className="t-prompt">$</span> npm run deploy</div>
        <div className="t-muted">› building production bundle…</div>
        <div className="t-muted">› running tests…</div>
        <div className="t-ok">✓ 142 tests passed (3.2s)</div>
        <div className="t-muted">› deploying to mistech.mg…</div>
        <div className="t-ok">✓ deployed in 8.4s</div>
        <div><span className="t-prompt">$</span> <span className="t-cursor">_</span></div>
      </div>
    </div>
  );
}

/* ---- Mobile app mockup ---- */
function MobileMockup() {
  return (
    <PhoneFrame>
      <div className="mock-mobile">
        <div className="mock-mobile-status">
          <span>9:41</span>
          <span>● ● ●</span>
        </div>
        <div className="mock-mobile-head">
          <div className="mock-mobile-greet">Hello, Brady</div>
          <div className="mock-mobile-sub">Vue ce matin</div>
        </div>
        <div className="mock-mobile-card">
          <div className="mock-bar w-40" />
          <div className="mock-mobile-num">17,420 Ar</div>
          <div className="mock-bar w-30" />
        </div>
        <div className="mock-mobile-list">
          {[1,2,3,4].map(i => (
            <div key={i} className="mock-mobile-row">
              <span className="mock-mobile-icon" />
              <span className="mock-bar w-50" />
              <span className="mock-mobile-val">−{120 * i}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ---- API / JSON mockup ---- */
function ApiMockup({ dark = true }) {
  return (
    <BrowserChrome url="GET /api/v2/users/:id" dark={dark}>
      <div className="mock-api">
        <div className="mock-api-row">
          <span className="mock-api-method">GET</span>
          <span className="mono" style={{ fontSize: 11 }}>/api/v2/users/:id</span>
          <span className="mock-api-status">200 OK</span>
        </div>
        <pre className="mock-api-body">{`{
  "id": "usr_8f29",
  "name": "Fenosoa T.",
  "email": "f@mistech.mg",
  "role": "admin",
  "created_at": "2025-12-04T08:22Z",
  "permissions": [
    "orders.read",
    "orders.write",
    "stock.read"
  ]
}`}</pre>
      </div>
    </BrowserChrome>
  );
}

/* ---- Marketing site mockup ---- */
function SiteMockup({ dark = true }) {
  return (
    <BrowserChrome url="agence.exemple.mg" dark={dark}>
      <div className="mock-site">
        <div className="mock-site-nav">
          <span className="mock-bar w-15" />
          <div style={{ flex: 1 }} />
          <span className="mock-bar w-10" />
          <span className="mock-bar w-10" />
          <span className="mock-bar w-10" />
          <span className="mock-site-cta">Contact</span>
        </div>
        <div className="mock-site-hero">
          <div className="mock-site-head">
            <div className="mock-bar w-70" style={{ height: 14 }} />
            <div className="mock-bar w-50" style={{ height: 14, marginTop: 8 }} />
            <div className="mock-bar w-40" style={{ height: 8, marginTop: 12, opacity: 0.5 }} />
          </div>
          <div className="mock-site-art">
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
              <circle cx="50" cy="50" r="38" fill="#6B4EFF" opacity="0.2" />
              <circle cx="50" cy="50" r="26" fill="#6B4EFF" opacity="0.4" />
              <circle cx="50" cy="50" r="14" fill="#6B4EFF" />
            </svg>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

/* ---- Background pattern: dot grid ---- */
function DotGridBg({ opacity = 0.5, density = 28 }) {
  return (
    <div className="bg-pattern bg-pattern--dots" style={{
      backgroundImage: `radial-gradient(circle, var(--fg-soft) 1px, transparent 1px)`,
      backgroundSize: `${density}px ${density}px`,
      opacity
    }} />
  );
}

/* ---- Background pattern: line grid ---- */
function LineGridBg({ opacity = 0.4, size = 60 }) {
  return (
    <div className="bg-pattern bg-pattern--grid" style={{
      backgroundImage: `linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
      opacity
    }} />
  );
}

/* ---- Live site preview (screenshot via thum.io inside browser chrome) ---- */
function LivePreview({ url, label }) {
  const [status, setStatus] = React.useState('loading'); // loading | ready | failed
  let host = url;
  try { host = new URL(url).hostname.replace(/^www\./, ''); } catch (e) {}
  // Screenshot via thum.io — works for most public sites; ad-supported free tier.
  const screenshot = 'https://image.thum.io/get/width/1280/wait/4/png/' + url;
  return (
    <a className="live-preview" href={url} target="_blank" rel="noopener noreferrer" aria-label={label || ('Visit ' + host)}>
      <div className="live-frame">
        <div className="live-bar">
          <span className="mock-dots"><span /><span /><span /></span>
          <span className="live-url mono">{host}</span>
          <span className="live-go mono">↗</span>
        </div>
        <div className="live-viewport">
          {status !== 'failed' && (
            <img
              className={"live-screenshot" + (status === 'ready' ? ' is-ready' : '')}
              src={screenshot}
              alt={label || host}
              loading="lazy"
              onLoad={() => setStatus('ready')}
              onError={() => setStatus('failed')}
            />
          )}
          {status !== 'ready' && (
            <div className="live-fallback">
              <div className="live-fb-grid" />
              <div className="live-fb-host display">{host}</div>
              <div className="live-fb-cta mono">
                {status === 'loading' ? 'Chargement de l\u2019aperçu…' : 'Aperçu indisponible — cliquez pour voir'}
              </div>
            </div>
          )}
          <div className="live-overlay">
            <span className="live-cta">Voir le site en direct ↗</span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ---- Video demo slot (mp4 inside browser chrome) ---- */
function VideoSlot({ src, label }) {
  return (
    <div className="video-slot">
      <div className="video-frame">
        <div className="live-bar">
          <span className="mock-dots"><span /><span /><span /></span>
          <span className="live-url mono">{label || 'demo.mp4'}</span>
          <span className="live-go mono">●REC</span>
        </div>
        <div className="video-viewport">
          {src ? (
            <video className="video-el" src={src} controls preload="metadata" playsInline poster="" />
          ) : null}
          <div className="video-placeholder">
            <div className="video-play-btn">▶</div>
            <div className="video-placeholder-text">Démo vidéo</div>
            <div className="video-placeholder-sub mono">À ajouter ici</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* === Real-content site mockup (marketing site for a local agency) === */
function SiteRealMockup() {
  return (
    <div className="rsite">
      <div className="rsite-bar">
        <span className="mock-dots"><span /><span /><span /></span>
        <span className="rsite-url mono">www.agence-locale.mg/accueil</span>
      </div>
      <div className="rsite-body">
        <header className="rsite-nav">
          <span className="rsite-logo">◐ AGENCE<span>·LOCALE</span></span>
          <nav>
            <a>Services</a><a>Réalisations</a><a>Équipe</a><a>Contact</a>
          </nav>
          <span className="rsite-cta">Demander un devis</span>
        </header>
        <div className="rsite-hero">
          <div className="rsite-hero-text">
            <span className="rsite-eyebrow mono">★ AGENCE D'ARCHITECTURE · ANTANANARIVO</span>
            <h2 className="rsite-h">On dessine <em>des espaces</em><br/>qui durent.</h2>
            <p className="rsite-p">15 ans d'expérience. 80+ projets résidentiels et tertiaires livrés à Madagascar.</p>
            <div className="rsite-actions">
              <span className="rsite-btn rsite-btn--pri">Voir le portfolio →</span>
              <span className="rsite-btn rsite-btn--sec">Notre démarche</span>
            </div>
          </div>
          <div className="rsite-hero-art">
            <div className="rsite-art-bg" />
            <div className="rsite-art-fg" />
            <span className="rsite-art-label mono">Villa Ankadifotsy · 2024</span>
          </div>
        </div>
        <div className="rsite-strip">
          <span>★ 4.9/5</span><span>·</span><span>80+ projets</span><span>·</span><span>15 ans</span><span>·</span><span>12 villes</span>
        </div>
      </div>
    </div>
  );
}

/* === Real-content e-commerce mockup === */
function ShopRealMockup() {
  const products = [
    { n: "Sac à dos Toliara", p: "189 000 Ar", tag: "Nouveau" },
    { n: "Veste Antsiranana", p: "245 000 Ar", tag: "★ Top" },
    { n: "Carnet Diego", p: "32 000 Ar" },
    { n: "Lampe Bao", p: "120 000 Ar", tag: "−20%" }
  ];
  return (
    <div className="rshop">
      <div className="rshop-bar">
        <span className="mock-dots"><span /><span /><span /></span>
        <span className="rshop-url mono">shop.boutique-mg.mg/catalogue</span>
      </div>
      <div className="rshop-body">
        <header className="rshop-nav">
          <span className="rshop-logo">BOUTIQUE<em>·</em>MG</span>
          <span className="rshop-search">⌕ rechercher un produit…</span>
          <span className="rshop-cart">🛒 3 · 549 000 Ar</span>
        </header>
        <div className="rshop-filters">
          <span className="rshop-chip is-on">Tout</span>
          <span className="rshop-chip">Sacs</span>
          <span className="rshop-chip">Vêtements</span>
          <span className="rshop-chip">Maison</span>
          <span className="rshop-chip">Papeterie</span>
        </div>
        <div className="rshop-grid">
          {products.map((p, i) => (
            <div key={i} className="rshop-card">
              <div className={"rshop-img rshop-img--" + i}>
                {p.tag && <span className="rshop-tag">{p.tag}</span>}
              </div>
              <div className="rshop-name">{p.n}</div>
              <div className="rshop-price">{p.p}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* === Real-content management app mockup === */
function AppRealMockup() {
  return (
    <div className="rapp">
      <div className="rapp-bar">
        <span className="mock-dots"><span /><span /><span /></span>
        <span className="rapp-url mono">app.mistech.mg/dashboard</span>
      </div>
      <div className="rapp-body">
        <aside className="rapp-side">
          <div className="rapp-logo">⬢ STOCK<span>v2</span></div>
          <ul>
            <li className="is-on">▦ Tableau de bord</li>
            <li>📦 Produits</li>
            <li>🛒 Commandes</li>
            <li>👥 Clients</li>
            <li>📊 Rapports</li>
            <li>⚙ Paramètres</li>
          </ul>
          <div className="rapp-side-foot mono">v2.4 · synced</div>
        </aside>
        <main className="rapp-main">
          <header className="rapp-head">
            <h3>Tableau de bord · <em>mai 2026</em></h3>
            <span className="rapp-period mono">7 derniers jours ▾</span>
          </header>
          <div className="rapp-kpis">
            <div className="rapp-kpi">
              <span className="rapp-kpi-l mono">CHIFFRE D'AFFAIRES</span>
              <span className="rapp-kpi-v">2 847 500 Ar</span>
              <span className="rapp-kpi-d rapp-up">▲ +12,4 %</span>
            </div>
            <div className="rapp-kpi">
              <span className="rapp-kpi-l mono">COMMANDES</span>
              <span className="rapp-kpi-v">284</span>
              <span className="rapp-kpi-d rapp-up">▲ +8 %</span>
            </div>
            <div className="rapp-kpi">
              <span className="rapp-kpi-l mono">STOCK BAS</span>
              <span className="rapp-kpi-v">7</span>
              <span className="rapp-kpi-d rapp-down">▼ alertes</span>
            </div>
          </div>
          <div className="rapp-chart">
            <div className="rapp-chart-head mono"><span>VENTES · 7J</span><span>CA: 2 847 500 Ar</span></div>
            <svg viewBox="0 0 400 90" preserveAspectRatio="none" className="rapp-chart-svg">
              <defs>
                <linearGradient id="rappFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6B4EFF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#6B4EFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M 0 70 L 60 50 L 120 60 L 180 30 L 240 40 L 300 20 L 360 35 L 400 25 L 400 90 L 0 90 Z" fill="url(#rappFill)" />
              <path d="M 0 70 L 60 50 L 120 60 L 180 30 L 240 40 L 300 20 L 360 35 L 400 25" fill="none" stroke="#6B4EFF" strokeWidth="2" />
              {[[0,70],[60,50],[120,60],[180,30],[240,40],[300,20],[360,35],[400,25]].map(([x,y],i)=>(
                <circle key={i} cx={x} cy={y} r="2.5" fill="#D5F25E" />
              ))}
            </svg>
          </div>
          <div className="rapp-table">
            <div className="rapp-row rapp-row--head mono">
              <span>RÉF</span><span>CLIENT</span><span>MONTANT</span><span>STATUT</span>
            </div>
            <div className="rapp-row">
              <span className="mono">#ORD-1429</span><span>Hery R.</span><span>187 000 Ar</span><span className="rapp-pill rapp-pill--ok">PAYÉE</span>
            </div>
            <div className="rapp-row">
              <span className="mono">#ORD-1428</span><span>Volana A.</span><span>54 200 Ar</span><span className="rapp-pill rapp-pill--wait">EN ATTENTE</span>
            </div>
            <div className="rapp-row">
              <span className="mono">#ORD-1427</span><span>Tahina M.</span><span>312 800 Ar</span><span className="rapp-pill rapp-pill--ok">PAYÉE</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* === Swagger / Postman-style API explorer mockup === */
function SwaggerMockup() {
  return (
    <div className="swg">
      <div className="swg-bar">
        <span className="mock-dots"><span /><span /><span /></span>
        <span className="swg-title mono">MisTech API · v2 · Swagger UI</span>
        <span className="swg-base mono">api.mistech.mg</span>
      </div>
      <div className="swg-body">
        <aside className="swg-side">
          <div className="swg-side-head mono">ENDPOINTS</div>
          <ul className="swg-list">
            <li><span className="swg-method swg-method--get">GET</span><span className="swg-path">/users</span></li>
            <li><span className="swg-method swg-method--get">GET</span><span className="swg-path">/users/:id</span></li>
            <li className="is-active"><span className="swg-method swg-method--post">POST</span><span className="swg-path">/orders</span></li>
            <li><span className="swg-method swg-method--put">PUT</span><span className="swg-path">/orders/:id</span></li>
            <li><span className="swg-method swg-method--del">DEL</span><span className="swg-path">/orders/:id</span></li>
            <li><span className="swg-method swg-method--get">GET</span><span className="swg-path">/stock</span></li>
          </ul>
        </aside>
        <div className="swg-main">
          <div className="swg-row swg-row--head">
            <span className="swg-method swg-method--post">POST</span>
            <span className="swg-endpoint mono">/api/v2/orders</span>
            <span className="swg-auth mono">🔒 bearer</span>
          </div>
          <div className="swg-section">
            <div className="swg-section-head mono">REQUEST · body</div>
            <pre className="swg-code">{`{
  "customer_id": "usr_8f29",
  "items": [
    { "sku": "BOI-04", "qty": 2 }
  ],
  "total": 17500
}`}</pre>
          </div>
          <div className="swg-section">
            <div className="swg-section-head mono">
              RESPONSE
              <span className="swg-status">200 OK</span>
            </div>
            <pre className="swg-code swg-code--ok">{`{
  "id": "ord_429a",
  "status": "paid",
  "created_at": "2026-05-18T09:14Z"
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  BrowserChrome, PhoneFrame,
  DashboardMockup, EcommerceMockup, CodeMockup, TerminalMockup, MobileMockup, ApiMockup, SiteMockup,
  SwaggerMockup, SiteRealMockup, ShopRealMockup, AppRealMockup,
  DotGridBg, LineGridBg,
  LivePreview, VideoSlot
});
