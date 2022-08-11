mps_2012_data = {
  name: 'mps-2012',
  colorsImagesDictionary: {
    '#bf7d5d': [
      '../lighting-images/MPS2012.png',
      '../lighting-images/MPS2012-1.png',
    ],
  },
  tags: [
    'Material: Metal Aluminum Body, electrostatic powder coat',
    'Socket: e27',
    'Volt: 220V',
  ],
  tags_tr: [
    'Materyal: Metal Alüminyum Gövde, elektrostatik toz boya',
    'Duy: e27',
    'Volt: 220V',
  ],
};

globals.productManager.addProduct(new LightingProduct(mps_2012_data));
