hermes_data = {
  name: 'hermes',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/hermes.png'],
    '#3d3d3d': ['../shading-images/hermes.png'],
    '#ffffcc': ['../shading-images/hermes.png'],
    '#ffffff': ['../shading-images/hermes.png'],
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

globals.productManager.addProduct(new ShadingProduct(hermes_data));
