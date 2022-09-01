hera_data = {
  name: 'hera',
  colorsImagesDictionary: {
    '#3d3d3d': ['../shading-images/hera.png'],
  },
  tags: [
    '14 Samsung led chip is used in the product.',
    'Voltage: 24V DC',
    'Current: 150mA',
    'Power: 3.6W',
    'Light İntensity: 520 LM',
    'Efficiency: %85',
    'Cable: 22 AWG',
  ],
  tags_tr: [
    'Üründe 14 adet Samsung led çip kullanılmaktadır.',
    'Gerilim: 24V DC',
    'Akım: 150mA',
    'Güç: 3.6W',
    'Işık Şiddeti: 520 LM',
    'Verimlilik: %85',
    'Kablo: 22 AWG',
  ],
};

globals.productManager.addProduct(new ShadingProduct(hera_data));
