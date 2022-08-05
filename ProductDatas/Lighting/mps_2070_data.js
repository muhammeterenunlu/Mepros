mps_2070_data = {
  name: "mps-2070",
  colorsImagesDictionary: {
    "#ffffff": [
      "../lighting-images/MPS2070.png",
      "../lighting-images/MPS2070-1.png",
    ],
  },
  tags: [
    "Material: Metal Aluminum Body, electrostatic powder coat",
    "Socket: e27",
    "Volt: 220V",
    "Color Options: Black, White, Red, Yellow, Patina",
  ],
  tags_tr: [
    'Materyal: Metal Alüminyum Gövde, elektrostatik toz boya',
    'Duy: e27',
    'Volt: 220V',
    'Renk Seçenekleri: Siyah, Beyaz, Kırmızı, Sarı, Patina'
  ],
}

globals.productManager.addProduct(new LightingProduct(mps_2070_data));
