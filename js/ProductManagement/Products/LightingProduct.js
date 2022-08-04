class LightingProduct extends Product{
  #data

  constructor(data) {
    super();
    this.#data = data;
  }

  getManagementStrategy() {
    return new LightingManagementStrategy();
  }

  getLoadStrategy() {
    switch (globals.chosenLanguage) {
      case 'en':
        return new LightingLoadStrategy();
      case 'tr':
        return new LightingLoadStrategy_tr();
    }
  }

  getData() {
    return this.#data;
  }
}
