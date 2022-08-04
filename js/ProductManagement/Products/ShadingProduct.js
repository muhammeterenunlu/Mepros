class ShadingProduct extends Product {
  #data

  constructor(data) {
    super();
    this.#data = data;
  }

  getManagementStrategy() {
    return new ShadingManagementStrategy();
  }

  getLoadStrategy() {
    switch (globals.chosenLanguage) {
      case 'en':
        return new ShadingLoadStrategy();
      case 'tr':
        return new ShadingLoadStrategy_tr();
    }
  }

  getData() {
    return this.#data;
  }
}
