mps_2040_data = {
  name: "mps-2040",
  colorsImagesDictionary: {
    "#ffffff": [
      "../lighting-images/MPS2040.png",
      "../lighting-images/MPS2040-1.png",
    ],
  },
  tags: [
    "Material: Metal Aluminum Body, electrostatic powder coat",
    "Socket: e27",
    "Volt: 220V",
    "Color Options: Black, White"
  ],
  tags_tr: [
    'Materyal: Metal Alüminyum Gövde, elektrostatik toz boya',
    'Duy: e27',
    'Volt: 220V',
    'Renk Seçenekleri: Siyah, Beyaz'
  ],
}

globals.productManager.addProduct(new LightingProduct(mps_2040_data));
