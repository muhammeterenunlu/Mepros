mps_lp013_data = {
  name: 'mps-lp013',
  colorsImagesDictionary: {
    '#8B5A23': ['../lighting-images/MPS-LP013.png'],
  },
  tags: [
    'Housing accommodates up to 3 LED lighting units (LED Board: 16 / 24 LED)',
    'Current feed: 200 mA–1500 mA, depending on ambient temperature',
    'Electronic operating device with DALI interface, 1–10 V or stand-alone programming',
    'Various light distributions for area, high bay, street or walkway lighting',
    'Lens made from PMMA, with aluminum support plate',
    'Housing made of aluminum, pole adaptor made of aluminum, cover in single-pane safety glass (ESG)',
    'Pole in hot-dip galvanized steel with cable insertion opening, junction box and service door',
    'Finish: polyester',
  ],
};

globals.productManager.addProduct(new LightingProduct(mps_lp013_data));
