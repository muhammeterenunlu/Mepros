mps_f040_data = {
  name: 'mps-f040',
  colorsImagesDictionary: {
    '#909194': [
      '../furniture-images/MPS-F040v1-1.jpeg',
      '../furniture-images/MPS-F040v2-1.jpeg',
      '../furniture-images/MPS-F040v3-1.jpeg',
    ],
    '#b5a919': [
      '../furniture-images/MPS-F040v1-2.jpeg',
      '../furniture-images/MPS-F040v2-2.jpeg',
      '../furniture-images/MPS-F040v3-2.jpeg',
    ],
  },
  tags: [
    'Removable metal legs via screwer',
    'Soft plastic glides avoid the floor damage attached under the legs of all kind',
    'Additional two small cushions for decorative purposes.',
  ],
  tags_tr: [
    'Tornavida ile çıkarılabilir metal ayaklar',
    'Yumuşak plastik kayarlar, her türlü ayak altına takılan zemin hasarını önler',
    'Dekoratif amaçlı ek iki küçük minder.',
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
  materials_tr: [
    'Kontrplak iskelet',
    'Elastik Kordonlar (Üç Renk-70%) oturağın altında',
    'Toz kaplı metal ayaklar',
    '32 yoğunluk oturak süngeri',
    'Çok esnek sünger merkezi ve elyaf dolgulu arka minderler (ayrık) (1/3)',
    'Hipersoft laminasyonlu sünger',
    '60gr/m2 lif laminasyon',
  ],
  instructions:
    'Dry clean only. Unzip cushion covers and dry clean. Remove non-greasy stains by carefully dabbing with a lint-free cloth or sponge wrung out in clean warm water. If necessary, clean by dabbing with soapy water or water with a little dish soap. Finally dab the surface with clean water.',
  instructions_tr:
    'Sadece kuru temizleyiniz. Minder kılıflarını çıkarıp kuru temizleyin. yağ lekesi olmayan lekeleri tiftiksiz kumaş veya temiz sıcak suda sıkılmış bir sünger kullanarak dikkatlice çitileyin. Eğer gerekirse sabunlu su veya çok az bulaşık sabunlu suyla çitileyebilirsiniz. Son olarak yüzeyi temiz suyla çitileyin.',
  technicalData: '../techdata/MPS-F040.pdf',
};

globals.productManager.addProduct(new FurnitureProduct(mps_f040_data));
