mps_2010_data = {
  name: "mps-2010",
  colorsImagesDictionary: {
    "#1d1d1b": [
      "../lighting-images/MPS2010.png",
      "../lighting-images/MPS2010-1.png",
    ],
    "#f5c884": [
      "../lighting-images/MPS2010p.png",
      "../lighting-images/MPS2010p-1.png",
    ],
  },
  tags: [
    "Material: Metal Aluminum Body, electrostatic powder coat",
    "Socket: e27",
    "Volt: 220V",
  ],
}

globals.productManager.addProduct(new LightingProduct(mps_2010_data));
