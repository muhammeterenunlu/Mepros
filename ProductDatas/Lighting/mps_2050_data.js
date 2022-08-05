mps_2050_data = {
  name: "mps-2050",
  colorsImagesDictionary: {
    "#000000": [
      "../lighting-images/MPS2050.png",
      "../lighting-images/MPS2050-1.png",
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

globals.productManager.addProduct(new LightingProduct(mps_2050_data));
