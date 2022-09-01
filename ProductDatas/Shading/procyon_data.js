procyon_data = {
  name: 'procyon',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/procyon.png'],
    '#3d3d3d': ['../shading-images/procyon.png'],
    '#ffffcc': ['../shading-images/procyon.png'],
    '#ffffff': ['../shading-images/procyon.png'],
  },
  tags: [
    'Led chip permeter 60.',
    'Led Type: Strip',
    'Current Rate Permeter: 1A',
    'Voltage: 12V DC',
    'Power: 12W',
    'Efficiency: %90',
    'Protection Class: IP68',
  ],
  tags_tr: [
    '60 permetreli led çip.',
    'Led tipi: Şerit',
    'Akım oranı permetresi: 1A',
    'Gerilim: 12V DC',
    'Güç: 12W',
    'Verimlilik: %90',
    'Koruma Sınıfı: IP68',
  ],
};

globals.productManager.addProduct(new ShadingProduct(procyon_data));
