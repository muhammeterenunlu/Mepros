class FurnitureProduct extends Product{
  #data

  constructor(data) {
    super();
    this.#data = data;
  }

  getManagementStrategy() {
    return new FurnitureManagementStrategy();
  }

  getLoadStrategy() {
    switch (globals.chosenLanguage) {
      case 'en':
        return new FurnitureLoadStrategy();
      case 'tr':
        return new FurnitureLoadStrategy_tr();
    }
  }

  getData() {
    return this.#data;
  }
}
