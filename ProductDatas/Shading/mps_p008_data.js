mps_p008_data = {
  name: 'mps-p008',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/MPS-P008.png'],
    '#3d3d3d': ['../shading-images/MPS-P008.png'],
    '#ffffcc': ['../shading-images/MPS-P008.png'],
    '#ffffff': ['../shading-images/MPS-P008.png'],
  },
  tags: [
    '7 Samsung led chip is used in the product.',
    'Voltage: 24V DC',
    'Current: 80mA',
    'Power: 1.92W',
    'Light İntensity: 277 LM',
    'Efficiency: %95',
    'Cable: 22 AWG',
    'SCREWLESS MOUNT',
  ],
};

globals.productManager.addProduct(new ShadingProduct(mps_p008_data));
