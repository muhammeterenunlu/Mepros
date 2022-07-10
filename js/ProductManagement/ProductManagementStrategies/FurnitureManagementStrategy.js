class FurnitureManagementStrategy extends ManagementStrategy {
  static furnitures = {};

  addProduct(product) {
    FurnitureManagementStrategy.furnitures[product.getData().name] = product;
  }
}
