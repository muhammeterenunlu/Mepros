mps_3010_data = {
  name: "mps-3010",
  colorsImagesDictionary: {
    "#ffffff": [
      "../lighting-images/MPS3010.png",
      "../lighting-images/MPS3010-1.png",
    ],
  },
  tags: [
    "Material: Electrostatic powder coat, covered with lac, rozans is applicable, opal glass",
    "Socket: e27",
    "Volt: 220V",
    "Applicable Colors: Copper, Golden, Silver, Black, Aging Paint",
  ],
  tags_tr: [
    "Materyal: Opal ve üfleme cam, Elektrostatik toz boya, Lak kaplama, rozans ile uygulanabilir",
    "Duy: e27",
    "Volt: 220V",
    "Uygulanabilir Renkler: Bakır, Altın, Gümüş, Siyah, Eskitme",
  ],
}

globals.productManager.addProduct(new LightingProduct(mps_3010_data));
