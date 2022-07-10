function cssRgbToHex(cssRgb) {
  let cssRemovedRgb = cssRgb.split("(")[1].split(")")[0];
  let rgbSplitted = cssRemovedRgb.split(",");

  let eachComponentConverted = rgbSplitted.map(function(component) {
    component = parseInt(component).toString(16);
    return (component.length == 1) ? "0" + component : component;
  });

  return "#" + eachComponentConverted.join("");
}
