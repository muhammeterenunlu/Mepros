class langm
{
  #language

  constructor() {}

  setLanguage(language) {
    this.#language = language;
    if(typeof this.#language == "undefined") console.error(
      "Error: Specified Language doesn't exist. Check languages object, Language Data File and make sure that you load the Language Data File in html (before everything)"
    );
  }

  translate() {
    let translatables = document.getElementsByClassName("translatable");
    for(let i = 0; i < translatables.length; i++) {
      translatables[i].innerText = this.#language [
        translatables[i].getAttribute('name')
      ];

      translatables[i].setAttribute('data-content', translatables[i].innerText);
    }
  }
}
