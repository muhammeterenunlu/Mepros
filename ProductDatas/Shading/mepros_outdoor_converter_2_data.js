mepros_outdoor_converter_2_data = {
  name: 'mepros-outdoor-converter-2',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/mepros-outdoor-converter-2.png'],
  },
  tags: [
    'Operating Voltage: 110/220V AC',
    'Output Voltage: 12V DC',
    'Rating Current: 6.25-25 A DC (Optional)',
    'Protection Class: IP67',
  ],
  tags_tr: [
    'Çalışma Voltajı: 110/220V AC',
    'Çıkış Voltajı: 12V DC',
    'Derecelendirme Akımı: 6.25-25 A DC (Opsiyonel)',
    'Koruma Sınıfı: IP67',
  ],
};

globals.productManager.addProduct(
  new ShadingProduct(mepros_outdoor_converter_2_data)
);
