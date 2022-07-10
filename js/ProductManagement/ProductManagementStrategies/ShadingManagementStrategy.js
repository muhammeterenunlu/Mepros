class ShadingManagementStrategy extends ManagementStrategy {
  static shadingProducts = {};

  addProduct(product) {
    ShadingManagementStrategy.shadingProducts[product.getData().name] = product;
  }
}
