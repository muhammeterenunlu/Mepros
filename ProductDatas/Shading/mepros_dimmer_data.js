mepros_dimmer_data = {
  name: 'mepros-dimmer',
  colorsImagesDictionary: {
    '#3d3d3d': ['../shading-images/mepros-dimmer.png'],
  },
  tags: [
    'Operating Voltage: 12-24V',
    'Rating Current: 24A / CH',
    'Total Channel: 4(Red-Green-Blue-White)',
    'Communication Type: Rf',
    'Communication Frequency: 433 Mhz',
    'Encryption Type: 128 Bit',
  ],
  tags_tr: [
    'Çalışmna Gerilimi: 12-24V',
    'Derecelendirme Akımı: 24A / CH',
    'İletişim Tipi: Rf',
    'İletişim Frekansı: 433 Mhz',
    'Şifreleme Tipi: 128 Bit',
  ],
};

globals.productManager.addProduct(new ShadingProduct(mepros_dimmer_data));
