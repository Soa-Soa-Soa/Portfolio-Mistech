/* ===== App ===== */
const { useState: _useState, useEffect: _useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "typo": "modern",
  "cardStyle": "soft",
  "heroLayout": "split"
}/*EDITMODE-END*/;

function App() {
  const [page, setPage] = _useState('home');
  const [lang, setLang] = _useState('fr');
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const t = window.CONTENT[lang];

  _useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme);
    document.documentElement.setAttribute('data-typo', tweaks.typo);
  }, [tweaks.theme, tweaks.typo]);

  const setTheme = (v) => setTweak('theme', v);

  const pages = {
    home: <HomePage t={t} setPage={setPage} tweaks={tweaks} lang={lang} />,
    about: <AboutPage t={t} setPage={setPage} lang={lang} />,
    projects: <ProjectsPage t={t} setPage={setPage} tweaks={tweaks} lang={lang} />,
    stack: <StackPage t={t} setPage={setPage} lang={lang} />,
    contact: <ContactPage t={t} setPage={setPage} lang={lang} />
  };

  return (
    <React.Fragment>
      <CursorBlob />
      <Nav page={page} setPage={setPage} theme={tweaks.theme} setTheme={setTheme} lang={lang} setLang={setLang} t={t} />
      <main key={page} data-screen-label={page}>
        {pages[page]}
      </main>
      <Footer t={t} setPage={setPage} lang={lang} />
      <Tweaks tweaks={tweaks} setTweak={setTweak} lang={lang} />
    </React.Fragment>
  );
}

function Tweaks({ tweaks, setTweak, lang }) {
  const L = lang === 'fr' ? {
    title: 'Tweaks',
    theme: 'Thème', light: 'Clair', dark: 'Sombre',
    typo: 'Typographie', edito: 'Éditorial', modern: 'Moderne', classic: 'Classique',
    card: 'Style cartes', soft: 'Soft', bordered: 'Bordée', fill: 'Pleine',
    hero: 'Layout hero', split: 'Split', centered: 'Centré', stacked: 'Stack'
  } : {
    title: 'Tweaks',
    theme: 'Theme', light: 'Light', dark: 'Dark',
    typo: 'Typography', edito: 'Editorial', modern: 'Modern', classic: 'Classic',
    card: 'Cards', soft: 'Soft', bordered: 'Bordered', fill: 'Filled',
    hero: 'Hero layout', split: 'Split', centered: 'Centered', stacked: 'Stack'
  };
  return (
    <TweaksPanel title={L.title}>
      <TweakSection label={L.theme} />
      <TweakRadio label={L.theme} value={tweaks.theme}
        options={[{ value: 'light', label: L.light }, { value: 'dark', label: L.dark }]}
        onChange={v => setTweak('theme', v)} />
      <TweakSection label={L.typo} />
      <TweakRadio label={L.typo} value={tweaks.typo}
        options={[
          { value: 'editorial', label: L.edito },
          { value: 'modern', label: L.modern },
          { value: 'classic', label: L.classic }
        ]}
        onChange={v => setTweak('typo', v)} />
      <TweakSection label={L.hero} />
      <TweakRadio label={L.hero} value={tweaks.heroLayout}
        options={[
          { value: 'split', label: L.split },
          { value: 'centered', label: L.centered },
          { value: 'stacked', label: L.stacked }
        ]}
        onChange={v => setTweak('heroLayout', v)} />
      <TweakSection label={L.card} />
      <TweakRadio label={L.card} value={tweaks.cardStyle}
        options={[
          { value: 'soft', label: L.soft },
          { value: 'bordered', label: L.bordered },
          { value: 'fill', label: L.fill }
        ]}
        onChange={v => setTweak('cardStyle', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
