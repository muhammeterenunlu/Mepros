mps_2090_data = {
  name: "mps-2090",
  colorsImagesDictionary: {
    "#ffff20": [
      "../lighting-images/MPS2090.png",
      "../lighting-images/MPS2090-1.png",
    ],
  },
  tags: [
    "Material: Metal Aluminum Body, electrostatic powder coat",
    "Socket: e27",
    "Volt: 220V",
    "Color Options: Black, Yellow, White, Red",
  ],
  tags_tr: [
    'Materyal: Metal Alüminyum Gövde, elektrostatik toz boya',
    'Duy: e27',
    'Volt: 220V',
    'Renk Seçenekleri: Siyah, Beyaz, Sarı, Kırmızı'
  ],
}

globals.productManager.addProduct(new LightingProduct(mps_2090_data));
