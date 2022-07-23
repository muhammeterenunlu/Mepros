mps_lp004_data = {
  name: 'mps-lp004',
  colorsImagesDictionary: {
    '#8B5A23': ['../lighting-images/MPS-LP004.png'],
  },
  tags: [
    'Housing accommodates up to 6 LED lighting units (LED Board: 16 / 32 / 48 / 64 / 80 / 96 LED)',
    'Current feed: 200 mA–1500 mA, depending on ambient temperature',
    'Electronic operating device with DALI interface, 1–10 V or stand-alone programming',
    'Various light distributions for area, high bay, street or walkway lighting *Lens made from PMMA, with aluminum support plate',
    'Housing made of extruded aluminum profile, cover in single-pane safety glass',
    'Pole in hot-dip galvanized steel with cable insertion opening, junction box and service door',
    'Finish: polyester powder coating, anthracite, other colours upon request',
  ],
};

globals.productManager.addProduct(new LightingProduct(mps_lp004_data));
