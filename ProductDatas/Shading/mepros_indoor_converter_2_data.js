mepros_indoor_converter_2_data = {
  name: 'mepros-indoor-converter-2',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/mepros-indoor-converter-2.png'],
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

globals.productManager.addProduct(
  new ShadingProduct(mepros_indoor_converter_2_data)
);
