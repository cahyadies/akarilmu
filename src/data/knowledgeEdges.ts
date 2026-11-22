import { KnowledgeEdge } from '../types/knowledge';

export const KNOWLEDGE_EDGES: KnowledgeEdge[] = [
  // Root -> Pillar
  { id: 'e-mat-kal', from: 'matematika', to: 'kalkulus-aljabar', strength: 'primary', reason: 'Kalkulus dan aljabar linear adalah lanjutan langsung matematika SMA/K atau sederajat.' },
  { id: 'e-mat-stat', from: 'matematika', to: 'statistika-peluang', strength: 'primary', reason: 'Teori peluang dan hitung matematis menopang seluruh inferensi data.' },
  { id: 'e-mat-algo', from: 'matematika', to: 'algoritma-komputasi', strength: 'primary', reason: 'Matematika diskrit, himpunan, dan graf menjadi dasar algoritma.' },
  { id: 'e-mat-mek', from: 'matematika', to: 'mekanika-termo', strength: 'primary', reason: 'Gaya, aliran fluida, dan perpindahan panas dihitung memakai kalkulus.' },
  { id: 'e-mat-lis', from: 'matematika', to: 'listrik-sinyal', strength: 'primary', reason: 'Pengolahan sinyal dan rangkaian listrik memakai kalkulus serta matriks.' },
  { id: 'e-mat-ekon', from: 'matematika', to: 'ekonomi-keuangan', strength: 'supporting', reason: 'Pemodelan kurva pasar, optimasi, dan nilai uang memakai alat hitung matematis.' },
  { id: 'e-mat-ind', from: 'matematika', to: 'manajemen-sistem-industri', strength: 'primary', reason: 'Riset operasi dan optimasi rantai pasok bertumpu pada pemodelan matematika.' },

  { id: 'e-fis-mek', from: 'fisika', to: 'mekanika-termo', strength: 'primary', reason: 'Hukum gerak, gaya, fluida, dan kalor adalah inti mekanika teknik.' },
  { id: 'e-fis-lis', from: 'fisika', to: 'listrik-sinyal', strength: 'primary', reason: 'Elektromagnetisme dan gelombang menjadi dasar sistem elektronika.' },
  { id: 'e-fis-kim', from: 'fisika', to: 'kimia-organik-material', strength: 'supporting', reason: 'Termodinamika dan sifat fisik menentukan perilaku logam, polimer, dan reaktor.' },
  { id: 'e-fis-bumi', from: 'fisika', to: 'kebumian-geospasial', strength: 'primary', reason: 'Gelombang seismik, dinamika atmosfer, arus laut, dan sinyal satelit mengikuti fisika.' },
  { id: 'e-fis-ind', from: 'fisika', to: 'manajemen-sistem-industri', strength: 'supporting', reason: 'Memahami proses manufaktur, mesin produksi, dan ergonomi fisik.' },
  { id: 'e-fis-vis', from: 'fisika', to: 'visual-ruang-estetika', strength: 'supporting', reason: 'Pencahayaan, akustik ruang, termal bangunan, dan struktur menopang arsitektur dan interior.' },

  { id: 'e-kim-mat', from: 'kimia', to: 'kimia-organik-material', strength: 'primary', reason: 'Ikatan kimia dan reaksi senyawa membentuk dasar rekayasa bahan dan proses.' },
  { id: 'e-kim-bio', from: 'kimia', to: 'biokimia-genetika', strength: 'primary', reason: 'Metabolisme sel, enzim, nutrisi, dan kerja obat adalah reaksi kimia organik.' },
  { id: 'e-kim-ana', from: 'kimia', to: 'anatomi-fisiologi', strength: 'supporting', reason: 'Keseimbangan pH darah, elektrolit, dan hormon bekerja lewat reaksi kimia.' },
  { id: 'e-kim-agro', from: 'kimia', to: 'agronomi-hayati', strength: 'primary', reason: 'Kesuburan tanah, nutrisi pakan, dan kimia pangan bergantung pada reaksi kimia.' },
  { id: 'e-kim-bumi', from: 'kimia', to: 'kebumian-geospasial', strength: 'primary', reason: 'Analisis mineral batuan, kualitas air laut, dan polutan lingkungan memakai kimia.' },

  { id: 'e-bio-biokim', from: 'biologi', to: 'biokimia-genetika', strength: 'primary', reason: 'Struktur sel, DNA, mikroba, dan sintesis protein berakar dari biologi.' },
  { id: 'e-bio-ana', from: 'biologi', to: 'anatomi-fisiologi', strength: 'primary', reason: 'Pemahaman jaringan, organ, dan kesehatan manusia maupun hewan berasal dari biologi.' },
  { id: 'e-bio-agro', from: 'biologi', to: 'agronomi-hayati', strength: 'primary', reason: 'Budidaya tanaman, genetika ternak, dan ekologi hutan berakar di biologi.' },
  { id: 'e-bio-bumi', from: 'biologi', to: 'kebumian-geospasial', strength: 'supporting', reason: 'Ekosistem laut, terumbu karang, dan pengolahan limbah hayati membutuhkan biologi.' },
  { id: 'e-bio-psi', from: 'biologi', to: 'psikologi-pendidikan', strength: 'supporting', reason: 'Cara kerja otak, sistem saraf, dan perkembangan biologis memengaruhi perilaku.' },

  { id: 'e-geo-bumi', from: 'geografi', to: 'kebumian-geospasial', strength: 'primary', reason: 'Kartografi, SIG, bentang alam, iklim, dan wilayah laut adalah fondasi kebumian.' },
  { id: 'e-geo-agro', from: 'geografi', to: 'agronomi-hayati', strength: 'supporting', reason: 'Iklim mikro, jenis tanah, dan pemetaan lahan menentukan pertanian serta kehutanan.' },
  { id: 'e-geo-hkm', from: 'geografi', to: 'hukum-tata-kelola', strength: 'supporting', reason: 'Letak wilayah dan sumber daya alam membentuk geopolitik dan tata ruang publik.' },

  { id: 'e-eko-keu', from: 'ekonomi', to: 'ekonomi-keuangan', strength: 'primary', reason: 'Teori pasar, insentif, dan akuntansi dasar menjadi fondasi analisis ekonomi.' },
  { id: 'e-eko-stat', from: 'ekonomi', to: 'statistika-peluang', strength: 'supporting', reason: 'Kasus ekonomi dan risiko keuangan memberi konteks nyata untuk ekonometrika dan aktuaria.' },
  { id: 'e-eko-ind', from: 'ekonomi', to: 'manajemen-sistem-industri', strength: 'primary', reason: 'Analisis biaya, kelayakan proyek, dan rantai pasok memakai prinsip ekonomi.' },
  { id: 'e-eko-hkm', from: 'ekonomi', to: 'hukum-tata-kelola', strength: 'supporting', reason: 'Anggaran negara, perdagangan global, dan kebijakan publik selalu terikat ekonomi.' },

  { id: 'e-sos-hkm', from: 'sosiologi', to: 'hukum-tata-kelola', strength: 'primary', reason: 'Sejarah kekuasaan, pranata negara, dan struktur sosial melahirkan hukum dan politik.' },
  { id: 'e-sos-psi', from: 'sosiologi', to: 'psikologi-pendidikan', strength: 'primary', reason: 'Dinamika keluarga, masyarakat, dan budaya membentuk perilaku serta pendidikan.' },
  { id: 'e-sos-ling', from: 'sosiologi', to: 'linguistik-media-budaya', strength: 'primary', reason: 'Sejarah dan konteks sosial menentukan makna media, arsip, dan warisan budaya.' },
  { id: 'e-sos-vis', from: 'sosiologi', to: 'visual-ruang-estetika', strength: 'supporting', reason: 'Desain bangunan, produk, dan komunikasi visual harus memahami budaya penggunanya.' },
  { id: 'e-sos-ind', from: 'sosiologi', to: 'manajemen-sistem-industri', strength: 'supporting', reason: 'Organisasi kerja dan manajemen SDM membutuhkan pemahaman perilaku kelompok.' },

  { id: 'e-bhs-ling', from: 'bahasa', to: 'linguistik-media-budaya', strength: 'primary', reason: 'Tata bahasa, semantik, sastra, dan penyuntingan menjadi bahan baku komunikasi dan arsip.' },
  { id: 'e-bhs-hkm', from: 'bahasa', to: 'hukum-tata-kelola', strength: 'supporting', reason: 'Ketepatan redaksi pasal, kontrak, dan diplomasi bergantung pada penguasaan bahasa.' },
  { id: 'e-bhs-psi', from: 'bahasa', to: 'psikologi-pendidikan', strength: 'supporting', reason: 'Komunikasi mengajar dan konseling menuntut penyampaian gagasan yang jelas.' },

  { id: 'e-log-algo', from: 'logika', to: 'algoritma-komputasi', strength: 'primary', reason: 'Logika formal dan deduksi adalah aturan dasar di balik setiap algoritma.' },
  { id: 'e-log-hkm', from: 'logika', to: 'hukum-tata-kelola', strength: 'primary', reason: 'Penalaran pasal, pembuktian kasus, dan evaluasi kebijakan menuntut logika ketat.' },
  { id: 'e-log-ling', from: 'logika', to: 'linguistik-media-budaya', strength: 'supporting', reason: 'Analisis argumen, klasifikasi informasi, dan filsafat berakar pada penalaran logis.' },
  { id: 'e-log-psi', from: 'logika', to: 'psikologi-pendidikan', strength: 'supporting', reason: 'Metode riset dan etika menjaga objektivitas pengukuran perilaku manusia.' },

  { id: 'e-seni-vis', from: 'seni', to: 'visual-ruang-estetika', strength: 'primary', reason: 'Kepekaan bentuk, warna, ruang, dan komposisi menjadi inti seluruh prodi seni dan desain.' },
  { id: 'e-seni-ling', from: 'seni', to: 'linguistik-media-budaya', strength: 'supporting', reason: 'Estetika budaya dan narasi audio-visual memperkaya karya media dan film.' },

  // Pillar -> Major: Kesehatan (9)
  { id: 'e-ana-dok', from: 'anatomi-fisiologi', to: 'kedokteran', strength: 'primary', reason: 'Diagnosis klinis menuntut penguasaan struktur dan fungsi organ tubuh.' },
  { id: 'e-biokim-dok', from: 'biokimia-genetika', to: 'kedokteran', strength: 'primary', reason: 'Memahami patologi penyakit dan kerja obat di tingkat seluler.' },
  { id: 'e-lis-dok', from: 'listrik-sinyal', to: 'kedokteran', strength: 'supporting', reason: 'Membantu membaca sinyal diagnostik seperti EKG dan pencitraan medis.' },

  { id: 'e-ana-fkg', from: 'anatomi-fisiologi', to: 'kedokteran-gigi', strength: 'primary', reason: 'Penguasaan anatomi gigi, saraf rahang, dan jaringan rongga mulut.' },
  { id: 'e-biokim-fkg', from: 'biokimia-genetika', to: 'kedokteran-gigi', strength: 'primary', reason: 'Memahami infeksi oral, patologi jaringan, dan farmakologi dental.' },
  { id: 'e-kimmat-fkg', from: 'kimia-organik-material', to: 'kedokteran-gigi', strength: 'supporting', reason: 'Biomaterial tambalan, implan, dan restorasi gigi memakai ilmu material.' },

  { id: 'e-ana-fkh', from: 'anatomi-fisiologi', to: 'kedokteran-hewan', strength: 'primary', reason: 'Anatomi komparatif dan penanganan klinis lintas spesies hewan.' },
  { id: 'e-biokim-fkh', from: 'biokimia-genetika', to: 'kedokteran-hewan', strength: 'primary', reason: 'Virologi, mikrobiologi zoonosis, dan farmakologi obat hewan.' },
  { id: 'e-agro-fkh', from: 'agronomi-hayati', to: 'kedokteran-hewan', strength: 'supporting', reason: 'Kesehatan ternak, karantina, dan keamanan pangan hewani.' },

  { id: 'e-biokim-far', from: 'biokimia-genetika', to: 'farmasi', strength: 'primary', reason: 'Menjelaskan target reseptor dan metabolisme obat di dalam tubuh.' },
  { id: 'e-kimmat-far', from: 'kimia-organik-material', to: 'farmasi', strength: 'primary', reason: 'Sintesis bahan aktif dan formulasi sediaan obat berakar pada kimia organik.' },

  { id: 'e-ana-kep', from: 'anatomi-fisiologi', to: 'keperawatan', strength: 'primary', reason: 'Asuhan klinis pasien akut maupun kronis membutuhkan dasar fisiologi kuat.' },
  { id: 'e-biokim-kep', from: 'biokimia-genetika', to: 'keperawatan', strength: 'supporting', reason: 'Pemahaman dasar obat, cairan elektrolit, dan pengendalian infeksi.' },
  { id: 'e-psi-kep', from: 'psikologi-pendidikan', to: 'keperawatan', strength: 'supporting', reason: 'Komunikasi terapeutik dan pendampingan psikologis pasien serta keluarga.' },

  { id: 'e-ana-bid', from: 'anatomi-fisiologi', to: 'kebidanan', strength: 'primary', reason: 'Fisiologi reproduksi, kehamilan, persalinan, dan kesehatan bayi.' },
  { id: 'e-biokim-bid', from: 'biokimia-genetika', to: 'kebidanan', strength: 'supporting', reason: 'Nutrisi ibu hamil, hormon kehamilan, dan dasar farmakologi aman.' },
  { id: 'e-psi-bid', from: 'psikologi-pendidikan', to: 'kebidanan', strength: 'supporting', reason: 'Edukasi keluarga dan pendekatan sosial budaya di layanan kesehatan ibu.' },

  { id: 'e-ana-gizi', from: 'anatomi-fisiologi', to: 'ilmu-gizi', strength: 'primary', reason: 'Menentukan terapi diet sesuai kondisi organ dan fisiologi pasien.' },
  { id: 'e-biokim-gizi', from: 'biokimia-genetika', to: 'ilmu-gizi', strength: 'primary', reason: 'Menjelaskan metabolisme zat gizi makro dan mikro menjadi energi.' },
  { id: 'e-psi-gizi', from: 'psikologi-pendidikan', to: 'ilmu-gizi', strength: 'supporting', reason: 'Edukasi perubahan kebiasaan makan masyarakat.' },

  { id: 'e-ana-kesmas', from: 'anatomi-fisiologi', to: 'kesehatan-masyarakat', strength: 'primary', reason: 'Dasar pencegahan penyakit menular, tidak menular, dan kesehatan kerja.' },
  { id: 'e-stat-kesmas', from: 'statistika-peluang', to: 'kesehatan-masyarakat', strength: 'primary', reason: 'Epidemiologi dan biostatistika untuk membaca pola wabah dan risiko populasi.' },
  { id: 'e-hkm-kesmas', from: 'hukum-tata-kelola', to: 'kesehatan-masyarakat', strength: 'supporting', reason: 'Kebijakan kesehatan publik, jaminan kesehatan, dan regulasi K3.' },

  { id: 'e-ana-fisio', from: 'anatomi-fisiologi', to: 'fisioterapi', strength: 'primary', reason: 'Pemetaan mendalam sistem otot, tulang, sendi, dan saraf gerak.' },
  { id: 'e-mek-fisio', from: 'mekanika-termo', to: 'fisioterapi', strength: 'primary', reason: 'Biomekanika gerak, gaya beban sendi, dan terapi fisik.' },

  // Pillar -> Major: MIPA & Kebumian (6)
  { id: 'e-kal-matm', from: 'kalkulus-aljabar', to: 'matematika-murni', strength: 'primary', reason: 'Analisis real, aljabar abstrak, dan persamaan diferensial.' },
  { id: 'e-algo-matm', from: 'algoritma-komputasi', to: 'matematika-murni', strength: 'supporting', reason: 'Matematika komputasi, optimasi numerik, dan kriptografi.' },
  { id: 'e-stat-matm', from: 'statistika-peluang', to: 'matematika-murni', strength: 'supporting', reason: 'Teori probabilitas lanjut dan pemodelan stokastik.' },

  { id: 'e-mek-fism', from: 'mekanika-termo', to: 'fisika-astronomi', strength: 'primary', reason: 'Mekanika klasik, termodinamika, dan astrofisika benda langit.' },
  { id: 'e-lis-fism', from: 'listrik-sinyal', to: 'fisika-astronomi', strength: 'primary', reason: 'Elektrodinamika, optika laser, dan instrumentasi eksperimen.' },
  { id: 'e-kal-fism', from: 'kalkulus-aljabar', to: 'fisika-astronomi', strength: 'primary', reason: 'Matematika fisika sebagai bahasa perumusan teori kuantum dan kosmologi.' },

  { id: 'e-kimmat-kimm', from: 'kimia-organik-material', to: 'kimia-murni', strength: 'primary', reason: 'Sintesis organik, kimia analitik, dan karakterisasi molekul.' },
  { id: 'e-biokim-kimm', from: 'biokimia-genetika', to: 'kimia-murni', strength: 'supporting', reason: 'Kimia bahan alam dan biokimia laboratorium.' },

  { id: 'e-biokim-biotek', from: 'biokimia-genetika', to: 'bioteknologi', strength: 'primary', reason: 'Rekayasa gen, mikrobiologi, dan enzim menjadi inti bioteknologi.' },
  { id: 'e-agro-biotek', from: 'agronomi-hayati', to: 'bioteknologi', strength: 'supporting', reason: 'Keanekaragaman hayati tropis dan konservasi ekosistem.' },

  { id: 'e-stat-akt', from: 'statistika-peluang', to: 'aktuaria', strength: 'primary', reason: 'Inferensi data, probabilitas klaim, dan pemodelan risiko.' },
  { id: 'e-ekon-akt', from: 'ekonomi-keuangan', to: 'aktuaria', strength: 'primary', reason: 'Matematika keuangan, valuasi aset, dan asuransi.' },

  { id: 'e-bumi-bmkg', from: 'kebumian-geospasial', to: 'meteorologi-geofisika', strength: 'primary', reason: 'Dinamika atmosfer, gempa bumi, dan penginderaan jauh.' },
  { id: 'e-mek-bmkg', from: 'mekanika-termo', to: 'meteorologi-geofisika', strength: 'primary', reason: 'Fluida atmosfer, termodinamika awan, dan mekanika gelombang seismik.' },
  { id: 'e-kal-bmkg', from: 'kalkulus-aljabar', to: 'meteorologi-geofisika', strength: 'supporting', reason: 'Simulasi numerik prakiraan cuaca dan pemodelan seismik.' },

  // Pillar -> Major: Teknik & Rekayasa (14)
  { id: 'e-mek-sipil', from: 'mekanika-termo', to: 'teknik-sipil', strength: 'primary', reason: 'Menghitung kekuatan struktur, jembatan, dan ketahanan gempa.' },
  { id: 'e-kal-sipil', from: 'kalkulus-aljabar', to: 'teknik-sipil', strength: 'primary', reason: 'Analisis elemen struktur memakai matriks dan kalkulus.' },

  { id: 'e-mek-mesin', from: 'mekanika-termo', to: 'teknik-mesin', strength: 'primary', reason: 'Dinamika mesin, manufaktur, dan perpindahan panas.' },
  { id: 'e-kal-mesin', from: 'kalkulus-aljabar', to: 'teknik-mesin', strength: 'primary', reason: 'Simulasi gerak, getaran, dan optimasi desain mekanis.' },
  { id: 'e-lis-mesin', from: 'listrik-sinyal', to: 'teknik-mesin', strength: 'supporting', reason: 'Mekatronika dan robotika memadukan mekanika dengan sensor dan kendali.' },

  { id: 'e-lis-elektro', from: 'listrik-sinyal', to: 'teknik-elektro', strength: 'primary', reason: 'Tenaga listrik, chip semikonduktor, dan telekomunikasi.' },
  { id: 'e-kal-elektro', from: 'kalkulus-aljabar', to: 'teknik-elektro', strength: 'primary', reason: 'Analisis frekuensi, sinyal, dan sistem kendali otomatis.' },
  { id: 'e-algo-elektro', from: 'algoritma-komputasi', to: 'teknik-elektro', strength: 'supporting', reason: 'Pemrograman mikrokontroler dan sistem tertanam (IoT).' },

  { id: 'e-kimmat-tekkim', from: 'kimia-organik-material', to: 'teknik-kimia', strength: 'primary', reason: 'Kinetika reaksi dan pemilihan material proses industri.' },
  { id: 'e-mek-tekkim', from: 'mekanika-termo', to: 'teknik-kimia', strength: 'primary', reason: 'Perpindahan panas, aliran pipa, dan neraca energi pabrik.' },
  { id: 'e-kal-tekkim', from: 'kalkulus-aljabar', to: 'teknik-kimia', strength: 'supporting', reason: 'Pemodelan reaktor dan kendali proses kontinu.' },

  { id: 'e-ind-ti', from: 'manajemen-sistem-industri', to: 'teknik-industri', strength: 'primary', reason: 'Riset operasi, rantai pasok, dan ergonomi sistem kerja.' },
  { id: 'e-stat-ti', from: 'statistika-peluang', to: 'teknik-industri', strength: 'primary', reason: 'Pengendalian mutu statistik dan peramalan permintaan produksi.' },
  { id: 'e-ekon-ti', from: 'ekonomi-keuangan', to: 'teknik-industri', strength: 'supporting', reason: 'Ekonomi teknik dan kelayakan biaya sistem produksi.' },

  { id: 'e-ana-biomed', from: 'anatomi-fisiologi', to: 'teknik-biomedis', strength: 'primary', reason: 'Alat medis dan prostetik harus sesuai fisiologi tubuh manusia.' },
  { id: 'e-lis-biomed', from: 'listrik-sinyal', to: 'teknik-biomedis', strength: 'primary', reason: 'Sensor biosinyal dan instrumen diagnostik medis.' },
  { id: 'e-mek-biomed', from: 'mekanika-termo', to: 'teknik-biomedis', strength: 'supporting', reason: 'Biomekanika sendi dan aliran fluida darah.' },

  { id: 'e-mek-dirga', from: 'mekanika-termo', to: 'teknik-dirgantara', strength: 'primary', reason: 'Aerodinamika aliran udara, gaya angkat, dan struktur ringan.' },
  { id: 'e-kal-dirga', from: 'kalkulus-aljabar', to: 'teknik-dirgantara', strength: 'primary', reason: 'Persamaan kendali terbang dan simulasi fluida udara.' },

  { id: 'e-bumi-geo', from: 'kebumian-geospasial', to: 'teknik-geologi', strength: 'primary', reason: 'Pemetaan singkapan batuan, sesar gempa, dan hidrogeologi.' },
  { id: 'e-kimmat-geo', from: 'kimia-organik-material', to: 'teknik-geologi', strength: 'primary', reason: 'Mineralogi dan geokimia batuan serta energi panas bumi.' },

  { id: 'e-bumi-tambang', from: 'kebumian-geospasial', to: 'teknik-pertambangan', strength: 'primary', reason: 'Eksplorasi cadangan mineral, reservoir migas, dan tata lahan.' },
  { id: 'e-mek-tambang', from: 'mekanika-termo', to: 'teknik-pertambangan', strength: 'primary', reason: 'Mekanika batuan, stabilitas lereng tambang, dan aliran fluida sumur.' },
  { id: 'e-kimmat-tambang', from: 'kimia-organik-material', to: 'teknik-pertambangan', strength: 'supporting', reason: 'Pengolahan bijih mineral dan karakterisasi hidrokarbon.' },

  { id: 'e-kimmat-metal', from: 'kimia-organik-material', to: 'teknik-metalurgi', strength: 'primary', reason: 'Ekstraksi logam, korosi, polimer, dan material baterai.' },
  { id: 'e-mek-metal', from: 'mekanika-termo', to: 'teknik-metalurgi', strength: 'primary', reason: 'Uji kekuatan tarik logam, perlakuan panas, dan termodinamika smelter.' },

  { id: 'e-bumi-geodesi', from: 'kebumian-geospasial', to: 'teknik-geodesi', strength: 'primary', reason: 'Pemetaan satelit, SIG, fotogrametri drone, dan hidrografi.' },
  { id: 'e-kal-geodesi', from: 'kalkulus-aljabar', to: 'teknik-geodesi', strength: 'primary', reason: 'Perhitungan koordinat presisi, matriks hitung perataan, dan proyeksi peta.' },

  { id: 'e-bumi-ling', from: 'kebumian-geospasial', to: 'teknik-lingkungan', strength: 'primary', reason: 'Hidrologi, kualitas air, dan daya dukung lingkungan kota.' },
  { id: 'e-kimmat-ling', from: 'kimia-organik-material', to: 'teknik-lingkungan', strength: 'primary', reason: 'Pengukuran polutan dan proses kimia pemurnian air.' },
  { id: 'e-mek-ling', from: 'mekanika-termo', to: 'teknik-lingkungan', strength: 'supporting', reason: 'Perancangan jaringan perpipaan air bersih dan drainase.' },

  { id: 'e-mek-kapal', from: 'mekanika-termo', to: 'teknik-perkapalan', strength: 'primary', reason: 'Hidrodinamika lambung kapal, stabilitas apung, dan konstruksi baja laut.' },
  { id: 'e-bumi-kapal', from: 'kebumian-geospasial', to: 'teknik-perkapalan', strength: 'supporting', reason: 'Kondisi gelombang laut, arus, dan lingkungan pesisir pelabuhan.' },
  { id: 'e-kal-kapal', from: 'kalkulus-aljabar', to: 'teknik-perkapalan', strength: 'supporting', reason: 'Pemodelan bentuk lambung dan analisis struktur lepas pantai.' },

  { id: 'e-mek-nuklir', from: 'mekanika-termo', to: 'teknik-nuklir', strength: 'primary', reason: 'Termohidrolika pembangkit dan sistem konversi energi.' },
  { id: 'e-lis-nuklir', from: 'listrik-sinyal', to: 'teknik-nuklir', strength: 'primary', reason: 'Detektor radiasi, instrumentasi medis, dan sistem tenaga energi bersih.' },
  { id: 'e-kimmat-nuklir', from: 'kimia-organik-material', to: 'teknik-nuklir', strength: 'supporting', reason: 'Material pelindung radiasi dan pengelolaan limbah radioaktif aman.' },

  // Pillar -> Major: Komputasi & Data (3)
  { id: 'e-algo-cs', from: 'algoritma-komputasi', to: 'ilmu-komputer', strength: 'primary', reason: 'Struktur data, rekayasa perangkat lunak, dan sistem komputer.' },
  { id: 'e-kal-cs', from: 'kalkulus-aljabar', to: 'ilmu-komputer', strength: 'supporting', reason: 'Aljabar linear dan matematika lanjut untuk grafika dan komputasi.' },

  { id: 'e-algo-si', from: 'algoritma-komputasi', to: 'sistem-informasi', strength: 'primary', reason: 'Perancangan basis data, aplikasi organisasi, dan arsitektur sistem.' },
  { id: 'e-ind-si', from: 'manajemen-sistem-industri', to: 'sistem-informasi', strength: 'primary', reason: 'Analisis alur proses bisnis dan manajemen proyek teknologi.' },
  { id: 'e-ekon-si', from: 'ekonomi-keuangan', to: 'sistem-informasi', strength: 'supporting', reason: 'Memastikan investasi sistem TI selaras dengan nilai bisnis.' },

  { id: 'e-stat-ds', from: 'statistika-peluang', to: 'sains-data', strength: 'primary', reason: 'Inferensi, probabilitas, dan pengujian model prediktif.' },
  { id: 'e-algo-ds', from: 'algoritma-komputasi', to: 'sains-data', strength: 'primary', reason: 'Implementasi algoritma pembelajaran mesin dan olah data besar.' },
  { id: 'e-kal-ds', from: 'kalkulus-aljabar', to: 'sains-data', strength: 'primary', reason: 'Matriks dan optimasi gradien menjadi mesin kecerdasan buatan.' },

  // Pillar -> Major: Pertanian, Pangan, Kehutanan & Kelautan (6)
  { id: 'e-agro-agrotek', from: 'agronomi-hayati', to: 'agroteknologi', strength: 'primary', reason: 'Pemuliaan tanaman, kesuburan tanah, dan perlindungan hama.' },
  { id: 'e-bumi-agrotek', from: 'kebumian-geospasial', to: 'agroteknologi', strength: 'supporting', reason: 'Kesesuaian iklim, hidrologi lahan, dan pemetaan pertanian presisi.' },

  { id: 'e-agro-agribis', from: 'agronomi-hayati', to: 'agribisnis', strength: 'primary', reason: 'Memahami karakteristik musiman dan pascapanen komoditas pertanian.' },
  { id: 'e-ekon-agribis', from: 'ekonomi-keuangan', to: 'agribisnis', strength: 'primary', reason: 'Ekonomi harga komoditas, pembiayaan tani, dan pemasaran.' },
  { id: 'e-ind-agribis', from: 'manajemen-sistem-industri', to: 'agribisnis', strength: 'supporting', reason: 'Rantai pasok dan logistik distribusi pangan.' },

  { id: 'e-agro-tekpang', from: 'agronomi-hayati', to: 'teknologi-pangan', strength: 'primary', reason: 'Sifat bahan pangan pascapanen dan mikrobiologi pangan.' },
  { id: 'e-biokim-tekpang', from: 'biokimia-genetika', to: 'teknologi-pangan', strength: 'primary', reason: 'Kimia pangan, fermentasi, dan pengujian keamanan pangan.' },
  { id: 'e-kimmat-tekpang', from: 'kimia-organik-material', to: 'teknologi-pangan', strength: 'supporting', reason: 'Teknologi pengemasan dan rekayasa proses pengolahan pabrik pangan.' },

  { id: 'e-agro-hutan', from: 'agronomi-hayati', to: 'kehutanan', strength: 'primary', reason: 'Silvikultur, ekologi hutan tropis, dan konservasi flora-fauna.' },
  { id: 'e-bumi-hutan', from: 'kebumian-geospasial', to: 'kehutanan', strength: 'primary', reason: 'Pemetaan tutupan lahan, hidrologi DAS, dan pemantauan karbon.' },

  { id: 'e-agro-ternak', from: 'agronomi-hayati', to: 'peternakan', strength: 'primary', reason: 'Nutrisi pakan, genetika bibit, dan manajemen produksi ternak.' },
  { id: 'e-biokim-ternak', from: 'biokimia-genetika', to: 'peternakan', strength: 'supporting', reason: 'Metabolisme pakan dan pengolahan kualitas susu serta daging.' },
  { id: 'e-ekon-ternak', from: 'ekonomi-keuangan', to: 'peternakan', strength: 'supporting', reason: 'Kelayakan usaha dan rantai bisnis peternakan.' },

  { id: 'e-bumi-laut', from: 'kebumian-geospasial', to: 'kelautan-perikanan', strength: 'primary', reason: 'Oseanografi arus, pasang surut, dan pemetaan wilayah pesisir.' },
  { id: 'e-agro-laut', from: 'agronomi-hayati', to: 'kelautan-perikanan', strength: 'primary', reason: 'Biologi laut, budidaya perikanan (akuakultur), dan konservasi karang.' },

  // Pillar -> Major: Arsitektur, Tata Ruang & Seni Desain (7)
  { id: 'e-vis-ars', from: 'visual-ruang-estetika', to: 'arsitektur', strength: 'primary', reason: 'Studio perancangan bentuk, proporsi ruang, dan estetika bangunan.' },
  { id: 'e-mek-ars', from: 'mekanika-termo', to: 'arsitektur', strength: 'primary', reason: 'Logika struktur konstruksi serta fisika termal dan cahaya bangunan.' },
  { id: 'e-psi-ars', from: 'psikologi-pendidikan', to: 'arsitektur', strength: 'supporting', reason: 'Ruang dirancang sesuai aktivitas dan kenyamanan penghuni.' },

  { id: 'e-bumi-pwk', from: 'kebumian-geospasial', to: 'pwk-planologi', strength: 'primary', reason: 'Pemetaan tata ruang, daya dukung lahan, dan mitigasi wilayah.' },
  { id: 'e-hkm-pwk', from: 'hukum-tata-kelola', to: 'pwk-planologi', strength: 'primary', reason: 'Regulasi tata ruang, transportasi publik, dan kebijakan pembangunan daerah.' },
  { id: 'e-ekon-pwk', from: 'ekonomi-keuangan', to: 'pwk-planologi', strength: 'supporting', reason: 'Ekonomi perkotaan, perumahan, dan pembiayaan infrastruktur.' },

  { id: 'e-vis-dkv', from: 'visual-ruang-estetika', to: 'dkv', strength: 'primary', reason: 'Tipografi, ilustrasi, tata letak, dan sistem identitas visual.' },
  { id: 'e-ling-dkv', from: 'linguistik-media-budaya', to: 'dkv', strength: 'primary', reason: 'Semiotika pesan, narasi merek, dan pemahaman audiens media.' },

  { id: 'e-vis-ux', from: 'visual-ruang-estetika', to: 'desain-interaksi', strength: 'primary', reason: 'Perancangan bentuk produk, prototipe, dan keterbacaan visual antarmuka.' },
  { id: 'e-psi-ux', from: 'psikologi-pendidikan', to: 'desain-interaksi', strength: 'primary', reason: 'Riset kebiasaan pengguna, model mental, dan uji ketergunaan.' },
  { id: 'e-algo-ux', from: 'algoritma-komputasi', to: 'desain-interaksi', strength: 'supporting', reason: 'Alur logika aplikasi digital dan kolaborasi dengan tim rekayasa.' },

  { id: 'e-vis-int', from: 'visual-ruang-estetika', to: 'desain-interior', strength: 'primary', reason: 'Komposisi ruang dalam, warna, pencahayaan, dan desain furnitur.' },
  { id: 'e-psi-int', from: 'psikologi-pendidikan', to: 'desain-interior', strength: 'supporting', reason: 'Psikologi ruang dan kenyamanan ergonomi aktivitas manusia.' },

  { id: 'e-vis-film', from: 'visual-ruang-estetika', to: 'film-animasi', strength: 'primary', reason: 'Sinematografi, tata kamera, storyboard, dan produksi animasi.' },
  { id: 'e-ling-film', from: 'linguistik-media-budaya', to: 'film-animasi', strength: 'primary', reason: 'Penulisan skenario, dramaturgi cerita, dan kajian sinema.' },

  { id: 'e-vis-seni', from: 'visual-ruang-estetika', to: 'seni-rupa-pertunjukan', strength: 'primary', reason: 'Penciptaan karya seni murni, kriya material, musik, tari, dan teater.' },
  { id: 'e-ling-seni', from: 'linguistik-media-budaya', to: 'seni-rupa-pertunjukan', strength: 'supporting', reason: 'Sejarah seni Nusantara, kritik estetika, dan kurasi budaya.' },

  // Pillar -> Major: Ekonomi & Bisnis (10)
  { id: 'e-ekon-ie', from: 'ekonomi-keuangan', to: 'ilmu-ekonomi', strength: 'primary', reason: 'Teori mikro, makro, dan kebijakan ekonomi pembangunan.' },
  { id: 'e-stat-ie', from: 'statistika-peluang', to: 'ilmu-ekonomi', strength: 'primary', reason: 'Ekonometrika menguji dampak kebijakan memakai data empiris.' },
  { id: 'e-hkm-ie', from: 'hukum-tata-kelola', to: 'ilmu-ekonomi', strength: 'supporting', reason: 'Konteks kelembagaan fiskal dan regulasi publik.' },

  { id: 'e-ekon-aktkeu', from: 'ekonomi-keuangan', to: 'akuntansi-keuangan', strength: 'primary', reason: 'Standar pelaporan, perpajakan, dan audit laporan keuangan.' },
  { id: 'e-stat-aktkeu', from: 'statistika-peluang', to: 'akuntansi-keuangan', strength: 'supporting', reason: 'Sampling audit dan evaluasi risiko keuangan perusahaan.' },

  { id: 'e-ekon-mnj', from: 'ekonomi-keuangan', to: 'manajemen-bisnis', strength: 'primary', reason: 'Struktur biaya, pemasaran, dan kelayakan keuangan usaha.' },
  { id: 'e-ind-mnj', from: 'manajemen-sistem-industri', to: 'manajemen-bisnis', strength: 'primary', reason: 'Manajemen operasi, strategi organisasi, dan pengelolaan SDM.' },
  { id: 'e-ling-mnj', from: 'linguistik-media-budaya', to: 'manajemen-bisnis', strength: 'supporting', reason: 'Komunikasi pemasaran, negosiasi, dan penyampaian strategi.' },

  { id: 'e-ekon-bdig', from: 'ekonomi-keuangan', to: 'bisnis-digital', strength: 'primary', reason: 'Model bisnis platform, monetisasi, dan pemasaran digital.' },
  { id: 'e-algo-bdig', from: 'algoritma-komputasi', to: 'bisnis-digital', strength: 'supporting', reason: 'Memahami produk digital, e-commerce, dan integrasi teknologi.' },
  { id: 'e-stat-bdig', from: 'statistika-peluang', to: 'bisnis-digital', strength: 'primary', reason: 'Analitik performa kampanye, konversi, dan data pelanggan.' },

  { id: 'e-ekon-adbis', from: 'ekonomi-keuangan', to: 'administrasi-bisnis', strength: 'primary', reason: 'Analisis usaha, perpajakan bisnis, dan operasional niaga.' },
  { id: 'e-hkm-adbis', from: 'hukum-tata-kelola', to: 'administrasi-bisnis', strength: 'primary', reason: 'Tata kelola perusahaan, hukum niaga, dan kepatuhan regulasi.' },
  { id: 'e-ind-adbis', from: 'manajemen-sistem-industri', to: 'administrasi-bisnis', strength: 'supporting', reason: 'Efisiensi alur proses dan administrasi operasional organisasi.' },

  { id: 'e-ekon-bank', from: 'ekonomi-keuangan', to: 'keuangan-perbankan', strength: 'primary', reason: 'Operasional bank, analisis kredit, dan pasar modal.' },
  { id: 'e-stat-bank', from: 'statistika-peluang', to: 'keuangan-perbankan', strength: 'primary', reason: 'Pemodelan risiko kredit, volatilitas aset, dan portofolio.' },

  { id: 'e-ekon-kewira', from: 'ekonomi-keuangan', to: 'kewirausahaan', strength: 'primary', reason: 'Validasi model bisnis, arus kas, dan pendanaan usaha baru.' },
  { id: 'e-psi-kewira', from: 'psikologi-pendidikan', to: 'kewirausahaan', strength: 'supporting', reason: 'Riset kebutuhan pelanggan dan kepemimpinan tim rintisan.' },
  { id: 'e-vis-kewira', from: 'visual-ruang-estetika', to: 'kewirausahaan', strength: 'supporting', reason: 'Perancangan prototipe produk dan pengemasan identitas merek.' },

  { id: 'e-ekon-log', from: 'ekonomi-keuangan', to: 'bisnis-internasional-logistik', strength: 'primary', reason: 'Perdagangan lintas negara, tarif ekspor-impor, dan strategi global.' },
  { id: 'e-ind-log', from: 'manajemen-sistem-industri', to: 'bisnis-internasional-logistik', strength: 'primary', reason: 'Manajemen rantai pasok global, pergudangan, dan distribusi kargo.' },
  { id: 'e-bumi-log', from: 'kebumian-geospasial', to: 'bisnis-internasional-logistik', strength: 'supporting', reason: 'Pemetaan jalur transportasi, pelabuhan, dan jaringan wilayah.' },

  { id: 'e-ekon-syar', from: 'ekonomi-keuangan', to: 'ekonomi-syariah', strength: 'primary', reason: 'Analisis perbankan, pasar modal, dan keuangan berbasis syariah.' },
  { id: 'e-hkm-syar', from: 'hukum-tata-kelola', to: 'ekonomi-syariah', strength: 'primary', reason: 'Kaidah akad muamalah, tata kelola zakat-wakaf, dan regulasi halal.' },

  { id: 'e-ekon-par', from: 'ekonomi-keuangan', to: 'pariwisata-perhotelan', strength: 'primary', reason: 'Manajemen bisnis hotel, destinasi, dan ekonomi kreatif wisata.' },
  { id: 'e-bumi-par', from: 'kebumian-geospasial', to: 'pariwisata-perhotelan', strength: 'supporting', reason: 'Perencanaan daya dukung alam dan ekowisata daerah.' },
  { id: 'e-ling-par', from: 'linguistik-media-budaya', to: 'pariwisata-perhotelan', strength: 'primary', reason: 'Layanan lintas budaya, bahasa asing, dan promosi warisan lokal.' },

  // Pillar -> Major: Hukum, Politik & Sosial (7)
  { id: 'e-hkm-hkm', from: 'hukum-tata-kelola', to: 'ilmu-hukum', strength: 'primary', reason: 'Sistem perundang-undangan, tata negara, dan penyelesaian sengketa.' },
  { id: 'e-ling-hkm', from: 'linguistik-media-budaya', to: 'ilmu-hukum', strength: 'primary', reason: 'Ketepatan tafsir pasal, perancangan kontrak, dan argumentasi hukum.' },

  { id: 'e-hkm-pol', from: 'hukum-tata-kelola', to: 'ilmu-politik', strength: 'primary', reason: 'Sistem demokrasi, pemilu, partai politik, dan kekuasaan negara.' },
  { id: 'e-stat-pol', from: 'statistika-peluang', to: 'ilmu-politik', strength: 'supporting', reason: 'Riset survei pemilih dan analisis data opini publik.' },

  { id: 'e-hkm-hi', from: 'hukum-tata-kelola', to: 'hubungan-internasional', strength: 'primary', reason: 'Geopolitik, hukum internasional, dan organisasi global.' },
  { id: 'e-ekon-hi', from: 'ekonomi-keuangan', to: 'hubungan-internasional', strength: 'supporting', reason: 'Perdagangan global, tarif, dan ekonomi politik antar-negara.' },
  { id: 'e-ling-hi', from: 'linguistik-media-budaya', to: 'hubungan-internasional', strength: 'supporting', reason: 'Diplomasi lintas budaya dan negosiasi bahasa internasional.' },

  { id: 'e-hkm-adp', from: 'hukum-tata-kelola', to: 'administrasi-publik', strength: 'primary', reason: 'Perancangan layanan publik, birokrasi, dan evaluasi kebijakan.' },
  { id: 'e-ekon-adp', from: 'ekonomi-keuangan', to: 'administrasi-publik', strength: 'primary', reason: 'Pengelolaan anggaran negara dan pembiayaan program daerah.' },

  { id: 'e-psi-sosant', from: 'psikologi-pendidikan', to: 'sosiologi-antropologi', strength: 'primary', reason: 'Etnografi, struktur sosial, dan dinamika komunitas masyarakat.' },
  { id: 'e-ling-sosant', from: 'linguistik-media-budaya', to: 'sosiologi-antropologi', strength: 'supporting', reason: 'Kajian kebudayaan, sejarah lokal, dan tradisi Nusantara.' },
  { id: 'e-stat-sosant', from: 'statistika-peluang', to: 'sosiologi-antropologi', strength: 'supporting', reason: 'Metode survei sosial dan analisis data kependudukan.' },

  { id: 'e-hkm-krim', from: 'hukum-tata-kelola', to: 'kriminologi-kessos', strength: 'primary', reason: 'Sistem peradilan, pencegahan kejahatan, dan kebijakan jaminan sosial.' },
  { id: 'e-psi-krim', from: 'psikologi-pendidikan', to: 'kriminologi-kessos', strength: 'primary', reason: 'Pendampingan kelompok rentan, rehabilitasi, dan analisis perilaku menyimpang.' },

  { id: 'e-psi-psiko', from: 'psikologi-pendidikan', to: 'psikologi', strength: 'primary', reason: 'Teori kognitif, perkembangan manusia, klinis, dan organisasi.' },
  { id: 'e-ana-psiko', from: 'anatomi-fisiologi', to: 'psikologi', strength: 'supporting', reason: 'Biopsikologi otak, sistem saraf, dan hormon perilaku.' },
  { id: 'e-stat-psiko', from: 'statistika-peluang', to: 'psikologi', strength: 'supporting', reason: 'Psikometri dan uji validitas instrumen pengukuran psikologis.' },

  // Pillar -> Major: Bahasa, Media, Pendidikan & Humaniora (7)
  { id: 'e-ling-kom', from: 'linguistik-media-budaya', to: 'komunikasi-media', strength: 'primary', reason: 'Jurnalistik, produksi pesan, penyuntingan, dan kajian media.' },
  { id: 'e-psi-kom', from: 'psikologi-pendidikan', to: 'komunikasi-media', strength: 'primary', reason: 'Membaca psikologi audiens dan dinamika opini publik.' },

  { id: 'e-ling-sastra', from: 'linguistik-media-budaya', to: 'sastra-bahasa', strength: 'primary', reason: 'Linguistik, kesusastraan, penerjemahan, dan kajian budaya.' },
  { id: 'e-psi-sastra', from: 'psikologi-pendidikan', to: 'sastra-bahasa', strength: 'supporting', reason: 'Konteks sosial masyarakat penutur bahasa dan pengajaran bahasa.' },

  { id: 'e-ling-nlp', from: 'linguistik-media-budaya', to: 'linguistik-komputasional', strength: 'primary', reason: 'Aturan sintaksis, morfologi, dan semantik bahasa manusia.' },
  { id: 'e-algo-nlp', from: 'algoritma-komputasi', to: 'linguistik-komputasional', strength: 'primary', reason: 'Membangun perangkat lunak pemroses teks dan pencarian bahasa.' },
  { id: 'e-stat-nlp', from: 'statistika-peluang', to: 'linguistik-komputasional', strength: 'supporting', reason: 'Model probabilitas kata dan evaluasi akurasi model bahasa.' },

  { id: 'e-ling-sej', from: 'linguistik-media-budaya', to: 'sejarah-arkeologi', strength: 'primary', reason: 'Kritik sumber arsip, naskah kuno, dan penulisan sejarah.' },
  { id: 'e-bumi-sej', from: 'kebumian-geospasial', to: 'sejarah-arkeologi', strength: 'supporting', reason: 'Pemetaan situs cagar budaya dan stratigrafi lapisan ekskavasi.' },

  { id: 'e-ling-perpus', from: 'linguistik-media-budaya', to: 'ilmu-perpustakaan', strength: 'primary', reason: 'Klasifikasi teks, katalogisasi, kearsipan, dan literasi informasi.' },
  { id: 'e-algo-perpus', from: 'algoritma-komputasi', to: 'ilmu-perpustakaan', strength: 'supporting', reason: 'Sistem temu-kembali informasi, basis data, dan perpustakaan digital.' },

  { id: 'e-psi-pend', from: 'psikologi-pendidikan', to: 'pendidikan-guru', strength: 'primary', reason: 'Pedagogi, psikologi perkembangan belajar, dan bimbingan konseling.' },
  { id: 'e-ling-pend', from: 'linguistik-media-budaya', to: 'pendidikan-guru', strength: 'primary', reason: 'Penyampaian materi ajar yang jelas dan penyusunan kurikulum.' },

  { id: 'e-ling-fil', from: 'linguistik-media-budaya', to: 'filsafat-etika', strength: 'primary', reason: 'Analisis teks gagasan, sejarah pemikiran, dan logika argumen.' },
  { id: 'e-hkm-fil', from: 'hukum-tata-kelola', to: 'filsafat-etika', strength: 'primary', reason: 'Etika sosial, filsafat politik, dan keadilan kebijakan publik.' }
];
