mps_p002_data = {
  name: 'mps-p002',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/MPS-P002.png'],
    '#3d3d3d': ['../shading-images/MPS-P002.png'],
    '#ffffcc': ['../shading-images/MPS-P002.png'],
    '#ffffff': ['../shading-images/MPS-P002.png'],
  },
  tags: [
    '14 Samsung led chip is used in the product.',
    'Voltage: 25V DC',
    'Current: 150mA',
    'Power: 3.6W',
    'Light İntensity: 520 LM',
    'Efficiency: %85',
    'Cable: 22 AWG',
  ],
};

globals.productManager.addProduct(new ShadingProduct(mps_p002_data));