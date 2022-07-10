class ProductLoader {
  #currentProduct

  loadProduct(product) {
    this.#currentProduct = product;

    product.getLoadStrategy().loadProduct(product);
  }

  getCurrentProduct() {
    return this.#currentProduct;
  }
}
