mps_p009_data = {
  name: 'mps-p009',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/MPS-P009.png'],
    '#3d3d3d': ['../shading-images/MPS-P009.png'],
    '#ffffcc': ['../shading-images/MPS-P009.png'],
    '#ffffff': ['../shading-images/MPS-P009.png'],
  },
  tags: [
    '14 Samsung led chip is used in the product.',
    'Voltage: 24V DC',
    'Current: 150mA',
    'Power: 3.6W',
    'Light İntensity: 520 LM',
    'Efficiency: %90',
    'Cable: 20 AWG',
  ],
};

globals.productManager.addProduct(new ShadingProduct(mps_p009_data));
