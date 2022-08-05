mps_lp005_data = {
  name: 'mps-lp005',
  colorsImagesDictionary: {
    '#000000': ['../lighting-images/MPS-LP005.png'],
  },
  tags: [
    'Housing accommodates up to 6 LED lighting units (LED Board: 16 / 32 / 48 / 64 / 80 / 96 LED)',
    'Current feed: 200 mA–1500 mA, depending on ambient temperature',
    'Electronic operating device with DALI interface, 1–10 V or stand-alone programming',
    'Various light distributions for area, high bay, street or walkway lighting',
    'Lens made from PMMA, with aluminum support plate',
    'Housing made of extruded aluminum profile, cover in single-pane safety glass',
    'Pole in hot-dip galvanized steel with cable insertion opening, junction box and service door',
    'Finish: polyester powder coating, anthracite, other colours upon request',
  ],
  tags_tr: [
    'Gövde 6 adete kadar LED aydınlatma ünitesi barındırır (LED Panosu: 16/32/48/64/80/96 LED)',
    'Akım beslemesi: 200 mA–1500 mA, ortam sıcaklığına bağlı olarak',
    'DALI arabirimli elektronik işletim cihazı, 1–10 V veya bağımsız programlama',
    'Alan, yüksek koy, cadde veya geçit aydınlatması için çeşitli ışık dağılımları',
    'Alüminyum destek plakalı PMMAdan yapılmış lens',
    'Ekstrüde alüminyum profilden yapılmış gövde, tek camlı güvenlik camında kapak',
    'Kablo yerleştirme açıklığı, bağlantı kutusu ve servis kapısı ile sıcak daldırma galvanizli çelikten direk',
    'Bitiş: polyester toz boya, antrasit, istek üzerine diğer renkler',
  ],
};

globals.productManager.addProduct(new LightingProduct(mps_lp005_data));
