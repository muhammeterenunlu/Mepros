mps_f027_data = {
  name: 'mps-f027',
  colorsImagesDictionary: {
    '#000000': [
      '../furniture-images/MPS-F027v1.jpeg',
      '../furniture-images/MPS-F027v2.jpeg',
      '../furniture-images/MPS-F027v3.jpeg',
    ],
  },
  tags: ['Baba Manuel (Auto)'],
  tags_tr: ['Baba Manuel (Otomatik)'],
  materials: [
    'Plywood framework',
    'Elastic cords under the seat',
    'Remote',
    '32 Density Foam Seat',
    'High resilient foam core and blown fibre filled back cushions (separated) (1/1)',
    'Hypersoft foam lamination',
    '60gr/m2 fibre lamination',
  ],
  materials_tr: [
    'Kontrplak iskelet',
    'Elastik Kordonlar oturağın altında',
    'Mesafeli',
    '32 yoğunluk oturak süngeri',
    'Çok esnek sünger merkezi ve elyaf dolgulu arka minderler (ayrık) (1/1)',
    'Hipersoft laminasyonlu sünger',
    '60gr/m2 lif laminasyon',
  ],
  instructions:
    'Dry clean only. Unzip cushion covers and dry clean. Remove non-greasy stains by carefully dabbing with a lint-free cloth or sponge wrung out in clean warm water. If necessary, clean by dabbing with soapy water or water with a little dish soap. Finally dab the surface with clean water.',
  instructions_tr:
    'Sadece kuru temizleyiniz. Minder kılıflarını çıkarıp kuru temizleyin. yağ lekesi olmayan lekeleri tiftiksiz kumaş veya temiz sıcak suda sıkılmış bir sünger kullanarak dikkatlice çitileyin. Eğer gerekirse sabunlu su veya çok az bulaşık sabunlu suyla çitileyebilirsiniz. Son olarak yüzeyi temiz suyla çitileyin.',
};

globals.productManager.addProduct(new FurnitureProduct(mps_f027_data));
