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
    return new LightingLoadStrategy();
  }

  getData() {
    return this.#data;
  }
}
