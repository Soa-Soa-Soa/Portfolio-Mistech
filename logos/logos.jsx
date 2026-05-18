/* MisTech logo concept canvas */

function LogoCanvas() {
  return (
    <DesignCanvas title="MisTech — Logo Concepts" subtitle="Direction retenue : 04, 05, 10 — propositions fraîches 11-14">

      <DCSection id="keep" title="MisTech — 7 directions retenues">
        <DCArtboard id="04" label="04 · Caret <MT/>" width={720} height={620}>
          <Concept04 />
        </DCArtboard>
        <DCArtboard id="05" label="05 · M-T monogram" width={720} height={620}>
          <Concept05 />
        </DCArtboard>
        <DCArtboard id="10" label="10 · Silicon chip" width={720} height={620}>
          <Concept10 />
        </DCArtboard>
        <DCArtboard id="11" label="11 · MT ligature" width={720} height={620}>
          <Concept11 />
        </DCArtboard>
        <DCArtboard id="13" label="13 · Lemniscate" width={720} height={620}>
          <Concept13 />
        </DCArtboard>
        <DCArtboard id="16" label="16 · Iso block" width={720} height={620}>
          <Concept16 />
        </DCArtboard>
        <DCArtboard id="25" label="25 · QR finder" width={720} height={620}>
          <Concept25 />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

/* ============ CONCEPT 01 — Le point qui pulse (current direction, refined) ============ */
function Concept01() {
  return (
    <div className="logo-art">
      <h2 className="la-title">01 — Le point qui pulse</h2>
      <div className="la-sub">SIGNATURE · TECH · CONTINUITÉ</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 80 80" width="120" height="120">
            <defs>
              <linearGradient id="c01g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9A85FF" />
                <stop offset="60%" stopColor="#6B4EFF" />
                <stop offset="100%" stopColor="#4A2EE8" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="32" fill="url(#c01g)" />
            <circle cx="60" cy="60" r="10" fill="#D5F25E" stroke="#14111F" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <svg viewBox="0 0 80 80" width="56" height="56">
            <defs>
              <linearGradient id="c01g2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9A85FF" />
                <stop offset="60%" stopColor="#6B4EFF" />
                <stop offset="100%" stopColor="#4A2EE8" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="32" fill="url(#c01g2)" />
            <circle cx="60" cy="60" r="10" fill="#D5F25E" stroke="#14111F" strokeWidth="2.5" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em' }}>
            <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'Newsreader, serif' }}>Mis</span>Tech<span style={{ color: '#D5F25E' }}>.</span>
          </span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">STACKED</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
          <svg viewBox="0 0 80 80" width="48" height="48">
            <circle cx="40" cy="40" r="32" fill="#6B4EFF" />
            <circle cx="60" cy="60" r="10" fill="#D5F25E" stroke="#14111F" strokeWidth="2.5" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 24, letterSpacing: '-0.03em' }}>
            <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'Newsreader, serif' }}>Mis</span>Tech<span style={{ color: '#D5F25E' }}>.</span>
          </span>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.18em', opacity: 0.55 }}>WEB · STUDIO · MG</span>
        </div>
      </div>
      <div className="la-rule" />
      <div className="la-context">
        <div className="la-favbg">
          <svg viewBox="0 0 80 80" width="44" height="44">
            <circle cx="40" cy="40" r="32" fill="#fff" opacity="0.9" />
            <circle cx="60" cy="60" r="10" fill="#D5F25E" stroke="#0A0812" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="la-mockmail">
          <div style={{ opacity: 0.55 }}>From:</div>
          <div>hello@mistech.mg</div>
        </div>
      </div>
      <p className="la-rationale">
        Le cercle = la planète, le studio, l'orbite. Le petit point lime qui pulse = "vivant, dispo". C'est déjà la direction du site — ce concept l'officialise comme logo.
      </p>
      <div className="la-foot">
        <span>★ Continuité visuelle</span>
        <span>VIOLET / LIME · GRADIENT</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 02 — Accolades de code ============ */
function Concept02() {
  return (
    <div className="logo-art">
      <h2 className="la-title">02 — Accolades de code</h2>
      <div className="la-sub">DEV · CLASSIQUE · LISIBLE</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 160 100" width="200" height="125">
            <text x="20" y="74" fontFamily="JetBrains Mono, monospace" fontSize="92" fontWeight="500" fill="#6B4EFF">{'{'}</text>
            <text x="62" y="68" fontFamily="Satoshi, sans-serif" fontSize="56" fontWeight="800" fill="#F4EFE3" letterSpacing="-0.04em">M</text>
            <text x="120" y="74" fontFamily="JetBrains Mono, monospace" fontSize="92" fontWeight="500" fill="#D5F25E">{'}'}</text>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div>
          <svg viewBox="0 0 480 80" width="360" height="60">
            <text x="0" y="60" fontFamily="JetBrains Mono, monospace" fontSize="68" fontWeight="500" fill="#6B4EFF">{'{'}</text>
            <text x="44" y="58" fontFamily="Satoshi, sans-serif" fontSize="46" fontWeight="700" fill="#F4EFE3" letterSpacing="-0.035em">
              <tspan fontStyle="italic" fontFamily="Newsreader, serif" fontWeight="400">Mis</tspan>Tech
            </text>
            <text x="320" y="60" fontFamily="JetBrains Mono, monospace" fontSize="68" fontWeight="500" fill="#D5F25E">{'}'}</text>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">MONO</div>
        <div>
          <svg viewBox="0 0 480 80" width="320" height="55">
            <text x="0" y="60" fontFamily="JetBrains Mono, monospace" fontSize="68" fontWeight="500" fill="#F4EFE3">{'{'}</text>
            <text x="44" y="58" fontFamily="Satoshi, sans-serif" fontSize="46" fontWeight="700" fill="#F4EFE3" letterSpacing="-0.035em">
              <tspan fontStyle="italic" fontFamily="Newsreader, serif" fontWeight="400">Mis</tspan>Tech
            </text>
            <text x="320" y="60" fontFamily="JetBrains Mono, monospace" fontSize="68" fontWeight="500" fill="#F4EFE3">{'}'}</text>
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <div className="la-context">
        <div className="la-favbg" style={{ background: '#14111F', boxShadow: '0 8px 20px rgba(0,0,0,0.4)' }}>
          <svg viewBox="0 0 80 80" width="56" height="56">
            <text x="6" y="62" fontFamily="JetBrains Mono, monospace" fontSize="64" fontWeight="500" fill="#6B4EFF">{'{'}</text>
            <text x="60" y="62" fontFamily="JetBrains Mono, monospace" fontSize="64" fontWeight="500" fill="#D5F25E">{'}'}</text>
          </svg>
        </div>
        <div className="la-mockmail">
          <div style={{ opacity: 0.55 }}>signature.txt</div>
          <div>{'{ Fenosoa & Brady }'}</div>
        </div>
      </div>
      <p className="la-rationale">
        Le M tient en sandwich entre une accolade violette et une lime. Très "dev" sans être cliché — la couleur asymétrique sauve le concept du déjà-vu. Marche en mono pur (impression noir et blanc, fax).
      </p>
      <div className="la-foot">
        <span>★ Clarté · dev-friendly</span>
        <span>{'{ M } · MONO + SANS'}</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 03 — Le slash forward ============ */
function Concept03() {
  return (
    <div className="logo-art">
      <h2 className="la-title">03 — Le slash forward</h2>
      <div className="la-sub">MODERNE · STUDIO · BALANCÉ</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 180 120" width="220" height="146">
            <text x="0" y="92" fontFamily="Satoshi, sans-serif" fontSize="96" fontWeight="800" fill="#F4EFE3" letterSpacing="-0.05em">M</text>
            <line x1="80" y1="14" x2="100" y2="106" stroke="#D5F25E" strokeWidth="6" strokeLinecap="round" />
            <text x="108" y="92" fontFamily="Satoshi, sans-serif" fontSize="96" fontWeight="800" fill="#6B4EFF" letterSpacing="-0.05em">T</text>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div>
          <svg viewBox="0 0 520 90" width="400" height="68">
            <text x="0" y="68" fontFamily="Satoshi, sans-serif" fontSize="60" fontWeight="700" fill="#F4EFE3" letterSpacing="-0.035em">Mis</text>
            <line x1="108" y1="14" x2="124" y2="76" stroke="#D5F25E" strokeWidth="4" strokeLinecap="round" />
            <text x="132" y="68" fontFamily="Satoshi, sans-serif" fontSize="60" fontWeight="700" fill="#6B4EFF" letterSpacing="-0.035em">Tech</text>
            <text x="290" y="50" fontFamily="JetBrains Mono, monospace" fontSize="14" fill="#F4EFE3" opacity="0.5" letterSpacing="0.2em">— web studio</text>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">LOCKUP</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 32, letterSpacing: '-0.04em', color: '#F4EFE3' }}>Mis</span>
          <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 500, fontSize: 36, color: '#D5F25E', lineHeight: 1 }}>/</span>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 32, letterSpacing: '-0.04em', color: '#6B4EFF' }}>Tech</span>
        </div>
      </div>
      <div className="la-rule" />
      <div className="la-context">
        <div className="la-favbg" style={{ background: '#0A0812', border: '1px solid rgba(244,239,227,0.1)' }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 500, fontSize: 38, color: '#D5F25E' }}>/</span>
        </div>
        <div className="la-mockmail">
          <div style={{ opacity: 0.55 }}>url:</div>
          <div>mistech.mg/projects</div>
        </div>
      </div>
      <p className="la-rationale">
        Le "/" lime divise les deux moitiés (Mis/Tech) et fait écho aux URLs, aux paths. C'est aussi le symbole du **duo** : deux moitiés liées par une diagonale. Économe, balancé, très studio moderne.
      </p>
      <div className="la-foot">
        <span>★ Lecture instantanée</span>
        <span>MIS / TECH · SLASH LIME</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 04 — Caret / balise ============ */
