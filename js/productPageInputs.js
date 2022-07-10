const globalInformations = {
  productColorInfo: {}
}

function setChosenColor(color) {
  let cssRgb = color.style.backgroundColor;
  let hex = cssRgbToHex(cssRgb);

  globalInformations.productColorInfo.chosenColor = hex;
  globals.productLoader.loadProduct(globals.productLoader.getCurrentProduct());
}
