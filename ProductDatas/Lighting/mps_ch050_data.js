mps_ch050_data = {
  name: 'mps-ch050',
  colorsImagesDictionary: {
    '#aeaca6': ['../lighting-images/MPS-CH050.png'],
    '#8b5a23': ['../lighting-images/MPS-CH050B.png'],
    '#000000': ['../lighting-images/MPS-CH050E.png'],
    '#e3bc46': ['../lighting-images/MPS-CH050G.png'],
  },
  tags: ['C:45cm H:80cm', 'Max:90w - 6000K'],
  tags_tr: ['C:45cm Y:80cm', 'Maks:90w - 6000K'],
};

globals.productManager.addProduct(new LightingProduct(mps_ch050_data));
