mps_2050z_data = {
  name: "mps-2050z",
  colorsImagesDictionary: {
    "#000000": [
      "../lighting-images/MPS2050Z.png",
      "../lighting-images/MPS2050Z-1.png",
    ],
  },
  tags: [
    "Material: Metal Aluminum Body, electrostatic powder coat",
    "Socket: e27",
    "Volt: 220V",
    "Color Options: Red, White, Black, Yellow"
  ],
  tags_tr: [
    'Materyal: Metal Alüminyum Gövde, elektrostatik toz boya',
    'Duy: e27',
    'Volt: 220V',
    'Renk Seçenekleri: Kırmızı, Beyaz, Siyah, Sarı'
  ],
}

globals.productManager.addProduct(new LightingProduct(mps_2050z_data));
