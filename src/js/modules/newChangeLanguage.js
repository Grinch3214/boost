import i18next from "i18next"

export default function changeLanguagei18n() {
  const elements = document.querySelectorAll('[data-i18n]');

  async function loadLanguageResources() {
    const languages = ['en', 'es', 'ua', 'ro'];
    const resources = {};
    
    try {
      for (const language of languages) {
				const response = await fetch(
          `/files/i18/${language}.json`
        );
        const json = await response.json();
        resources[language] = { translation: json };
      }
    } catch (err) {
      console.error(err);
    }
    
    return resources;
  }

  async function initialize() {
    try {
      const resources = await loadLanguageResources();
      const language = localStorage.getItem('language') || 'en';
      await i18next.init({
        lng: language,
        debug: true,
        resources
      });
      
      updateContent();
      i18next.on('languageChanged', () => {
        updateContent();
      });
      
      const langSelectors = document.querySelectorAll('.header__languages-btn');
      
      langSelectors.forEach((langSelector) => {
        langSelector.addEventListener('click', () => {
          const currentLang = langSelector.getAttribute('data-lang');
          localStorage.setItem('language', currentLang);
          i18next.changeLanguage(currentLang);
        });
      });
    } catch (err) {
      console.error(err);
    }
  }

  function updateContent() {
    elements.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      element.innerHTML = i18next.t(key);
    });
  }

  initialize();
}