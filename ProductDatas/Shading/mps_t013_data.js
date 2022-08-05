mps_t013_data = {
  name: 'mps-t013',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/MPS-T013.png'],
  },
  tags: [
    'Operating Voltage: 220V AC',
    'Output Voltage: 12V DC',
    'Rating Current: 4-5-6.25-8.33-12.5-16.5-25-29-30 A',
  ],
  tags_tr: [
    'Çalışma Voltajı: 220V AC',
    'Çıkış Voltajı: 12V DC',
    'Derece Akımı: 4-5-6.25-8.33-12.5-16.5-25-29-30 A',
  ],
};

globals.productManager.addProduct(new ShadingProduct(mps_t013_data));
