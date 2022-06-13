let lastLanguage = JSON.parse(window.localStorage.getItem('lastLanguage'))

if(!lastLanguage) lastLanguage = homepageEnLang;

languageManagerSetLanguage(lastLanguage);
languageManagerTranslate();

function changeHomepageLanguageToTurkish() {
  languageManagerSetLanguage(homepageTrLang)
  languageManagerTranslate();

  window.localStorage.setItem('lastLanguage', JSON.stringify(homepageTrLang))
}

function changeHomepageLanguageToEnglish() {
  languageManagerSetLanguage(homepageEnLang)
  languageManagerTranslate();

  window.localStorage.setItem('lastLanguage', JSON.stringify(homepageEnLang))
}