function Concept04() {
  return (
    <div className="logo-art">
      <h2 className="la-title">04 — Caret / balise</h2>
      <div className="la-sub">DEV · TAG · MOIN CLICHÉ</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 220 120" width="240" height="131">
            <text x="0" y="92" fontFamily="JetBrains Mono, monospace" fontSize="92" fontWeight="500" fill="#6B4EFF">{'<'}</text>
            <text x="56" y="86" fontFamily="Satoshi, sans-serif" fontSize="62" fontWeight="800" fill="#F4EFE3" letterSpacing="-0.05em">MT</text>
            <text x="158" y="92" fontFamily="JetBrains Mono, monospace" fontSize="92" fontWeight="500" fill="#6B4EFF">{'/'}</text>
            <text x="184" y="92" fontFamily="JetBrains Mono, monospace" fontSize="92" fontWeight="500" fill="#D5F25E">{'>'}</text>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div>
          <svg viewBox="0 0 560 80" width="420" height="60">
            <text x="0" y="62" fontFamily="JetBrains Mono, monospace" fontSize="58" fontWeight="500" fill="#6B4EFF">{'<'}</text>
            <text x="38" y="58" fontFamily="Satoshi, sans-serif" fontSize="46" fontWeight="700" fill="#F4EFE3" letterSpacing="-0.035em">
              <tspan fontStyle="italic" fontFamily="Newsreader, serif" fontWeight="400">Mis</tspan>Tech
            </text>
            <text x="320" y="62" fontFamily="JetBrains Mono, monospace" fontSize="58" fontWeight="500" fill="#6B4EFF">/</text>
            <text x="346" y="62" fontFamily="JetBrains Mono, monospace" fontSize="58" fontWeight="500" fill="#D5F25E">{'>'}</text>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">SHORT</div>
        <div>
          <svg viewBox="0 0 200 60" width="160" height="48">
            <text x="0" y="46" fontFamily="JetBrains Mono, monospace" fontSize="42" fontWeight="500" fill="#6B4EFF">{'</'}</text>
            <text x="46" y="44" fontFamily="Satoshi, sans-serif" fontSize="32" fontWeight="700" fill="#F4EFE3" letterSpacing="-0.03em">mistech</text>
            <text x="172" y="46" fontFamily="JetBrains Mono, monospace" fontSize="42" fontWeight="500" fill="#D5F25E">{'>'}</text>
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <div className="la-context">
        <div className="la-favbg" style={{ background: '#0A0812', border: '1px solid rgba(244,239,227,0.1)' }}>
          <svg viewBox="0 0 80 80" width="56" height="56">
            <text x="6" y="60" fontFamily="JetBrains Mono, monospace" fontSize="60" fontWeight="500" fill="#6B4EFF">{'<'}</text>
            <text x="48" y="60" fontFamily="JetBrains Mono, monospace" fontSize="60" fontWeight="500" fill="#D5F25E">{'>'}</text>
          </svg>
        </div>
        <div className="la-mockmail">
          <div style={{ opacity: 0.55 }}>html:</div>
          <div>{'<MisTech />'}</div>
        </div>
      </div>
      <p className="la-rationale">
        Référence directe aux balises HTML. Le caret ouvre en violet, ferme en lime — c'est un <strong>self-closing component</strong>. Vraiment dev, mais évite les clichés banals grâce au monogramme MT au centre.
      </p>
      <div className="la-foot">
        <span>★ Identité dev claire</span>
        <span>{'<MT /> · MONO + SANS'}</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 05 — Monogramme géométrique ============ */
function Concept05() {
  return (
    <div className="logo-art">
      <h2 className="la-title">05 — Monogramme géométrique</h2>
      <div className="la-sub">ABSTRAIT · BRAND · TIMELESS</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 140 140" width="160" height="160">
            {/* M shape — three vertical lines + diagonals */}
            <rect x="20" y="30" width="10" height="80" fill="#6B4EFF" />
            <rect x="110" y="30" width="10" height="80" fill="#6B4EFF" />
            <rect x="65" y="60" width="10" height="50" fill="#6B4EFF" />
            <path d="M 30 30 L 70 60 L 110 30" fill="none" stroke="#6B4EFF" strokeWidth="10" strokeLinejoin="miter" />
            {/* T overlay — crossbar lime */}
            <rect x="20" y="14" width="100" height="10" fill="#D5F25E" />
            {/* Center dot — focal */}
            <circle cx="70" cy="60" r="6" fill="#0A0812" stroke="#D5F25E" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <svg viewBox="0 0 140 140" width="64" height="64">
            <rect x="20" y="30" width="10" height="80" fill="#6B4EFF" />
            <rect x="110" y="30" width="10" height="80" fill="#6B4EFF" />
            <rect x="65" y="60" width="10" height="50" fill="#6B4EFF" />
            <path d="M 30 30 L 70 60 L 110 30" fill="none" stroke="#6B4EFF" strokeWidth="10" strokeLinejoin="miter" />
            <rect x="20" y="14" width="100" height="10" fill="#D5F25E" />
            <circle cx="70" cy="60" r="6" fill="#0A0812" stroke="#D5F25E" strokeWidth="2" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 42, letterSpacing: '-0.04em' }}>
            MisTech
          </span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">VARIATIONS</div>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          {/* Mono inverse */}
          <svg viewBox="0 0 140 140" width="64" height="64">
            <rect width="140" height="140" fill="#F4EFE3" rx="12" />
            <rect x="20" y="30" width="10" height="80" fill="#0A0812" />
            <rect x="110" y="30" width="10" height="80" fill="#0A0812" />
            <rect x="65" y="60" width="10" height="50" fill="#0A0812" />
            <path d="M 30 30 L 70 60 L 110 30" fill="none" stroke="#0A0812" strokeWidth="10" strokeLinejoin="miter" />
            <rect x="20" y="14" width="100" height="10" fill="#0A0812" />
            <circle cx="70" cy="60" r="6" fill="#F4EFE3" stroke="#0A0812" strokeWidth="2" />
          </svg>
          {/* Outline */}
          <svg viewBox="0 0 140 140" width="64" height="64">
            <rect x="20" y="30" width="10" height="80" fill="none" stroke="#F4EFE3" strokeWidth="2" />
            <rect x="110" y="30" width="10" height="80" fill="none" stroke="#F4EFE3" strokeWidth="2" />
            <rect x="65" y="60" width="10" height="50" fill="none" stroke="#F4EFE3" strokeWidth="2" />
            <path d="M 30 30 L 70 60 L 110 30" fill="none" stroke="#F4EFE3" strokeWidth="2" />
            <rect x="20" y="14" width="100" height="10" fill="none" stroke="#F4EFE3" strokeWidth="2" />
          </svg>
          {/* Lime fill */}
          <svg viewBox="0 0 140 140" width="64" height="64">
            <rect width="140" height="140" fill="#D5F25E" rx="12" />
            <rect x="20" y="30" width="10" height="80" fill="#0A0812" />
            <rect x="110" y="30" width="10" height="80" fill="#0A0812" />
            <rect x="65" y="60" width="10" height="50" fill="#0A0812" />
            <path d="M 30 30 L 70 60 L 110 30" fill="none" stroke="#0A0812" strokeWidth="10" strokeLinejoin="miter" />
            <rect x="20" y="14" width="100" height="10" fill="#0A0812" />
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Un M classique avec une barre de T lime posée sur le dessus — les deux initiales fusionnent. Le **petit point noir lime** au centre est l'œil du logo. Très iconique, marche dès 16px (favicon). Identifiable même rétréci.
      </p>
      <div className="la-foot">
        <span>★ Le plus identifiable</span>
        <span>M + T · GLYPHE</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 06 — Le point. (typographique pur) ============ */
function Concept06() {
  return (
    <div className="logo-art">
      <h2 className="la-title">06 — Le point.</h2>
      <div className="la-sub">TYPE-ONLY · ÉDITORIAL · CONFIANT</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 116, color: '#F4EFE3', letterSpacing: '-0.04em', lineHeight: 1 }}>
            Mis<span style={{ color: '#D5F25E' }}>.</span>
          </span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 64, letterSpacing: '-0.045em', color: '#F4EFE3', lineHeight: 1 }}>
            <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400 }}>Mis</span>Tech<span style={{ color: '#D5F25E' }}>.</span>
          </span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">SIGNATURE</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 32, letterSpacing: '-0.04em', color: '#F4EFE3', lineHeight: 1 }}>
            <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400 }}>Mis</span>Tech<span style={{ color: '#D5F25E' }}>.</span>
          </span>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#F4EFE3', opacity: 0.55, letterSpacing: '0.18em' }}>
            ── web · apps · api
          </span>
        </div>
      </div>
      <div className="la-rule" />
      <div className="la-context">
        <div className="la-favbg" style={{ background: '#0A0812', border: '1px solid rgba(244,239,227,0.1)' }}>
          <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 38, color: '#F4EFE3', letterSpacing: '-0.04em', lineHeight: 1 }}>
            M<span style={{ color: '#D5F25E' }}>.</span>
          </span>
        </div>
        <div className="la-mockmail">
          <div style={{ opacity: 0.55 }}>signed:</div>
          <div>— Mis<span style={{ color: '#D5F25E' }}>.</span></div>
        </div>
      </div>
      <p className="la-rationale">
        Pas de mark séparé. Le **point lime** EST le logo. Italique Newsreader pour "Mis", Satoshi pour "Tech", point lime final = la signature. Très éditorial, très studio "qui n'a pas besoin d'icône". Honnête sur ce qu'on est.
      </p>
      <div className="la-foot">
        <span>★ Confiance · simplicité</span>
        <span>MIS<span style={{ color: '#D5F25E' }}>.</span> · TYPE ONLY</span>
      </div>
    </div>
  );
}

window.LogoCanvas = LogoCanvas;

