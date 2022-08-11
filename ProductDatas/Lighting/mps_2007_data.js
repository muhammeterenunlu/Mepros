mps_2007_data = {
  name: 'mps-2007',
  colorsImagesDictionary: {
    '#1d1d1b': [
      '../lighting-images/MPS2007.png',
      '../lighting-images/MPS2007-1.png',
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

globals.productManager.addProduct(new LightingProduct(mps_2007_data));
