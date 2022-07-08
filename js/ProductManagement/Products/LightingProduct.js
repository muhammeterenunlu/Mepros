class LightingProduct extends Product{
  #data

  constructor(data) {
    super();
    this.#data = data;
  }

  getStrategy() {
    return new LightingManagementStrategy();
  }

  getData() {
    return this.#data;
  }
}
