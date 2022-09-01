spica_data = {
  name: 'spica',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/spica.png'],
    '#3d3d3d': ['../shading-images/spica.png'],
    '#ffffcc': ['../shading-images/spica.png'],
    '#ffffff': ['../shading-images/spica.png'],
  },
  tags: [
    '3 Samsung led chip is used in the product.',
    'Voltage: 24V DC',
    'Current: 150mA',
    'Power: 3.6W',
    'Light İntensity: 222 LM',
    'Efficiency: %95',
    'Cable: 22 AWG',
  ],
  tags_tr: [
    'Üründe 3 adet Samsung led çip kullanılmaktadır.',
    'Gerilim: 24V DC',
    'Akım: 150mA',
    'Güç: 3.6W',
    'Işık Şiddeti: 222 LM',
    'Verimlilik: %95',
    'Kablo: 22 AWG',
  ],
};

globals.productManager.addProduct(new ShadingProduct(spica_data));
