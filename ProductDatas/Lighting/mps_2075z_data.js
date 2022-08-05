mps_2075z_data = {
  name: "mps-2075z",
  colorsImagesDictionary: {
    "#000000": [
      "../lighting-images/MPS2075Z.png",
      "../lighting-images/MPS2075Z-1.png",
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

globals.productManager.addProduct(new LightingProduct(mps_2075z_data));
