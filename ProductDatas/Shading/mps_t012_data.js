mps_t012_data = {
  name: 'mps-t012',
  colorsImagesDictionary: {
    '#000000': ['../shading-images/MPS-T012.png'],
  },
  tags: [
    'Operating Voltage: 220V AC',
    'Output Voltage: 24V DC',
    'Rating Current: 2-3.1-4.16-6-8.33-10-14.5-15-21 A',
  ],
};

globals.productManager.addProduct(new ShadingProduct(mps_t012_data));