/* ============ CONCEPT 07 — Le curseur clignotant ============ */
function Concept07() {
  return (
    <div className="logo-art">
      <h2 className="la-title">07 — Le curseur clignotant</h2>
      <div className="la-sub">DEV · SUBTIL · VIVANT</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 400 110" width="380" height="105">
            <text x="0" y="84" fontFamily="Satoshi, sans-serif" fontSize="92" fontWeight="800" fill="#F4EFE3" letterSpacing="-0.05em">
              <tspan fontFamily="Newsreader, serif" fontStyle="italic" fontWeight="400">Mis</tspan>
            </text>
            <rect x="138" y="20" width="9" height="74" fill="#D5F25E">
              <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.5;0.51;1" dur="1.1s" repeatCount="indefinite" />
            </rect>
            <text x="160" y="84" fontFamily="Satoshi, sans-serif" fontSize="92" fontWeight="800" fill="#6B4EFF" letterSpacing="-0.05em">Tech</text>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">LOCKUP</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 48, color: '#F4EFE3' }}>Mis</span>
          <span style={{ display: 'inline-block', width: 4, height: 38, background: '#D5F25E', margin: '0 2px', animation: 'blink 1.1s steps(1) infinite' }} />
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 48, color: '#6B4EFF', letterSpacing: '-0.04em' }}>Tech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">PROMPT</div>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 22, color: '#D5F25E' }}>
          $ mistech<span style={{ background: '#D5F25E', color: '#0A0812', padding: '0 4px', marginLeft: 4, animation: 'blink 1.1s steps(1) infinite' }}>_</span>
        </div>
      </div>
      <div className="la-rule" />
      <div className="la-context">
        <div className="la-favbg" style={{ background: '#0A0812', border: '1px solid rgba(244,239,227,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 30, color: '#F4EFE3', letterSpacing: '-0.04em' }}>M</span>
            <span style={{ display: 'inline-block', width: 3, height: 22, background: '#D5F25E' }} />
            <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 30, color: '#6B4EFF', letterSpacing: '-0.04em' }}>T</span>
          </div>
        </div>
        <div className="la-mockmail">
          <div style={{ opacity: 0.55 }}>terminal:</div>
          <div>~/mistech<span style={{ color: '#D5F25E' }}>_</span></div>
        </div>
      </div>
      <p className="la-rationale">
        Une barre lime clignotante remplace la séparation entre "Mis" et "Tech" — c'est un curseur de terminal. Subtil, vivant sans être bruyant. Évoque "ce qu'on tape, ce qu'on construit" sans l'imagerie cliché du code.
      </p>
      <div className="la-foot">
        <span>★ Mouvement intrinsèque</span>
        <span>MIS|TECH · CARET LIME</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 08 — Signal radial ============ */
function Concept08() {
  return (
    <div className="logo-art">
      <h2 className="la-title">08 — Signal radial</h2>
      <div className="la-sub">SYMBOLIQUE · ÉMISSION · OUVERT</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 160 160" width="160" height="160">
            <circle cx="80" cy="80" r="72" fill="none" stroke="#6B4EFF" strokeWidth="1.5" opacity="0.25" />
            <circle cx="80" cy="80" r="56" fill="none" stroke="#6B4EFF" strokeWidth="2" opacity="0.45" strokeDasharray="3 4" />
            <circle cx="80" cy="80" r="40" fill="none" stroke="#6B4EFF" strokeWidth="2.5" opacity="0.7" />
            <circle cx="80" cy="80" r="24" fill="#6B4EFF" />
            <circle cx="80" cy="80" r="8" fill="#D5F25E" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 160 160" width="68" height="68">
            <circle cx="80" cy="80" r="72" fill="none" stroke="#6B4EFF" strokeWidth="1.5" opacity="0.25" />
            <circle cx="80" cy="80" r="56" fill="none" stroke="#6B4EFF" strokeWidth="2" opacity="0.45" strokeDasharray="3 4" />
            <circle cx="80" cy="80" r="40" fill="none" stroke="#6B4EFF" strokeWidth="2.5" opacity="0.7" />
            <circle cx="80" cy="80" r="24" fill="#6B4EFF" />
            <circle cx="80" cy="80" r="8" fill="#D5F25E" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>
            <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'Newsreader, serif' }}>Mis</span>Tech
          </span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">PULSE</div>
        <div>
          <svg viewBox="0 0 200 100" width="220" height="110">
            <circle cx="50" cy="50" r="44" fill="none" stroke="#6B4EFF" strokeWidth="1.5" opacity="0.2">
              <animate attributeName="r" values="20;44;44" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="32" fill="none" stroke="#6B4EFF" strokeWidth="2" opacity="0.4">
              <animate attributeName="r" values="14;32;32" dur="2s" begin="0.3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0;0" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="14" fill="#6B4EFF" />
            <circle cx="50" cy="50" r="5" fill="#D5F25E" />
            <text x="106" y="58" fontFamily="JetBrains Mono" fontSize="13" fill="#F4EFE3" opacity="0.6" letterSpacing="0.16em">— LIVE · DISPO</text>
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Trois cercles concentriques émanent d'un cœur lime — c'est un signal qu'on émet, une onde, une transmission. Métaphore parfaite pour un studio web qui "envoie" des produits. Anime naturellement.
      </p>
      <div className="la-foot">
        <span>★ Métaphore forte</span>
        <span>SIGNAL · ÉMISSION</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 09 — Esperluette Mis&Tech ============ */
function Concept09() {
  return (
    <div className="logo-art">
      <h2 className="la-title">09 — L'esperluette</h2>
      <div className="la-sub">INTELLIGENT · LITTÉRAIRE · DUAL</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 140, color: '#D5F25E', letterSpacing: '-0.03em', lineHeight: 1 }}>
            &amp;
          </span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 58, color: '#F4EFE3', letterSpacing: '-0.02em' }}>Mis</span>
          <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 68, color: '#D5F25E', letterSpacing: '-0.03em', lineHeight: 1 }}>&amp;</span>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 58, color: '#6B4EFF', letterSpacing: '-0.04em' }}>Tech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">RATIONNEL</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, opacity: 0.5, letterSpacing: '0.16em' }}>EN FR · "ET" = TECH</span>
          <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: 18, color: '#F4EFE3', opacity: 0.85 }}>
            "Mis & Tech" — le <strong style={{ fontWeight: 600 }}>&amp;</strong> dit "et", qui sonne comme la première syllabe de "Tech".
          </span>
        </div>
      </div>
      <div className="la-rule" />
      <div className="la-context">
        <div className="la-favbg" style={{ background: '#0A0812', border: '1px solid rgba(244,239,227,0.1)' }}>
          <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 52, color: '#D5F25E', lineHeight: 1 }}>&amp;</span>
        </div>
        <div className="la-mockmail">
          <div style={{ opacity: 0.55 }}>signed:</div>
          <div>— Fenosoa <span style={{ color: '#D5F25E' }}>&amp;</span> Brady</div>
        </div>
      </div>
      <p className="la-rationale">
        L'esperluette EST le logo. Sonore : "ET" en français → "Tech". Symboliquement : le lien entre les deux personnes du duo. Visuellement : un glyphe italique riche, calligraphique. Le mark = juste l'&.
      </p>
      <div className="la-foot">
        <span>★ Intelligent · jeu de mots</span>
        <span>MIS &amp; TECH · LIME GLYPH</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 10 — Chip / SoC ============ */
function Concept10() {
  return (
    <div className="logo-art">
      <h2 className="la-title">10 — Chip / SoC</h2>
      <div className="la-sub">HARDWARE · INDUSTRIEL · ICONIQUE</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 160 160" width="160" height="160">
            {/* Pins */}
            {[0, 1, 2, 3, 4].map(i => (
              <rect key={'t' + i} x={32 + i * 22} y="6" width="10" height="14" fill="#6B4EFF" rx="1" />
            ))}
            {[0, 1, 2, 3, 4].map(i => (
              <rect key={'b' + i} x={32 + i * 22} y="140" width="10" height="14" fill="#6B4EFF" rx="1" />
            ))}
            {[0, 1, 2, 3, 4].map(i => (
              <rect key={'l' + i} x="6" y={32 + i * 22} width="14" height="10" fill="#6B4EFF" rx="1" />
            ))}
            {[0, 1, 2, 3, 4].map(i => (
              <rect key={'r' + i} x="140" y={32 + i * 22} width="14" height="10" fill="#6B4EFF" rx="1" />
            ))}
            {/* Chip body */}
            <rect x="20" y="20" width="120" height="120" fill="#14111F" stroke="#6B4EFF" strokeWidth="2" rx="8" />
            {/* Label MT */}
            <text x="80" y="92" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="42" fill="#F4EFE3" letterSpacing="-0.04em">MT</text>
            {/* Lime accent dot — orientation marker like real chips */}
            <circle cx="36" cy="36" r="5" fill="#D5F25E" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 160 160" width="60" height="60">
            {[0, 1, 2, 3, 4].map(i => (
              <rect key={'t' + i} x={32 + i * 22} y="6" width="10" height="14" fill="#6B4EFF" rx="1" />
            ))}
            {[0, 1, 2, 3, 4].map(i => (
              <rect key={'b' + i} x={32 + i * 22} y="140" width="10" height="14" fill="#6B4EFF" rx="1" />
            ))}
            {[0, 1, 2, 3, 4].map(i => (
              <rect key={'l' + i} x="6" y={32 + i * 22} width="14" height="10" fill="#6B4EFF" rx="1" />
            ))}
            {[0, 1, 2, 3, 4].map(i => (
              <rect key={'r' + i} x="140" y={32 + i * 22} width="14" height="10" fill="#6B4EFF" rx="1" />
            ))}
            <rect x="20" y="20" width="120" height="120" fill="#14111F" stroke="#6B4EFF" strokeWidth="2" rx="8" />
            <text x="80" y="92" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="42" fill="#F4EFE3" letterSpacing="-0.04em">MT</text>
            <circle cx="36" cy="36" r="5" fill="#D5F25E" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>
            MisTech
          </span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">DETAIL</div>
        <div>
          <svg viewBox="0 0 240 80" width="220" height="73">
            <rect x="10" y="20" width="220" height="40" fill="#14111F" stroke="#6B4EFF" strokeWidth="1.5" rx="4" />
            {[0,1,2,3,4,5,6,7].map(i => <rect key={'pt'+i} x={26 + i * 26} y="6" width="8" height="14" fill="#6B4EFF" />)}
            {[0,1,2,3,4,5,6,7].map(i => <rect key={'pb'+i} x={26 + i * 26} y="60" width="8" height="14" fill="#6B4EFF" />)}
            <text x="120" y="46" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="600" fontSize="13" fill="#D5F25E" letterSpacing="0.18em">MIS·TECH·V2</text>
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Un vrai chip électronique, vu du dessus — 20 pins violets, corps sombre, étiquette "MT" centrée, point lime d'orientation (comme tout vrai composant). Tactile, industriel, immédiatement reconnaissable comme "hardware/tech".
      </p>
      <div className="la-foot">
        <span>★ Le plus original</span>
        <span>CHIP · MT · V2</span>
      </div>
    </div>
  );
}

