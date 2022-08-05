mps_lp008_data = {
  name: 'mps-lp008',
  colorsImagesDictionary: {
    '#000000': ['../lighting-images/MPS-LP008.png'],
  },
  tags: [
    'Housing accommodates up to 3 LED lighting units(LED Board: 16 / 24 LED)',
    'Current feed: 200 mA–1500 mA, depending on ambient temperature',
    'Electronic operating device with DALI interface, 1–10 V or stand-alone programming',
    'Various light distributions for area, high bay, street or walkway lighting',
    'Lens made from PMMA, with aluminum support plate',
    'Housing made of aluminum, pole adaptor made of aluminum, cover in single-pane safety glass (ESG)',
    'Pole in hot-dip galvanized steel with cable insertion opening, junction box and service door',
    'Finish: polyester',
  ],
  tags_tr: [
    'Gövde 3 LEDe kadar aydınlatma ünitesi barındırır (LED Panosu: 16 / 24 LED)',
    'Akım beslemesi: 200 mA–1500 mA, ortam sıcaklığına bağlı olarak',
    'DALI arabirimli elektronik işletim cihazı, 1–10 V veya bağımsız programlama',
    'Alan, yüksek tavan, cadde veya geçit aydınlatması için çeşitli ışık dağılımları',
    'PMMAdan yapılmış lens, alüminyum destek plakalı',
    'Alüminyumdan gövde, alüminyumdan direk adaptörü, tek camlı güvenlik camında (ESG) kapak',
    'Kablo yerleştirme açıklığı, bağlantı kutusu ve servis kapısı ile sıcak daldırma galvanizli çelikten direk',
    'Bitiş: polyester',
  ],
};

globals.productManager.addProduct(new LightingProduct(mps_lp001_data));
