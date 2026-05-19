/* Pharmacy animated demo — loops through 4 scenes like a video */

function PharmacyDemo() {
  const [scene, setScene] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setScene(s => (s + 1) % 4), 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="pha-app">
      <div className="pha-bar">
        <span className="mock-dots"><span /><span /><span /></span>
        <span className="pha-url mono">pharmacie.mistech.mg</span>
        <span className="pha-tab">{['CATALOGUE', 'PANIER', 'PAIEMENT', 'LIVRAISON'][scene]}</span>
      </div>
      <div className="pha-body">
        {scene === 0 && <SceneCatalog />}
        {scene === 1 && <SceneCart />}
        {scene === 2 && <SceneCheckout />}
        {scene === 3 && <SceneDelivery />}
      </div>
      <div className="pha-dots">
        {[0,1,2,3].map(i => <span key={i} className={"pha-dot" + (i === scene ? " is-on" : "")} />)}
      </div>
    </div>
  );
}

function SceneCatalog() {
  const meds = [
    { n: "Doliprane 500", p: "3 200 Ar", s: "Antalgique", c: 12 },
    { n: "Amoxicilline", p: "12 500 Ar", s: "Antibiotique", c: 4 },
    { n: "Vitamine C", p: "8 000 Ar", s: "Complément", c: 28 },
    { n: "Ventoline", p: "18 000 Ar", s: "Bronchique", c: 7 }
  ];
  return (
    <div className="pha-scene pha-catalog">
      <header className="pha-head">
        <h3>Catalogue · 247 médicaments</h3>
        <span className="pha-search">⌕ rechercher…</span>
      </header>
      <div className="pha-filters">
        {['Tout', 'Antalgiques', 'Antibiotiques', 'Vitamines'].map((f, i) => (
          <span key={f} className={"pha-chip" + (i === 0 ? " is-on" : "")}>{f}</span>
        ))}
      </div>
      <div className="pha-grid">
        {meds.map((m, i) => (
          <div key={i} className="pha-card" style={{ animationDelay: (i * 0.08) + 's' }}>
            <div className="pha-pill"><svg viewBox="0 0 32 32" width="22" height="22"><rect x="4" y="12" width="24" height="8" rx="4" fill="#0F8A4A" /><rect x="4" y="12" width="12" height="8" rx="4" fill="#fff" stroke="#0F8A4A" strokeWidth="0.5" /></svg></div>
            <div className="pha-name">{m.n}</div>
            <div className="pha-sub mono">{m.s} · stock: {m.c}</div>
            <div className="pha-price">{m.p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SceneCart() {
  return (
    <div className="pha-scene pha-cart">
      <header className="pha-head">
        <h3>Panier · 3 articles</h3>
        <span className="pha-badge">★ Patient: Hery R.</span>
      </header>
      <div className="pha-cart-list">
        {[
          { n: "Doliprane 500 × 2", p: "6 400 Ar" },
          { n: "Amoxicilline × 1", p: "12 500 Ar" },
          { n: "Vitamine C × 1", p: "8 000 Ar" }
        ].map((it, i) => (
          <div key={i} className="pha-cart-row" style={{ animationDelay: (i * 0.15) + 's' }}>
            <span className="pha-cart-tick">✓</span>
            <span className="pha-cart-n">{it.n}</span>
            <span className="pha-cart-p mono">{it.p}</span>
          </div>
        ))}
      </div>
      <div className="pha-total">
        <span>TOTAL</span>
        <span className="pha-total-v">26 900 Ar</span>
      </div>
      <button className="pha-btn pha-btn--main">PASSER AU PAIEMENT →</button>
    </div>
  );
}

function SceneCheckout() {
  return (
    <div className="pha-scene pha-checkout">
      <header className="pha-head"><h3>Paiement</h3></header>
      <div className="pha-pay-methods">
        {[
          { l: 'Espèces', i: '💵', on: false },
          { l: 'Mobile Money', i: '📱', on: true },
          { l: 'Carte', i: '💳', on: false }
        ].map((m, i) => (
          <div key={i} className={"pha-pay" + (m.on ? " is-on" : "")} style={{ animationDelay: (i * 0.1) + 's' }}>
            <span className="pha-pay-icon">{m.i}</span>
            <span className="pha-pay-l">{m.l}</span>
            {m.on && <span className="pha-pay-check">✓</span>}
          </div>
        ))}
      </div>
      <div className="pha-pay-summary">
        <div className="pha-row"><span>Médicaments</span><span className="mono">26 900 Ar</span></div>
        <div className="pha-row"><span>Frais livraison</span><span className="mono">2 000 Ar</span></div>
        <div className="pha-row pha-row--total"><span>TOTAL</span><span className="mono">28 900 Ar</span></div>
      </div>
      <div className="pha-confirm">
        <div className="pha-spinner" />
        <span>Confirmation Mobile Money…</span>
      </div>
    </div>
  );
}

function SceneDelivery() {
  return (
    <div className="pha-scene pha-delivery">
      <header className="pha-head">
        <h3>Livraison en cours</h3>
        <span className="pha-eta mono">ETA · 18 min</span>
      </header>
      <div className="pha-map">
        <svg viewBox="0 0 320 160" preserveAspectRatio="none" className="pha-map-svg">
          <defs>
            <pattern id="phaGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0F8A4A" strokeWidth="0.4" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="320" height="160" fill="url(#phaGrid)" />
          <path d="M 30 130 Q 90 100, 140 80 T 260 30" fill="none" stroke="#0F8A4A" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />
          <circle cx="30" cy="130" r="8" fill="#0F8A4A" />
          <circle cx="30" cy="130" r="14" fill="#0F8A4A" opacity="0.25" />
          <circle cx="260" cy="30" r="8" fill="#D5F25E" stroke="#0F8A4A" strokeWidth="2" />
          <g className="pha-truck">
            <rect x="0" y="-6" width="22" height="12" rx="2" fill="#0F8A4A" />
            <rect x="14" y="-10" width="10" height="6" rx="1" fill="#0F8A4A" />
            <circle cx="6" cy="8" r="3" fill="#fff" stroke="#0F8A4A" strokeWidth="1" />
            <circle cx="18" cy="8" r="3" fill="#fff" stroke="#0F8A4A" strokeWidth="1" />
          </g>
        </svg>
      </div>
      <div className="pha-steps">
        {[
          { l: 'Commande reçue', d: '14:22', done: true },
          { l: 'En préparation', d: '14:25', done: true },
          { l: 'En route', d: '14:34', done: true, active: true },
          { l: 'Livré', d: '15:00', done: false }
        ].map((s, i) => (
          <div key={i} className={"pha-step" + (s.done ? " is-done" : "") + (s.active ? " is-active" : "")}>
            <span className="pha-step-dot" />
            <span className="pha-step-l">{s.l}</span>
            <span className="pha-step-d mono">{s.d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.PharmacyDemo = PharmacyDemo;
