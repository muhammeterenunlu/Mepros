const urlParameters = new URLSearchParams(window.location.href);

const product = globals.productManager.getProduct(urlParameters.get("id"), new FurnitureSearchStrategy());

globals.productLoader.loadProduct(product);
