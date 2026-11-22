import { KnowledgeNode } from '../types/knowledge';

export const SOSHUM_SENI_MAJOR_NODES: KnowledgeNode[] = [
  // Klaster Arsitektur, Tata Ruang & Seni Desain (7)
  {
    id: 'arsitektur',
    title: 'Arsitektur',
    shortLabel: 'Arsitektur',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Arsitektur & Seni',
    summary:
      'Merancang bangunan dan ruang binaan yang aman secara struktur, nyaman terhadap iklim tropis, fungsional, serta peka pada budaya penghuninya.',
    howItConnects:
      'Seni dan estetika membentuk ruang, Fisika mengatur cahaya, aliran udara, dan logika struktur, Matematika menjaga skala geometri, dan Sosiologi memahami kebiasaan penghuni.',
    topics: ['Studio perancangan arsitektur', 'Fisika bangunan (cahaya, suara, termal tropis)', 'Struktur dan teknologi bahan konstruksi', 'Sejarah arsitektur dan perancangan kota'],
    outcomes: ['Arsitek bangunan dan ruang publik', 'Perancang bangunan hijau dan lanskap', 'Konsultan properti dan pengembangan kawasan'],
    smaTip:
      'Tidak wajib jago melukis realistis sejak awal. Kemampuan membayangkan ruang 3 dimensi dan memahami kebutuhan penghuni lebih menentukan.',
    searchKeywords: ['arsitek', 'bangunan', 'rumah', 'ruang', 'gambar', 'sappk']
  },
  {
    id: 'pwk-planologi',
    title: 'Perencanaan Wilayah & Kota (PWK)',
    shortLabel: 'PWK / Planologi',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Arsitektur & Seni',
    summary:
      'Merencanakan tata guna lahan, transportasi publik, perumahan, ruang terbuka hijau, dan pembangunan daerah agar kota dan desa berkembang layak huni.',
    howItConnects:
      'Geografi pemetaan wilayah berpadu dengan Sosiologi kependudukan, Ekonomi pembangunan daerah, serta analisis data spasial dan kebijakan publik.',
    topics: ['Tata ruang dan pemetaan SIG wilayah', 'Perencanaan transportasi dan infrastruktur kota', 'Ekonomi wilayah dan perumahan publik', 'Mitigasi bencana perkotaan dan kebijakan tata ruang'],
    outcomes: ['Perencana kota dan wilayah (urban planner)', 'Analis tata ruang di Bappenas/pemerintah daerah', 'Konsultan pengembangan kawasan dan transportasi'],
    smaTip:
      'Jika Arsitektur merancang satu gedung beserta detailnya, PWK merancang seluruh kota: ke mana jalan raya, permukiman, dan taman harus ditempatkan.',
    searchKeywords: ['pwk', 'planologi', 'tata kota', 'urban', 'wilayah', 'transportasi']
  },
  {
    id: 'dkv',
    title: 'Desain Komunikasi Visual (DKV)',
    shortLabel: 'DKV',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Arsitektur & Seni',
    summary:
      'Menyampaikan pesan, identitas merek, informasi publik, dan cerita melalui ilustrasi, tipografi, fotografi, grafis gerak, dan media interaktif.',
    howItConnects:
      'Seni rupa melatih komposisi dan eksekusi visual, Bahasa dan Sosiologi membantu membaca audiens serta pesan budaya agar desain tepat sasaran.',
    topics: ['Tipografi, tata letak, dan identitas merek', 'Ilustrasi dan fotografi komunikasi', 'Motion graphic dan desain media digital', 'Strategi komunikasi visual dan semiotika'],
    outcomes: ['Desainer grafis dan brand identity designer', 'Art director dan ilustrator profesional', 'Motion designer di agensi kreatif atau perusahaan teknologi'],
    smaTip:
      'DKV bukan sekadar belajar memakai software desain, melainkan belajar memecahkan masalah komunikasi lewat gambar, huruf, dan warna.',
    searchKeywords: ['dkv', 'desain grafis', 'ilustrasi', 'branding', 'logo', 'fsrd']
  },
  {
    id: 'desain-interaksi',
    title: 'Desain Produk & Pengalaman Pengguna (UX)',
    shortLabel: 'Desain Produk & UX',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Arsitektur & Seni',
    summary:
      'Merancang benda pakai sehari-hari maupun antarmuka aplikasi digital agar ergonomis, mudah dipahami, dapat diproduksi, dan menyelesaikan masalah pengguna.',
    howItConnects:
      'Seni dan ergonomi memandu bentuk fisik/visual, Sosiologi mengarahkan riset kebiasaan pengguna, serta Logika merapikan alur sistem produk.',
    topics: ['Riset pengguna dan uji ketergunaan', 'Ergonomi, material, dan prototipe produk', 'Arsitektur informasi dan desain antarmuka (UI/UX)', 'Desain layanan dan aksesibilitas'],
    outcomes: ['Product designer dan UI/UX designer', 'Industrial designer produk konsumen dan furnitur', 'UX researcher di perusahaan digital'],
    smaTip:
      'Mulai dari mengamati benda atau aplikasi di sekitarmu yang membingungkan, lalu sketsakan cara membuat alurnya lebih jelas.',
    searchKeywords: ['ux', 'ui', 'desain produk', 'ergonomi', 'aplikasi', 'prototipe']
  },
  {
    id: 'desain-interior',
    title: 'Desain Interior',
    shortLabel: 'Desain Interior',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Arsitektur & Seni',
    summary:
      'Mengolah ruang bagian dalam bangunan (hunian, ruang kerja, rumah sakit, museum, kafe) dari pencahayaan, akustik, furnitur, hingga pengalaman psikologis ruang.',
    howItConnects:
      'Berakar pada Seni estetika dan warna, dipadukan dengan Fisika pencahayaan-akustik serta Sosiologi perilaku manusia di dalam ruang tertutup.',
    topics: ['Perancangan ruang hunian dan komersial', 'Pencahayaan, warna, akustik, dan material interior', 'Desain furnitur dan ergonomi ruang', 'Gambar kerja teknis dan visualisasi 3D'],
    outcomes: ['Desainer interior residensial dan komersial', 'Desainer furnitur dan pameran (exhibition)', 'Konsultan pencahayaan dan ruang kerja'],
    smaTip:
      'Desain Interior tidak hanya memilih dekorasi cantik: kamu juga belajar menggambar teknis kelistrikan, sirkulasi gerak, dan keamanan material ruang.',
    searchKeywords: ['interior', 'ruangan', 'furnitur', 'dekorasi', 'kafe', 'fsrd']
  },
  {
    id: 'film-animasi',
    title: 'Film, Televisi & Animasi',
    shortLabel: 'Film & Animasi',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Arsitektur & Seni',
    summary:
      'Mempelajari penulisan skenario, penyutradaraan, sinematografi, tata suara, penyuntingan gambar, hingga produksi animasi 2D dan 3D.',
    howItConnects:
      'Seni visual dan gerak bertemu Bahasa penuturan cerita (storytelling) serta Sosiologi untuk menghasilkan karya layar yang kuat secara teknis dan naratif.',
    topics: ['Penulisan skenario dan dramaturgi', 'Sinematografi, pencahayaan, dan tata suara', 'Produksi animasi 2D/3D dan storyboard', 'Manajemen produksi dan kajian sinema'],
    outcomes: ['Sutradara, penulis skenario, dan produser', 'Animator 2D/3D, editor, dan penata sinematografi', 'Pembuat film dokumenter dan konten visual'],
    smaTip:
      'Kamu bisa mulai berlatih dari sekarang dengan membuat video pendek bermodal kamera HP sambil memperhatikan komposisi gambar dan alur cerita.',
    searchKeywords: ['film', 'animasi', 'sutradara', 'skenario', 'sinematografi', 'ikj']
  },
  {
    id: 'seni-rupa-pertunjukan',
    title: 'Seni Rupa, Kriya & Seni Pertunjukan',
    shortLabel: 'Seni Rupa, Kriya & Tari',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Arsitektur & Seni',
    summary:
      'Mendalami penciptaan karya seni murni (lukis, patung, grafis), kriya tekstil/keramik/fesyen, serta seni musik, tari, karawitan, dan teater.',
    howItConnects:
      'Berakar pada Seni & Estetika yang diperdalam lewat Sejarah kebudayaan dan riset material tradisi maupun kontemporer.',
    topics: ['Studio seni murni, kriya tekstil, keramik, atau fesyen', 'Komposisi musik, koreografi tari, dan dramaturgi teater', 'Sejarah seni Nusantara dan kritik seni', 'Kurasi pameran dan manajemen seni pertunjukan'],
    outcomes: ['Seniman, desainer kriya/fesyen, dan musisi/koreografer', 'Kurator galeri, museum, dan festival budaya', 'Pengajar dan pengelola ruang kreatif'],
    smaTip:
      'Selain keahlian teknis berkarya, lulusan seni yang kuat dalam manajemen pameran, penulisan konsep, dan kewirausahaan kreatif punya ruang gerak sangat luas.',
    searchKeywords: ['seni murni', 'kriya', 'fesyen', 'musik', 'tari', 'teater', 'isi']
  },

  // Klaster Ekonomi & Bisnis (5)
  {
    id: 'ilmu-ekonomi',
    title: 'Ilmu Ekonomi & Pembangunan',
    shortLabel: 'Ilmu Ekonomi',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Ekonomi & Bisnis',
    summary:
      'Menganalisis bagaimana pajak, subsidi, perdagangan internasional, inflasi, dan suku bunga memengaruhi pertumbuhan serta pemerataan ekonomi.',
    howItConnects:
      'Ekonomi memberi kerangka pasar dan insentif, Matematika/ekonometrika menguji hipotesis dengan data nyata, dan Sosiologi menjaga kebijakan tetap peka pada realitas warga.',
    topics: ['Teori mikro dan makroekonomi lanjut', 'Ekonometrika dan olah data ekonomi', 'Ekonomi pembangunan, publik, dan moneter', 'Perdagangan internasional'],
    outcomes: ['Ekonom dan analis kebijakan publik', 'Peneliti bank sentral, kementerian, atau lembaga riset', 'Analis makro di lembaga keuangan'],
    smaTip:
      'Berbeda dengan Manajemen yang fokus mengelola perusahaan, Ilmu Ekonomi lebih banyak menelaah sistem besar dan data kebijakan.',
    searchKeywords: ['ekonomi', 'iesp', 'kebijakan', 'bank sentral', 'makro', 'feb']
  },
  {
    id: 'akuntansi-keuangan',
    title: 'Akuntansi & Audit',
    shortLabel: 'Akuntansi',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Ekonomi & Bisnis',
    summary:
      'Mencatat, memeriksa (audit), dan menafsirkan kondisi keuangan organisasi secara transparan agar pemilik, investor, dan negara dapat mengambil keputusan tepat.',
    howItConnects:
      'Ekonomi memberi konteks bisnis dan perpajakan, Matematika menjaga ketepatan valuasi, dan Logika mengatur konsistensi standar pelaporan serta pembuktian audit.',
    topics: ['Akuntansi keuangan dan standar pelaporan (PSAK)', 'Audit dan pengendalian internal', 'Perpajakan dan akuntansi manajemen', 'Analisis laporan keuangan dan sistem akuntansi'],
    outcomes: ['Akuntan publik dan auditor eksternal/internal', 'Konsultan pajak dan analis keuangan korporat', 'Pengendali keuangan (financial controller)'],
    smaTip:
      'Inti Akuntansi bukan sekadar kecepatan berhitung, melainkan ketelitian, integritas, dan kemampuan membaca kesehatan usaha di balik laporan.',
    searchKeywords: ['akuntansi', 'audit', 'pajak', 'akuntan', 'laporan keuangan', 'feb']
  },
  {
    id: 'manajemen-bisnis',
    title: 'Manajemen Bisnis & Kewirausahaan',
    shortLabel: 'Manajemen Bisnis',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Ekonomi & Bisnis',
    summary:
      'Mengelola strategi perusahaan, pemasaran, operasional, sumber daya manusia, dan keuangan agar usaha maupun organisasi bertahan dan tumbuh.',
    howItConnects:
      'Ekonomi membantu membaca pasar dan margin usaha, Sosiologi memandu perilaku konsumen serta budaya tim, dan Bahasa mendukung negosiasi strategi.',
    topics: ['Strategi bisnis dan manajemen pemasaran', 'Manajemen operasi dan keuangan perusahaan', 'Perilaku organisasi dan pengelolaan SDM', 'Kewirausahaan dan pengembangan model bisnis'],
    outcomes: ['Manajer pemasaran, operasional, atau pengembangan bisnis', 'Konsultan manajemen dan analis bisnis', 'Pendiri dan pengelola usaha mandiri'],
    smaTip:
      'Karena cakupan Manajemen luas, kombinasikan dengan satu keterampilan konkret (misalnya analisis data, pemasaran digital, atau keuangan) sejak kuliah.',
    searchKeywords: ['manajemen', 'bisnis', 'marketing', 'startup', 'sdm', 'feb']
  },
  {
    id: 'ekonomi-syariah',
    title: 'Ekonomi Syariah & Keuangan Islam',
    shortLabel: 'Ekonomi Syariah',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Ekonomi & Bisnis',
    summary:
      'Mempelajari teori ekonomi, perbankan, pasar modal, asuransi, zakat, wakaf, serta ekosistem industri halal yang berlandaskan prinsip syariah.',
    howItConnects:
      'Ekonomi dan Matematika keuangan menjadi alat analisis modernnya, dipadukan dengan Logika/etika muamalah dan Sosiologi pemberdayaan ekonomi umat.',
    topics: ['Ekonomi mikro-makro Islam dan fikih muamalah', 'Perbankan, sukuk, dan pasar modal syariah', 'Manajemen zakat, wakaf, dan keuangan sosial', 'Industri halal dan audit syariah'],
    outcomes: ['Analis perbankan dan lembaga keuangan syariah', 'Pengelola dana sosial Islam (zakat/wakaf produktif)', 'Konsultan dan auditor ekosistem industri halal'],
    smaTip:
      'Di Indonesia, sektor perbankan syariah, sukuk negara, dan industri halal terus berkembang sehingga butuh lulusan yang paham ekonomi modern sekaligus akad syariah.',
    searchKeywords: ['syariah', 'ekonomi islam', 'perbankan syariah', 'halal', 'wakaf', 'zakat']
  },
  {
    id: 'pariwisata-perhotelan',
    title: 'Pariwisata & Perhotelan',
    shortLabel: 'Pariwisata & Hotel',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Ekonomi & Bisnis',
    summary:
      'Mengelola destinasi wisata berkelanjutan, industri perhotelan, penyelenggaraan acara (MICE), ekonomi kreatif daerah, dan pengalaman wisatawan.',
    howItConnects:
      'Ekonomi mengelola bisnis destinasi dan hotel, Geografi memetakan potensi bentang alam serta daya dukung wisata, dan Bahasa/Sosiologi memperkuat layanan lintas budaya.',
    topics: ['Perencanaan destinasi dan ekowisata berkelanjutan', 'Manajemen perhotelan, kuliner, dan layanan tamu', 'Manajemen acara (MICE) dan pemasaran wisata', 'Kajian budaya lokal dan bahasa asing'],
    outcomes: ['Manajer hotel, resor, dan layanan hospitalitas', 'Perencana destinasi wisata dan ekowisata', 'Pengelola acara (event) dan biro perjalanan'],
    smaTip:
      'Bukan hanya soal jalan-jalan: pariwisata menuntut kepekaan layanan, pengelolaan bisnis yang rapi, penguasaan bahasa asing, dan kepedulian pada budaya serta alam lokal.',
    searchKeywords: ['pariwisata', 'hotel', 'hospitalitas', 'tour', 'event', 'ekowisata']
  },

  // Klaster Hukum, Politik & Sosial (7)
  {
    id: 'ilmu-hukum',
    title: 'Ilmu Hukum',
    shortLabel: 'Ilmu Hukum',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Hukum & Sosial',
    summary:
      'Menelaah sistem aturan, kontrak, hak warga negara, penyelesaian sengketa, serta hubungan hukum pidana, perdata, bisnis, dan internasional.',
    howItConnects:
      'Logika menjaga ketajaman penalaran pasal dan bukti, Sosiologi/Sejarah memberi konteks lahirnya aturan, dan Bahasa menentukan ketepatan tafsir naskah hukum.',
    topics: ['Hukum perdata, pidana, dan tata negara', 'Penalaran dan argumentasi hukum', 'Hukum bisnis, kontrak, dan kekayaan intelektual', 'Hukum internasional dan penyelesaian sengketa'],
    outcomes: ['Advokat, jaksa, hakim, atau notaris (melalui jalur profesi)', 'Legal counsel dan spesialis kepatuhan perusahaan', 'Perancang undang-undang dan regulasi'],
    smaTip:
      'Hukum bukan sekadar menghafal pasal. Keterampilan utamanya adalah menganalisis kasus nyata dan menyusun argumen runtut berdasarkan aturan.',
    searchKeywords: ['fh', 'hukum', 'pengacara', 'hakim', 'notaris', 'legal', 'kontrak']
  },
  {
    id: 'ilmu-politik',
    title: 'Ilmu Politik & Pemerintahan',
    shortLabel: 'Ilmu Politik',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Hukum & Sosial',
    summary:
      'Mengkaji kekuasaan, sistem demokrasi, pemilu, partai politik, parlemen, otonomi daerah, dan proses lahirnya keputusan negara.',
    howItConnects:
      'Berakar pada Sosiologi & Sejarah lembaga kekuasaan, dipadukan dengan Logika analisis argumen serta Ekonomi politik dalam membaca kepentingan publik.',
    topics: ['Teori politik dan sistem demokrasi', 'Pemilu, partai, dan perilaku pemilih', 'Otonomi daerah dan tata kelola pemerintahan', 'Riset opini publik dan ekonomi politik'],
    outcomes: ['Analis politik dan peneliti lembaga survei/think tank', 'Staf ahli parlemen dan pemerintahan', 'Konsultan hubungan pemerintah (government affairs)'],
    smaTip:
      'Masuk Ilmu Politik bukan berarti harus menjadi politisi; banyak lulusannya bekerja di riset kebijakan, media, organisasi sipil, dan hubungan pemerintah.',
    searchKeywords: ['politik', 'pemerintahan', 'fisip', 'pemilu', 'demokrasi', 'kebijakan']
  },
  {
    id: 'hubungan-internasional',
    title: 'Hubungan Internasional (HI)',
    shortLabel: 'Hubungan Internasional',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Hukum & Sosial',
    summary:
      'Mengkaji interaksi antar-negara, diplomasi, perdagangan global, kerja sama keamanan, isu iklim lintas batas, dan organisasi internasional.',
    howItConnects:
      'Sosiologi & Sejarah membedah geopolitik, Geografi menjelaskan letak strategis kawasan, Ekonomi membaca perdagangan global, dan Bahasa menjadi alat negosiasi.',
    topics: ['Sejarah geopolitik dan teori HI', 'Ekonomi politik dan perdagangan internasional', 'Hukum internasional dan organisasi global', 'Diplomasi dan analisis kebijakan luar negeri'],
    outcomes: ['Diplomat (Kemlu) dan analis kebijakan luar negeri', 'Staf organisasi internasional dan NGO global', 'Analis risiko geopolitik dan kerja sama perusahaan multinasional'],
    smaTip:
      'Gemar mengikuti berita dunia, membaca sejarah modern, dan aktif mengasah bahasa asing adalah modal awal yang sangat membantu.',
    searchKeywords: ['hi', 'diplomat', 'luar negeri', 'geopolitik', 'pbb', 'fisip']
  },
  {
    id: 'administrasi-publik',
    title: 'Administrasi Publik & Kebijakan Negara',
    shortLabel: 'Administrasi Publik',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Hukum & Sosial',
    summary:
      'Merancang, menjalankan, dan mengevaluasi pelayanan publik, birokrasi pemerintah, anggaran daerah, dan program pembangunan agar tepat sasaran.',
    howItConnects:
      'Memadukan Sosiologi tata kelola lembaga, Ekonomi anggaran publik, dan Logika evaluasi kebijakan untuk memperbaiki layanan kepada warga.',
    topics: ['Analisis dan evaluasi kebijakan publik', 'Manajemen pelayanan publik dan e-government', 'Keuangan negara dan anggaran daerah', 'Tata kelola pemerintahan yang bersih'],
    outcomes: ['Analis kebijakan dan aparatur sipil negara (ASN)', 'Konsultan reformasi birokrasi dan layanan publik', 'Manajer program pembangunan di lembaga donor/NGO'],
    smaTip:
      'Jika Ilmu Politik bertanya "siapa mendapat kekuasaan dan bagaimana", Administrasi Publik bertanya "bagaimana layanan pemerintah bisa benar-benar berjalan efektif bagi warga".',
    searchKeywords: ['administrasi negara', 'kebijakan publik', 'asn', 'birokrasi', 'fia', 'fisip']
  },
  {
    id: 'sosiologi-antropologi',
    title: 'Sosiologi & Antropologi',
    shortLabel: 'Sosiologi & Antropologi',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Hukum & Sosial',
    summary:
      'Meneliti perubahan masyarakat modern, ketimpangan sosial, keragaman suku dan budaya, serta dinamika komunitas di kota maupun pedesaan.',
    howItConnects:
      'Berakar langsung pada Sosiologi & Sejarah, diperkaya metode riset kualitatif (etnografi) dan statistika sosial untuk membaca pola hidup masyarakat.',
    topics: ['Teori sosial dan stratifikasi masyarakat', 'Etnografi dan kajian kebudayaan Nusantara', 'Metode riset kualitatif dan survei sosial', 'Pengembangan masyarakat dan CSR'],
    outcomes: ['Peneliti sosial, pasar, dan riset konsumen', 'Spesialis pengembangan masyarakat (Community Development / CSR)', 'Kurator budaya dan analis dampak sosial'],
    smaTip:
      'Keahlian etnografi dan wawancara mendalam lulusan Antropologi-Sosiologi kini banyak dicari juga oleh perusahaan teknologi untuk memahami perilaku pengguna.',
    searchKeywords: ['sosiologi', 'antropologi', 'budaya', 'csr', 'etnografi', 'riset sosial']
  },
  {
    id: 'kriminologi-kessos',
    title: 'Kriminologi & Kesejahteraan Sosial',
    shortLabel: 'Kriminologi & Kessos',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Hukum & Sosial',
    summary:
      'Mempelajari akar kejahatan, sistem peradilan dan pencegahan kriminalitas, serta pendampingan kelompok rentan dan pemulihan masalah sosial.',
    howItConnects:
      'Menggabungkan Sosiologi struktur masyarakat, Hukum/tata kelola keadilan, dan Psikologi perilaku untuk menangani persoalan sosial secara sistemik.',
    topics: ['Teori kriminologi, viktimologi, dan kejahatan siber', 'Sistem peradilan dan rehabilitasi sosial', 'Intervensi pekerjaan sosial dan perlindungan anak', 'Kebijakan jaminan sosial dan penanggulangan kemiskinan'],
    outcomes: ['Analis pencegahan kejahatan, kepatuhan, dan investigasi', 'Pekerja sosial profesional dan pendamping perlindungan anak', 'Peneliti kebijakan sosial dan lembaga pemasyarakatan'],
    smaTip:
      'Kriminologi bukan hanya tentang TKP seperti di serial detektif; porsi besarnya adalah menganalisis faktor sosial-ekonomi di balik kejahatan dan pencegahannya.',
    searchKeywords: ['kriminologi', 'kesejahteraan sosial', 'kessos', 'kejahatan', 'pekerja sosial']
  },
  {
    id: 'psikologi',
    title: 'Psikologi',
    shortLabel: 'Psikologi',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Hukum & Sosial',
    summary:
      'Mempelajari proses mental, emosi, perkembangan manusia, dinamika kerja, dan perilaku menggunakan metode observasi serta eksperimen ilmiah.',
    howItConnects:
      'Sosiologi menjelaskan pengaruh lingkungan sosial, Biologi menjelaskan sistem saraf dan otak (biopsikologi), serta Statistika dipakai menyusun alat ukur psikologis.',
    topics: ['Psikologi perkembangan, kepribadian, dan sosial', 'Biopsikologi dan psikologi kognitif', 'Psikometri dan statistika riset perilaku', 'Psikologi klinis, pendidikan, dan industri-organisasi'],
    outcomes: ['Psikolog klinis/pendidikan/industri (setelah profesi)', 'Spesialis pengembangan SDM (HR) dan asesmen', 'Peneliti perilaku konsumen dan pengalaman pengguna'],
    smaTip:
      'Psikologi adalah ilmu riset, bukan tempat belajar membaca pikiran. Siapkan diri untuk statistika, metode eksperimen, dan biologi dasar otak.',
    searchKeywords: ['psikologi', 'fpsi', 'mental', 'hrd', 'konseling', 'otak']
  },

  // Klaster Bahasa, Media, Pendidikan & Humaniora (7)
  {
    id: 'komunikasi-media',
    title: 'Ilmu Komunikasi & Jurnalistik',
    shortLabel: 'Ilmu Komunikasi',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Bahasa & Pendidikan',
    summary:
      'Mempelajari cara informasi diproduksi, diverifikasi, disampaikan lewat media massa maupun digital, serta strategi hubungan masyarakat dan kampanye.',
    howItConnects:
      'Bahasa melatih ketajaman narasi dan penyuntingan, sedangkan Sosiologi membantu membaca karakter audiens, opini publik, dan etika media.',
    topics: ['Jurnalistik, reportase, dan verifikasi fakta', 'Hubungan masyarakat (PR) dan komunikasi krisis', 'Periklanan dan komunikasi pemasaran terpadu', 'Kajian media digital dan riset audiens'],
    outcomes: ['Jurnalis, produser berita, dan editor media', 'Spesialis PR dan komunikasi korporat', 'Perencana strategi kampanye, media sosial, dan periklanan'],
    smaTip:
      'Mulai bangun portofolio tulisan, podcast, atau pengelolaan media sejak sekolah menengah untuk mengasah kepekaan terhadap audiens.',
    searchKeywords: ['komunikasi', 'fikom', 'jurnalis', 'pr', 'humas', 'media', 'iklan']
  },
  {
    id: 'sastra-bahasa',
    title: 'Sastra & Bahasa (Indonesia, Asing, Daerah)',
    shortLabel: 'Sastra & Bahasa',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Bahasa & Pendidikan',
    summary:
      'Mendalami struktur linguistik, kesusastraan, penerjemahan, serta kebudayaan masyarakat penutur bahasa Indonesia, Inggris, Jepang, Arab, Mandarin, hingga bahasa daerah.',
    howItConnects:
      'Berakar langsung pada Bahasa & Sastra yang diperkaya Sejarah dan Sosiologi untuk memahami konteks budaya di balik teks dan komunikasi lintas bangsa.',
    topics: ['Linguistik, morfologi, dan semantik', 'Apresiasi dan kritik karya sastra', 'Penerjemahan teks dan juru bahasa (interpreting)', 'Kajian wilayah dan budaya penutur bahasa'],
    outcomes: ['Penerjemah, juru bahasa, dan lokalisasi produk global', 'Editor buku, penulis kreatif, dan copywriter', 'Staf diplomasi budaya, pariwisata, dan perusahaan multinasional'],
    smaTip:
      'Kuliah sastra bukan kursus percakapan biasa: kamu juga menganalisis struktur bahasa, sejarah, dan konteks budaya penuturnya secara mendalam.',
    searchKeywords: ['sastra', 'fib', 'bahasa inggris', 'bahasa jepang', 'bahasa arab', 'penerjemah']
  },
  {
    id: 'linguistik-komputasional',
    title: 'Linguistik Komputasional & Teknologi Bahasa',
    shortLabel: 'Linguistik Komputasional',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Bahasa & Pendidikan',
    summary:
      'Bidang lintas ilmu yang membuat komputer mampu memahami, menerjemahkan, merangkum, dan memproses bahasa manusia (termasuk bahasa daerah Indonesia).',
    howItConnects:
      'Pertemuan nyata IPS dan IPA: Bahasa memberi struktur tata bahasa dan makna, Matematika menyediakan model probabilitas, dan Logika mengatur algoritmanya.',
    topics: ['Sintaksis dan semantik komputasional', 'Pemrosesan bahasa alami (NLP) dan model bahasa', 'Pembangunan korpus bahasa Indonesia dan daerah', 'Evaluasi kualitas sistem terjemahan dan suara'],
    outcomes: ['Spesialis data bahasa (linguistic data specialist)', 'Pengembang sistem pencarian, suara, dan penerjemah mesin', 'Peneliti pelestarian bahasa daerah berbasis teknologi'],
    smaTip:
      'Bukti nyata bahwa menyukai Bahasa dan Matematika sekaligus justru membuka ceruk keahlian yang sangat dicari di era teknologi bahasa.',
    searchKeywords: ['nlp', 'terjemahan mesin', 'chatbot', 'bahasa komputer', 'linguistik']
  },
  {
    id: 'sejarah-arkeologi',
    title: 'Ilmu Sejarah & Arkeologi',
    shortLabel: 'Sejarah & Arkeologi',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Bahasa & Pendidikan',
    summary:
      'Menelusuri rekam jejak peradaban masa lalu melalui arsip tertulis, penuturan lisan, situs cagar budaya, prasasti, dan ekskavasi artefak.',
    howItConnects:
      'Sosiologi & Sejarah menjadi kerangka interpretasi masyarakat lampau, Bahasa membantu membaca naskah/prasasti, dan Geografi membantu pemetaan situs arkeologi.',
    topics: ['Metode sejarah dan kritik sumber arsip', 'Ekskavasi lapangan dan konservasi artefak', 'Epigrafi, sejarah maritim, dan warisan budaya', 'Manajemen museum dan wisata sejarah'],
    outcomes: ['Kurator museum dan peneliti cagar budaya', 'Arkeolog lapangan dan konsultan pelestarian warisan', 'Penulis sejarah, riset dokumenter, dan arsiparis'],
    smaTip:
      'Menuntut ketelitian tinggi seperti detektif dokumen dan peninggalan fisik agar fakta masa lalu tidak bercampur dengan mitos.',
    searchKeywords: ['sejarah', 'arkeologi', 'museum', 'candi', 'arsip', 'fib']
  },
  {
    id: 'ilmu-perpustakaan',
    title: 'Ilmu Perpustakaan & Sains Informasi',
    shortLabel: 'Perpustakaan & Informasi',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Bahasa & Pendidikan',
    summary:
      'Mengelola, mengklasifikasi, melestarikan, dan merancang sistem temu-kembali informasi, arsip digital, serta basis pengetahuan organisasi modern.',
    howItConnects:
      'Bahasa dan Logika membentuk sistem klasifikasi informasi, dipadukan dengan Algoritma/basis data untuk membangun perpustakaan digital dan arsip elektronik.',
    topics: ['Klasifikasi, katalogisasi, dan metadata digital', 'Manajemen arsip elektronik dan preservasi dokumen', 'Sistem temu-kembali informasi dan literasi informasi', 'Manajemen pengetahuan (knowledge management) organisasi'],
    outcomes: ['Pustakawan modern dan pengelola perpustakaan digital', 'Arsiparis perusahaan, bank, atau lembaga negara', 'Information architect dan knowledge manager'],
    smaTip:
      'Jauh dari stereotip sekadar menjaga rak buku: lulusannya banyak mengurus arsip digital, metadata, dan sistem pencarian informasi perusahaan.',
    searchKeywords: ['perpustakaan', 'arsip', 'informasi', 'metadata', 'pustakawan']
  },
  {
    id: 'pendidikan-guru',
    title: 'Pendidikan Guru (PGSD, MIPA, Bahasa, BK)',
    shortLabel: 'Pendidikan & Keguruan',
    layer: 'major',
    group: 'Lintas Rumpun',
    cluster: 'Bahasa & Pendidikan',
    summary:
      'Mempelajari ilmu pengajaran (pedagogi), perancangan kurikulum, psikologi belajar, bimbingan konseling, dan penguasaan mata pelajaran untuk mendidik generasi baru.',
    howItConnects:
      'Menggabungkan Sosiologi & Psikologi perkembangan anak dengan Bahasa komunikasi yang jelas serta penguasaan materi bidang studi yang diajarkan.',
    topics: ['Psikologi perkembangan dan teori belajar', 'Perancangan kurikulum dan media pembelajaran', 'Evaluasi hasil belajar dan pendidikan inklusif', 'Bimbingan konseling (BK) dan praktik mengajar'],
    outcomes: ['Guru sekolah (SD, SMP, SMA/K, MA) dan konselor sekolah', 'Perancang kurikulum dan materi belajar (instructional designer)', 'Pengembang teknologi pendidikan (edtech) dan pelatihan korporat'],
    smaTip:
      'Jalur FKIP tidak hanya bermuara di ruang kelas sekolah, tetapi juga ke perancangan kurikulum, pelatihan karyawan, dan produk teknologi pendidikan.',
    searchKeywords: ['fkip', 'guru', 'pgsd', 'bk', 'pendidikan', 'kurikulum', 'edtech']
  },
  {
    id: 'filsafat-etika',
    title: 'Filsafat & Kajian Etika',
    shortLabel: 'Filsafat & Etika',
    layer: 'major',
    group: 'Soshum',
    cluster: 'Bahasa & Pendidikan',
    summary:
      'Menguji pertanyaan mendasar tentang kebenaran, logika penalaran, nilai moral, keadilan, ilmu pengetahuan, serta etika teknologi dan kemanusiaan.',
    howItConnects:
      'Berakar langsung pada Logika & Filsafat, diperkaya Bahasa analisis teks dan Sejarah gagasan untuk melatih daya pikir analitis yang lentur di berbagai profesi.',
    topics: ['Logika formal dan teori pengetahuan (epistemologi)', 'Etika terapan (bioetika, etika AI, etika bisnis)', 'Filsafat sosial, politik, dan hukum', 'Sejarah pemikiran Barat, Timur, dan Nusantara'],
    outcomes: ['Peneliti etika kebijakan, bioetika, dan tata kelola AI', 'Penulis, jurnalis analitis, dan editor gagasan', 'Analis kebijakan, konsultan budaya organisasi, dan akademisi'],
    smaTip:
      'Bekal terkuat mahasiswa Filsafat adalah ketajaman membedah argumen rumit dan menulis pemikiran jernih; padukan dengan keahlian terapan sesuai minatmu.',
    searchKeywords: ['filsafat', 'etika', 'logika', 'pemikiran', 'teologi', 'humaniora']
  }
];
