mepros_outdoor_converter_1_data = {
  name: 'mepros-outdoor-converter-1',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/mepros-outdoor-converter-1.png'],
  },
  tags: [
    'Operating Voltage: 110/220V AC',
    'Output Voltage: 24V DC',
    'Rating Current: 3.125-12.5 A DC (Optional)',
    'Protection Class: IP67',
  ],
  tags_tr: [
    'Çalışma Voltajı: 110/220V AC',
    'Çıkış Voltajı: 24V DC',
    'Derecelendirme Akımı: 3.125-12.5 A DC (Opsiyonel)',
    'Koruma Sınıfı: IP67',
  ],
};

globals.productManager.addProduct(
  new ShadingProduct(mepros_outdoor_converter_1_data)
);
