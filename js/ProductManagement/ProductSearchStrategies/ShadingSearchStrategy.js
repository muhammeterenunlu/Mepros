class ShadingSearchStrategy extends SearchStrategy {
  search(productName) {
    return ShadingManagementStrategy.shadingProducts[productName];
  }
}
