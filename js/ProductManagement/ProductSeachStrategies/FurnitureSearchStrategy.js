class FurnitureSearchStrategy extends SearchStrategy {
  search(productName) {
    return FurnitureManagementStrategy.furnitures[productName];
  }
}
