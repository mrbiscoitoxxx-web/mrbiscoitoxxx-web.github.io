/* Troca de idioma nas páginas legais. Partilha a escolha com o site. */
(function () {
  const KEY = 'laiz-language';
  const labels = {
    en: { back: 'Back to the site', terms: 'Terms of Use', privacy: 'Privacy Policy' },
    pt: { back: 'Voltar ao site', terms: 'Termos de Utilização', privacy: 'Política de Privacidade' }
  };

  function detect() {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'pt' || fromUrl === 'en') return fromUrl;
    try {
      const saved = window.localStorage.getItem(KEY);
      if (saved === 'pt' || saved === 'en') return saved;
    } catch (e) {}
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return nav.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }

  function apply(next, remember) {
    document.documentElement.lang = next;
    document.querySelectorAll('[data-legal-doc]').forEach((doc) => {
      doc.hidden = doc.dataset.legalDoc !== next;
    });
    document.querySelectorAll('[data-legal-i18n]').forEach((el) => {
      const value = labels[next][el.dataset.legalI18n];
      if (value) el.textContent = value;
    });
    document.querySelectorAll('[data-legal-lang]').forEach((button) => {
      const active = button.dataset.legalLang === next;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (remember) { try { window.localStorage.setItem(KEY, next); } catch (e) {} }
  }

  document.querySelectorAll('[data-legal-lang]').forEach((button) => {
    button.addEventListener('click', () => apply(button.dataset.legalLang, true));
  });

  apply(detect(), false);
})();
