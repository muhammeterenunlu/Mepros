class LightingManagementStrategy extends ManagementStrategy {
  static lightingProducts = {};

  addProduct(product) {
    LightingManagementStrategy.lightingProducts[product.getData().name] = product;
  }
}
