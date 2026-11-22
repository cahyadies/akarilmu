import { KnowledgeNode } from '../types/knowledge';

export const SAINTEK_MAJOR_NODES: KnowledgeNode[] = [
  // Klaster Kesehatan (9)
  {
    id: 'kedokteran',
    title: 'Kedokteran Umum',
    shortLabel: 'Kedokteran Umum',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Kesehatan',
    summary:
      'Mempelajari diagnosis, pencegahan, dan penanganan penyakit manusia secara klinis dari tingkat sel sampai sistem organ.',
    howItConnects:
      'Biologi menjadi tulang punggung anatomi dan fisiologi, Kimia menjelaskan metabolisme serta cara kerja obat, dan Fisika membantu memahami tekanan cairan tubuh serta pencitraan medis.',
    topics: ['Anatomi dan histologi manusia', 'Biokimia dan patologi klinis', 'Farmakologi dan terapi', 'Keterampilan klinis dan etika medis'],
    outcomes: ['Dokter umum atau spesialis (setelah profesi)', 'Peneliti biomedis dan klinis', 'Manajemen layanan rumah sakit'],
    smaTip:
      'Siapkan stamina membaca panjang dan pahami hubungan Biologi dengan Kimia secara menyambung, bukan sekadar menghafal istilah.',
    searchKeywords: ['dokter', 'fk', 'klinis', 'rumah sakit', 'medis']
  },
  {
    id: 'kedokteran-gigi',
    title: 'Kedokteran Gigi',
    shortLabel: 'Kedokteran Gigi',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Kesehatan',
    summary:
      'Fokus pada pencegahan, diagnosis, bedah minor, dan rehabilitasi kesehatan gigi, gusi, rahang, serta jaringan rongga mulut.',
    howItConnects:
      'Memadukan Biologi anatomi kepala-leher, Kimia untuk biomaterial tambalan dan obat, serta ketelitian visual-motorik halus saat merestorasi struktur gigi.',
    topics: ['Anatomi rongga mulut dan maksilofasial', 'Biomaterial kedokteran gigi', 'Konservasi gigi dan ortodonti', 'Bedah mulut dan kesehatan gigi masyarakat'],
    outcomes: ['Dokter gigi praktik dan spesialis (ortodontis, bedah mulut)', 'Peneliti material dental', 'Konsultan kesehatan gigi komunitas'],
    smaTip:
      'Selain Biologi dan Kimia, keterampilan tangan yang teliti (mengukir, merakit benda kecil) sangat terpakai saat praktikum preklinik.',
    searchKeywords: ['fkg', 'dokter gigi', 'ortodonti', 'mulut', 'dental']
  },
  {
    id: 'kedokteran-hewan',
    title: 'Kedokteran Hewan',
    shortLabel: 'Kedokteran Hewan',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Kesehatan',
    summary:
      'Mempelajari kesehatan, pencegahan wabah, penanganan klinis hewan kesayangan, ternak, satwa liar, serta keamanan produk pangan asal hewan.',
    howItConnects:
      'Berakar kuat pada Biologi zoologi dan fisiologi berbagai spesies hewan serta Kimia untuk farmakologi veteriner dan uji mutu produk hewani.',
    topics: ['Anatomi dan fisiologi veteriner', 'Mikrobiologi, virologi, dan zoonosis', 'Bedah dan penyakit dalam hewan', 'Keamanan pangan asal hewan dan konservasi satwa'],
    outcomes: ['Dokter hewan klinik dan rumah sakit hewan', 'Dokter hewan karantina, balai konservasi, atau peternakan', 'Pengawas keamanan daging, susu, dan obat hewan'],
    smaTip:
      'Cakupannya jauh lebih luas dari klinik kucing dan anjing: dokter hewan juga berada di garis depan pengendalian penyakit menular dari hewan ke manusia (zoonosis).',
    searchKeywords: ['fkh', 'dokter hewan', 'vet', 'satwa', 'ternak']
  },
  {
    id: 'farmasi',
    title: 'Farmasi & Ilmu Obat',
    shortLabel: 'Farmasi',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Kesehatan',
    summary:
      'Merancang, mensintesis, memformulasi, dan menguji keamanan serta efektivitas obat, vaksin, suplemen, hingga produk kosmetik.',
    howItConnects:
      'Kimia sangat dominan dalam merancang dan menganalisis senyawa aktif, sedangkan Biologi menjelaskan bagaimana obat diserap, dimetabolisme, dan bekerja di tubuh.',
    topics: ['Kimia medisinal dan analisis farmasi', 'Farmakologi dan toksikologi', 'Teknologi formulasi sediaan obat', 'Farmasi klinis, komunitas, dan regulasi'],
    outcomes: ['Apoteker klinis di rumah sakit atau apotek', 'Peneliti R&D dan kontrol mutu industri farmasi/kosmetik', 'Pengawas obat dan makanan (BPOM)'],
    smaTip:
      'Jika kamu jauh lebih menyukai Kimia daripada hafalan anatomi tetapi ingin berkarya di kesehatan, Farmasi sering terasa lebih pas dibanding Kedokteran.',
    searchKeywords: ['obat', 'apoteker', 'racik', 'kosmetik', 'bpom']
  },
  {
    id: 'keperawatan',
    title: 'Ilmu Keperawatan',
    shortLabel: 'Ilmu Keperawatan',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Kesehatan',
    summary:
      'Mempelajari asuhan keperawatan menyeluruh pada pasien akut, kronis, gawat darurat, hingga pendampingan pemulihan fisik dan psikologis.',
    howItConnects:
      'Biologi anatomi dan patofisiologi menjadi dasar tindakan klinis, Kimia membantu pemahaman obat dan cairan infus, dan Sosiologi/Psikologi mendukung komunikasi empatik dengan pasien.',
    topics: ['Anatomi, fisiologi, dan patofisiologi', 'Keperawatan medikal bedah dan gawat darurat', 'Keperawatan anak, maternitas, dan jiwa', 'Manajemen asuhan keperawatan'],
    outcomes: ['Perawat profesional (Ners) di rumah sakit dalam dan luar negeri', 'Perawat gawat darurat dan ICU', 'Koordinator kesehatan komunitas dan homecare'],
    smaTip:
      'Profesi perawat menuntut kombinasi ilmu klinis yang solid, ketenangan di situasi darurat, dan kemampuan berkomunikasi hangat dengan pasien serta keluarga.',
    searchKeywords: ['perawat', 'ners', 'fik', 'rumah sakit', 'klinis']
  },
  {
    id: 'kebidanan',
    title: 'Kebidanan',
    shortLabel: 'Kebidanan',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Kesehatan',
    summary:
      'Berfokus pada kesehatan reproduksi perempuan, pendampingan kehamilan, persalinan aman, masa nifas, serta pemantauan tumbuh kembang bayi dan balita.',
    howItConnects:
      'Menggabungkan Biologi reproduksi dan embriologi dengan Kimia nutrisi/farmakologi dasar serta pendekatan sosial budaya dalam layanan kesehatan ibu dan anak.',
    topics: ['Anatomi dan fisiologi reproduksi', 'Asuhan kehamilan dan persalinan', 'Kesehatan neonatal, bayi, dan balita', 'Edukasi kesehatan ibu dan keluarga'],
    outcomes: ['Bidan praktik mandiri atau di fasilitas kesehatan', 'Pendidik dan konselor laktasi serta kesehatan reproduksi', 'Pengelola program kesehatan ibu dan anak'],
    smaTip:
      'Cocok bagi yang tertarik pada ilmu kesehatan manusia sekaligus ingin mendampingi momen penting keluarga secara langsung di masyarakat.',
    searchKeywords: ['bidan', 'kehamilan', 'persalinan', 'ibu', 'bayi']
  },
  {
    id: 'ilmu-gizi',
    title: 'Ilmu Gizi',
    shortLabel: 'Ilmu Gizi',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Kesehatan',
    summary:
      'Mengkaji kebutuhan zat gizi manusia, terapi diet klinis pada pasien penyakit tertentu, metabolisme makanan, dan pencegahan masalah gizi.',
    howItConnects:
      'Biologi dan Kimia menjelaskan pencernaan serta metabolisme mikronutrien, sementara Sosiologi membantu menyusun anjuran makan yang realistis dengan budaya lokal.',
    topics: ['Biokimia gizi dan metabolisme', 'Dietetika klinis dan gizi olahraga', 'Penilaian status gizi dan keamanan pangan', 'Perencanaan program gizi masyarakat'],
    outcomes: ['Ahli gizi (dietisien) rumah sakit dan klinik', 'Konsultan nutrisi olahraga dan kebugaran', 'Spesialis gizi industri makanan dan minuman'],
    smaTip:
      'Di kuliah Ilmu Gizi kamu akan banyak bertemu biokimia dan perhitungan kebutuhan kalori klinis, bukan sekadar memasak menu sehat.',
    searchKeywords: ['nutrisi', 'diet', 'makanan', 'stunting', 'kalori']
  },
  {
    id: 'kesehatan-masyarakat',
    title: 'Kesehatan Masyarakat (Kesmas)',
    shortLabel: 'Kesehatan Masyarakat',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Kesehatan',
    summary:
      'Berfokus pada pencegahan penyakit dan peningkatan derajat kesehatan di tingkat populasi, mulai dari epidemiologi, sanitasi, K3, hingga kebijakan BPJS.',
    howItConnects:
      'Memadukan Biologi epidemiologi, Statistika untuk membaca tren wabah, serta Sosiologi dan Ekonomi untuk merancang kebijakan dan promosi kesehatan.',
    topics: ['Epidemiologi dan biostatistika', 'Keselamatan dan kesehatan kerja (K3)', 'Administrasi kebijakan dan pembiayaan kesehatan', 'Kesehatan lingkungan dan promosi kesehatan'],
    outcomes: ['Spesialis K3 (HSE) di industri energi dan manufaktur', 'Epidemiolog dan analis kebijakan dinas kesehatan', 'Manajer program kesehatan NGO dan rumah sakit'],
    smaTip:
      'Jika Kedokteran mengobati pasien satu per satu, Kesmas mencegah ribuan orang jatuh sakit lewat data, aturan K3, dan edukasi massal.',
    searchKeywords: ['fkm', 'kesmas', 'k3', 'hse', 'epidemiologi', 'bpjs']
  },
  {
    id: 'fisioterapi',
    title: 'Fisioterapi & Rehabilitasi Medis',
    shortLabel: 'Fisioterapi',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Kesehatan',
    summary:
      'Memulihkan dan mengoptimalkan fungsi gerak tubuh akibat cedera olahraga, stroke, gangguan otot-tulang, maupun pemulihan pasca-operasi.',
    howItConnects:
      'Biologi anatomi otot-saraf menjadi peta tubuhnya, sedangkan Fisika biomekanika dan terapi gelombang/panas menjadi dasar alat serta latihan geraknya.',
    topics: ['Anatomi muskuloskeletal dan neuromuskuler', 'Biomekanika dan kinesiologi gerak', 'Terapi latihan dan elektroterapi', 'Rehabilitasi cedera olahraga dan lansia'],
    outcomes: ['Fisioterapis rumah sakit dan klinik rehabilitasi', 'Fisioterapis tim olahraga profesional', 'Praktisi rehabilitasi ergonomis dan lansia'],
    smaTip:
      'Pilihan menarik bagi yang menyukai Biologi tubuh manusia, gerak olahraga, dan interaksi langsung mendampingi pemulihan pasien.',
    searchKeywords: ['rehabilitasi', 'cedera', 'olahraga', 'otot', 'gerak', 'fisio']
  },

  // Klaster MIPA & Kebumian (6)
  {
    id: 'matematika-murni',
    title: 'Matematika Murni & Terapan',
    shortLabel: 'Matematika (MIPA)',
    layer: 'major',
    group: 'Saintek',
    cluster: 'MIPA & Kebumian',
    summary:
      'Mendalami struktur aljabar, analisis, pemodelan sistem dinamis, kriptografi, dan optimasi yang menjadi sumber rumus bagi sains dan industri.',
    howItConnects:
      'Berakar langsung pada Matematika dan Logika pembuktian ketat, lalu bercabang ke komputasi ilmiah, keuangan kuantitatif, dan riset teknologi.',
    topics: ['Analisis real dan aljabar abstrak', 'Persamaan diferensial dan pemodelan', 'Optimasi dan riset operasi', 'Kriptografi dan matematika komputasi'],
    outcomes: ['Analis kuantitatif (quant) dan riset data', 'Pengembang algoritma dan keamanan kriptografi', 'Peneliti dan akademisi matematika'],
    smaTip:
      'Di jurusan Matematika murni, kamu akan jauh lebih banyak menulis pembuktian logis daripada menghitung angka panjang.',
    searchKeywords: ['fmipa', 'matematika', 'kriptografi', 'quant', 'pemodelan']
  },
  {
    id: 'fisika-astronomi',
    title: 'Fisika & Astronomi',
    shortLabel: 'Fisika & Astronomi',
    layer: 'major',
    group: 'Saintek',
    cluster: 'MIPA & Kebumian',
    summary:
      'Menyelidiki hukum dasar alam dari partikel kuantum, fisika material, optik laser, hingga evolusi bintang dan galaksi di antariksa.',
    howItConnects:
      'Menggabungkan Fisika teoretis-eksperimental dengan Matematika lanjut untuk memahami fenomena alam dan melahirkan inovasi instrumentasi.',
    topics: ['Mekanika klasik, kuantum, dan statistik', 'Elektrodinamika dan fisika material', 'Instrumentasi laboratorium dan komputasi fisis', 'Astrofisika dan observasi benda langit'],
    outcomes: ['Peneliti material maju, optik, dan energi', 'Fisikawan medis di radioterapi rumah sakit', 'Peneliti antariksa, observatorium, dan analis data ilmiah'],
    smaTip:
      'Lulusan Fisika banyak bekerja lintas bidang (fisika medis, semikonduktor, geofisika, hingga pemodelan data) karena terbiasa memecahkan masalah dari prinsip dasar.',
    searchKeywords: ['fisika', 'astronomi', 'bintang', 'kuantum', 'laser', 'fmipa']
  },
  {
    id: 'kimia-murni',
    title: 'Kimia Murni & Analitik',
    shortLabel: 'Kimia (MIPA)',
    layer: 'major',
    group: 'Saintek',
    cluster: 'MIPA & Kebumian',
    summary:
      'Fokus pada penelitian struktur molekul, sintesis senyawa baru, metode pengujian kadar zat yang presisi, serta kimia lingkungan dan hayati.',
    howItConnects:
      'Berakar pada Kimia dan Fisika kuantum/termodinamika, serta bersinggungan dengan Biologi pada biokimia laboratorium.',
    topics: ['Kimia organik, anorganik, dan fisik', 'Kimia analitik dan instrumentasi (HPLC, GC-MS)', 'Biokimia dan kimia bahan alam', 'Kimia material dan katalis'],
    outcomes: ['Analis laboratorium dan kontrol mutu (QC/QA)', 'Peneliti bahan alam, polimer, dan baterai', 'Ahli forensik kimia dan uji lingkungan'],
    smaTip:
      'Berbeda dari Teknik Kimia yang merancang pabrik, Kimia Murni lebih dalam di riset reaksi, sintesis molekul, dan analisis laboratorium.',
    searchKeywords: ['kimia', 'lab', 'qc', 'forensik', 'analitik', 'fmipa']
  },
  {
    id: 'bioteknologi',
    title: 'Biologi & Bioteknologi',
    shortLabel: 'Biologi & Bioteknologi',
    layer: 'major',
    group: 'Saintek',
    cluster: 'MIPA & Kebumian',
    summary:
      'Meneliti keanekaragaman hayati, mikroba, sel, dan rekayasa genetika untuk pengembangan vaksin, bibit unggul, enzim industri, dan konservasi.',
    howItConnects:
      'Memadukan Biologi molekuler dan ekologi dengan Kimia organik untuk memahami dan merekayasa sistem hidup secara terkendali.',
    topics: ['Biologi sel, genetika, dan rekayasa DNA', 'Mikrobiologi dan fermentasi industri', 'Ekologi dan biodiversitas tropis', 'Bioinformatika dasar'],
    outcomes: ['Peneliti laboratorium bioteknologi dan vaksin', 'Spesialis konservasi biodiversitas dan ekologi', 'Pengembang produk bio-industri dan pangan'],
    smaTip:
      'Indonesia punya keanekaragaman hayati luar biasa; riset biologi modern kini banyak berpadu dengan data komputer (bioinformatika).',
    searchKeywords: ['biologi', 'biotek', 'dna', 'vaksin', 'mikroba', 'konservasi']
  },
  {
    id: 'aktuaria',
    title: 'Statistika & Ilmu Aktuaria',
    shortLabel: 'Statistika & Aktuaria',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'MIPA & Kebumian',
    summary:
      'Mengukur pola data, merancang survei ilmiah, dan menghitung risiko finansial jangka panjang pada asuransi, dana pensiun, serta perbankan.',
    howItConnects:
      'Persimpangan tajam antara Matematika probabilitas-statistika dan Ekonomi keuangan untuk mengubah ketidakpastian menjadi angka risiko yang terukur.',
    topics: ['Teori peluang dan inferensi statistika', 'Matematika keuangan dan model risiko', 'Tabel mortalita, asuransi, dan dana pensiun', 'Analisis deret waktu dan pemrograman statistik'],
    outcomes: ['Aktuaris bersertifikasi di perusahaan asuransi', 'Statistisi lembaga riset dan BPS', 'Analis risiko kredit dan data perbankan'],
    smaTip:
      'Salah satu jalur paling jelas bagi siswa yang kuat di peluang/statistika dan ingin langsung menerapkannya di industri keuangan maupun riset.',
    searchKeywords: ['statistika', 'aktuaria', 'asuransi', 'risiko', 'bps', 'pensiun']
  },
  {
    id: 'meteorologi-geofisika',
    title: 'Meteorologi, Klimatologi & Geofisika',
    shortLabel: 'Meteorologi & Geofisika',
    layer: 'major',
    group: 'Saintek',
    cluster: 'MIPA & Kebumian',
    summary:
      'Mempelajari dinamika atmosfer, prakiraan cuaca, perubahan iklim, gempa bumi, tsunami, dan struktur bawah permukaan bumi menggunakan gelombang fisis.',
    howItConnects:
      'Fisika fluida dan gelombang menjadi hukum penggeraknya, Matematika memodelkan simulasi cuaca/seismik, dan Geografi memberi konteks wilayah serta mitigasi bencana.',
    topics: ['Dinamika atmosfer dan prakiraan cuaca', 'Seismologi gempa dan mitigasi tsunami', 'Geofisika eksplorasi (seismik, gravitasi, magnetik)', 'Pemodelan iklim dan penginderaan jauh'],
    outcomes: ['Analis cuaca, iklim, dan gempa (BMKG dan lembaga riset)', 'Geofisikawan eksplorasi panas bumi dan migas', 'Spesialis mitigasi bencana kebumian'],
    smaTip:
      'Sangat relevan untuk Indonesia yang rawan gempa dan punya dinamika cuaca tropis kompleks. Kuatkan Fisika dan Geografi.',
    searchKeywords: ['bmkg', 'cuaca', 'gempa', 'iklim', 'tsunami', 'geofisika']
  },

  // Klaster Teknik & Rekayasa (14)
  {
    id: 'teknik-sipil',
    title: 'Teknik Sipil',
    shortLabel: 'Teknik Sipil',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Merencanakan, menghitung keamanan struktur, membangun, dan memelihara infrastruktur seperti jembatan, gedung bertingkat, jalan, pelabuhan, dan bendungan.',
    howItConnects:
      'Fisika mekanika menentukan bagaimana beban dan gempa ditahan bangunan, sedangkan Matematika kalkulus menghitung kekuatan beton, baja, tanah, dan debit air.',
    topics: ['Analisis struktur dan bangunan tahan gempa', 'Mekanika tanah dan geoteknik fondasi', 'Rekayasa transportasi dan jalan raya', 'Hidrologi, irigasi, dan manajemen konstruksi'],
    outcomes: ['Insinyur struktur dan geoteknik', 'Manajer proyek konstruksi infrastruktur', 'Perencana sumber daya air dan transportasi'],
    smaTip:
      'Kalau kamu betah menghitung kesetimbangan gaya di Fisika dan ingin melihat karyamu berdiri nyata di kota, cek jurusan ini.',
    searchKeywords: ['sipil', 'bangunan', 'jembatan', 'konstruksi', 'proyek', 'gempa']
  },
  {
    id: 'teknik-mesin',
    title: 'Teknik Mesin & Robotika',
    shortLabel: 'Teknik Mesin',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Merancang sistem mekanis, mesin konversi energi, otomotif, manufaktur presisi, pendingin, hingga aktuator dan mekanisme robot.',
    howItConnects:
      'Berdiri di atas Fisika mekanika dan termodinamika yang dihitung dengan Matematika, serta makin sering berpadu dengan elektronika kendali.',
    topics: ['Desain mekanikal dan CAD 3D', 'Termodinamika dan mesin konversi energi', 'Material logam dan teknik manufaktur', 'Mekatronika dan sistem kendali'],
    outcomes: ['Insinyur desain otomotif dan alat berat', 'Insinyur manufaktur dan pembangkit energi', 'Pengembang sistem robotika industri'],
    smaTip:
      'Suka membongkar barang untuk tahu cara kerja roda gigi, mesin motor, atau pompa adalah sinyal minat yang sangat cocok.',
    searchKeywords: ['mesin', 'otomotif', 'robot', 'manufaktur', 'pabrik', 'energi']
  },
  {
    id: 'teknik-elektro',
    title: 'Teknik Elektro & Semikonduktor',
    shortLabel: 'Teknik Elektro',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Mengembangkan sistem tenaga listrik, rangkaian elektronika, perancangan chip semikonduktor, telekomunikasi, dan kendali otomatis.',
    howItConnects:
      'Fisika listrik-magnet menjelaskan perilaku arus dan gelombang, Matematika memodelkan sinyal, dan Logika dipakai merancang gerbang digital serta mikrokontroler.',
    topics: ['Rangkaian analog dan digital', 'Sistem tenaga listrik dan energi baru', 'Telekomunikasi dan pengolahan sinyal', 'Mikrokontroler dan sistem tertanam (IoT)'],
    outcomes: ['Insinyur elektronika, chip, dan IoT', 'Insinyur sistem tenaga listrik (PLN, energi terbarukan)', 'Insinyur telekomunikasi dan otomasi industri'],
    smaTip:
      'Salah satu jurusan teknik paling luas cabangnya: mulai dari jaringan listrik tegangan tinggi sampai perancangan microchip.',
    searchKeywords: ['elektro', 'listrik', 'chip', 'iot', 'telekomunikasi', 'pln']
  },
  {
    id: 'teknik-kimia',
    title: 'Teknik Kimia',
    shortLabel: 'Teknik Kimia',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Mengubah reaksi kimia skala laboratorium menjadi proses produksi industri yang aman, hemat energi, dan ramah lingkungan untuk energi, pangan, hingga bahan baku.',
    howItConnects:
      'Porsi Fisika (aliran fluida, perpindahan panas) dan Matematika (neraca massa) sama besarnya dengan Kimia untuk merancang reaktor dan alur pabrik.',
    topics: ['Neraca massa dan energi pabrik', 'Termodinamika dan kinetika reaksi', 'Operasi pemisahan dan perancangan reaktor', 'Keselamatan proses dan teknologi bersih'],
    outcomes: ['Process engineer di industri energi, petrokimia, atau pangan', 'Insinyur pengolahan bioenergi dan baterai', 'Spesialis keselamatan proses pabrik'],
    smaTip:
      'Bayangkan Teknik Kimia sebagai ilmu merancang proses pabrik secara menyeluruh, bukan bekerja terus-menerus dengan tabung reaksi.',
    searchKeywords: ['tekkim', 'pabrik', 'kilang', 'proses', 'petrokimia']
  },
  {
    id: 'teknik-industri',
    title: 'Teknik Industri',
    shortLabel: 'Teknik Industri',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Merancang dan mengoptimalkan sistem terintegrasi yang melibatkan manusia, mesin, bahan baku, informasi, dan biaya agar operasional berjalan efektif.',
    howItConnects:
      'Jembatan paling terkenal antara Teknik dan Manajemen: memadukan Matematika optimasi dan statistika, Ekonomi biaya, Fisika manufaktur dasar, serta ergonomi manusia.',
    topics: ['Riset operasi dan pemodelan optimasi', 'Perencanaan produksi dan rantai pasok (supply chain)', 'Ergonomi dan rekayasa sistem kerja', 'Pengendalian kualitas dan ekonomi teknik'],
    outcomes: ['Supply chain dan logistics analyst', 'Insinyur pengendalian mutu dan operasional pabrik', 'Konsultan efisiensi bisnis dan produk'],
    smaTip:
      'Pilihan kuat untuk siswa IPA yang menyukai matematika dan sistem kerja, sekaligus tertarik pada manajemen bisnis dan manusia.',
    searchKeywords: ['industri', 'supply chain', 'logistik', 'manajemen pabrik', 'ti']
  },
  {
    id: 'teknik-biomedis',
    title: 'Teknik Biomedis',
    shortLabel: 'Teknik Biomedis',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Merancang perangkat kesehatan, sensor biosinyal, prostetik, dan teknologi pencitraan medis untuk mendukung diagnosis dan terapi pasien.',
    howItConnects:
      'Fisika dan Matematika membangun sensor, elektronika, dan pengolahan sinyal, sedangkan Biologi memastikan perangkat aman dan sesuai fisiologi tubuh.',
    topics: ['Instrumentasi medis dan pengolahan biosinyal', 'Biomekanika dan biomaterial implan', 'Pencitraan medis (USG, MRI, CT Scan)', 'Fisiologi tubuh untuk rekayasa'],
    outcomes: ['Insinyur perangkat kesehatan dan alat rumah sakit', 'Spesialis aplikasi klinis alat medis', 'Peneliti prostetik dan teknologi rehabilitasi'],
    smaTip:
      'Cocok jika kamu menikmati Fisika dan elektronika tetapi ingin hasil karyamu langsung berdampak di dunia medis.',
    searchKeywords: ['biomedis', 'alat medis', 'mri', 'prostetik', 'sensor tubuh']
  },
  {
    id: 'teknik-dirgantara',
    title: 'Teknik Dirgantara & Penerbangan',
    shortLabel: 'Teknik Dirgantara',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Merancang, menguji, dan merawat pesawat udara, helikopter, drone otonom, sistem propulsi, hingga wahana satelit.',
    howItConnects:
      'Mengandalkan Fisika aerodinamika, fluida, dan struktur ringan yang seluruh simulasinya ditopang persamaan Matematika kalkulus dan kendali.',
    topics: ['Aerodinamika dan mekanika terbang', 'Struktur ringan dan material komposit', 'Sistem propulsi dan perawatan pesawat', 'Navigasi, kendali terbang, dan drone'],
    outcomes: ['Insinyur perawatan dan kelaikan udara maskapai', 'Perancang drone dan sistem dirgantara', 'Peneliti aerodinamika dan teknologi satelit'],
    smaTip:
      'Satu keluarga dengan Teknik Mesin, tetapi berfokus pada beban sangat ringan, aliran udara cepat, dan standar keselamatan ekstra ketat.',
    searchKeywords: ['pesawat', 'drone', 'penerbangan', 'roket', 'satelit', 'dirgantara']
  },
  {
    id: 'teknik-geologi',
    title: 'Teknik Geologi',
    shortLabel: 'Teknik Geologi',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Memetakan sejarah dan struktur lapisan bumi, air tanah, energi panas bumi, potensi mineral, serta risiko bencana seperti longsor dan sesar gempa.',
    howItConnects:
      'Geografi dan pemetaan memberi pandangan bentang alam, Kimia menganalisis mineral batuan, dan Fisika membaca tekanan serta pergerakan lapisan bumi.',
    topics: ['Mineralogi, petrologi, dan stratigrafi', 'Geologi struktur dan pemetaan lapangan', 'Hidrogeologi dan energi panas bumi', 'Geologi teknik dan mitigasi bencana'],
    outcomes: ['Geolog eksplorasi panas bumi dan energi', 'Konsultan geoteknik dan survei air tanah', 'Peneliti mitigasi bencana kebumian'],
    smaTip:
      'Jika kamu menyukai sains alam dan menikmati kuliah lapangan mendaki bukit serta mengamati singkapan batuan, jurusan ini sangat khas.',
    searchKeywords: ['geologi', 'batuan', 'panas bumi', 'gunung', 'longsor', 'air tanah']
  },
  {
    id: 'teknik-pertambangan',
    title: 'Teknik Pertambangan & Perminyakan',
    shortLabel: 'Pertambangan & Migas',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Merancang metode eksplorasi, pengeboran, penggalian, pengolahan mineral/energi, serta reklamasi pascatambang yang aman dan bertanggung jawab.',
    howItConnects:
      'Fisika mekanika batuan dan aliran fluida bawah tanah berpadu dengan Kimia mineral serta Matematika ekonomi cadangan untuk mengelola sumber daya bumi.',
    topics: ['Mekanika batuan dan teknik penggalian', 'Teknik reservoir dan pengeboran', 'Pengolahan mineral dan keselamatan tambang', 'Reklamasi dan tata kelola lingkungan tambang'],
    outcomes: ['Insinyur perencanaan tambang dan perminyakan', 'Insinyur keselamatan kerja tambang', 'Spesialis pengolahan mineral dan transisi energi'],
    smaTip:
      'Industri sumber daya alam kini makin menuntut keahlian efisiensi ekstraksi sekaligus standar lingkungan dan reklamasi yang ketat.',
    searchKeywords: ['tambang', 'migas', 'minyak', 'batubara', 'nikel', 'pengeboran']
  },
  {
    id: 'teknik-metalurgi',
    title: 'Teknik Metalurgi & Material',
    shortLabel: 'Metalurgi & Material',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Mempelajari ekstraksi logam dari bijihnya, perancangan sifat logam paduan, polimer, keramik, hingga material baterai kendaraan listrik dan semikonduktor.',
    howItConnects:
      'Pertemuan erat Kimia (reaksi ekstraksi, korosi, ikatan atom) dan Fisika (kekuatan tarik, panas, konduktivitas) untuk menciptakan bahan teknologi masa depan.',
    topics: ['Metalurgi ekstraksi dan pirometalurgi', 'Struktur mikro logam dan pengendalian korosi', 'Material polimer, keramik, dan komposit', 'Material energi dan baterai'],
    outcomes: ['Insinyur smelter, hilirisasi mineral, dan manufaktur', 'Peneliti material baterai dan komponen otomotif', 'Inspektur kualitas dan pencegahan korosi industri'],
    smaTip:
      'Sangat strategis di Indonesia seiring berkembangnya industri hilirisasi mineral, manufaktur, dan rantai pasok baterai.',
    searchKeywords: ['metalurgi', 'material', 'logam', 'baja', 'baterai', 'smelter']
  },
  {
    id: 'teknik-geodesi',
    title: 'Teknik Geodesi & Geomatika',
    shortLabel: 'Geodesi & Geomatika',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Mengukur bentuk permukaan bumi dengan presisi tinggi memakai satelit GPS, drone fotogrametri, laser LiDAR, dan membangun sistem peta digital (GIS).',
    howItConnects:
      'Geografi pemetaan berpadu dengan Matematika trigonometri-matriks dan Fisika gelombang satelit untuk menentukan batas wilayah, tata ruang, dan pemetaan dasar.',
    topics: ['Survei pemetaan terestris dan drone', 'Sistem satelit navigasi (GNSS/GPS)', 'Penginderaan jauh dan sistem informasi geografis', 'Hidrografi laut dan kadaster pertanahan'],
    outcomes: ['Insinyur geospasial dan pemetaan drone/LiDAR', 'Spesialis GIS di pertambangan, infrastruktur, atau pertanahan', 'Surveyor hidrografi dan batas wilayah'],
    smaTip:
      'Sangat cocok jika kamu suka Matematika trigonometri, teknologi pemetaan satelit/drone, dan aplikasi peta digital.',
    searchKeywords: ['geodesi', 'geomatika', 'gis', 'peta', 'drone', 'survei', 'satelit']
  },
  {
    id: 'teknik-lingkungan',
    title: 'Teknik Lingkungan',
    shortLabel: 'Teknik Lingkungan',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Merancang instalasi pengolahan air minum, penanganan limbah industri dan domestik, pengendalian polusi udara, serta sistem persampahan kota.',
    howItConnects:
      'Kimia menganalisis kadar polutan, Biologi membantu pengolahan limbah secara hayati, dan Fisika mengatur perpipaan serta hidraulika aliran air.',
    topics: ['Kimia dan mikrobiologi lingkungan', 'Sistem penyediaan air bersih dan drainase', 'Pengelolaan limbah padat, cair, dan B3', 'AMDAL dan tata kelola keberlanjutan (ESG)'],
    outcomes: ['Insinyur pengolahan air dan limbah (WWTP)', 'Konsultan lingkungan, AMDAL, dan ESG', 'Perencana sanitasi dan infrastruktur hijau kota'],
    smaTip:
      'Cocok untuk kamu yang peduli isu iklim dan air bersih tetapi ingin memecahkannya lewat rekayasa teknis.',
    searchKeywords: ['lingkungan', 'limbah', 'air bersih', 'sampah', 'amdal', 'esg']
  },
  {
    id: 'teknik-perkapalan',
    title: 'Teknik Perkapalan & Kelautan',
    shortLabel: 'Perkapalan & Kelautan',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Merancang lambung kapal, stabilitas apung, sistem propulsi laut, pelabuhan, serta bangunan lepas pantai (offshore) untuk negara maritim.',
    howItConnects:
      'Fisika mekanika fluida, gelombang laut, dan kekuatan struktur baja berpadu dengan Matematika kalkulus serta pemahaman kondisi perairan dari Geografi kelautan.',
    topics: ['Hidrodinamika dan stabilitas kapal', 'Konstruksi lambung dan galangan kapal', 'Bangunan pantai dan struktur lepas pantai', 'Sistem permesinan dan logistik maritim'],
    outcomes: ['Insinyur desain dan galangan kapal', 'Insinyur struktur pelabuhan dan lepas pantai', 'Surveyor klasifikasi maritim dan pelayaran'],
    smaTip:
      'Sebagai negara kepulauan, rekayasa kapal dan pelabuhan adalah tulang punggung logistik nasional yang masih jarang dikenal pelajar SMA/K atau sederajat.',
    searchKeywords: ['kapal', 'maritim', 'pelabuhan', 'offshore', 'galangan', 'laut']
  },
  {
    id: 'teknik-nuklir',
    title: 'Teknik Nuklir & Energi Terbarukan',
    shortLabel: 'Nuklir & Energi',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Teknik & Rekayasa',
    summary:
      'Mempelajari pemanfaatan radiasi secara aman untuk medis dan industri, fisika reaktor, serta konversi energi surya, angin, air, dan panas bumi.',
    howItConnects:
      'Berdiri di atas Fisika inti, termodinamika, dan elektronika kendali yang dihitung secara presisi dengan Matematika dan Kimia material radiasi.',
    topics: ['Fisika inti dan proteksi radiasi', 'Aplikasi radiasi medis (radioterapi) dan industri', 'Termohidrolika dan sistem pembangkit', 'Sistem energi surya, angin, dan penyimpanan energi'],
    outcomes: ['Insinyur proteksi radiasi medis dan industri', 'Insinyur pembangkit listrik dan energi terbarukan', 'Peneliti energi bersih dan keselamatan nuklir'],
    smaTip:
      'Teknik Nuklir tidak hanya soal pembangkit listrik: banyak lulusannya berkarya di keselamatan radiasi rumah sakit (radiologi/onkologi) dan uji tak merusak industri.',
    searchKeywords: ['nuklir', 'radiasi', 'energi terbarukan', 'surya', 'pembangkit']
  },

  // Klaster Komputasi & Data (3)
  {
    id: 'ilmu-komputer',
    title: 'Teknik Informatika / Ilmu Komputer',
    shortLabel: 'Informatika / Ilmu Komp.',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Komputasi & Data',
    summary:
      'Mempelajari algoritma, arsitektur perangkat lunak, sistem operasi, jaringan, keamanan siber, dan cara membangun sistem digital yang andal.',
    howItConnects:
      'Logika menjaga ketepatan alur program dan pencegahan bug, sementara Matematika diskrit dan aljabar membentuk fondasi algoritma, kriptografi, serta grafika.',
    topics: ['Algoritma dan struktur data', 'Rekayasa perangkat lunak dan basis data', 'Sistem operasi dan jaringan komputer', 'Keamanan siber dan komputasi awan'],
    outcomes: ['Software engineer (web, mobile, backend)', 'Arsitek sistem cloud dan DevOps', 'Spesialis keamanan siber (cybersecurity)'],
    smaTip:
      'Menulis kode hanyalah alat. Yang paling sering diuji adalah kesabaran melacak masalah secara logis ketika sistem tidak berjalan sesuai rencana.',
    searchKeywords: ['informatika', 'ilkom', 'programmer', 'coding', 'software', 'cyber', 'it']
  },
  {
    id: 'sistem-informasi',
    title: 'Sistem Informasi',
    shortLabel: 'Sistem Informasi',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Komputasi & Data',
    summary:
      'Menjembatani kebutuhan proses bisnis organisasi dengan perancangan sistem perangkat lunak, tata kelola data, dan manajemen proyek TI.',
    howItConnects:
      'Menggabungkan Algoritma/Logika pemrograman dengan Ekonomi bisnis dan Manajemen Sistem agar teknologi benar-benar memecahkan masalah operasional.',
    topics: ['Analisis dan perancangan sistem informasi', 'Manajemen basis data dan ERP', 'Tata kelola TI dan manajemen proyek digital', 'Analisis proses bisnis dan produk digital'],
    outcomes: ['System analyst dan business analyst', 'Product manager aplikasi digital', 'Konsultan ERP dan tata kelola TI'],
    smaTip:
      'Jika kamu suka dunia teknologi dan pemrograman tetapi juga senang berdiskusi tentang bisnis dan alur organisasi, cek Sistem Informasi dibanding Informatika murni.',
    searchKeywords: ['si', 'sistem informasi', 'product manager', 'bisnis digital', 'erp', 'analyst']
  },
  {
    id: 'sains-data',
    title: 'Sains Data & Kecerdasan Buatan',
    shortLabel: 'Sains Data & AI',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Komputasi & Data',
    summary:
      'Mengolah data berskala besar memakai statistika, aljabar linear, dan algoritma pembelajaran mesin untuk menemukan pola serta mendukung keputusan.',
    howItConnects:
      'Matematika (statistika dan matriks) menjadi mesin modelnya, Logika/komputasi menjalankannya lewat kode, dan Ekonomi/domain menentukan pertanyaan yang bernilai dijawab.',
    topics: ['Statistika inferensial dan probabilitas', 'Pembelajaran mesin (machine learning)', 'Pemrograman pengolahan data skala besar', 'Visualisasi, evaluasi, dan etika AI'],
    outcomes: ['Data scientist dan machine learning engineer', 'Data analyst bisnis dan produk', 'Peneliti sistem cerdas'],
    smaTip:
      'Banyak siswa tertarik label AI tetapi kaget dengan porsi statistika dan pembersihan data. Pastikan kamu memang menikmati membaca pola angka.',
    searchKeywords: ['data', 'ai', 'machine learning', 'analitik', 'python', 'sains data']
  },

  // Klaster Pertanian, Pangan, Kehutanan & Kelautan (6)
  {
    id: 'agroteknologi',
    title: 'Agroteknologi & Ilmu Tanah',
    shortLabel: 'Agroteknologi & Tanah',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Pertanian & Kelautan',
    summary:
      'Mempelajari budidaya tanaman pangan dan perkebunan, kesuburan tanah, pemuliaan benih unggul, pengendalian hama, serta pertanian presisi.',
    howItConnects:
      'Biologi botani dan genetika menjelaskan pertumbuhan tanaman, Kimia mengatur nutrisi pupuk dan pH tanah, sedangkan Geografi membantu membaca iklim serta kesesuaian lahan.',
    topics: ['Fisiologi dan pemuliaan tanaman', 'Ilmu kesuburan tanah dan pemupukan', 'Perlindungan tanaman dan pengendalian hama terpadu', 'Pertanian berkelanjutan dan smart farming'],
    outcomes: ['Agronomis perusahaan perkebunan dan perbenihan', 'Peneliti pemuliaan tanaman dan ilmu tanah', 'Konsultan pertanian presisi dan ketahanan pangan'],
    smaTip:
      'Pertanian modern memakai sensor tanah, drone pemetaan lahan, dan genetika benih, jauh dari anggapan kuno soal mencangkul saja.',
    searchKeywords: ['pertanian', 'tanah', 'kebun', 'benih', 'agronomi', 'faperta']
  },
  {
    id: 'agribisnis',
    title: 'Agribisnis',
    shortLabel: 'Agribisnis',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Pertanian & Kelautan',
    summary:
      'Mengelola rantai usaha sektor pertanian dan pangan dari hulu ke hilir: pembiayaan, rantai pasok, pemasaran komoditas, hingga pemberdayaan petani.',
    howItConnects:
      'Mempertemukan pemahaman dasar produksi Biologi pertanian dengan Ekonomi pasar, Manajemen rantai pasok, serta Sosiologi masyarakat pedesaan.',
    topics: ['Ekonomi pertanian dan harga komoditas', 'Manajemen rantai pasok dan logistik pangan', 'Pemasaran produk agrikultur dan ekspor', 'Kewirausahaan dan penyuluhan pertanian'],
    outcomes: ['Manajer rantai pasok dan komoditas pangan', 'Analis pembiayaan agrikultur di perbankan', 'Wirausaha dan konsultan bisnis pangan'],
    smaTip:
      'Jalur lintas rumpun yang pas bila kamu tertarik pada bisnis dan ekonomi, tetapi ingin fokus pada sektor pangan yang selalu dibutuhkan masyarakat.',
    searchKeywords: ['agribisnis', 'komoditas', 'bisnis tani', 'ekspor pangan', 'rantai pasok']
  },
  {
    id: 'teknologi-pangan',
    title: 'Teknologi Pangan & Hasil Pertanian',
    shortLabel: 'Teknologi Pangan',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Pertanian & Kelautan',
    summary:
      'Mempelajari cara mengolah, mengawetkan, mengemas, menguji keamanan mikroba, dan mengembangkan produk makanan serta minuman dari bahan mentah.',
    howItConnects:
      'Kimia pangan menjelaskan rasa, tekstur, dan reaksi pengolahan; Biologi mikrobiologi menjaga keamanan dari bakteri pembusuk; dan Fisika mengatur proses pemanasan serta pendinginan pabrik.',
    topics: ['Kimia pangan dan rekayasa bahan', 'Mikrobiologi dan keamanan pangan (HACCP)', 'Teknologi pengemasan dan umur simpan', 'Pengembangan produk pangan (R&D) dan sertifikasi halal'],
    outcomes: ['Spesialis R&D produk makanan dan minuman', 'Quality assurance dan auditor keamanan pangan', 'Wirausaha industri olahan pangan'],
    smaTip:
      'Jangan tertukar dengan Tata Boga atau Ilmu Gizi: Teknologi Pangan fokus pada sains pengolahan dan keamanan produk pangan skala industri.',
    searchKeywords: ['tekpang', 'pangan', 'makanan', 'minuman', 'halal', 'fateta']
  },
  {
    id: 'kehutanan',
    title: 'Kehutanan & Konservasi Hutan',
    shortLabel: 'Kehutanan',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Pertanian & Kelautan',
    summary:
      'Mengelola ekosistem hutan tropis, konservasi satwa dan keanekaragaman hayati, rehabilitasi lahan, karbon hutan, serta pemanfaatan hasil hutan berkelanjutan.',
    howItConnects:
      'Biologi ekologi menjadi inti pelestarian flora-fauna, Geografi pemetaan satelit memantau tutupan hutan, dan Ekonomi/Sosiologi menata interaksi hutan dengan masyarakat sekitar.',
    topics: ['Silvikultur dan ekologi hutan tropis', 'Konservasi sumber daya alam dan satwa liar', 'Pemetaan hutan, karbon, dan pencegahan kebakaran', 'Teknologi hasil hutan dan perhutanan sosial'],
    outcomes: ['Pengelola kawasan konservasi dan taman nasional', 'Spesialis karbon hutan, ESG, dan restorasi ekosistem', 'Peneliti kehutanan dan perencanaan lahan'],
    smaTip:
      'Isu perubahan iklim dan perdagangan karbon membuat keahlian kehutanan dan pemetaan tutupan lahan makin dicari secara global.',
    searchKeywords: ['hutan', 'fahutan', 'konservasi', 'satwa', 'karbon', 'taman nasional']
  },
  {
    id: 'peternakan',
    title: 'Peternakan',
    shortLabel: 'Peternakan',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Pertanian & Kelautan',
    summary:
      'Mempelajari nutrisi pakan, genetika bibit ternak, manajemen kandang modern, serta pengolahan produk daging, susu, dan telur secara efisien.',
    howItConnects:
      'Biologi fisiologi hewan dan Kimia nutrisi pakan menjadi tulang punggung produksi, dipadukan dengan Ekonomi untuk mengelola kelayakan usaha peternakan.',
    topics: ['Ilmu nutrisi dan formulasi pakan ternak', 'Pemuliaan genetika dan reproduksi ternak', 'Manajemen produksi unggas, sapi, dan ruminansia', 'Teknologi hasil ternak dan bisnis peternakan'],
    outcomes: ['Ahli formulasi pakan dan industri peternakan', 'Manajer operasional peternakan modern', 'Peneliti genetika dan penyuluh swasembada protein'],
    smaTip:
      'Berbeda dengan Kedokteran Hewan yang berfokus pada diagnosis dan pengobatan penyakit, Peternakan berfokus pada produksi, nutrisi pakan, dan bisnis ternak.',
    searchKeywords: ['ternak', 'fapet', 'pakan', 'susu', 'unggas', 'daging']
  },
  {
    id: 'kelautan-perikanan',
    title: 'Ilmu Kelautan, Oseanografi & Perikanan',
    shortLabel: 'Kelautan & Perikanan',
    layer: 'major',
    group: 'Saintek',
    cluster: 'Pertanian & Kelautan',
    summary:
      'Menelaah arus laut, ekosistem terumbu karang dan mangrove, budidaya perikanan (akuakultur), serta pengelolaan sumber daya perikanan tangkap.',
    howItConnects:
      'Biologi laut mempelajari organisme perairan, Fisika dan Geografi memetakan arus, pasang surut, dan dasar laut, serta Kimia menguji kualitas air laut.',
    topics: ['Biologi laut, terumbu karang, dan mangrove', 'Oseanografi fisik, kimia, dan pemetaan pesisir', 'Akuakultur (budidaya ikan, udang, rumput laut)', 'Pengolahan hasil perikanan dan konservasi laut'],
    outcomes: ['Peneliti kelautan dan konservasi pesisir', 'Manajer budidaya perikanan modern', 'Konsultan survei oseanografi dan ekonomi biru'],
    smaTip:
      'Dua pertiga wilayah Indonesia adalah laut. Bidang ini menggabungkan riset lapangan pesisir, selam ilmiah, dan teknologi budidaya.',
    searchKeywords: ['laut', 'fpik', 'ikan', 'oseanografi', 'terumbu karang', 'akuakultur']
  }
];
