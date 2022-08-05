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
  tags_tr: [
    'Üründe 14 adet Samsung led çip kullanılmaktadır.',
    'Gerilim: 24V DC',
    'Akım: 150mA',
    'Güç: 3.6W',
    'Işık Şiddeti: 520 LM',
    'Verimlilik: %90',
    'Kablo: 20 AWG',
  ],
};

globals.productManager.addProduct(new ShadingProduct(mps_p009_data));
