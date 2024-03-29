arcturus_data = {
  name: 'arcturus',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/arcturus.png'],
    '#3d3d3d': ['../shading-images/arcturus.png'],
    '#ffffcc': ['../shading-images/arcturus.png'],
    '#ffffff': ['../shading-images/arcturus.png'],
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
  tags_tr: [
    'Üründe 7 adet Samsung led çip kullanılmaktadır.',
    'Gerilim: 24V DC',
    'Akım: 80mA',
    'Güç: 1.92W',
    'Işık Şiddeti: 277 LM',
    'Verimlilik: %95',
    'Kablo: 22 AWG',
    'Vidasız Montaj',
  ],
};

globals.productManager.addProduct(new ShadingProduct(arcturus_data));