window.LogoCanvas = LogoCanvas;

/* ============ CONCEPT 11 — Ligature MT fusionné ============ */
function Concept11() {
  return (
    <div className="logo-art">
      <h2 className="la-title">11 — Ligature MT</h2>
      <div className="la-sub">FUSIONNÉ · SCULPTURAL · UNIQUE</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 180 160" width="190" height="170">
            <rect x="20" y="40" width="14" height="100" fill="#6B4EFF" />
            <rect x="78" y="80" width="14" height="60" fill="#6B4EFF" />
            <path d="M 34 40 L 85 80 L 136 40 L 136 60 L 85 100 L 34 60 Z" fill="#6B4EFF" />
            <rect x="60" y="22" width="80" height="14" fill="#D5F25E" />
            <rect x="93" y="36" width="14" height="44" fill="#D5F25E" />
            <circle cx="100" cy="58" r="5" fill="#0A0812" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 180 160" width="68" height="60">
            <rect x="20" y="40" width="14" height="100" fill="#6B4EFF" />
            <rect x="78" y="80" width="14" height="60" fill="#6B4EFF" />
            <path d="M 34 40 L 85 80 L 136 40 L 136 60 L 85 100 L 34 60 Z" fill="#6B4EFF" />
            <rect x="60" y="22" width="80" height="14" fill="#D5F25E" />
            <rect x="93" y="36" width="14" height="44" fill="#D5F25E" />
            <circle cx="100" cy="58" r="5" fill="#0A0812" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Le M violet et le T lime partagent leur jambe centrale — ils ne sont pas posés côte à côte, ils sont fusionnés. Une seule lettre composée à partir de deux. Sculptural, plus unique que le 05.
      </p>
      <div className="la-foot">
        <span>★ Fusion ≠ juxtaposition</span>
        <span>M+T · LIGATURE</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 12 — Mis+Tech (plus) ============ */
function Concept12() {
  return (
    <div className="logo-art">
      <h2 className="la-title">12 — Mis<span style={{color:'#D5F25E'}}>+</span>Tech</h2>
      <div className="la-sub">PARTENARIAT · ADDITION · CLAIR</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 120 120" width="140" height="140">
            <rect x="50" y="20" width="20" height="80" fill="#D5F25E" rx="2" />
            <rect x="20" y="50" width="80" height="20" fill="#D5F25E" rx="2" />
            <circle cx="60" cy="60" r="9" fill="#0A0812" />
            <circle cx="60" cy="60" r="3.5" fill="#6B4EFF" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 56, color: '#F4EFE3' }}>Mis</span>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 48, color: '#D5F25E', margin: '0 6px', lineHeight: 1 }}>+</span>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 56, color: '#6B4EFF', letterSpacing: '-0.04em' }}>Tech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">PROOF</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, opacity: 0.55, letterSpacing: '0.18em' }}>FENOSOA + BRADY = MISTECH</span>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, opacity: 0.55, letterSpacing: '0.18em' }}>DESIGN + DEV = PRODUIT</span>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, opacity: 0.55, letterSpacing: '0.18em' }}>FRONT + BACK = STACK</span>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Un grand plus lime, simple, mathématique. Symbolise l'addition (Fenosoa+Brady, design+dev, front+back). Petit point central qui fait l'œil. Universel, immédiatement compris, marche à toute taille.
      </p>
      <div className="la-foot">
        <span>★ Lecture instantanée</span>
        <span>MIS + TECH · PARTNERSHIP</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 13 — Lemniscate / boucle ============ */
function Concept13() {
  return (
    <div className="logo-art">
      <h2 className="la-title">13 — Boucle entrelacée</h2>
      <div className="la-sub">DUO · INFINI · ORGANIQUE</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 200 110" width="220" height="121">
            <path d="M 50 55 C 50 25, 95 25, 95 55 C 95 85, 50 85, 50 55 Z" fill="none" stroke="#6B4EFF" strokeWidth="10" strokeLinecap="round" />
            <path d="M 105 55 C 105 25, 150 25, 150 55 C 150 85, 105 85, 105 55 Z" fill="none" stroke="#D5F25E" strokeWidth="10" strokeLinecap="round" />
            <circle cx="100" cy="55" r="6" fill="#F4EFE3" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 200 110" width="88" height="48">
            <path d="M 50 55 C 50 25, 95 25, 95 55 C 95 85, 50 85, 50 55 Z" fill="none" stroke="#6B4EFF" strokeWidth="10" strokeLinecap="round" />
            <path d="M 105 55 C 105 25, 150 25, 150 55 C 150 85, 105 85, 105 55 Z" fill="none" stroke="#D5F25E" strokeWidth="10" strokeLinecap="round" />
            <circle cx="100" cy="55" r="6" fill="#F4EFE3" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>
            <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'Newsreader, serif' }}>Mis</span>Tech
          </span>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Deux boucles s'entrelacent — la violette à gauche (Fenosoa, design), la lime à droite (Brady, dev). Un petit point clair fait le nœud central. C'est un infini (∞) bicolore qui dit "duo, perpétuel".
      </p>
      <div className="la-foot">
        <span>★ Métaphore du duo</span>
        <span>∞ · MIS · TECH</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 14 — Sceau circulaire ============ */
function Concept14() {
  return (
    <div className="logo-art">
      <h2 className="la-title">14 — Sceau circulaire</h2>
      <div className="la-sub">EMBLÈME · ARTISANAL · CERTIFIÉ</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="-100 -100 200 200" width="180" height="180">
            <defs>
              <path id="c14path" d="M 0 0 m -78 0 a 78 78 0 1 1 156 0 a 78 78 0 1 1 -156 0" />
            </defs>
            <circle cx="0" cy="0" r="90" fill="none" stroke="#6B4EFF" strokeWidth="2" />
            <circle cx="0" cy="0" r="78" fill="none" stroke="#6B4EFF" strokeWidth="1" strokeDasharray="2 3" />
            <circle cx="0" cy="0" r="60" fill="#6B4EFF" />
            <text x="0" y="8" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="44" fill="#F4EFE3" letterSpacing="-0.04em">MT</text>
            <text fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" fill="#D5F25E" letterSpacing="3">
              <textPath href="#c14path" startOffset="3%">MISTECH · WEB STUDIO · EST. 2025 · MISTECH · WEB STUDIO · EST. 2025 · </textPath>
            </text>
            <circle cx="0" cy="-66" r="3" fill="#D5F25E" />
            <circle cx="0" cy="66" r="3" fill="#D5F25E" />
            <circle cx="-66" cy="0" r="3" fill="#D5F25E" />
            <circle cx="66" cy="0" r="3" fill="#D5F25E" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="-100 -100 200 200" width="68" height="68">
            <defs>
              <path id="c14path2" d="M 0 0 m -78 0 a 78 78 0 1 1 156 0 a 78 78 0 1 1 -156 0" />
            </defs>
            <circle cx="0" cy="0" r="90" fill="none" stroke="#6B4EFF" strokeWidth="2" />
            <circle cx="0" cy="0" r="78" fill="none" stroke="#6B4EFF" strokeWidth="1" strokeDasharray="2 3" />
            <circle cx="0" cy="0" r="60" fill="#6B4EFF" />
            <text x="0" y="8" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="44" fill="#F4EFE3" letterSpacing="-0.04em">MT</text>
            <text fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" fill="#D5F25E" letterSpacing="3">
              <textPath href="#c14path2" startOffset="3%">MISTECH · WEB STUDIO · </textPath>
            </text>
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Un emblème circulaire avec "MT" au centre, texte mono lime tournant à la périphérie ("MISTECH · WEB STUDIO · EST. 2025") et 4 points lime aux cardinaux. Style sceau / blason / certification — c'est un tampon de qualité. Très "studio artisanal".
      </p>
      <div className="la-foot">
        <span>★ Le plus "marqué"</span>
        <span>SCEAU · MT · EST.2025</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 15 — Pixel MT (LED dot-matrix) ============ */
function Concept15() {
  // 7x5 letter grids for M and T
  const M = [
    [1,0,0,0,1],
    [1,1,0,1,1],
    [1,0,1,0,1],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1]
  ];
  const T = [
    [1,1,1,1,1],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0]
  ];
  const renderGrid = (grid, color) => grid.flatMap((row, ry) =>
    row.map((on, cx) => (
      <rect key={ry+'-'+cx} x={cx * 12} y={ry * 12} width="10" height="10" rx="2"
        fill={on ? color : 'rgba(244,239,227,0.06)'} />
    ))
  );
  return (
    <div className="logo-art">
      <h2 className="la-title">15 — Pixel MT</h2>
      <div className="la-sub">DOT-MATRIX · LED · TECHNIQUE</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 156 84" width="200" height="108">
            <g>{renderGrid(M, '#6B4EFF')}</g>
            <g transform="translate(84 0)">{renderGrid(T, '#D5F25E')}</g>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <svg viewBox="0 0 156 84" width="84" height="46">
            <g>{renderGrid(M, '#6B4EFF')}</g>
            <g transform="translate(84 0)">{renderGrid(T, '#D5F25E')}</g>
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 36, color: '#F4EFE3', letterSpacing: '-0.04em' }}>MisTech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">FAVICON</div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {[40, 28, 18].map((s, i) => (
            <div key={i} style={{ width: s, height: s, background: '#0A0812', borderRadius: 4, padding: 2, display: 'grid', placeItems: 'center' }}>
              <svg viewBox="0 0 156 84" width={s - 4} height={(s - 4) * (84/156)}>
                <g>{renderGrid(M, '#6B4EFF')}</g>
                <g transform="translate(84 0)">{renderGrid(T, '#D5F25E')}</g>
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Les deux lettres en grille 7×5 dot-matrix — comme un afficheur LED de console rétro ou de gare. Pixels vivants, technique, immédiatement lisible. Échelle propre jusqu'au 16px favicon (chaque pixel reste distinct).
      </p>
      <div className="la-foot">
        <span>★ Bitmap-friendly</span>
        <span>7×5 · LED · MT</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 16 — Iso block ============ */
