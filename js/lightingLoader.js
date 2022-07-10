const urlParameters = new URLSearchParams(window.location.href);

const product = globals.productManager.getProduct(urlParameters.get("id"), new LightingSearchStrategy());

globals.productLoader.loadProduct(product);
