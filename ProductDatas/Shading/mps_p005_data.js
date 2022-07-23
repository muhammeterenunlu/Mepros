mps_p005_data = {
  name: 'mps-p005',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/MPS-P005.png'],
    '#3d3d3d': ['../shading-images/MPS-P005.png'],
    '#ffffcc': ['../shading-images/MPS-P005.png'],
    '#ffffff': ['../shading-images/MPS-P005.png'],
  },
  tags: [
    '3 Samsung led chip is used in the product.',
    'Voltage: 25V DC',
    'Current: 150mA',
    'Power: 3.6W',
    'Light İntensity: 222 LM',
    'Efficiency: %95',
    'Cable: 22 AWG',
  ],
};

globals.productManager.addProduct(new ShadingProduct(mps_p005_data));
