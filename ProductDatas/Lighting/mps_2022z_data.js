mps_2022z_data = {
  name: "mps-2022z",
  colorsImagesDictionary: {
    "#1d1d1b": [
      "../lighting-images/MPS2022z.png",
      "../lighting-images/MPS2022z-1.png",
    ],
  },
  tags: [
    "Material: Metal Aluminum Body, electrostatic powder coat",
    "Socket: e27",
    "Volt: 220V",
    "Color Options: Black, White, Red, Yellow",
  ],
  tags_tr: [
    'Materyal: Metal Alüminyum Gövde, elektrostatik toz boya',
    'Duy: e27',
    'Volt: 220V',
    'Renk Seçenekleri: Siyah, Beyaz, Kırmızı, Sarı'
  ],
}

globals.productManager.addProduct(new LightingProduct(mps_2022z_data));
