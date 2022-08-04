let lastLanguage = JSON.parse(window.localStorage.getItem('lastLanguage'));
let lastChosenLanguage = window.localStorage.getItem('lastChosenLanguage');

if(!lastLanguage) {
  lastLanguage = enlang;
  window.localStorage.setItem('lastLanguage', JSON.stringify(enlang));
}

if(!lastChosenLanguage) {
  lastChosenLanguage = globals.chosenLanguage;
  window.localStorage.setItem('lastChosenLanguage', globals.chosenLanguage);
}

globals.chosenLanguage = lastChosenLanguage;
globals.productLoader.loadProduct(globals.productLoader.getCurrentProduct());

languageManagerSetLanguage(lastLanguage);
languageManagerTranslate();

function changeHomepageLanguageToTurkish() {
  languageManagerSetLanguage(trlang)
  languageManagerTranslate();

  window.localStorage.setItem('lastLanguage', JSON.stringify(trlang))
}

function changeProductLanguageToTurkish() {
  globals.chosenLanguage = 'tr';
  globals.productLoader.loadProduct(globals.productLoader.getCurrentProduct());

  changeHomepageLanguageToTurkish();

  window.localStorage.setItem('lastChosenLanguage', globals.chosenLanguage);
}

function changeProductLanguageToEnglish() {
  globals.chosenLanguage = 'en';
  globals.productLoader.loadProduct(globals.productLoader.getCurrentProduct());

  changeHomepageLanguageToEnglish();

  window.localStorage.setItem('lastChosenLanguage', globals.chosenLanguage);
}

function changeHomepageLanguageToEnglish() {
  languageManagerSetLanguage(enlang)
  languageManagerTranslate();

  window.localStorage.setItem('lastLanguage', JSON.stringify(enlang))
}
