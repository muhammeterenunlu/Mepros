class LightingSearchStrategy extends SearchStrategy {
  search(productName) {
    return LightingManagementStrategy.lamps[productName];
  }
}
