mps_150_data = {
  name: 'mps-150',
  colorsImagesDictionary: {
    '#000000': [
      '../lighting-images/MPS150.png',
      '../lighting-images/MPS150-1.png',
    ],
  },
  tags: [
    'Material: Metal Aluminum Body, Copper/Yellow/Chrome plated',
    'Socket: e27',
    'Volt: 220V',
  ],
  tags_tr: [
    'Materyal: Metal Alüminyum Gövde, Bakır/Sarı/Krom kaplama',
    'Duy: e27',
    'Volt: 220V',
  ],
};

globals.productManager.addProduct(new LightingProduct(mps_150_data));
