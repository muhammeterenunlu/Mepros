class ShadingProduct extends Product{
  #data

  constructor(data) {
    super();
    this.#data = data;
  }

  getManagementStrategy() {
    return new ShadingManagementStrategy();
  }

  getLoadStrategy() {
    return new ShadingLoadStrategy();
  }

  getData() {
    return this.#data;
  }
}
