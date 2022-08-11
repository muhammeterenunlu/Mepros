mps_2009_data = {
  name: 'mps-2009',
  colorsImagesDictionary: {
    '#1d1d1b': [
      '../lighting-images/MPS2009.png',
      '../lighting-images/MPS2009-1.png',
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

globals.productManager.addProduct(new LightingProduct(mps_2009_data));
