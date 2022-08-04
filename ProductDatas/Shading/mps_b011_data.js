mps_b011_data = {
  name: 'mps-b011',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/MPS-B011.png'],
    '#3d3d3d': ['../shading-images/MPS-B011.png'],
    '#ffffcc': ['../shading-images/MPS-B011.png'],
    '#ffffff': ['../shading-images/MPS-B011.png'],
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

globals.productManager.addProduct(new ShadingProduct(mps_b011_data));
