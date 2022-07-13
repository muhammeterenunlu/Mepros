mps_f016_data = {
  name: 'mps-f016',
  colorsImagesDictionary: {
    '#202f5c': [
      '../furniture-images/MPS-F016v1.jpeg',
      '../furniture-images/MPS-F016v2.jpeg',
      '../furniture-images/MPS-F016v3.jpeg',
    ],
  },
  tags: [
    'Removable metal legs via screwer',
    'Soft plastic glides avoid the floor damage attached under the legs of all kind',
    'Moveable seat and back cushions',
    'Removable back cushion covers',
    'Additioanl two-cylinder cushions for decorative purposes',
  ],
  materials: [
    'Plywood framework',
    'Elastic cords (Three Colors-70%) under the seat',
    'Powder-coated metal legs',
    '32 Density Foam Seat',
    'High resilient foam core and blown fiber filled back cushions (separated) (1/3)',
    'Hypersoft foam lamination',
    '60gr/m2 fibre lamination',
  ],
  instructions:
    'Dry clean only. Unzip cushion covers and dry clean. Remove non-greasy stains by carefully dabbing with a lint-free cloth or sponge wrung out in clean warm water. If necessary, clean by dabbing with soapy water or water with a little dish soap. Finally dab the surface with clean water.',

  technicalData: "../techadata/MPS-F016.pdf",
};

globals.productManager.addProduct(new FurnitureProduct(mps_f016_data));
