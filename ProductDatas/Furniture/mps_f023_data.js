mps_f023_data = {
  name: 'mps-f023',

  //NOTE: MPS-F023 Only has 1 image a unique splitted design will be implemented

  colorsImagesDictionary: {
    '#f5f5dc': [
      '../furniture-images/MPS-F023.jpeg',
      '../furniture-images/MPS-F023.jpeg',
      '../furniture-images/MPS-F023.jpeg',
    ],
  },
  tags: [
    'Removable wooden legs via shear connector',
    'Soft plastic glides avoid the floor damage attached under the legs of all kind',
    'Moveable seat back cushions',
    'Removable back cushion covers',
  ],
  materials: [
    'Plywood framework',
    'Elastic cords (Three Colors-70%) under the seat',
    'Wooden legs or powder coated metal legs',
    '32 Density Foam Seat',
    'High resilient foam core and blown fiber filled back cushions (separated) (1/1)',
    'Hypersoft foam lamination',
    '60gr/m2 fibre lamination',
  ],
  instructions:
    'Dry clean only. Unzip cushion covers and dry clean. Remove non-greasy stains by carefully dabbing with a lint-free cloth or sponge wrung out in clean warm water. If necessary, clean by dabbing with soapy water or water with a little dish soap. Finally dab the surface with clean water.',
};

globals.productManager.addProduct(new FurnitureProduct(mps_f023_data));
