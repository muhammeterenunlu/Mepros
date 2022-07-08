class FurnitureProduct extends Product{
  #data

  constructor(data) {
    super();
    this.#data = data;
  }

  getStrategy() {
    return new FurnitureManagementStrategy();
  }

  getData() {
    return this.#data;
  }
}
