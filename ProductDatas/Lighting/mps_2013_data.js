mps_2013_data = {
  name: "mps-2013",
  colorsImagesDictionary: {
    "#e30613": [
      "../lighting-images/MPS2013.png",
      "../lighting-images/MPS2013-1.png",
    ],
    "#1d1d1b": [
      "../lighting-images/MPS2013t.png",
      "../lighting-images/MPS2013-1.png",
    ],
  },
  tags: [
    "Material: Metal Aluminum Body, electrostatic powder coat",
    "Socket: e27",
    "Volt: 220V",
  ],
  tags_tr: [
    "Materyal: Metal Alüminyum Gövde, elektrostatik toz boya",
    "Duy: e27",
    "Volt: 220V",
  ],
}

globals.productManager.addProduct(new LightingProduct(mps_2013_data));
