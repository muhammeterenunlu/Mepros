mps_f032_data = {
  name: 'mps-f032',
  colorsImagesDictionary: {
    '#909194': [
      '../furniture-images/MPS-F032v1.jpeg',
      '../furniture-images/MPS-F032v2.jpeg',
      '../furniture-images/MPS-F032v3.jpeg',
    ],
  },
  tags: [
    'Removable metal legs via screwer',
    'Removable wooden legs via shear connector',
    'Soft plastic glides avoiding the floor damage attached under the legs of all kind',
    'Moveable seat back cushions',
    'Removable back cushion covers',
  ],
  tags_tr: [
    'Tornavida yardımıyla çıkarılabilen metal ayaklar',
    'Kesme konnektörü yardımıyla çıkarılabilen ahşap ayaklar',
    'Ayakların altındaki yumuşak plastik zemine zarar gelmesini önler',
    'Taşınılabilir oturak ve minderler',
    'Çıkarılabilir minder kılıfları',
  ],
  materials: [
    'Plywood framework',
    'Elastic cords (Three Colors-70%) under the seat',
    'Wooden legs or powder coated metal legs',
    '32 Density Foam Seat',
    'High resilient foam core and blown fibre filled back cushions (separated) (1/1)',
    'Hypersoft foam lamination',
    '60gr/m2 fibre lamination',
  ],
  materials_tr: [
    'Kontrplak iskelet',
    'Elastik Kordonlar (Üç Renk-70%) oturağın altında',
    'Ahşap ayaklar veya toz boyalı metal ayaklar',
    '32 yoğunluk oturak süngeri',
    'Çok esnek sünger merkezi ve elyaf dolgulu arka minderler (ayrık) (1/1)',
    'Hipersoft laminasyonlu sünger',
    '60gr/m2 lif laminasyon',
  ],
  instructions:
    'Dry clean only. Unzip cushion covers and dry clean. Remove non-greasy stains by carefully dabbing with a lint-free cloth or sponge wrung out in clean warm water. If necessary, clean by dabbing with soapy water or water with a little dish soap. Finally dab the surface with clean water.',
  instructions_tr:
    'Sadece kuru temizleyiniz. Minder kılıflarını çıkarıp kuru temizleyin. yağ lekesi olmayan lekeleri tiftiksiz kumaş veya temiz sıcak suda sıkılmış bir sünger kullanarak dikkatlice çitileyin. Eğer gerekirse sabunlu su veya çok az bulaşık sabunlu suyla çitileyebilirsiniz. Son olarak yüzeyi temiz suyla çitileyin.',
  technicalData: '../techdata/MPS-F032.pdf',
};

globals.productManager.addProduct(new FurnitureProduct(mps_f032_data));
