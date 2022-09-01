mepros_indoor_converter_1_data = {
  name: 'mepros-indoor-converter-1',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/mepros-indoor-converter-1.png'],
  },
  tags: [
    'Operating Voltage: 220V AC',
    'Output Voltage: 24V DC',
    'Rating Current: 2-3.1-4.16-6-8.33-10-14.5-15-21 A',
  ],
  tags_tr: [
    'Çalışma Voltajı: 220V AC',
    'Çıkış Voltajı: 24V DC',
    'Derecelendirme Akımı: 2-3.1-4.16-6-8.33-10-14.5-15-21 A',
  ],
};

globals.productManager.addProduct(
  new ShadingProduct(mepros_indoor_converter_1_data)
);
