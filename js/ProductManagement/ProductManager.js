class ProductManager {

  addProduct(product) {
    product.getManagementStrategy().addProduct(product);
  }

  getProduct(productName, searchStrategy) {
    let product = searchStrategy.search(productName);

    if(product != null) return product;

    console.error(`Error: There is No Such Thing Named As ${productName} in given SearchStrategy Please Check Your Product Data And Make Sure That Your Name Is Correct`);
  }
}
