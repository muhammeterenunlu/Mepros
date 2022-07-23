mps_lp050_data = {
  name: 'mps-lp050',
  colorsImagesDictionary: {
    '#8B5A23': ['../lighting-images/MPS-LP050.png'],
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
};

globals.productManager.addProduct(new LightingProduct(mps_lp050_data));
