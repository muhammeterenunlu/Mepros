mps_2060t_data = {
  name: "mps-2060t",
  colorsImagesDictionary: {
    "#000000": [
      "../lighting-images/MPS2060T.png",
      "../lighting-images/MPS2060T-1.png",
    ],
  },
  tags: [
    "Material: Metal Aluminum Body, electrostatic powder coat",
    "Socket: e27",
    "Volt: 220V",
  ],
  tags_tr: [
    'Materyal: Metal Alüminyum Gövde, elektrostatik toz boya',
    'Duy: e27',
    'Volt: 220V',
  ],
}

globals.productManager.addProduct(new LightingProduct(mps_2060t_data));
