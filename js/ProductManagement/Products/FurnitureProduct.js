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
    return new FurnitureLoadStrategy();
  }

  getData() {
    return this.#data;
  }
}
