sirius_data = {
  name: 'sirius',
  colorsImagesDictionary: {
    '#3d3d3d': ['../shading-images/sirius.png'],
  },
  tags: [
    '14 Samsung led chip is used in the product.',
    'Voltage: 24V DC',
    'Power: 2.04W',
    'Light İntensity: 277 LM',
    'Efficiency: %95',
    'Cable: 20 AWG',
  ],
  tags_tr: [
    'Üründe 14 adet Samsung led çip kullanılmaktadır.',
    'Gerilim: 24V DC',
    'Güç: 2.04W',
    'Işık Şiddeti: 277 LM',
    'Verimlilik: %95',
    'Kablo: 20 AWG',
  ],
};

globals.productManager.addProduct(new ShadingProduct(sirius_data));
