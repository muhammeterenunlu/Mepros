mps_2023_data = {
  name: "mps-2023",
  colorsImagesDictionary: {
    "#1d1d1b": [
      "../lighting-images/MPS2023.png",
      "../lighting-images/MPS2023-1.png",
    ],
  },
  tags: [
    "Material: Metal Aluminum Body, electrostatic powder coat",
    "Socket: e27",
    "Volt: 220V",
    "Color Options: Black, Orange, Pink, Cyan, Green, Red, Yellow",
  ],
  tags_tr: [
    'Materyal: Metal Alüminyum Gövde, elektrostatik toz boya',
    'Duy: e27',
    'Volt: 220V',
    'Renk Seçenekleri: Siyah, Turuncu, Pembe, Turkuaz, Yeşil, Kırmızı, Sarı'
  ],
}

globals.productManager.addProduct(new LightingProduct(mps_2023_data));
