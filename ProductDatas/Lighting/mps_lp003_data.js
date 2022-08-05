mps_lp003_data = {
  name: 'mps-lp003',
  colorsImagesDictionary: {
    '#000000': ['../lighting-images/MPS-LPO03.png'],
  },
  tags: [
    'Housing accommodates up to 5 LED lighting units (LED Board: 32 / 48 / 64 / 80 LED)',
    'Current feed: 200 mA–1500 mA, depending on ambient temperature',
    'Electronic operating device with DALI interface, 1–10 V or stand-alone programming',
    'Various light distributions for area, high bay, street or walkway lighting',
    'Lens made from PMMA, with aluminum support plate',
    'Cover in single-pane safety glass',
    'Die-cast aluminum housing, pole adapter made of aluminum swivels from 0 to 90° in 5° increments, for pole 60 mm',
    'Finish: polyester',
  ],
  tags_tr: [
    'Gövde 5 adete kadar LED aydınlatma ünitesi barındırabilir (LED Panosu: 32 / 48 / 64 / 80 LED)',
    'Akım beslemesi: 200 mA–1500 mA, ortam sıcaklığına bağlı olarak',
    'DALI arabirimli elektronik işletim cihazı, 1–10 V veya bağımsız programlama',
    'Alan, yüksek koy, cadde veya geçit aydınlatması için çeşitli ışık dağılımları',
    'Alüminyum destek plakalı PMMAdan yapılmış lens',
    'Tek camlı güvenlik camıyla örtün',
    'Döküm alüminyum gövde, alüminyumdan yapılmış direk adaptörü, 0dan 90°ye 5°lik artışlarla, 60 mm direk için',
    'Bitiş: polyester',
  ],
};

globals.productManager.addProduct(new LightingProduct(mps_lp003_data));
