langmInstance = new langm();

function languageManagerSetLanguage(language) {
  langmInstance.setLanguage(language);
}

function languageManagerTranslate() {
    langmInstance.translate();
}
