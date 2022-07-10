class LightingSearchStrategy extends SearchStrategy {
  search(productName) {
    return LightingManagementStrategy.lightingProducts[productName];
  }
}
