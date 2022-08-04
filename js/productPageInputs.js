const globalInformations = {
  productColorInfo: {}
}

function setChosenColorFromHtml(element) {
  debugger;
  let cssRgb = element.style.backgroundColor;
  let hex = cssRgbToHex(cssRgb);

  globalInformations.productColorInfo.chosenColor = hex;

  UrlManager.updateColorParameter(hex);

  globals.productLoader.loadProduct(globals.productLoader.getCurrentProduct());
}

function setProductColor(color) {
  globalInformations.productColorInfo.chosenColor = color;

  globals.productLoader.loadProduct(globals.productLoader.getCurrentProduct());
}
