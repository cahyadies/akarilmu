export type CareerSector =
  | 'Kesehatan & Klinis'
  | 'Teknologi & Data'
  | 'Rekayasa & Energi'
  | 'Pangan, Alam & Maritim'
  | 'Kreatif, Desain & Media'
  | 'Keuangan & Bisnis'
  | 'Hukum & Kebijakan'
  | 'Pendidikan, Riset & Sosial';

export interface CareerTrack {
  id: string;
  title: string;
  sector: CareerSector;
  dailyWork: string;
  realityNote: string;
  primaryMajors: string[];
  alternativeMajors: string[];
  keyRoots: string[];
  searchKeywords: string[];
}

export const CAREER_SECTORS: CareerSector[] = [
  'Kesehatan & Klinis',
  'Teknologi & Data',
  'Rekayasa & Energi',
  'Pangan, Alam & Maritim',
  'Kreatif, Desain & Media',
  'Keuangan & Bisnis',
  'Hukum & Kebijakan',
  'Pendidikan, Riset & Sosial'
];

export const CAREER_TRACKS: CareerTrack[] = [
  {
    id: 'dokter-klinis',
    title: 'Dokter Umum, Dokter Gigi & Dokter Hewan',
    sector: 'Kesehatan & Klinis',
    dailyWork:
      'Memeriksa pasien, menegakkan diagnosis berdasarkan gejala dan hasil lab, menentukan tindakan medis atau bedah, serta mengedukasi pencegahan penyakit.',
    realityNote:
      'Setelah lulus S1, wajib melanjutkan pendidikan profesi (koas/dokter, drg., atau drh.) dan uji kompetensi sebelum berizin praktik.',
    primaryMajors: ['kedokteran', 'kedokteran-gigi', 'kedokteran-hewan'],
    alternativeMajors: ['teknik-biomedis'],
    keyRoots: ['biologi', 'kimia', 'fisika'],
    searchKeywords: ['dokter', 'klinik', 'rumah sakit', 'spesialis', 'hewan', 'gigi']
  },
  {
    id: 'apoteker-farmasi',
    title: 'Apoteker, Peneliti Obat & Kontrol Mutu Farmasi',
    sector: 'Kesehatan & Klinis',
    dailyWork:
      'Memastikan ketepatan dosis dan interaksi obat pasien, merancang formulasi obat atau kosmetik di laboratorium, serta menguji keamanan produk sebelum edar.',
    realityNote:
      'Untuk praktik sebagai Apoteker klinis maupun penanggung jawab industri farmasi, lulusan S1 melanjutkan program Profesi Apoteker selama 1 tahun.',
    primaryMajors: ['farmasi', 'kimia-murni'],
    alternativeMajors: ['bioteknologi', 'teknologi-pangan'],
    keyRoots: ['kimia', 'biologi'],
    searchKeywords: ['apoteker', 'obat', 'bpom', 'kosmetik', 'lab', 'qc']
  },
  {
    id: 'keperawatan-kebidanan-rehab',
    title: 'Perawat, Bidan, Fisioterapis & Ahli Gizi Klinis',
    sector: 'Kesehatan & Klinis',
    dailyWork:
      'Mendampingi pemulihan pasien harian di rumah sakit maupun komunitas, menangani kehamilan dan persalinan, melatih pemulihan gerak, serta menyusun terapi gizi klinis.',
    realityNote:
      'Sebagian besar peran klinis membutuhkan pendidikan profesi lanjutan (Ners, Profesi Bidan, Fisioterapis, atau Dietisien) dan Surat Tanda Registrasi (STR).',
    primaryMajors: ['keperawatan', 'kebidanan', 'fisioterapi', 'ilmu-gizi'],
    alternativeMajors: ['kesehatan-masyarakat'],
    keyRoots: ['biologi', 'kimia', 'sosiologi'],
    searchKeywords: ['perawat', 'ners', 'bidan', 'fisioterapi', 'gizi', 'dietisien']
  },
  {
    id: 'kesmas-k3-hse',
    title: 'Spesialis K3 (HSE), Epidemiolog & Pengelola Kesehatan Publik',
    sector: 'Kesehatan & Klinis',
    dailyWork:
      'Mencegah kecelakaan kerja di pabrik atau tambang, menganalisis pola penyebaran penyakit, serta merancang program sanitasi dan pembiayaan kesehatan masyarakat.',
    realityNote:
      'Sertifikasi Ahli K3 Umum sangat menambah daya saing untuk masuk sektor energi, konstruksi, dan manufaktur besar.',
    primaryMajors: ['kesehatan-masyarakat', 'teknik-lingkungan'],
    alternativeMajors: ['ilmu-gizi', 'kedokteran'],
    keyRoots: ['biologi', 'matematika', 'sosiologi'],
    searchKeywords: ['k3', 'hse', 'keselamatan kerja', 'epidemiolog', 'kesmas', 'bpjs']
  },
  {
    id: 'software-cyber',
    title: 'Software Engineer, Arsitek Cloud & Keamanan Siber',
    sector: 'Teknologi & Data',
    dailyWork:
      'Merancang, menulis kode, menguji, dan merawat aplikasi web/mobile, server backend, jaringan, serta melindungi sistem organisasi dari serangan siber.',
    realityNote:
      'Portofolio proyek nyata, kemampuan pemecahan masalah logis, dan kebiasaan belajar mandiri sering dinilai setara pentingnya dengan nama kampus.',
    primaryMajors: ['ilmu-komputer', 'sistem-informasi'],
    alternativeMajors: ['teknik-elektro', 'matematika-murni'],
    keyRoots: ['matematika', 'logika'],
    searchKeywords: ['programmer', 'developer', 'coding', 'web', 'mobile', 'cybersecurity', 'devops']
  },
  {
    id: 'data-ai-nlp',
    title: 'Data Scientist, Analis Data & Pengembang AI / Bahasa',
    sector: 'Teknologi & Data',
    dailyWork:
      'Membersihkan data besar, membangun model prediksi dan pembelajaran mesin, mengolah teks bahasa manusia, serta menerjemahkan pola angka menjadi keputusan bisnis atau riset.',
    realityNote:
      'Porsi pekerjaan harian banyak dihabiskan untuk merapikan data dan memvalidasi logika statistik, bukan hanya melatih model AI.',
    primaryMajors: ['sains-data', 'aktuaria', 'linguistik-komputasional'],
    alternativeMajors: ['ilmu-komputer', 'matematika-murni', 'ilmu-ekonomi'],
    keyRoots: ['matematika', 'logika', 'bahasa'],
    searchKeywords: ['data scientist', 'data analyst', 'ai', 'machine learning', 'nlp', 'statistik']
  },
  {
    id: 'product-system-analyst',
    title: 'Product Manager, System Analyst & Konsultan TI',
    sector: 'Teknologi & Data',
    dailyWork:
      'Menerjemahkan kebutuhan pengguna dan target bisnis menjadi rancangan fitur aplikasi, mengatur prioritas tim teknik-desain, serta membenahi alur sistem perusahaan.',
    realityNote:
      'Jalur lintas bidang yang menuntut komunikasi jernih, empati pada pengguna, dan pemahaman dasar cara kerja perangkat lunak maupun bisnis.',
    primaryMajors: ['sistem-informasi', 'teknik-industri'],
    alternativeMajors: ['manajemen-bisnis', 'desain-interaksi', 'ilmu-komputer'],
    keyRoots: ['logika', 'ekonomi', 'sosiologi'],
    searchKeywords: ['product manager', 'pm', 'system analyst', 'business analyst', 'erp', 'startup']
  },
  {
    id: 'sipil-geodesi-infrastruktur',
    title: 'Insinyur Struktur, Konstruksi & Pemetaan Geospasial',
    sector: 'Rekayasa & Energi',
    dailyWork:
      'Menghitung keamanan jembatan dan gedung tahan gempa, mengelola proyek jalan dan bendungan, serta memetakan kontur wilayah dengan satelit GPS, drone, dan GIS.',
    realityNote:
      'Banyak melibatkan kombinasi kerja analisis di kantor dan pengawasan langsung di lapangan proyek atau survei wilayah.',
    primaryMajors: ['teknik-sipil', 'teknik-geodesi'],
    alternativeMajors: ['arsitektur', 'pwk-planologi', 'teknik-geologi'],
    keyRoots: ['fisika', 'matematika', 'geografi'],
    searchKeywords: ['sipil', 'kontraktor', 'jembatan', 'gis', 'surveyor', 'drone', 'geodesi']
  },
  {
    id: 'mesin-elektro-robotika',
    title: 'Insinyur Mesin, Elektro, Semikonduktor, Dirgantara & Biomedis',
    sector: 'Rekayasa & Energi',
    dailyWork:
      'Merancang mesin otomotif, robot industri, sistem tenaga listrik, chip dan perangkat IoT, perawatan pesawat udara, hingga alat diagnostik medis rumah sakit.',
    realityNote:
      'Memerlukan ketelitian fisika terapan, pengujian prototipe laboratorium, serta kepatuhan tinggi terhadap standar keselamatan teknis.',
    primaryMajors: ['teknik-mesin', 'teknik-elektro', 'teknik-dirgantara', 'teknik-biomedis'],
    alternativeMajors: ['fisika-astronomi', 'teknik-nuklir'],
    keyRoots: ['fisika', 'matematika', 'biologi'],
    searchKeywords: ['insinyur', 'robotika', 'iot', 'pesawat', 'listrik', 'pln', 'alat medis']
  },
  {
    id: 'energi-tambang-material',
    title: 'Process Engineer, Geolog, Insinyur Tambang, Material & Energi',
    sector: 'Rekayasa & Energi',
    dailyWork:
      'Mengoperasikan dan mengoptimalkan pabrik kimia/energi, memetakan panas bumi dan mineral, mengolah logam dan material baterai, serta merancang sistem energi bersih dan proteksi radiasi.',
    realityNote:
      'Sektor energi dan hilirisasi mineral di Indonesia sering menempatkan insinyur di lokasi kilang, smelter, atau pembangkit di berbagai daerah.',
    primaryMajors: ['teknik-kimia', 'teknik-geologi', 'teknik-pertambangan', 'teknik-metalurgi', 'teknik-nuklir'],
    alternativeMajors: ['meteorologi-geofisika', 'kimia-murni'],
    keyRoots: ['kimia', 'fisika', 'geografi'],
    searchKeywords: ['pabrik', 'migas', 'tambang', 'smelter', 'baterai', 'geolog', 'panas bumi', 'nuklir']
  },
  {
    id: 'rantai-pasok-manufaktur',
    title: 'Insinyur Rantai Pasok (Supply Chain), Operasi & Mutu',
    sector: 'Rekayasa & Energi',
    dailyWork:
      'Mengatur alur bahan baku, penjadwalan produksi pabrik, logistik distribusi gudang, pengendalian kualitas produk, serta efisiensi biaya operasional.',
    realityNote:
      'Sangat dibutuhkan di hampir semua industri mulai dari pabrik otomotif, makanan-minuman, ritel modern, hingga e-commerce.',
    primaryMajors: ['teknik-industri', 'agribisnis'],
    alternativeMajors: ['manajemen-bisnis', 'teknik-mesin', 'aktuaria'],
    keyRoots: ['matematika', 'ekonomi', 'fisika'],
    searchKeywords: ['supply chain', 'logistik', 'operasi', 'ppic', 'qa', 'pabrik']
  },
  {
    id: 'pangan-pertanian-kehutanan',
    title: 'Ahli Teknologi Pangan, Agronomis, Kehutanan & Peternakan',
    sector: 'Pangan, Alam & Maritim',
    dailyWork:
      'Mengembangkan produk makanan-minuman yang aman, memuliakan bibit tanaman dan pakan ternak, memantau karbon hutan, serta mengelola konservasi ekosistem tropis.',
    realityNote:
      'Sektor pangan, ESG, dan restorasi lingkungan membuka peluang karier di industri FMCG, perkebunan modern, lembaga riset, hingga organisasi konservasi.',
    primaryMajors: ['teknologi-pangan', 'agroteknologi', 'kehutanan', 'peternakan'],
    alternativeMajors: ['bioteknologi', 'agribisnis'],
    keyRoots: ['biologi', 'kimia', 'geografi'],
    searchKeywords: ['pangan', 'fmcg', 'agronomis', 'hutan', 'konservasi', 'ternak', 'esg']
  },
  {
    id: 'maritim-kelautan-iklim',
    title: 'Insinyur Maritim, Peneliti Kelautan & Analis Cuaca/Gempa',
    sector: 'Pangan, Alam & Maritim',
    dailyWork:
      'Merancang kapal dan struktur pelabuhan, memetakan arus laut dan budidaya perikanan, serta menganalisis prakiraan cuaca, iklim, gempa bumi, dan mitigasi bencana.',
    realityNote:
      'Indonesia sebagai negara kepulauan di cincin api sangat membutuhkan keahlian maritim, perikanan berkelanjutan, dan mitigasi bencana kebumian.',
    primaryMajors: ['teknik-perkapalan', 'kelautan-perikanan', 'meteorologi-geofisika'],
    alternativeMajors: ['teknik-geodesi', 'teknik-lingkungan'],
    keyRoots: ['fisika', 'geografi', 'biologi'],
    searchKeywords: ['kapal', 'pelabuhan', 'laut', 'ikan', 'bmkg', 'cuaca', 'gempa']
  },
  {
    id: 'arsitek-tata-kota-interior',
    title: 'Arsitek, Perencana Tata Kota (Urban Planner) & Desainer Interior',
    sector: 'Kreatif, Desain & Media',
    dailyWork:
      'Merancang bangunan hunian atau publik, menata ruang dalam dan pencahayaan, serta menyusun rencana tata ruang, transportasi, dan kawasan kota yang layak huni.',
    realityNote:
      'Untuk berpraktik mandiri menandatangani gambar bangunan publik sebagai Arsitek berlisensi, lulusan melanjutkan Pendidikan Profesi Arsitek (PPAr).',
    primaryMajors: ['arsitektur', 'pwk-planologi', 'desain-interior'],
    alternativeMajors: ['teknik-sipil', 'desain-interaksi'],
    keyRoots: ['seni', 'fisika', 'geografi'],
    searchKeywords: ['arsitek', 'tata kota', 'urban planner', 'interior', 'properti', 'bangunan']
  },
  {
    id: 'desain-ux-visual-film',
    title: 'UI/UX Designer, Brand Designer, Animator, Sineas & Seniman',
    sector: 'Kreatif, Desain & Media',
    dailyWork:
      'Merancang antarmuka aplikasi dan produk fisik, identitas merek, ilustrasi, film, animasi 2D/3D, kriya, musik, tari, hingga kurasi pameran kreatif.',
    realityNote:
      'Portofolio karya nyata dan kemampuan menjelaskan alasan di balik keputusan desain menjadi penentu utama saat melamar kerja maupun klien.',
    primaryMajors: ['dkv', 'desain-interaksi', 'film-animasi', 'seni-rupa-pertunjukan'],
    alternativeMajors: ['komunikasi-media', 'arsitektur'],
    keyRoots: ['seni', 'sosiologi', 'bahasa'],
    searchKeywords: ['ux', 'ui', 'desain grafis', 'ilustrator', 'animator', 'film', 'sutradara', 'seniman']
  },
  {
    id: 'media-jurnalistik-bahasa',
    title: 'Jurnalis, Spesialis PR/Komunikasi, Editor & Penerjemah',
    sector: 'Kreatif, Desain & Media',
    dailyWork:
      'Meliput dan memverifikasi berita, mengelola komunikasi krisis dan citra organisasi, menyunting buku/konten, serta menerjemahkan karya dan lokalisasi lintas bahasa.',
    realityNote:
      'Keterampilan menulis tajam, verifikasi fakta, dan penguasaan bahasa asing jauh lebih menentukan daripada sekadar aktif di media sosial.',
    primaryMajors: ['komunikasi-media', 'sastra-bahasa'],
    alternativeMajors: ['hubungan-internasional', 'filsafat-etika'],
    keyRoots: ['bahasa', 'sosiologi'],
    searchKeywords: ['jurnalis', 'wartawan', 'pr', 'humas', 'copywriter', 'editor', 'penerjemah']
  },
  {
    id: 'keuangan-audit-aktuaria',
    title: 'Akuntan, Auditor, Aktuaris, Ekonom & Analis Keuangan',
    sector: 'Keuangan & Bisnis',
    dailyWork:
      'Memeriksa laporan keuangan dan pajak perusahaan, menghitung cadangan risiko asuransi, menilai kelayakan investasi, serta menganalisis kebijakan fiskal dan perbankan syariah maupun konvensional.',
    realityNote:
      'Banyak jalur profesional memerlukan ujian sertifikasi tambahan seperti CA/CPA (akuntan), ujian PAI (aktuaris), atau CFA (investasi).',
    primaryMajors: ['akuntansi-keuangan', 'aktuaria', 'ilmu-ekonomi', 'ekonomi-syariah'],
    alternativeMajors: ['matematika-murni', 'manajemen-bisnis'],
    keyRoots: ['ekonomi', 'matematika', 'logika'],
    searchKeywords: ['akuntan', 'auditor', 'pajak', 'aktuaris', 'bank', 'saham', 'syariah', 'ekonom']
  },
  {
    id: 'bisnis-manajemen-pariwisata',
    title: 'Manajer Bisnis, Pemasaran, Wirausaha & Pengelola Pariwisata',
    sector: 'Keuangan & Bisnis',
    dailyWork:
      'Menyusun strategi pertumbuhan usaha, mengelola pemasaran, operasional hotel dan destinasi wisata, penyelenggaraan acara, hingga membangun usaha mandiri.',
    realityNote:
      'Pengalaman organisasi, magang proyek bisnis nyata, dan penguasaan satu keahlian spesifik (misalnya analitik pemasaran atau operasi) sangat membedakan lulusan.',
    primaryMajors: ['manajemen-bisnis', 'pariwisata-perhotelan', 'agribisnis'],
    alternativeMajors: ['komunikasi-media', 'ekonomi-syariah', 'sistem-informasi'],
    keyRoots: ['ekonomi', 'sosiologi', 'bahasa'],
    searchKeywords: ['bisnis', 'marketing', 'wirausaha', 'hotel', 'pariwisata', 'event', 'manajer']
  },
  {
    id: 'hukum-legal-kepatuhan',
    title: 'Advokat, Jaksa, Hakim, Notaris & Konsultan Hukum Korporat',
    sector: 'Hukum & Kebijakan',
    dailyWork:
      'Menyusun dan menelaah kontrak bisnis, mendampingi penyelesaian sengketa di pengadilan, memastikan kepatuhan regulasi perusahaan, serta merancang peraturan perundang-undangan.',
    realityNote:
      'Untuk menjadi advokat wajib mengikuti PKPA dan ujian profesi; untuk hakim/jaksa lewat seleksi ASN khusus; dan notaris melalui S2 Kenotariatan (M.Kn).',
    primaryMajors: ['ilmu-hukum'],
    alternativeMajors: ['kriminologi-kessos', 'administrasi-publik'],
    keyRoots: ['logika', 'sosiologi', 'bahasa'],
    searchKeywords: ['pengacara', 'advokat', 'hakim', 'jaksa', 'notaris', 'legal', 'kontrak']
  },
  {
    id: 'diplomasi-kebijakan-pemerintahan',
    title: 'Diplomat, Analis Kebijakan Publik & Tata Kelola Pemerintahan',
    sector: 'Hukum & Kebijakan',
    dailyWork:
      'Mewakili kepentingan negara dalam perundingan internasional, meneliti dampak kebijakan pemerintah, mengelola pelayanan publik, serta mengawal program pembangunan daerah.',
    realityNote:
      'Selain instansi pemerintah (ASN/Kemlu), banyak lulusannya berkarya di lembaga riset kebijakan (think tank), organisasi internasional, dan urusan hubungan pemerintah perusahaan.',
    primaryMajors: ['hubungan-internasional', 'ilmu-politik', 'administrasi-publik'],
    alternativeMajors: ['ilmu-ekonomi', 'ilmu-hukum', 'pwk-planologi'],
    keyRoots: ['sosiologi', 'ekonomi', 'bahasa'],
    searchKeywords: ['diplomat', 'asn', 'kebijakan publik', 'politik', 'pbb', 'pemerintahan']
  },
  {
    id: 'psikolog-hr-sosial',
    title: 'Psikolog, Spesialis HR, Pekerja Sosial & Riset Perilaku',
    sector: 'Pendidikan, Riset & Sosial',
    dailyWork:
      'Menangani asesmen dan konseling kesehatan mental, mengelola rekrutmen dan pengembangan karyawan, mendampingi kelompok rentan, serta meneliti kebiasaan konsumen atau masyarakat.',
    realityNote:
      'Untuk membuka praktik sebagai Psikolog berizin, lulusan S1 wajib menempuh Pendidikan Profesi Psikologi.',
    primaryMajors: ['psikologi', 'sosiologi-antropologi', 'kriminologi-kessos'],
    alternativeMajors: ['pendidikan-guru', 'manajemen-bisnis'],
    keyRoots: ['sosiologi', 'biologi', 'logika'],
    searchKeywords: ['psikolog', 'hrd', 'hr', 'konselor', 'pekerja sosial', 'csr', 'riset pasar']
  },
  {
    id: 'guru-edtech-kurikulum',
    title: 'Guru, Konselor Sekolah, Perancang Kurikulum & Pengembang Edtech',
    sector: 'Pendidikan, Riset & Sosial',
    dailyWork:
      'Mengajar dan membimbing belajar peserta didik, menyusun kurikulum dan modul pelatihan, serta merancang platform dan materi pembelajaran digital.',
    realityNote:
      'Untuk memperoleh sertifikasi pendidik resmi di sekolah formal, lulusan S1 mengikuti Pendidikan Profesi Guru (PPG).',
    primaryMajors: ['pendidikan-guru'],
    alternativeMajors: ['psikologi', 'sastra-bahasa', 'matematika-murni'],
    keyRoots: ['sosiologi', 'bahasa', 'logika'],
    searchKeywords: ['guru', 'dosen', 'konselor', 'bk', 'kurikulum', 'edtech', 'pelatihan']
  },
  {
    id: 'peneliti-sains-etika',
    title: 'Peneliti Sains Murni, Bioetika & Tata Kelola Teknologi',
    sector: 'Pendidikan, Riset & Sosial',
    dailyWork:
      'Melakukan eksperimen laboratorium dan pemodelan teoretis di matematika, fisika, kimia, biologi, hingga menelaah etika kecerdasan buatan, bioetika, dan kebijakan sains.',
    realityNote:
      'Jalur peneliti profesional (BRIN, laboratorium industri, universitas) umumnya sangat terbantu dengan studi lanjut S2/S3 sesuai bidang riset.',
    primaryMajors: ['matematika-murni', 'fisika-astronomi', 'kimia-murni', 'bioteknologi', 'filsafat-etika'],
    alternativeMajors: ['sains-data', 'meteorologi-geofisika'],
    keyRoots: ['matematika', 'fisika', 'kimia', 'biologi', 'logika'],
    searchKeywords: ['peneliti', 'brin', 'ilmuwan', 'astronom', 'filsuf', 'etika ai', 'riset']
  },
  {
    id: 'kurator-arsip-informasi',
    title: 'Kurator Museum, Arkeolog, Arsiparis & Information Architect',
    sector: 'Pendidikan, Riset & Sosial',
    dailyWork:
      'Melestarikan situs cagar budaya dan koleksi sejarah, menata sistem arsip elektronik organisasi, serta merancang struktur katalog dan basis pengetahuan digital.',
    realityNote:
      'Kebutuhan pengelolaan arsip digital, tata kelola dokumen perusahaan, dan wisata warisan budaya terus bertumbuh di instansi pemerintah maupun swasta.',
    primaryMajors: ['sejarah-arkeologi', 'ilmu-perpustakaan'],
    alternativeMajors: ['sosiologi-antropologi', 'seni-rupa-pertunjukan', 'sistem-informasi'],
    keyRoots: ['sosiologi', 'bahasa', 'geografi', 'logika'],
    searchKeywords: ['museum', 'arkeolog', 'kurator', 'arsiparis', 'pustakawan', 'sejarah']
  }
];
