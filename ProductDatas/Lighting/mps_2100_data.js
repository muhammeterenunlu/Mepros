mps_2100_data = {
  name: "mps-2100",
  colorsImagesDictionary: {
    "#ffff20": [
      "../lighting-images/MPS2100.png",
      "../lighting-images/MPS2100-1.png",
    ],
  },
  tags: [
    "Material: Metal Aluminum Body, electrostatic powder coat",
    "Socket: e27",
    "Volt: 220V",
    "Color Options: Black, Yellow, White, Fuschia",
  ],
  tags_tr: [
    'Materyal: Metal Alüminyum Gövde, elektrostatik toz boya',
    'Duy: e27',
    'Volt: 220V',
    'Renk Seçenekleri: Siyah, Beyaz, Sarı, Fuşya'
  ],
}

globals.productManager.addProduct(new LightingProduct(mps_2100_data));