function Concept16() {
  return (
    <div className="logo-art">
      <h2 className="la-title">16 — Bloc isométrique</h2>
      <div className="la-sub">3D · VOLUME · ARCHITECTURÉ</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 200 200" width="200" height="200">
            <polygon points="100,30 170,70 100,110 30,70" fill="#D5F25E" />
            <polygon points="100,110 170,70 170,150 100,190" fill="#6B4EFF" />
            <polygon points="100,110 30,70 30,150 100,190" fill="#4A2EE8" />
            <text x="80" y="78" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="32" fill="#0A0812" letterSpacing="-0.04em">MT</text>
            <line x1="100" y1="110" x2="100" y2="190" stroke="#0A0812" strokeWidth="1.5" opacity="0.4" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 200 200" width="68" height="68">
            <polygon points="100,30 170,70 100,110 30,70" fill="#D5F25E" />
            <polygon points="100,110 170,70 170,150 100,190" fill="#6B4EFF" />
            <polygon points="100,110 30,70 30,150 100,190" fill="#4A2EE8" />
            <line x1="100" y1="110" x2="100" y2="190" stroke="#0A0812" strokeWidth="1.5" opacity="0.4" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">FACES</div>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#F4EFE3', opacity: 0.7, lineHeight: 1.7 }}>
          → top : lime (concept · design)<br />
          → right : violet (système · code)<br />
          → left : violet-deep (foundations)
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Un cube isométrique tricolore : la face lime au-dessus (concept), violet à droite (code), violet-deep à gauche (fondations). Volume, profondeur, sensation d'objet "construit". Marche bien en 3D, projection plate, ou wireframe.
      </p>
      <div className="la-foot">
        <span>★ Volume + structure</span>
        <span>ISO · MT · CUBE</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 17 — Negative space ============ */
function Concept17() {
  return (
    <div className="logo-art">
      <h2 className="la-title">17 — Espace négatif</h2>
      <div className="la-sub">SUBTIL · INTELLIGENT · BRAND</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 160 160" width="180" height="180">
            <defs>
              <mask id="c17mask">
                <rect width="160" height="160" fill="white" />
                <path d="M 38 50 L 38 110 M 38 50 L 64 80 L 90 50 M 90 50 L 90 110 M 122 50 L 122 110 M 102 50 L 142 50" stroke="black" strokeWidth="10" strokeLinecap="square" fill="none" />
              </mask>
            </defs>
            <circle cx="80" cy="80" r="68" fill="#6B4EFF" mask="url(#c17mask)" />
            <circle cx="80" cy="80" r="68" fill="none" stroke="#D5F25E" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 160 160" width="64" height="64">
            <defs>
              <mask id="c17mask2">
                <rect width="160" height="160" fill="white" />
                <path d="M 38 50 L 38 110 M 38 50 L 64 80 L 90 50 M 90 50 L 90 110 M 122 50 L 122 110 M 102 50 L 142 50" stroke="black" strokeWidth="10" strokeLinecap="square" fill="none" />
              </mask>
            </defs>
            <circle cx="80" cy="80" r="68" fill="#6B4EFF" mask="url(#c17mask2)" />
            <circle cx="80" cy="80" r="68" fill="none" stroke="#D5F25E" strokeWidth="2" opacity="0.5" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">VARIATIONS</div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          {/* Squircle version */}
          <svg viewBox="0 0 160 160" width="64" height="64">
            <defs>
              <mask id="c17mask3">
                <rect width="160" height="160" fill="white" />
                <path d="M 38 50 L 38 110 M 38 50 L 64 80 L 90 50 M 90 50 L 90 110 M 122 50 L 122 110 M 102 50 L 142 50" stroke="black" strokeWidth="10" strokeLinecap="square" fill="none" />
              </mask>
            </defs>
            <rect x="12" y="12" width="136" height="136" rx="24" fill="#D5F25E" mask="url(#c17mask3)" />
          </svg>
          {/* Outline-only */}
          <svg viewBox="0 0 160 160" width="64" height="64">
            <circle cx="80" cy="80" r="68" fill="none" stroke="#F4EFE3" strokeWidth="2" />
            <path d="M 38 50 L 38 110 M 38 50 L 64 80 L 90 50 M 90 50 L 90 110 M 122 50 L 122 110 M 102 50 L 142 50" stroke="#F4EFE3" strokeWidth="8" strokeLinecap="square" fill="none" />
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Un disque violet plein où les lettres MT sont en espace négatif (le fond passe à travers). Le cercle est entouré d'un fin liseré lime. Style très tech-corporate (Nest, Slack, Notion) — sobre, distinctif, scalable.
      </p>
      <div className="la-foot">
        <span>★ Mature · scalable</span>
        <span>MT · NEGATIVE</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 18 — Diamond MT ============ */
function Concept18() {
  return (
    <div className="logo-art">
      <h2 className="la-title">18 — Diamant MT</h2>
      <div className="la-sub">ANGULAIRE · PRÉCIEUX · COMPACT</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 160 160" width="180" height="180">
            <rect x="40" y="40" width="80" height="80" fill="#6B4EFF" transform="rotate(45 80 80)" />
            <text x="80" y="92" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="40" fill="#F4EFE3" letterSpacing="-0.04em" transform="rotate(0 80 80)">MT</text>
            <circle cx="80" cy="24" r="4" fill="#D5F25E" />
            <circle cx="136" cy="80" r="4" fill="#D5F25E" />
            <circle cx="80" cy="136" r="4" fill="#D5F25E" />
            <circle cx="24" cy="80" r="4" fill="#D5F25E" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 160 160" width="60" height="60">
            <rect x="40" y="40" width="80" height="80" fill="#6B4EFF" transform="rotate(45 80 80)" />
            <text x="80" y="92" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="40" fill="#F4EFE3" letterSpacing="-0.04em">MT</text>
            <circle cx="80" cy="24" r="4" fill="#D5F25E" />
            <circle cx="136" cy="80" r="4" fill="#D5F25E" />
            <circle cx="80" cy="136" r="4" fill="#D5F25E" />
            <circle cx="24" cy="80" r="4" fill="#D5F25E" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">SOLID</div>
        <div style={{ display: 'flex', gap: 14 }}>
          <svg viewBox="0 0 160 160" width="60" height="60">
            <rect x="40" y="40" width="80" height="80" fill="#D5F25E" transform="rotate(45 80 80)" />
            <text x="80" y="92" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="40" fill="#0A0812" letterSpacing="-0.04em">MT</text>
          </svg>
          <svg viewBox="0 0 160 160" width="60" height="60">
            <rect x="40" y="40" width="80" height="80" fill="none" stroke="#F4EFE3" strokeWidth="3" transform="rotate(45 80 80)" />
            <text x="80" y="92" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="40" fill="#F4EFE3" letterSpacing="-0.04em">MT</text>
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Un carré violet pivoté à 45° forme un diamant — MT centré en blanc. Quatre points lime aux quatre pointes marquent les cardinaux (N/S/E/O). Iconographie "pierre précieuse" qui dit "qualité, durabilité". Très tatouage-able.
      </p>
      <div className="la-foot">
        <span>★ Géométrique · iconique</span>
        <span>◆ · MT · DIAMOND</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 19 — Wireframe / blueprint ============ */
function Concept19() {
  return (
    <div className="logo-art">
      <h2 className="la-title">19 — Wireframe</h2>
      <div className="la-sub">BLUEPRINT · ARCHITECTURÉ · TECHNIQUE</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 200 160" width="220" height="176">
            {/* construction guides */}
            <line x1="20" y1="40" x2="180" y2="40" stroke="#6B4EFF" strokeWidth="0.5" opacity="0.35" strokeDasharray="2 3" />
            <line x1="20" y1="130" x2="180" y2="130" stroke="#6B4EFF" strokeWidth="0.5" opacity="0.35" strokeDasharray="2 3" />
            <line x1="30" y1="20" x2="30" y2="140" stroke="#6B4EFF" strokeWidth="0.5" opacity="0.25" strokeDasharray="2 3" />
            <line x1="170" y1="20" x2="170" y2="140" stroke="#6B4EFF" strokeWidth="0.5" opacity="0.25" strokeDasharray="2 3" />
            {/* M outline */}
            <path d="M 30 130 L 30 40 L 65 80 L 100 40 L 100 130" fill="none" stroke="#6B4EFF" strokeWidth="3" strokeLinejoin="miter" />
            {/* T outline */}
            <line x1="110" y1="40" x2="170" y2="40" stroke="#6B4EFF" strokeWidth="3" strokeLinecap="round" />
            <line x1="140" y1="40" x2="140" y2="130" stroke="#6B4EFF" strokeWidth="3" strokeLinecap="round" />
            {/* node dots at corners */}
            <circle cx="30" cy="40" r="3" fill="#D5F25E" />
            <circle cx="100" cy="40" r="3" fill="#D5F25E" />
            <circle cx="65" cy="80" r="3" fill="#D5F25E" />
            <circle cx="30" cy="130" r="3" fill="#D5F25E" />
            <circle cx="100" cy="130" r="3" fill="#D5F25E" />
            <circle cx="110" cy="40" r="3" fill="#D5F25E" />
            <circle cx="170" cy="40" r="3" fill="#D5F25E" />
            <circle cx="140" cy="130" r="3" fill="#D5F25E" />
            {/* measurement tick */}
            <text x="100" y="158" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#F4EFE3" opacity="0.4" letterSpacing="2">— 160 ×120 —</text>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 200 160" width="80" height="64">
            <path d="M 30 130 L 30 40 L 65 80 L 100 40 L 100 130" fill="none" stroke="#6B4EFF" strokeWidth="3" strokeLinejoin="miter" />
            <line x1="110" y1="40" x2="170" y2="40" stroke="#6B4EFF" strokeWidth="3" strokeLinecap="round" />
            <line x1="140" y1="40" x2="140" y2="130" stroke="#6B4EFF" strokeWidth="3" strokeLinecap="round" />
            <circle cx="30" cy="40" r="3" fill="#D5F25E" />
            <circle cx="100" cy="40" r="3" fill="#D5F25E" />
            <circle cx="65" cy="80" r="3" fill="#D5F25E" />
            <circle cx="30" cy="130" r="3" fill="#D5F25E" />
            <circle cx="100" cy="130" r="3" fill="#D5F25E" />
            <circle cx="110" cy="40" r="3" fill="#D5F25E" />
            <circle cx="170" cy="40" r="3" fill="#D5F25E" />
            <circle cx="140" cy="130" r="3" fill="#D5F25E" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Les lettres M et T tracées en wireframe — chaque sommet est marqué d'un nœud lime, lignes de construction pointillées en arrière. C'est un blueprint d'architecte / un schéma CAD. Très "on construit".
      </p>
      <div className="la-foot">
        <span>★ Architecturé · CAD</span>
        <span>MT · WIREFRAME</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 20 — Connection node ============ */
function Concept20() {
  return (
    <div className="logo-art">
      <h2 className="la-title">20 — Nœuds liés</h2>
      <div className="la-sub">RÉSEAU · DUO · MODULAIRE</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 240 120" width="240" height="120">
            {/* connection line */}
            <line x1="60" y1="60" x2="180" y2="60" stroke="#D5F25E" strokeWidth="4" strokeLinecap="round" />
            <circle cx="120" cy="60" r="6" fill="#D5F25E" />
            {/* node M */}
            <circle cx="60" cy="60" r="36" fill="#6B4EFF" />
            <text x="60" y="71" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="28" fill="#F4EFE3">M</text>
            {/* node T */}
            <circle cx="180" cy="60" r="36" fill="none" stroke="#6B4EFF" strokeWidth="3" />
            <text x="180" y="71" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="28" fill="#6B4EFF">T</text>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 240 120" width="100" height="50">
            <line x1="60" y1="60" x2="180" y2="60" stroke="#D5F25E" strokeWidth="4" strokeLinecap="round" />
            <circle cx="120" cy="60" r="6" fill="#D5F25E" />
            <circle cx="60" cy="60" r="36" fill="#6B4EFF" />
            <text x="60" y="71" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="28" fill="#F4EFE3">M</text>
            <circle cx="180" cy="60" r="36" fill="none" stroke="#6B4EFF" strokeWidth="3" />
            <text x="180" y="71" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="28" fill="#6B4EFF">T</text>
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">MULTI</div>
        <div>
          <svg viewBox="0 0 280 120" width="240" height="103">
            <line x1="40" y1="60" x2="140" y2="60" stroke="#D5F25E" strokeWidth="3" strokeLinecap="round" />
            <line x1="140" y1="60" x2="240" y2="60" stroke="#D5F25E" strokeWidth="3" strokeLinecap="round" />
            <line x1="140" y1="60" x2="140" y2="20" stroke="#D5F25E" strokeWidth="3" strokeLinecap="round" />
            <circle cx="40" cy="60" r="20" fill="#6B4EFF" />
            <text x="40" y="66" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="14" fill="#F4EFE3">F</text>
            <circle cx="140" cy="60" r="22" fill="#0A0812" stroke="#D5F25E" strokeWidth="2" />
            <text x="140" y="66" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="14" fill="#D5F25E">MT</text>
            <circle cx="240" cy="60" r="20" fill="none" stroke="#6B4EFF" strokeWidth="3" />
            <text x="240" y="66" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="14" fill="#6B4EFF">B</text>
            <circle cx="140" cy="20" r="14" fill="#9A85FF" />
            <text x="140" y="25" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="10" fill="#0A0812">CLIENT</text>
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Deux nœuds (M plein violet, T outline) reliés par une ligne lime avec un connecteur central. Référence directe aux **diagrammes d'architecture, réseaux, API**. Le marque peut s'étendre à 3+ nœuds pour montrer F (Fenosoa) + B (Brady) + MT central.
      </p>
      <div className="la-foot">
        <span>★ Système · diagramme</span>
        <span>● —— ◯ · MT NETWORK</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 21 — Stencil ============ */
function Concept21() {
  return (
    <div className="logo-art">
      <h2 className="la-title">21 — Stencil</h2>
      <div className="la-sub">INDUSTRIEL · BRUT · CONFIANT</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 220 130" width="240" height="142">
            {/* M with stencil gaps */}
            <g fill="#6B4EFF">
              <rect x="10" y="20" width="22" height="90" />
              <rect x="60" y="20" width="22" height="90" />
              <polygon points="32,20 32,38 46,55 60,38 60,20" />
              <polygon points="32,55 46,55 60,55 60,75 46,75 32,75" />
            </g>
            {/* T */}
            <g fill="#D5F25E">
              <rect x="100" y="20" width="100" height="22" />
              {/* stencil gap in crossbar */}
              <rect x="140" y="20" width="6" height="22" fill="#14111F" />
              <rect x="155" y="20" width="6" height="22" fill="#14111F" />
              <rect x="140" y="42" width="22" height="68" />
              <rect x="140" y="62" width="22" height="6" fill="#14111F" />
              <rect x="140" y="85" width="22" height="6" fill="#14111F" />
            </g>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 220 130" width="84" height="50">
            <g fill="#6B4EFF">
              <rect x="10" y="20" width="22" height="90" />
              <rect x="60" y="20" width="22" height="90" />
              <polygon points="32,20 32,38 46,55 60,38 60,20" />
              <polygon points="32,55 46,55 60,55 60,75 46,75 32,75" />
            </g>
            <g fill="#D5F25E">
              <rect x="100" y="20" width="100" height="22" />
              <rect x="140" y="20" width="6" height="22" fill="#14111F" />
              <rect x="155" y="20" width="6" height="22" fill="#14111F" />
              <rect x="140" y="42" width="22" height="68" />
              <rect x="140" y="62" width="22" height="6" fill="#14111F" />
              <rect x="140" y="85" width="22" height="6" fill="#14111F" />
            </g>
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Lettres au pochoir avec des ponts de découpe (les espaces du stencil militaire / cargo). Aspect brut, manufacturier, pas-de-bullshit. Très distinct des autres logos studio, et ça donne du caractère au mark.
      </p>
      <div className="la-foot">
        <span>★ Brut · industriel</span>
        <span>MT · STENCIL</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 22 — Knot fusion ============ */
function Concept22() {
  return (
    <div className="logo-art">
      <h2 className="la-title">22 — Nœud entrelacé</h2>
      <div className="la-sub">FUSION · LIÉ · INFINI</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 200 200" width="200" height="200">
            {/* M shape — path that intertwines */}
            <path d="M 40 160 L 40 60 L 75 100 L 100 60" fill="none" stroke="#6B4EFF" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            {/* T shape — crosses through */}
            <path d="M 60 40 L 160 40" fill="none" stroke="#D5F25E" strokeWidth="14" strokeLinecap="round" />
            <path d="M 110 40 L 110 100 L 100 130 L 130 160" fill="none" stroke="#D5F25E" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            {/* M continues, weaving */}
            <path d="M 100 60 L 100 160" fill="none" stroke="#6B4EFF" strokeWidth="14" strokeLinecap="round" />
            {/* over/under indicator */}
            <circle cx="100" cy="100" r="6" fill="#0A0812" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 200 200" width="64" height="64">
            <path d="M 40 160 L 40 60 L 75 100 L 100 60" fill="none" stroke="#6B4EFF" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 60 40 L 160 40" fill="none" stroke="#D5F25E" strokeWidth="14" strokeLinecap="round" />
            <path d="M 110 40 L 110 100 L 100 130 L 130 160" fill="none" stroke="#D5F25E" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 100 60 L 100 160" fill="none" stroke="#6B4EFF" strokeWidth="14" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Les traits du M (violet) et du T (lime) **s'entrelacent en nœud** — l'un passe au-dessus, l'autre en dessous. Métaphore visuelle directe du duo qui tisse ensemble. Plus organique que la ligature 11, plus structuré que la boucle 13.
      </p>
      <div className="la-foot">
        <span>★ Tissé · interdépendant</span>
        <span>MT · KNOT</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 23 — Origami / facets ============ */
function Concept23() {
  return (
    <div className="logo-art">
      <h2 className="la-title">23 — Origami</h2>
      <div className="la-sub">PLIÉ · FACETTES · GÉOMÉTRIQUE</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 200 180" width="220" height="198">
            {/* M as folded paper — 4 triangles */}
            <polygon points="20,160 20,40 70,100" fill="#6B4EFF" />
            <polygon points="20,40 70,100 100,40" fill="#9A85FF" />
            <polygon points="100,40 70,100 130,100" fill="#6B4EFF" />
            <polygon points="100,40 130,100 130,40" fill="#4A2EE8" />
            <polygon points="100,40 130,40 100,160 130,160" fill="#6B4EFF" />
            {/* T as folded — crossbar + stem */}
            <polygon points="150,40 200,40 175,70" fill="#D5F25E" />
            <polygon points="150,40 175,70 150,70" fill="#B8D63A" />
            <polygon points="175,70 200,40 200,70" fill="#B8D63A" />
            <polygon points="160,70 190,70 175,160" fill="#D5F25E" />
            <polygon points="160,70 175,160 168,160" fill="#B8D63A" />
            {/* Fold lines */}
            <line x1="20" y1="40" x2="70" y2="100" stroke="#0A0812" strokeWidth="0.8" opacity="0.5" />
            <line x1="100" y1="40" x2="70" y2="100" stroke="#0A0812" strokeWidth="0.8" opacity="0.5" />
            <line x1="100" y1="40" x2="130" y2="100" stroke="#0A0812" strokeWidth="0.8" opacity="0.5" />
            <line x1="175" y1="70" x2="150" y2="40" stroke="#0A0812" strokeWidth="0.8" opacity="0.5" />
            <line x1="175" y1="70" x2="200" y2="40" stroke="#0A0812" strokeWidth="0.8" opacity="0.5" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 200 180" width="76" height="68">
            <polygon points="20,160 20,40 70,100" fill="#6B4EFF" />
            <polygon points="20,40 70,100 100,40" fill="#9A85FF" />
            <polygon points="100,40 70,100 130,100" fill="#6B4EFF" />
            <polygon points="100,40 130,100 130,40" fill="#4A2EE8" />
            <polygon points="100,40 130,40 100,160 130,160" fill="#6B4EFF" />
            <polygon points="150,40 200,40 175,70" fill="#D5F25E" />
            <polygon points="150,40 175,70 150,70" fill="#B8D63A" />
            <polygon points="175,70 200,40 200,70" fill="#B8D63A" />
            <polygon points="160,70 190,70 175,160" fill="#D5F25E" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Les lettres comme du papier plié — facettes triangulaires de violet + violet-soft + violet-deep + lime, lignes de pli fines. Chaque face capte la lumière différemment. Volumétrique sans 3D explicite.
      </p>
      <div className="la-foot">
        <span>★ Multi-facettes</span>
        <span>MT · FOLDED PAPER</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 24 — Equalizer bars ============ */
function Concept24() {
  return (
    <div className="logo-art">
      <h2 className="la-title">24 — Equalizer</h2>
      <div className="la-sub">BARRES · ACTIF · KINÉTIQUE</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 220 140" width="240" height="153">
            {/* M shape from bars */}
            <rect x="10" y="20"  width="14" height="100" fill="#6B4EFF" rx="2" />
            <rect x="30" y="40"  width="14" height="80"  fill="#6B4EFF" rx="2" />
            <rect x="50" y="60"  width="14" height="60"  fill="#6B4EFF" rx="2" />
            <rect x="70" y="80"  width="14" height="40"  fill="#6B4EFF" rx="2" />
            <rect x="90" y="60"  width="14" height="60"  fill="#6B4EFF" rx="2" />
            <rect x="110" y="40" width="14" height="80"  fill="#6B4EFF" rx="2" />
            <rect x="130" y="20" width="14" height="100" fill="#6B4EFF" rx="2" />
            {/* T baseline */}
            <rect x="155" y="20" width="55" height="14"  fill="#D5F25E" rx="2" />
            <rect x="175" y="34" width="14" height="86"  fill="#D5F25E" rx="2" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 220 140" width="92" height="58">
            <rect x="10" y="20"  width="14" height="100" fill="#6B4EFF" rx="2" />
            <rect x="30" y="40"  width="14" height="80"  fill="#6B4EFF" rx="2" />
            <rect x="50" y="60"  width="14" height="60"  fill="#6B4EFF" rx="2" />
            <rect x="70" y="80"  width="14" height="40"  fill="#6B4EFF" rx="2" />
            <rect x="90" y="60"  width="14" height="60"  fill="#6B4EFF" rx="2" />
            <rect x="110" y="40" width="14" height="80"  fill="#6B4EFF" rx="2" />
            <rect x="130" y="20" width="14" height="100" fill="#6B4EFF" rx="2" />
            <rect x="155" y="20" width="55" height="14"  fill="#D5F25E" rx="2" />
            <rect x="175" y="34" width="14" height="86"  fill="#D5F25E" rx="2" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 800, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">ANIMATED</div>
        <div>
          <svg viewBox="0 0 100 80" width="120" height="96">
            {[0, 20, 40, 60, 80].map((x, i) => (
              <rect key={i} x={x} y={10} width="14" height="60" fill={i === 2 ? '#D5F25E' : '#6B4EFF'} rx="2">
                <animate attributeName="height" values={"60;30;60;45;60"} dur={(1.4 + i * 0.2) + 's'} repeatCount="indefinite" />
                <animate attributeName="y" values={"10;40;10;25;10"} dur={(1.4 + i * 0.2) + 's'} repeatCount="indefinite" />
              </rect>
            ))}
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Le M est composé de 7 barres verticales de hauteurs croissantes/décroissantes, comme un equalizer audio. Le T à droite ferme avec ses barres lime. Variante animée possible (barres qui dansent au scroll). Très kinétique.
      </p>
      <div className="la-foot">
        <span>★ Mouvement intégré</span>
        <span>MT · BARS · EQ</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 25 — QR finder marks ============ */
function Concept25() {
  return (
    <div className="logo-art">
      <h2 className="la-title">25 — QR Finder</h2>
      <div className="la-sub">SCAN · NUMÉRIQUE · DISTINCTIF</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 200 200" width="200" height="200">
            {/* QR finder marks — 3 corners */}
            {[[20, 20], [140, 20], [20, 140]].map(([x, y], i) => (
              <g key={i}>
                <rect x={x} y={y} width="40" height="40" fill="#6B4EFF" />
                <rect x={x + 6} y={y + 6} width="28" height="28" fill="#0A0812" />
                <rect x={x + 12} y={y + 12} width="16" height="16" fill="#6B4EFF" />
              </g>
            ))}
            {/* MT in bottom-right where 4th QR finder would be */}
            <rect x="140" y="140" width="40" height="40" fill="#D5F25E" rx="2" />
            <text x="160" y="170" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="22" fill="#0A0812" letterSpacing="-0.03em">MT</text>
            {/* random QR-like dots in middle */}
            {[[80, 80], [100, 80], [80, 100], [100, 100], [80, 120], [120, 80], [100, 120], [120, 100], [80, 60], [100, 60]].map((p, i) => (
              <rect key={'d' + i} x={p[0]} y={p[1]} width="8" height="8" fill="#6B4EFF" opacity={0.4 + (i * 0.05)} />
            ))}
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 200 200" width="64" height="64">
            {[[20, 20], [140, 20], [20, 140]].map(([x, y], i) => (
              <g key={i}>
                <rect x={x} y={y} width="40" height="40" fill="#6B4EFF" />
                <rect x={x + 6} y={y + 6} width="28" height="28" fill="#0A0812" />
                <rect x={x + 12} y={y + 12} width="16" height="16" fill="#6B4EFF" />
              </g>
            ))}
            <rect x="140" y="140" width="40" height="40" fill="#D5F25E" rx="2" />
            <text x="160" y="170" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="22" fill="#0A0812">MT</text>
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">MINIMAL</div>
        <div>
          <svg viewBox="0 0 200 200" width="64" height="64">
            {[[20, 20], [140, 20], [20, 140]].map(([x, y], i) => (
              <g key={i}>
                <rect x={x} y={y} width="40" height="40" fill="#F4EFE3" />
                <rect x={x + 6} y={y + 6} width="28" height="28" fill="#0A0812" />
                <rect x={x + 12} y={y + 12} width="16" height="16" fill="#F4EFE3" />
              </g>
            ))}
            <rect x="140" y="140" width="40" height="40" fill="#D5F25E" rx="2" />
            <text x="160" y="172" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="22" fill="#0A0812">MT</text>
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Reprend l'iconographie des **3 carrés de positionnement QR** (les "finder patterns") + un quatrième carré lime avec "MT" au lieu du standard vide. Universellement reconnaissable comme "scan / numérique", très ownable, scalable.
      </p>
      <div className="la-foot">
        <span>★ Universel · scan</span>
        <span>QR · MT · FINDER</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 26 — Skyline / city silhouette ============ */
function Concept26() {
  return (
    <div className="logo-art">
      <h2 className="la-title">26 — Skyline</h2>
      <div className="la-sub">SILHOUETTE · URBAIN · NARRATIF</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 240 140" width="260" height="152">
            {/* Sky / background */}
            <rect x="0" y="0" width="240" height="140" fill="#14111F" rx="4" />
            {/* Sun / lime moon */}
            <circle cx="200" cy="32" r="14" fill="#D5F25E" />
            {/* Skyline — M-T forming silhouette */}
            <path d="M 10 130 L 10 60 L 35 60 L 35 40 L 60 40 L 60 60 L 80 60 L 95 40 L 110 60 L 130 60 L 130 30 L 150 30 L 150 60 L 175 60 L 175 130 L 230 130 L 230 50 L 200 50 L 200 80 L 230 80 Z" fill="#6B4EFF" />
            {/* Lit windows */}
            {[[20, 90], [40, 100], [40, 75], [70, 90], [85, 90], [120, 90], [140, 75], [140, 100], [160, 90], [195, 100], [215, 110]].map((p, i) => (
              <rect key={i} x={p[0]} y={p[1]} width="4" height="6" fill="#D5F25E" opacity={i % 3 === 0 ? 1 : 0.55} />
            ))}
            {/* Ground line */}
            <line x1="0" y1="130" x2="240" y2="130" stroke="#D5F25E" strokeWidth="1.5" opacity="0.45" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 240 140" width="96" height="56">
            <rect x="0" y="0" width="240" height="140" fill="#14111F" rx="4" />
            <circle cx="200" cy="32" r="14" fill="#D5F25E" />
            <path d="M 10 130 L 10 60 L 35 60 L 35 40 L 60 40 L 60 60 L 80 60 L 95 40 L 110 60 L 130 60 L 130 30 L 150 30 L 150 60 L 175 60 L 175 130 L 230 130 L 230 50 L 200 50 L 200 80 L 230 80 Z" fill="#6B4EFF" />
            <line x1="0" y1="130" x2="240" y2="130" stroke="#D5F25E" strokeWidth="1.5" opacity="0.45" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Les **silhouettes d'une skyline urbaine** : à gauche le M-shape (deux pics), à droite le T-shape (un grand bâtiment + crossbar). Petite lune lime, fenêtres éclairées lime ponctuelles. C'est la métaphore de "on bâtit". Narratif, distinctif.
      </p>
      <div className="la-foot">
        <span>★ Récit · construction</span>
        <span>MT · SKYLINE</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 27 — Pin / location marker ============ */
function Concept27() {
  return (
    <div className="logo-art">
      <h2 className="la-title">27 — Pin marker</h2>
      <div className="la-sub">GÉOLOCALISÉ · ANCRÉ · LOCAL</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 140 180" width="160" height="206">
            {/* shadow */}
            <ellipse cx="70" cy="168" rx="22" ry="4" fill="#0A0812" opacity="0.4" />
            {/* pin body */}
            <path d="M 70 8 C 102 8 124 30 124 62 C 124 96 70 158 70 158 C 70 158 16 96 16 62 C 16 30 38 8 70 8 Z" fill="#6B4EFF" />
            {/* inner circle */}
            <circle cx="70" cy="60" r="32" fill="#0A0812" />
            {/* MT inside */}
            <text x="70" y="72" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="30" fill="#D5F25E" letterSpacing="-0.05em">MT</text>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 140 180" width="48" height="62">
            <path d="M 70 8 C 102 8 124 30 124 62 C 124 96 70 158 70 158 C 70 158 16 96 16 62 C 16 30 38 8 70 8 Z" fill="#6B4EFF" />
            <circle cx="70" cy="60" r="32" fill="#0A0812" />
            <text x="70" y="72" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="30" fill="#D5F25E" letterSpacing="-0.05em">MT</text>
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">CONTEXT</div>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#F4EFE3', opacity: 0.7, lineHeight: 1.7 }}>
          → "épingle" sur une carte<br />
          → présence locale à Madagascar<br />
          → marque ses projets
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Forme d'une épingle de carte Google Maps, mais avec "MT" lime au centre au lieu d'un point. Évoque la **présence locale** (Madagascar), et symboliquement "on marque le territoire qu'on couvre". Très immédiat.
      </p>
      <div className="la-foot">
        <span>★ Géo · local · ancré</span>
        <span>📍 · MT · LOCATION</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 28 — Toggle switch ============ */
function Concept28() {
  return (
    <div className="logo-art">
      <h2 className="la-title">28 — Toggle</h2>
      <div className="la-sub">BINAIRE · DEV · ÉTAT ACTIF</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 240 110" width="240" height="100">
            {/* track */}
            <rect x="10" y="20" width="220" height="70" rx="35" fill="#14111F" stroke="#6B4EFF" strokeWidth="2" />
            {/* M label left */}
            <text x="55" y="62" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="28" fill="#F4EFE3" opacity="0.45">M</text>
            {/* T label right */}
            <text x="195" y="62" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="28" fill="#F4EFE3" opacity="0.45">T</text>
            {/* slider knob — sits on T side (active) */}
            <circle cx="195" cy="55" r="26" fill="#D5F25E" />
            <text x="195" y="64" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="22" fill="#0A0812" letterSpacing="-0.04em">T</text>
            {/* status pill */}
            <text x="120" y="100" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#D5F25E" letterSpacing="0.18em">— ON · LIVE —</text>
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 240 90" width="100" height="38">
            <rect x="10" y="10" width="220" height="70" rx="35" fill="#14111F" stroke="#6B4EFF" strokeWidth="2" />
            <text x="55" y="52" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="28" fill="#F4EFE3" opacity="0.45">M</text>
            <circle cx="195" cy="45" r="26" fill="#D5F25E" />
            <text x="195" y="54" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="22" fill="#0A0812">T</text>
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Un interrupteur dev avec **M à gauche (off, désactivé)** et **T à droite (on, actif, lime)**. La position lime signale "on, vivant, dispo". Métaphore directe d'un toggle d'interface — immédiatement lisible pour qui code.
      </p>
      <div className="la-foot">
        <span>★ Dev · état · interactif</span>
        <span>[M○────●T] · TOGGLE</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 29 — Vortex / spiral ============ */
function Concept29() {
  return (
    <div className="logo-art">
      <h2 className="la-title">29 — Vortex</h2>
      <div className="la-sub">SPIRALÉ · DYNAMIQUE · ORGANIQUE</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 200 200" width="200" height="200">
            {/* outer spiral (violet) */}
            <path d="M 100 24 A 76 76 0 1 1 24 100 A 60 60 0 0 1 100 40 A 50 50 0 1 1 50 100 A 40 40 0 0 1 100 60 A 32 32 0 1 1 68 100 A 22 22 0 0 1 100 78 A 14 14 0 1 1 86 100"
                  fill="none" stroke="#6B4EFF" strokeWidth="9" strokeLinecap="round" />
            {/* core */}
            <circle cx="100" cy="100" r="9" fill="#D5F25E" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 200 200" width="64" height="64">
            <path d="M 100 24 A 76 76 0 1 1 24 100 A 60 60 0 0 1 100 40 A 50 50 0 1 1 50 100 A 40 40 0 0 1 100 60 A 32 32 0 1 1 68 100 A 22 22 0 0 1 100 78 A 14 14 0 1 1 86 100"
                  fill="none" stroke="#6B4EFF" strokeWidth="9" strokeLinecap="round" />
            <circle cx="100" cy="100" r="9" fill="#D5F25E" />
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>
            <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'Newsreader, serif' }}>Mis</span>Tech
          </span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">ANIMATED</div>
        <div>
          <svg viewBox="0 0 200 200" width="80" height="80">
            <g style={{ transformOrigin: '100px 100px', animation: 'spin 14s linear infinite' }}>
              <path d="M 100 24 A 76 76 0 1 1 24 100 A 60 60 0 0 1 100 40 A 50 50 0 1 1 50 100 A 40 40 0 0 1 100 60 A 32 32 0 1 1 68 100 A 22 22 0 0 1 100 78 A 14 14 0 1 1 86 100"
                    fill="none" stroke="#6B4EFF" strokeWidth="9" strokeLinecap="round" />
            </g>
            <circle cx="100" cy="100" r="9" fill="#D5F25E" />
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Une spirale violette continue qui s'enroule vers un cœur lime central. Évoque un **vortex, un radar, un cyclone** — mouvement, gravité, énergie. Très différent de tout ce qu'on a fait jusqu'ici. Tourne au hover.
      </p>
      <div className="la-foot">
        <span>★ Mouvement · énergie</span>
        <span>↻ · SPIRAL · MT</span>
      </div>
    </div>
  );
}

/* ============ CONCEPT 30 — Corner brackets ============ */
function Concept30() {
  return (
    <div className="logo-art">
      <h2 className="la-title">30 — Crochets de cadrage</h2>
      <div className="la-sub">FOCUS · VISEUR · ÉPURÉ</div>
      <div className="la-row">
        <div className="la-label">MARK</div>
        <div>
          <svg viewBox="0 0 200 180" width="220" height="198">
            {/* 4 corner brackets */}
            {/* TL */}
            <path d="M 20 50 L 20 20 L 50 20" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="square" />
            {/* TR */}
            <path d="M 150 20 L 180 20 L 180 50" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="square" />
            {/* BL */}
            <path d="M 20 130 L 20 160 L 50 160" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="square" />
            {/* BR */}
            <path d="M 150 160 L 180 160 L 180 130" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="square" />
            {/* MT inside */}
            <text x="100" y="105" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="64" fill="#F4EFE3" letterSpacing="-0.05em">MT</text>
            {/* tiny dot accent */}
            <circle cx="100" cy="135" r="3" fill="#6B4EFF" />
          </svg>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">WORDMARK</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg viewBox="0 0 200 180" width="80" height="72">
            <path d="M 20 50 L 20 20 L 50 20" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="square" />
            <path d="M 150 20 L 180 20 L 180 50" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="square" />
            <path d="M 20 130 L 20 160 L 50 160" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="square" />
            <path d="M 150 160 L 180 160 L 180 130" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="square" />
            <text x="100" y="105" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="64" fill="#F4EFE3" letterSpacing="-0.05em">MT</text>
          </svg>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: 42, letterSpacing: '-0.04em', color: '#F4EFE3' }}>MisTech</span>
        </div>
      </div>
      <div className="la-row">
        <div className="la-label">VARIATIONS</div>
        <div style={{ display: 'flex', gap: 12 }}>
          {/* Round brackets */}
          <svg viewBox="0 0 200 180" width="60" height="54">
            <path d="M 20 60 Q 20 20, 60 20" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="round" />
            <path d="M 140 20 Q 180 20, 180 60" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="round" />
            <path d="M 20 120 Q 20 160, 60 160" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="round" />
            <path d="M 140 160 Q 180 160, 180 120" fill="none" stroke="#D5F25E" strokeWidth="6" strokeLinecap="round" />
            <text x="100" y="105" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="56" fill="#F4EFE3" letterSpacing="-0.05em">MT</text>
          </svg>
          {/* Filled corners */}
          <svg viewBox="0 0 200 180" width="60" height="54">
            <polygon points="14,14 50,14 50,22 22,22 22,50 14,50" fill="#D5F25E" />
            <polygon points="150,14 186,14 186,50 178,50 178,22 150,22" fill="#D5F25E" />
            <polygon points="14,130 22,130 22,158 50,158 50,166 14,166" fill="#D5F25E" />
            <polygon points="150,158 178,158 178,130 186,130 186,166 150,166" fill="#D5F25E" />
            <text x="100" y="105" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontWeight="800" fontSize="56" fill="#F4EFE3" letterSpacing="-0.05em">MT</text>
          </svg>
        </div>
      </div>
      <div className="la-rule" />
      <p className="la-rationale">
        Quatre crochets lime aux 4 coins encadrent "MT" en grand — c'est le viseur d'une caméra, le cadre d'un écran, le focus sur ce qui compte. Très épuré, différent du caret 04 et de la balise.
      </p>
      <div className="la-foot">
        <span>★ Focus · cadrage</span>
        <span>⌐MT⌐ · CORNER BRACKETS</span>
      </div>
    </div>
  );
}
