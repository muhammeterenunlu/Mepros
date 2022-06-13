let lastLanguage = JSON.parse(window.localStorage.getItem('lastLanguage'))

if(!lastLanguage) {
  lastLanguage = enlang;
  window.localStorage.setItem('lastLanguage', JSON.stringify(enlang));
}

languageManagerSetLanguage(lastLanguage);
languageManagerTranslate();

function changeHomepageLanguageToTurkish() {
  languageManagerSetLanguage(trlang)
  languageManagerTranslate();

  window.localStorage.setItem('lastLanguage', JSON.stringify(trlang))
}

function changeHomepageLanguageToEnglish() {
  languageManagerSetLanguage(enlang)
  languageManagerTranslate();

  window.localStorage.setItem('lastLanguage', JSON.stringify(enlang))
}
