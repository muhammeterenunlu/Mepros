class LightingManagementStrategy extends ManagementStrategy {
  static lamps = {};

  addProduct(product) {
    LightingManagementStrategy.lamps[product.getData().name] = product;
  }
}
