mps_lp051_data = {
  name: 'mps-lp051',
  colorsImagesDictionary: {
    '#000000': ['../lighting-images/MPS-LP051.png'],
  },
  tags: [
    'Various light distributions for walkway lighting',
    'Lens made from PMMA',
    'Current feed: 200 mA–700 mA, depending on ambient temperature',
    'Housing made of aluminum',
    'Pole made of extruded aluminum profile',
    'Finish: polyester powder coating, black',
    '(RAL 9005), other colours upon request',
  ],
  tags_tr: [
    'Yol aydınlatması için çeşitli ışık dağılımları',
    'PMMAdan yapılmış lens',
    'Akım beslemesi: Ortam sıcaklığına bağlı olarak 200 mA–700 mA',
    'Alüminyumdan yapılmış gövde',
    'Ekstrüde alüminyum profilden yapılmış direk',
    'Bitiş: polyester toz boya, siyah',
    '(RAL 9005), istek üzerine diğer renkler',
  ],
};

globals.productManager.addProduct(new LightingProduct(mps_lp051_data));
