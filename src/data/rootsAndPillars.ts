import { KnowledgeNode } from '../types/knowledge';

export const ROOT_AND_PILLAR_NODES: KnowledgeNode[] = [
  // 10 Ilmu Dasar (SMA/K atau sederajat)
  {
    id: 'matematika',
    title: 'Matematika',
    shortLabel: 'Matematika',
    layer: 'root',
    group: 'Saintek',
    summary:
      'Ilmu tentang pola, struktur, kuantitas, dan pembuktian logis. Bukan sekadar berhitung cepat, melainkan cara memodelkan masalah nyata menjadi persamaan dan algoritma.',
    howItConnects:
      'Menjadi bahasa kerja hampir semua cabang teknik, ilmu komputer, statistika, aktuaria, serta analisis ekonomi dan risiko keuangan.',
    topics: ['Aljabar dan fungsi', 'Kalkulus dasar', 'Probabilitas dan statistika', 'Matematika diskrit dan logika'],
    outcomes: ['Fondasi seluruh rumpun teknik dan MIPA', 'Ilmu komputer, sains data, dan kecerdasan buatan', 'Aktuaria, akuntansi, dan ekonomi kuantitatif'],
    smaTip:
      'Fokus memahami mengapa sebuah rumus bekerja, bukan menghafal cara cepatnya. Pemahaman konsep fungsi dan peluang sangat terpakai di kuliah.',
    searchKeywords: ['hitung', 'aljabar', 'kalkulus', 'statistika', 'angka', 'mat']
  },
  {
    id: 'fisika',
    title: 'Fisika',
    shortLabel: 'Fisika',
    layer: 'root',
    group: 'Saintek',
    summary:
      'Mempelajari bagaimana materi, energi, gaya, gerak, listrik, dan gelombang bekerja di alam dari skala inti atom hingga struktur bangunan.',
    howItConnects:
      'Menjadi akar utama keteknikan (sipil, mesin, elektro, dirgantara, nuklir, perkapalan) sekaligus menopang instrumentasi medis, arsitektur, dan kebumian.',
    topics: ['Mekanika klasik dan gaya', 'Listrik dan magnet', 'Termodinamika dan fluida', 'Gelombang, optika, dan fisika modern'],
    outcomes: ['Seluruh cabang teknik rekayasa', 'Fisika, astronomi, dan geofisika', 'Alat medis, energi, dan struktur bangunan'],
    smaTip:
      'Biasakan menggambar sketsa sistem dan arah gaya sebelum memasukkan angka. Intuisi fisis jauh lebih dicari di bangku teknik.',
    searchKeywords: ['gaya', 'listrik', 'energi', 'mekanika', 'gerak', 'fis']
  },
  {
    id: 'kimia',
    title: 'Kimia',
    shortLabel: 'Kimia',
    layer: 'root',
    group: 'Saintek',
    summary:
      'Menelaah susunan zat, ikatan antar-atom, reaksi kimia, dan perubahan sifat bahan dari skala molekul sampai skala pabrik.',
    howItConnects:
      'Menjembatani Biologi menuju Kedokteran, Farmasi, dan Pangan, sekaligus berpadu dengan Fisika untuk Teknik Kimia, Metalurgi, Pertambangan, dan Lingkungan.',
    topics: ['Stoikiometri dan reaksi', 'Struktur atom dan ikatan', 'Kimia organik dasar', 'Kesetimbangan dan termokimia'],
    outcomes: ['Kedokteran, farmasi, gizi, dan teknologi pangan', 'Bioteknologi dan kimia analitik', 'Teknik kimia, metalurgi, dan lingkungan'],
    smaTip:
      'Pahami hubungan struktur molekul dengan sifatnya (misalnya kelarutan dan keasaman). Logika reaksi lebih terpakai daripada hafalan tabel.',
    searchKeywords: ['zat', 'molekul', 'reaksi', 'obat', 'organik', 'kim']
  },
  {
    id: 'biologi',
    title: 'Biologi',
    shortLabel: 'Biologi',
    layer: 'root',
    group: 'Saintek',
    summary:
      'Ilmu tentang makhluk hidup, mulai dari mekanisme di dalam sel dan DNA, fungsi organ tubuh, hingga interaksi ekosistem darat dan laut.',
    howItConnects:
      'Membuka pintu ke seluruh rumpun kesehatan (kedokteran, keperawatan, kebidanan, gizi), pertanian, kehutanan, peternakan, kelautan, teknik biomedis, hingga psikologi.',
    topics: ['Biologi sel dan genetika', 'Anatomi dan fisiologi', 'Mikrobiologi dasar', 'Ekologi, botani, dan zoologi'],
    outcomes: ['Kedokteran, FKG, FKH, keperawatan, dan farmasi', 'Pertanian, kehutanan, peternakan, dan kelautan', 'Bioteknologi, gizi, dan biopsikologi'],
    smaTip:
      'Pelajari Biologi sebagai rangkaian sebab-akibat kerja organ dan ekosistem, bukan daftar istilah latin yang dihafal lepas.',
    searchKeywords: ['sel', 'dna', 'tubuh', 'dokter', 'hewan', 'tumbuhan', 'bio']
  },
  {
    id: 'geografi',
    title: 'Geografi',
    shortLabel: 'Geografi',
    layer: 'root',
    group: 'Lintas Rumpun',
    summary:
      'Mempelajari permukaan bumi, bentang alam, iklim, pemetaan spasial (GIS), persebaran penduduk, dan interaksi manusia dengan ruang wilayahnya.',
    howItConnects:
      'Menjembatani sains alam dan ilmu sosial: berpadu dengan Fisika/Kimia di Geologi, Geodesi, Oseanografi, dan Meteorologi, serta dengan Sosiologi di PWK dan Pariwisata.',
    topics: ['Kartografi dan sistem informasi geografis (SIG)', 'Litosfer, hidrosfer, dan atmosfer', 'Kependudukan dan tata wilayah', 'Mitigasi bencana dan sumber daya alam'],
    outcomes: ['Perencanaan wilayah dan kota (PWK)', 'Geodesi, geologi, oseanografi, dan meteorologi', 'Pertanian, kehutanan, dan pariwisata'],
    smaTip:
      'Indonesia adalah wilayah cincin api dan negara kepulauan. Kemampuan membaca peta, kontur wilayah, dan pola iklim membuka prodi yang sangat relevan.',
    searchKeywords: ['peta', 'bumi', 'iklim', 'wilayah', 'sig', 'gis', 'geo']
  },
  {
    id: 'ekonomi',
    title: 'Ekonomi',
    shortLabel: 'Ekonomi',
    layer: 'root',
    group: 'Soshum',
    summary:
      'Mengkaji bagaimana individu, perusahaan, dan negara mengambil keputusan atas sumber daya yang terbatas, mulai dari harga pasar hingga kebijakan fiskal.',
    howItConnects:
      'Ketika bertemu Matematika melahirkan Aktuaria dan Ekonomika Kuantitatif; ketika bertemu Sosiologi dan Sistem membentuk Manajemen, Agribisnis, Teknik Industri, dan Bisnis.',
    topics: ['Permintaan dan penawaran', 'Struktur pasar dan insentif', 'Inflasi dan kebijakan makro', 'Dasar akuntansi dan laporan keuangan'],
    outcomes: ['Ilmu ekonomi, akuntansi, dan manajemen', 'Aktuaria, agribisnis, dan teknik industri', 'Ekonomi syariah, pariwisata, dan diplomasi perdagangan'],
    smaTip:
      'Biasakan membaca berita harga pangan, suku bunga, atau APBN lalu analisis siapa yang diuntungkan dan terdampak.',
    searchKeywords: ['uang', 'pasar', 'bisnis', 'saham', 'akuntansi', 'eko']
  },
  {
    id: 'sosiologi',
    title: 'Sosiologi & Sejarah',
    shortLabel: 'Sosiologi & Sejarah',
    layer: 'root',
    group: 'Soshum',
    summary:
      'Mempelajari pola hubungan manusia dalam masyarakat, lembaga negara, perubahan sejarah, budaya, serta dinamika kekuasaan.',
    howItConnects:
      'Menopang Hukum, Politik, HI, Administrasi Publik, Psikologi, Kriminologi, Pendidikan, Komunikasi, hingga Arsitektur dan Desain Produk.',
    topics: ['Struktur dan stratifikasi sosial', 'Lembaga politik dan hukum', 'Sejarah gagasan dan geopolitik', 'Metode riset sosial dan survei'],
    outcomes: ['Hukum, politik, administrasi publik, dan HI', 'Psikologi, kriminologi, dan sosiologi-antropologi', 'Pendidikan, komunikasi, dan tata kota'],
    smaTip:
      'Latih kebiasaan menelusuri latar sejarah dan struktur sosial di balik sebuah isu publik sebelum menarik kesimpulan.',
    searchKeywords: ['masyarakat', 'budaya', 'politik', 'sejarah', 'sosial', 'sos']
  },
  {
    id: 'bahasa',
    title: 'Bahasa & Sastra',
    shortLabel: 'Bahasa & Sastra',
    layer: 'root',
    group: 'Soshum',
    summary:
      'Menelaah bagaimana bahasa membentuk makna, narasi budaya, persuasi, serta aturan struktur kalimat yang dipakai manusia berkomunikasi.',
    howItConnects:
      'Berperan besar di Sastra, Komunikasi, Hukum, Pendidikan, Perpustakaan, Diplomasi, dan bertemu Matematika/Logika pada Linguistik Komputasional.',
    topics: ['Struktur kalimat dan semantik', 'Analisis teks dan sastra', 'Retorika dan penulisan argumentatif', 'Bahasa asing dan kajian lintas budaya'],
    outcomes: ['Sastra, pendidikan bahasa, dan penerjemahan', 'Komunikasi, jurnalistik, dan ilmu perpustakaan', 'Hukum, diplomasi, dan teknologi bahasa (NLP)'],
    smaTip:
      'Kemampuan membaca teks panjang secara kritis dan merangkainya menjadi argumen jernih dibutuhkan di hampir semua jurusan kuliah.',
    searchKeywords: ['tulis', 'sastra', 'linguistik', 'bicara', 'media', 'bahasa']
  },
  {
    id: 'logika',
    title: 'Logika & Filsafat',
    shortLabel: 'Logika & Filsafat',
    layer: 'root',
    group: 'Lintas Rumpun',
    summary:
      'Melatih cara berpikir runtut, menguji keabsahan argumen, mengenali sesat pikir, serta mempertanyakan dasar etika dan metode ilmiah.',
    howItConnects:
      'Menjadi jembatan penting antara sains eksakta dan humaniora: vital dalam pemrograman, sistem informasi, hukum, etika profesi, hingga psikologi kognitif.',
    topics: ['Logika proposisional dan deduksi', 'Identifikasi sesat pikir', 'Etika terapan dan filsafat ilmu', 'Penalaran analitis dan kritis'],
    outcomes: ['Ilmu komputer, sistem informasi, dan sains data', 'Ilmu hukum, filsafat, dan kebijakan publik', 'Psikologi, desain interaksi, dan pendidikan'],
    smaTip:
      'Latih cara membedakan fakta, asumsi, dan kesimpulan saat membaca berita atau memecahkan soal pembuktian matematika.',
    searchKeywords: ['berpikir', 'argumen', 'etika', 'filsafat', 'kritis', 'logika']
  },
  {
    id: 'seni',
    title: 'Seni Rupa & Estetika',
    shortLabel: 'Seni & Estetika',
    layer: 'root',
    group: 'Lintas Rumpun',
    summary:
      'Mengolah kepekaan visual, komposisi bentuk, warna, ruang, gerak, suara, dan pesan budaya untuk menciptakan karya fungsional maupun ekspresif.',
    howItConnects:
      'Menjadi akar Seni Rupa, DKV, Film & Animasi, Desain Interior, serta berpadu dengan Fisika dan Sosiologi di Arsitektur dan Desain Produk/UX.',
    topics: ['Sketsa bentuk, perspektif, dan warna', 'Komposisi visual dan tipografi dasar', 'Sejarah seni dan kriya Nusantara', 'Konsep karya dan kritik estetika'],
    outcomes: ['DKV, desain produk, dan desain interior', 'Film, televisi, animasi, dan kriya', 'Arsitektur dan seni pertunjukan'],
    smaTip:
      'Di kuliah seni dan desain, karya bukan sekadar bagus dilihat tetapi harus bisa dipertanggungjawabkan konsep dan fungsinya. Mulai kumpulkan portofolio sketsamu.',
    searchKeywords: ['gambar', 'desain', 'lukis', 'musik', 'film', 'animasi', 'seni']
  },

  // 16 Pilar Keilmuan Kuliah
  {
    id: 'kalkulus-aljabar',
    title: 'Kalkulus & Aljabar Linear',
    shortLabel: 'Kalkulus & Aljabar',
    layer: 'pillar',
    group: 'Saintek',
    summary:
      'Cabang matematika perguruan tinggi untuk memodelkan laju perubahan, ruang vektor, matriks, dan optimasi sistem kompleks.',
    howItConnects:
      'Hampir seluruh mahasiswa MIPA, teknik, ilmu komputer, dan ekonomi kuantitatif bertemu pilar ini pada dua semester pertama.',
    topics: ['Turunan dan integral multivariabel', 'Matriks dan transformasi linear', 'Persamaan diferensial', 'Metode numerik'],
    outcomes: ['Matematika, fisika, dan seluruh teknik', 'Grafika komputer dan kecerdasan buatan', 'Analisis dinamika sistem keuangan'],
    smaTip:
      'Jika nyaman dengan fungsi, grafik, dan trigonometri di bangku SMA/K atau sederajat, transisi ke Kalkulus kuliah akan jauh lebih ringan.',
    searchKeywords: ['turunan', 'integral', 'matriks', 'vektor', 'persamaan']
  },
  {
    id: 'statistika-peluang',
    title: 'Statistika & Probabilitas',
    shortLabel: 'Statistika & Peluang',
    layer: 'pillar',
    group: 'Lintas Rumpun',
    summary:
      'Cara menarik kesimpulan yang dapat dipertanggungjawabkan dari data yang tidak pasti, menghitung risiko, dan menguji hipotesis.',
    howItConnects:
      'Berakar dari Matematika dan diperkaya konteks Ekonomi serta eksperimen. Dipakai di Aktuaria, Sains Data, Epidemiologi Kesmas, hingga riset Psikologi.',
    topics: ['Distribusi peluang', 'Inferensi dan uji hipotesis', 'Regresi dan peramalan', 'Desain survei dan eksperimen'],
    outcomes: ['Statistika, aktuaria, dan sains data', 'Kesehatan masyarakat dan psikometri', 'Ekonometrika dan pengendalian mutu industri'],
    smaTip:
      'Bab peluang dan pengolahan data di sekolah menengah adalah pintu paling langsung menuju dunia analisis data modern.',
    searchKeywords: ['data', 'risiko', 'survei', 'regresi', 'peluang', 'probabilitas']
  },
  {
    id: 'algoritma-komputasi',
    title: 'Algoritma & Komputasi',
    shortLabel: 'Algoritma & Komputasi',
    layer: 'pillar',
    group: 'Saintek',
    summary:
      'Ilmu merancang langkah sistematis yang dijalankan komputer secara efisien untuk perangkat lunak, jaringan, basis data, dan pemrosesan bahasa.',
    howItConnects:
      'Lahir dari pertemuan Matematika Diskrit dan Logika Formal. Menjadi fondasi Ilmu Komputer, Sistem Informasi, Sains Data, dan Linguistik Komputasional.',
    topics: ['Struktur data dan graf', 'Pemrograman dan rekayasa perangkat lunak', 'Basis data dan sistem jaringan', 'Teori komputasi dasar'],
    outcomes: ['Teknik informatika dan ilmu komputer', 'Sistem informasi dan sains data', 'Teknologi pemrosesan bahasa alami'],
    smaTip:
      'Tidak harus mahir coding sejak sekolah menengah. Kebiasaan memecah masalah besar menjadi langkah runtut jauh lebih menentukan.',
    searchKeywords: ['coding', 'program', 'software', 'komputer', 'ai', 'graf']
  },
  {
    id: 'mekanika-termo',
    title: 'Mekanika, Fluida & Termodinamika',
    shortLabel: 'Mekanika & Termo',
    layer: 'pillar',
    group: 'Saintek',
    summary:
      'Analisis kekuatan material, keseimbangan gaya struktur, aliran fluida udara/air, serta perpindahan panas pada mesin, kapal, dan bangunan.',
    howItConnects:
      'Perpaduan langsung Fisika dan Kalkulus yang menopang Teknik Sipil, Mesin, Dirgantara, Perkapalan, Nuklir, Metalurgi, dan Arsitektur.',
    topics: ['Statika dan kekuatan bahan', 'Dinamika benda tegar', 'Mekanika fluida dan aerodinamika', 'Termodinamika dan perpindahan panas'],
    outcomes: ['Teknik sipil, mesin, dirgantara, dan perkapalan', 'Teknik kimia, metalurgi, dan nuklir', 'Struktur arsitektur dan biomekanika'],
    smaTip:
      'Bab hukum Newton, usaha-energi, fluida, dan kalor di Fisika tingkat menengah adalah pondasi persis untuk pilar ini.',
    searchKeywords: ['struktur', 'jembatan', 'mesin', 'panas', 'pesawat', 'fluida']
  },
  {
    id: 'listrik-sinyal',
    title: 'Elektronika, Gelombang & Sinyal',
    shortLabel: 'Elektronika & Sinyal',
    layer: 'pillar',
    group: 'Saintek',
    summary:
      'Mempelajari rangkaian listrik, semikonduktor, gelombang elektromagnetik, sensor, telekomunikasi, dan kendali otomatis.',
    howItConnects:
      'Berakar dari Fisika listrik-magnet dan Matematika, lalu mengalir ke Teknik Elektro, Teknik Biomedis, Fisika, Robotika, dan Energi.',
    topics: ['Analisis rangkaian listrik', 'Sistem digital dan mikrokontroler', 'Gelombang, optik, dan telekomunikasi', 'Sensor dan sistem kendali'],
    outcomes: ['Teknik elektro dan semikonduktor', 'Teknik biomedis dan instrumentasi', 'Robotika, kendali, dan geofisika'],
    smaTip:
      'Suka membongkar rangkaian listrik atau penasaran cara kerja sensor HP dan jaringan seluler adalah awal yang tepat.',
    searchKeywords: ['rangkaian', 'sensor', 'robot', 'mikrokontroler', 'chip', 'sinyal']
  },
  {
    id: 'kimia-organik-material',
    title: 'Kimia Organik, Analitik & Material',
    shortLabel: 'Kimia & Material',
    layer: 'pillar',
    group: 'Saintek',
    summary:
      'Mempelajari senyawa karbon, analisis komposisi bahan, sifat logam-polimer-keramik, dan rekayasa proses kimia skala pabrik.',
    howItConnects:
      'Menghubungkan Kimia dasar dan Fisika menuju Kimia Murni, Farmasi, Teknik Kimia, Teknik Metalurgi, Teknologi Pangan, dan Pertambangan.',
    topics: ['Sintesis organik dan katalisis', 'Kimia analitik dan spektroskopi', 'Struktur logam, polimer, dan keramik', 'Neraca massa dan proses kimia'],
    outcomes: ['Kimia murni, farmasi, dan teknologi pangan', 'Teknik kimia dan teknik metalurgi', 'Pertambangan dan teknik lingkungan'],
    smaTip:
      'Perhatikan bab hidrokarbon, gugus fungsi, ikatan kimia, dan laju reaksi di Kimia tingkat menengah.',
    searchKeywords: ['polimer', 'logam', 'pabrik', 'bahan', 'sintesis', 'baterai']
  },
  {
    id: 'biokimia-genetika',
    title: 'Biokimia & Genetika Molekuler',
    shortLabel: 'Biokimia & Genetika',
    layer: 'pillar',
    group: 'Saintek',
    summary:
      'Titik temu Biologi dan Kimia yang menjelaskan metabolisme sel, enzim, DNA/RNA, serta cara obat dan zat pangan bekerja di tingkat molekul.',
    howItConnects:
      'Menjadi alasan mengapa Kedokteran, Farmasi, Gizi, Bioteknologi, Kedokteran Hewan, dan Teknologi Pangan sama-sama butuh Biologi dan Kimia.',
    topics: ['Metabolisme seluler dan enzim', 'Genetika molekuler dan ekspresi gen', 'Mikrobiologi dan imunologi dasar', 'Biokimia nutrisi dan obat'],
    outcomes: ['Kedokteran, FKG, FKH, dan farmasi', 'Biologi molekuler dan bioteknologi', 'Ilmu gizi dan teknologi pangan'],
    smaTip:
      'Bab metabolisme sel dan substansi genetika di kelas 12 Biologi adalah cuplikan langsung pilar ini.',
    searchKeywords: ['enzim', 'metabolisme', 'dna', 'rna', 'genetika', 'obat']
  },
  {
    id: 'anatomi-fisiologi',
    title: 'Anatomi, Fisiologi & Ilmu Kesehatan',
    shortLabel: 'Anatomi & Kesehatan',
    layer: 'pillar',
    group: 'Saintek',
    summary:
      'Memahami struktur jaringan, tulang, otot, organ tubuh, mekanisme penyakit, serta prinsip perawatan dan rehabilitasi klinis.',
    howItConnects:
      'Berakar kuat di Biologi dengan dukungan Kimia. Menopang seluruh prodi layanan kesehatan: Kedokteran, FKG, FKH, Keperawatan, Kebidanan, Gizi, Kesmas, dan Fisioterapi.',
    topics: ['Anatomi dan histologi jaringan', 'Fisiologi sistem organ', 'Patofisiologi dan dasar klinis', 'Kesehatan preventif dan rehabilitasi'],
    outcomes: ['Kedokteran umum, gigi, dan hewan', 'Keperawatan, kebidanan, dan fisioterapi', 'Gizi, kesehatan masyarakat, dan biomedis'],
    smaTip:
      'Pelajari cara organ saling bergantung (misalnya kerja jantung, paru, dan ginjal bersama) agar pemahaman klinis terbentuk sejak dini.',
    searchKeywords: ['organ', 'saraf', 'jantung', 'otot', 'kesehatan', 'klinis']
  },
  {
    id: 'agronomi-hayati',
    title: 'Agronomi, Hutan & Sumber Daya Hayati',
    shortLabel: 'Hayati & Pangan',
    layer: 'pillar',
    group: 'Saintek',
    summary:
      'Mempelajari budidaya tanaman, kesuburan tanah, fisiologi ternak, ekosistem hutan, serta pengolahan hasil pertanian dan perikanan.',
    howItConnects:
      'Mempertemukan Biologi, Kimia, dan Geografi untuk menopang Agroteknologi, Kehutanan, Peternakan, Perikanan, Teknologi Pangan, dan Agribisnis.',
    topics: ['Ilmu tanah dan kesuburan lahan', 'Pemuliaan tanaman dan fisiologi ternak', 'Silvikultur dan konservasi hutan', 'Mikrobiologi dan pascapanen pangan'],
    outcomes: ['Agroteknologi, kehutanan, dan peternakan', 'Teknologi pangan dan agribisnis', 'Budidaya perikanan dan konservasi alam'],
    smaTip:
      'Ketahanan pangan, kehutanan tropis, dan perikanan adalah sektor vital di Indonesia yang butuh banyak ahli muda berbasis sains.',
    searchKeywords: ['pertanian', 'tanah', 'hutan', 'ternak', 'pangan', 'ikan']
  },
  {
    id: 'kebumian-geospasial',
    title: 'Kebumian, Geospasial & Kelautan',
    shortLabel: 'Kebumian & Spasial',
    layer: 'pillar',
    group: 'Saintek',
    summary:
      'Memetakan bentuk bumi, struktur batuan, dinamika atmosfer dan lautan, sumber daya energi bumi, serta daya dukung lingkungan.',
    howItConnects:
      'Pertemuan Geografi, Fisika, Kimia, dan Biologi yang mengalir ke Geologi, Pertambangan, Geodesi, Meteorologi, Oseanografi, Teknik Lingkungan, dan PWK.',
    topics: ['Pemetaan satelit dan SIG (GIS)', 'Geologi struktur, mineral, dan energi', 'Oseanografi dan dinamika atmosfer', 'Hidrologi dan pengelolaan lingkungan'],
    outcomes: ['Geologi, geodesi, dan pertambangan', 'Meteorologi, geofisika, dan kelautan', 'Teknik lingkungan dan perencanaan wilayah'],
    smaTip:
      'Suka peta, gunung, laut, atau cuaca? Pilar ini membuktikan bahwa Geografi bertemu Fisika dan Kimia di banyak prodi strategis.',
    searchKeywords: ['bumi', 'laut', 'cuaca', 'peta', 'batuan', 'lingkungan', 'gis']
  },
  {
    id: 'ekonomi-keuangan',
    title: 'Teori Ekonomi, Bisnis & Keuangan',
    shortLabel: 'Ekonomi & Keuangan',
    layer: 'pillar',
    group: 'Soshum',
    summary:
      'Mengukur nilai aset, arus kas, perilaku pasar, strategi usaha, dan dampak kebijakan moneter maupun fiskal dengan analisis terukur.',
    howItConnects:
      'Menggabungkan Ekonomi dengan Matematika untuk melahirkan Ilmu Ekonomi, Akuntansi, Manajemen, Ekonomi Syariah, Aktuaria, Agribisnis, dan Pariwisata.',
    topics: ['Mikroekonomi dan makroekonomi', 'Akuntansi dan pelaporan keuangan', 'Valuasi investasi dan keuangan syariah', 'Strategi pasar dan rantai nilai'],
    outcomes: ['Ilmu ekonomi, akuntansi, dan manajemen', 'Ekonomi syariah dan aktuaria', 'Agribisnis, pariwisata, dan bisnis digital'],
    smaTip:
      'Jurusan ekonomi tetap memerlukan logika aljabar dan pembacaan grafik yang rapi sejak semester awal.',
    searchKeywords: ['keuangan', 'audit', 'investasi', 'bank', 'syariah', 'bisnis']
  },
  {
    id: 'manajemen-sistem-industri',
    title: 'Manajemen Sistem, Operasi & Industri',
    shortLabel: 'Sistem & Industri',
    layer: 'pillar',
    group: 'Lintas Rumpun',
    summary:
      'Mengoptimalkan alur kerja manusia, mesin, data bisnis, logistik, dan biaya agar sistem pabrik maupun organisasi berjalan efisien.',
    howItConnects:
      'Titik temu unik antara Matematika optimasi, Ekonomi, Fisika proses, dan Sosiologi organisasi yang melahirkan Teknik Industri, Sistem Informasi, dan Agribisnis.',
    topics: ['Riset operasi dan optimasi proses', 'Manajemen rantai pasok dan logistik', 'Analisis sistem bisnis dan data', 'Ergonomi dan pengendalian kualitas'],
    outcomes: ['Teknik industri dan manufaktur', 'Sistem informasi dan manajemen proyek', 'Rantai pasok, logistik, dan agribisnis'],
    smaTip:
      'Cocok untuk siswa yang suka matematika dan hal teknis, tetapi lebih menikmati mengatur alur sistem dan manajemen daripada merancang mesin detail.',
    searchKeywords: ['industri', 'logistik', 'operasi', 'sistem', 'efisiensi', 'pabrik']
  },
  {
    id: 'hukum-tata-kelola',
    title: 'Tata Kelola, Hukum & Kebijakan Publik',
    shortLabel: 'Hukum & Kebijakan',
    layer: 'pillar',
    group: 'Soshum',
    summary:
      'Menelaah sistem perundang-undangan, lembaga negara, kebijakan publik, diplomasi, serta keadilan dan tata kelola pemerintahan.',
    howItConnects:
      'Berakar pada Sosiologi & Sejarah, Logika penalaran, Bahasa, dan Ekonomi. Menopang Ilmu Hukum, Ilmu Politik, HI, Administrasi Publik, dan Kriminologi.',
    topics: ['Teori negara dan konstitusi', 'Penalaran hukum dan perancangan regulasi', 'Analisis kebijakan publik dan birokrasi', 'Geopolitik dan tata kelola global'],
    outcomes: ['Ilmu hukum dan administrasi publik', 'Ilmu politik dan hubungan internasional', 'Kriminologi dan riset kebijakan'],
    smaTip:
      'Perbanyak membaca isu publik dari dua sudut pandang berbeda untuk melatih objektivitas analisis kebijakan dan hukum.',
    searchKeywords: ['hukum', 'negara', 'kebijakan', 'politik', 'pemerintahan', 'pasal']
  },
  {
    id: 'psikologi-pendidikan',
    title: 'Perilaku Manusia, Sosial & Pendidikan',
    shortLabel: 'Perilaku & Pendidikan',
    layer: 'pillar',
    group: 'Lintas Rumpun',
    summary:
      'Menelaah perkembangan kognitif, emosi, dinamika masyarakat, pedagogi pengajaran, serta pendampingan kesejahteraan individu dan komunitas.',
    howItConnects:
      'Berakar dari Sosiologi, Biologi (dasar saraf), Logika, dan Bahasa untuk menopang Psikologi, Pendidikan Guru/BK, Sosiologi-Antropologi, Kriminologi, Kesmas, dan UX.',
    topics: ['Psikologi perkembangan dan belajar', 'Pedagogi dan desain pembelajaran', 'Etnografi dan riset perilaku sosial', 'Konseling dan pemberdayaan masyarakat'],
    outcomes: ['Psikologi dan bimbingan konseling', 'Pendidikan guru (PGSD dan bidang studi)', 'Sosiologi, antropologi, dan kesejahteraan sosial'],
    smaTip:
      'Bidang ini membutuhkan empati yang kuat sekaligus ketelitian metode ilmiah saat mengamati dan mengukur perilaku manusia.',
    searchKeywords: ['psikologi', 'guru', 'pendidikan', 'perilaku', 'masyarakat', 'konseling']
  },
  {
    id: 'linguistik-media-budaya',
    title: 'Linguistik, Media & Kajian Budaya',
    shortLabel: 'Bahasa, Media & Budaya',
    layer: 'pillar',
    group: 'Soshum',
    summary:
      'Membedah struktur bahasa secara ilmiah, arsip sejarah, produksi pesan media, kurasi informasi, serta pelestarian warisan budaya.',
    howItConnects:
      'Pertemuan Bahasa & Sastra, Sosiologi & Sejarah, dan Logika. Mengalir ke Sastra, Komunikasi, Sejarah-Arkeologi, Perpustakaan, Linguistik Komputasional, dan Filsafat.',
    topics: ['Sintaksis, semantik, dan terjemahan', 'Teori media, jurnalistik, dan opini publik', 'Historiografi, arsip, dan pengelolaan informasi', 'Analisis wacana dan kajian budaya'],
    outcomes: ['Ilmu komunikasi, sastra, dan perpustakaan', 'Sejarah, arkeologi, dan pariwisata budaya', 'Linguistik komputasional dan filsafat'],
    smaTip:
      'Kebiasaan mencatat bacaan, menyusun tulisan rapi, dan mengecek keaslian sumber adalah modal paling kuat di jalur ini.',
    searchKeywords: ['bahasa', 'media', 'sastra', 'sejarah', 'arsip', 'budaya']
  },
  {
    id: 'visual-ruang-estetika',
    title: 'Visual, Ruang & Perancangan Estetika',
    shortLabel: 'Visual & Ruang',
    layer: 'pillar',
    group: 'Lintas Rumpun',
    summary:
      'Mengubah gagasan, kebutuhan pengguna, dan konteks budaya menjadi bentuk visual, ruang arsitektur, produk fisik, antarmuka, atau karya sinema.',
    howItConnects:
      'Menghubungkan Seni & Estetika dengan Fisika bangunan/ergonomi serta Sosiologi pengguna menuju Arsitektur, DKV, Desain Interior, Desain Produk/UX, Film, dan Seni Rupa.',
    topics: ['Dasar rupa, warna, dan tipografi', 'Perancangan ruang 3D dan ergonomi', 'Narasi visual, fotografi, dan animasi', 'Metode design thinking dan studio karya'],
    outcomes: ['Arsitektur, desain interior, dan DKV', 'Desain produk, UX, dan film-animasi', 'Seni rupa murni, kriya, dan seni pertunjukan'],
    smaTip:
      'Di jalur studio desain dan arsitektur, proses iterasi sketsa dan menerima kritik desain adalah bagian harian kuliah.',
    searchKeywords: ['desain', 'dkv', 'ruang', 'interior', 'film', 'animasi', 'sketsa']
  }
];
