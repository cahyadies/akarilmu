export interface CampusReference {
  ptn: string[];
  pts: string[];
  selectionNote: string;
  snbpSample?: {
    campus: string;
    seats: number;
    applicants: number;
    note: string;
  };
}

// Curated real PTN and PTS institutions in Indonesia known for each study program.
export const CAMPUS_REFERENCES: Record<string, CampusReference> = {
  kedokteran: {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (UNAIR)', 'Universitas Padjadjaran (UNPAD)', 'Universitas Diponegoro (UNDIP)'],
    pts: ['Universitas Pelita Harapan (UPH)', 'Universitas Trisakti', 'Unika Atma Jaya Jakarta', 'Universitas Muhammadiyah Yogyakarta (UMY)'],
    selectionNote: 'Salah satu prodi terketat di jalur SNBP, SNBT, maupun Mandiri. Cek juga akreditasi LAM-PTKes dan kuota tiap jalur.',
    snbpSample: {
      campus: 'Kedokteran UGM (kisaran acuan SNBT)',
      seats: 53,
      applicants: 3100,
      note: 'Acuan kisaran SNBT sebelumnya; cek kuota resmi tahun berjalan di snpmb.id.'
    }
  },
  'kedokteran-gigi': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (UNAIR)', 'Universitas Padjadjaran (UNPAD)', 'Universitas Hasanuddin (UNHAS)'],
    pts: ['Universitas Trisakti', 'Universitas Prof. Dr. Moestopo (Beragama)', 'Universitas Muhammadiyah Yogyakarta (UMY)', 'Universitas Kristen Maranatha'],
    selectionNote: 'Memerlukan masa pendidikan sarjana (S.KG) dilanjutkan profesi dokter gigi (drg.).'
  },
  'kedokteran-hewan': {
    ptn: ['IPB University', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (UNAIR)', 'Universitas Brawijaya (UB)', 'Universitas Udayana (UNUD)'],
    pts: ['Universitas Wijaya Kusuma Surabaya (UWKS)', 'Universitas Nusa Tenggara Barat (UNTB)'],
    selectionNote: 'Jumlah kampus penyelenggara FKH di Indonesia relatif terbatas, sehingga persaingan PTN cukup terpusat.'
  },
  farmasi: {
    ptn: ['Institut Teknologi Bandung (ITB)', 'Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (UNAIR)', 'Universitas Padjadjaran (UNPAD)'],
    pts: ['Universitas Surabaya (UBAYA)', 'Universitas Sanata Dharma', 'Universitas Pancasila', 'Universitas Islam Indonesia (UII)'],
    selectionNote: 'Untuk menjadi Apoteker berizin praktik, lulusan S1 Farmasi melanjutkan program Profesi Apoteker (1 tahun).'
  },
  keperawatan: {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (UNAIR)', 'Universitas Padjadjaran (UNPAD)', 'Universitas Brawijaya (UB)'],
    pts: ['Universitas Pelita Harapan (UPH)', 'Universitas Muhammadiyah Yogyakarta (UMY)', 'STIKes Sint Carolus', 'Universitas Esa Unggul'],
    selectionNote: 'Tersedia jalur S1 Ilmu Keperawatan + Profesi Ners serta jalur Vokasi D3/D4 di berbagai Poltekkes Kemenkes.'
  },
  kebidanan: {
    ptn: ['Universitas Airlangga (UNAIR)', 'Universitas Padjadjaran (UNPAD)', 'Universitas Brawijaya (UB)', 'Universitas Hasanuddin (UNHAS)', 'Poltekkes Kemenkes'],
    pts: ['Universitas Aisyiyah Yogyakarta (UNISA)', 'Universitas Muhammadiyah Semarang', 'Universitas Respati Indonesia'],
    selectionNote: 'Perhatikan perbedaan jalur S1 + Profesi Bidan dengan jalur Vokasi D3/D4 Kebidanan di portal SNPMB.'
  },
  'ilmu-gizi': {
    ptn: ['IPB University', 'Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Diponegoro (UNDIP)', 'Universitas Brawijaya (UB)'],
    pts: ['Universitas Esa Unggul', 'Universitas Muhammadiyah Prof. Dr. Hamka (UHAMKA)', 'Universitas Al-Azhar Indonesia'],
    selectionNote: 'Peminat Ilmu Gizi terus naik di PTN besar; beberapa kampus mewajibkan syarat tidak buta warna untuk praktikum laboratorium.'
  },
  'kesehatan-masyarakat': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Airlangga (UNAIR)', 'Universitas Diponegoro (UNDIP)', 'Universitas Hasanuddin (UNHAS)', 'Universitas Sumatera Utara (USU)'],
    pts: ['Universitas Muhammadiyah Jakarta (UMJ)', 'Universitas Ahmad Dahlan (UAD)', 'Universitas Respati Yogyakarta'],
    selectionNote: 'Di banyak PTN, peminatan K3 (Keselamatan dan Kesehatan Kerja) dan Administrasi Kebijakan Kesehatan menjadi favorit.'
  },
  fisioterapi: {
    ptn: ['Universitas Indonesia (UI - Vokasi)', 'Universitas Airlangga (UNAIR)', 'Universitas Hasanuddin (UNHAS)', 'Universitas Udayana (UNUD)', 'Poltekkes Surakarta'],
    pts: ['Universitas Muhammadiyah Surakarta (UMS)', 'Universitas Esa Unggul', 'Universitas Aisyiyah Yogyakarta (UNISA)'],
    selectionNote: 'Tersedia dalam jenjang Sarjana (S1 + Profesi Fisioterapis) maupun Sarjana Terapan (D4).'
  },
  'matematika-murni': {
    ptn: ['Institut Teknologi Bandung (ITB)', 'Universitas Gadjah Mada (UGM)', 'Universitas Indonesia (UI)', 'Institut Teknologi Sepuluh Nopember (ITS)', 'IPB University'],
    pts: ['Universitas Katolik Parahyangan (UNPAR)', 'Universitas Pelita Harapan (UPH)', 'Universitas Sanata Dharma'],
    selectionNote: 'Di ITB, calon mahasiswa mendaftar melalui fakultas FMIPA-Matematika terlebih dahulu pada tahun pertama.'
  },
  'fisika-astronomi': {
    ptn: ['Institut Teknologi Bandung (ITB - Astronomi & Fisika)', 'Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'ITS', 'Universitas Padjadjaran (UNPAD)'],
    pts: ['Universitas Katolik Parahyangan (UNPAR)', 'Universitas Kristen Satya Wacana (UKSW)', 'Universitas Ahmad Dahlan (UAD)'],
    selectionNote: 'Program S1 Astronomi di Indonesia secara khusus berada di FMIPA ITB, sementara Fisika tersedia luas di berbagai PTN/PTS.'
  },
  'kimia-murni': {
    ptn: ['Institut Teknologi Bandung (ITB)', 'Universitas Gadjah Mada (UGM)', 'Universitas Indonesia (UI)', 'ITS', 'IPB University'],
    pts: ['Universitas Islam Indonesia (UII)', 'Universitas Surabaya (UBAYA)', 'Universitas Kristen Satya Wacana (UKSW)'],
    selectionNote: 'Perhatikan syarat kesehatan (tidak buta warna) karena praktikum titrasi dan identifikasi senyawa mengandalkan warna.'
  },
  bioteknologi: {
    ptn: ['Universitas Gadjah Mada (UGM)', 'IPB University', 'Institut Teknologi Bandung (ITB - SITH)', 'Universitas Brawijaya (UB)', 'Universitas Indonesia (UI)'],
    pts: ['Universitas Surabaya (UBAYA)', 'Unika Atma Jaya Jakarta', 'Universitas Pelita Harapan (UPH)', 'Indonesia International Institute for Life-Sciences (i3L)'],
    selectionNote: 'Beberapa kampus membuka prodi Bioteknologi langsung, sementara lainnya lewat S1 Biologi atau Rekayasa Hayati.'
  },
  aktuaria: {
    ptn: ['Institut Teknologi Bandung (ITB)', 'Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'IPB University', 'ITS'],
    pts: ['Universitas Prasetiya Mulya', 'Universitas Pelita Harapan (UPH)', 'President University'],
    selectionNote: 'Daya tampung Aktuaria di PTN relatif kecil sehingga rasio keketatannya sering sangat tinggi di jalur SNBT.'
  },
  'meteorologi-geofisika': {
    ptn: ['Institut Teknologi Bandung (ITB - FITB)', 'IPB University (Meteorologi Terapan)', 'UGM (Geofisika)', 'UI (Geofisika)', 'STMKG (Sekolah Kedinasan BMKG)'],
    pts: ['Universitas Pertamina (Teknik Geofisika)', 'Institut Teknologi Sumatera (ITERA - PTN baru)'],
    selectionNote: 'Selain PTN umum, tersedia jalur sekolah kedinasan STMKG yang dikelola langsung oleh BMKG.'
  },
  'teknik-sipil': {
    ptn: ['Institut Teknologi Bandung (ITB)', 'Universitas Gadjah Mada (UGM)', 'ITS', 'Universitas Indonesia (UI)', 'Universitas Diponegoro (UNDIP)'],
    pts: ['Universitas Katolik Parahyangan (UNPAR)', 'Universitas Kristen Petra', 'Universitas Trisakti', 'Universitas Tarumanagara (UNTAR)'],
    selectionNote: 'Tersedia luas di PTN akademik maupun Politeknik Negeri (D4 Teknik Konstruksi Gedung/Jalan).'
  },
  'teknik-mesin': {
    ptn: ['Institut Teknologi Bandung (ITB)', 'ITS', 'Universitas Gadjah Mada (UGM)', 'Universitas Indonesia (UI)', 'Universitas Brawijaya (UB)'],
    pts: ['Universitas Trisakti', 'Universitas Kristen Petra', 'Universitas Islam Indonesia (UII)', 'Institut Teknologi Nasional (ITENAS)'],
    selectionNote: 'Di ITB, Teknik Mesin berada di bawah FTMD bersama Teknik Dirgantara dan Teknik Material.'
  },
  'teknik-elektro': {
    ptn: ['Institut Teknologi Bandung (ITB - STEI-R)', 'ITS', 'Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Diponegoro (UNDIP)'],
    pts: ['Telkom University', 'Universitas Kristen Petra', 'Universitas Trisakti', 'Institut Teknologi PLN (ITPLN)'],
    selectionNote: 'Di ITB, jalur masuknya lewat STEI-Rekayasa (STEI-R) sebelum penjurusan prodi spesifik di tahun kedua.'
  },
  'teknik-kimia': {
    ptn: ['Institut Teknologi Bandung (ITB - FTI)', 'Universitas Gadjah Mada (UGM)', 'ITS', 'Universitas Indonesia (UI)', 'Universitas Diponegoro (UNDIP)'],
    pts: ['Universitas Katolik Parahyangan (UNPAR)', 'Universitas Surabaya (UBAYA)', 'Universitas Islam Indonesia (UII)', 'Universitas Pertamina'],
    selectionNote: 'Peminat Teknik Kimia stabil tinggi di PTN teknologi karena luasnya serapan di industri energi, pangan, dan manufaktur.'
  },
  'teknik-industri': {
    ptn: ['Institut Teknologi Bandung (ITB - FTI)', 'ITS', 'Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Brawijaya (UB)'],
    pts: ['Telkom University', 'Universitas Islam Indonesia (UII)', 'BINUS University', 'Universitas Surabaya (UBAYA)'],
    selectionNote: 'Termasuk salah satu prodi teknik dengan peminat tertinggi di SNBT karena fleksibilitas kariernya.'
  },
  'teknik-biomedis': {
    ptn: ['Institut Teknologi Bandung (ITB - STEI-R)', 'Universitas Indonesia (UI)', 'ITS', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (UNAIR)'],
    pts: ['Universitas Dian Nuswantoro (UDINUS)', 'Institut Teknologi Telkom Purwokerto', 'Swiss German University (SGU)'],
    selectionNote: 'Daya tampung Teknik Biomedis umumnya belum sebanyak Elektro atau Mesin, jadi cek perbandingan kuota tiap kampus.'
  },
  'teknik-dirgantara': {
    ptn: ['Institut Teknologi Bandung (ITB - FTMD)', 'Politeknik Negeri Bandung (POLBAN - Teknik Aeronautika)'],
    pts: ['Universitas Nurtanio Bandung', 'Institut Teknologi Dirgantara Adisutjipto (ITDA)', 'Universitas Suryadarma'],
    selectionNote: 'Jumlah penyelenggara S1 Teknik Dirgantara sangat spesifik; ITB menjadi rujukan utama di jalur PTN.'
  },
  'teknik-geologi': {
    ptn: ['Institut Teknologi Bandung (ITB - FITB)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (UNPAD)', 'UNDIP', 'UPN Veteran Yogyakarta'],
    pts: ['Universitas Trisakti', 'Universitas Pertamina', 'Institut Sains & Teknologi AKPRIND'],
    selectionNote: 'UPN Veteran Yogyakarta (PTN) dan Universitas Trisakti/Pertamina (PTS) juga dikenal kuat di rumpun kebumian.'
  },
  'teknik-pertambangan': {
    ptn: ['Institut Teknologi Bandung (ITB - FTTM)', 'UPN Veteran Yogyakarta', 'Universitas Hasanuddin (UNHAS)', 'Universitas Sriwijaya (UNSRI)', 'Universitas Negeri Padang (UNP)'],
    pts: ['Universitas Trisakti (Tambang & Perminyakan)', 'Universitas Pertamina (Perminyakan)', 'Universitas Islam Bandung (UNISBA)'],
    selectionNote: 'FTTM ITB dan UPN Veteran Yogyakarta merupakan dua tujuan paling ramai di jalur PTN untuk pertambangan dan perminyakan.'
  },
  'teknik-metalurgi': {
    ptn: ['Institut Teknologi Bandung (ITB - FTTM & FTMD)', 'Universitas Indonesia (UI)', 'ITS (Teknik Material)', 'Universitas Sultan Ageng Tirtayasa (UNTIRTA)', 'UPN Veteran Yogyakarta'],
    pts: ['Universitas Jenderal Achmad Yani (UNJANI)', 'Institut Teknologi Sains Bandung (ITSB)'],
    selectionNote: 'Beberapa kampus memisahkan Teknik Metalurgi (ekstraksi logam) dan Teknik Material (polimer, keramik, komposit).'
  },
  'teknik-geodesi': {
    ptn: ['Institut Teknologi Bandung (ITB - FITB)', 'Universitas Gadjah Mada (UGM)', 'ITS (Teknik Geomatika)', 'UNDIP', 'UPN Veteran Yogyakarta'],
    pts: ['Institut Teknologi Nasional (ITENAS) Bandung', 'Institut Teknologi Nasional (ITN) Malang', 'Universitas Pakuan'],
    selectionNote: 'Di ITS dan beberapa kampus lain, nama prodinya adalah Teknik Geomatika dengan cakupan pemetaan dan GIS serupa.'
  },
  'teknik-lingkungan': {
    ptn: ['Institut Teknologi Bandung (ITB - FTSL)', 'ITS', 'Universitas Indonesia (UI)', 'UNDIP', 'Universitas Brawijaya (UB)'],
    pts: ['Universitas Islam Indonesia (UII)', 'Universitas Trisakti', 'Universitas Pertamina', 'ITENAS Bandung'],
    selectionNote: 'Sering berada satu fakultas dengan Teknik Sipil; perhatikan peminatan pengolahan air, limbah, dan ESG.'
  },
  'teknik-perkapalan': {
    ptn: ['ITS (FTK: Perkapalan, Kelautan, Sistem Perkapalan)', 'Universitas Indonesia (UI)', 'UNDIP', 'Universitas Hasanuddin (UNHAS)', 'Politeknik Perkapalan Negeri Surabaya (PPNS)'],
    pts: ['Universitas Hang Tuah Surabaya', 'Universitas Darma Persada'],
    selectionNote: 'ITS dan PPNS memiliki fakultas dan fasilitas laboratorium hidrodinamika paling lengkap di bidang maritim.'
  },
  'teknik-nuklir': {
    ptn: ['Universitas Gadjah Mada (UGM - Teknik Nuklir)', 'Politeknik Teknologi Nuklir Indonesia (Poltek Nuklir - BRIN)', 'ITB (Teknik Fisika / Energi)'],
    pts: ['Institut Teknologi PLN (ITPLN - Teknik Sistem Energi)', 'Universitas Pertamina (Energi)'],
    selectionNote: 'S1 Teknik Nuklir di Indonesia diselenggarakan khusus oleh UGM, dan jenjang D4 oleh Poltek Nuklir BRIN.'
  },
  'ilmu-komputer': {
    ptn: ['Institut Teknologi Bandung (ITB - STEI-K)', 'Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'ITS', 'IPB University'],
    pts: ['BINUS University', 'Telkom University', 'Universitas Kristen Petra', 'Universitas Multimedia Nusantara (UMN)'],
    selectionNote: 'Peminatnya sangat besar di semua jalur. Di ITB, seleksi masuk menggunakan kode STEI-Komputasi (STEI-K).',
    snbpSample: {
      campus: 'Ilmu Komputer / STEI-K (ilustrasi keketatan sangat ketat)',
      seats: 61,
      applicants: 2500,
      note: 'Kuota STEI-K SNBT sekitar 61 kursi; cek jumlah peminat resmi terbaru di snpmb.id.'
    }
  },
  'sistem-informasi': {
    ptn: ['Universitas Indonesia (UI)', 'ITS', 'Universitas Airlangga (UNAIR)', 'Universitas Brawijaya (UB)', 'Universitas Padjadjaran (UNPAD)'],
    pts: ['BINUS University', 'Telkom University', 'Universitas Prasetiya Mulya', 'Universitas Multimedia Nusantara (UMN)'],
    selectionNote: 'Banyak PTN membuka jalur masuk yang ramah bagi lulusan IPA maupun IPS dengan porsi logika bisnis dan data.'
  },
  'sains-data': {
    ptn: ['IPB University (Statistika & Sains Data)', 'ITS (Sains Data)', 'Universitas Airlangga (UNAIR - Teknologi Sains Data)', 'Universitas Brawijaya (UB)', 'UPN Veteran Jawa Timur'],
    pts: ['Telkom University', 'BINUS University', 'Universitas Prasetiya Mulya', 'Universitas Multimedia Nusantara (UMN)'],
    selectionNote: 'Prodi relatif baru tetapi lonjakan peminatnya sangat cepat di SNBT beberapa tahun terakhir.'
  },
  agroteknologi: {
    ptn: ['IPB University', 'Universitas Gadjah Mada (UGM)', 'Universitas Brawijaya (UB)', 'Universitas Padjadjaran (UNPAD)', 'Universitas Hasanuddin (UNHAS)'],
    pts: ['Universitas Muhammadiyah Yogyakarta (UMY)', 'INSTIPER Yogyakarta', 'Universitas Kristen Satya Wacana (UKSW)'],
    selectionNote: 'Di IPB, cabang pertaniannya terbagi lebih spesifik seperti Agronomi dan Hortikultura serta Manajemen Sumberdaya Lahan.'
  },
  agribisnis: {
    ptn: ['IPB University', 'Universitas Gadjah Mada (UGM)', 'Universitas Brawijaya (UB)', 'Universitas Padjadjaran (UNPAD)', 'UNS'],
    pts: ['Universitas Muhammadiyah Yogyakarta (UMY)', 'Universitas Muhammadiyah Malang (UMM)', 'INSTIPER Yogyakarta'],
    selectionNote: 'Salah satu prodi rumpun pertanian dengan peminat tertinggi karena menggabungkan sektor pangan dan manajemen bisnis.'
  },
  'teknologi-pangan': {
    ptn: ['IPB University', 'Universitas Gadjah Mada (UGM)', 'Universitas Brawijaya (UB)', 'Universitas Padjadjaran (UNPAD)', 'UNS'],
    pts: ['Universitas Pelita Harapan (UPH)', 'Unika Soegijapranata', 'Universitas Katolik Widya Mandala Surabaya', 'Universitas Pasundan'],
    selectionNote: 'Teknologi Pangan IPB, UGM, dan UB termasuk prodi favorit di rumpun agroindustri.'
  },
  kehutanan: {
    ptn: ['IPB University', 'Universitas Gadjah Mada (UGM)', 'Universitas Mulawarman (UNMUL)', 'Universitas Hasanuddin (UNHAS)', 'Universitas Lambung Mangkurat (ULM)'],
    pts: ['INSTIPER Yogyakarta', 'Universitas Kuningan', 'Universitas Muhammadiyah Makassar'],
    selectionNote: 'PTN di Kalimantan, Sulawesi, dan Sumatra memiliki akses laboratorium hutan tropis alami yang sangat kuat.'
  },
  peternakan: {
    ptn: ['IPB University', 'Universitas Gadjah Mada (UGM)', 'Universitas Brawijaya (UB)', 'Universitas Padjadjaran (UNPAD)', 'UNDIP'],
    pts: ['Universitas Muhammadiyah Malang (UMM)', 'Universitas Islam Malang (UNISMA)', 'Universitas Mercu Buana Yogyakarta'],
    selectionNote: 'UGM, IPB, dan UB memiliki fasilitas kandang riset dan kerja sama industri pakan serta peternakan nasional.'
  },
  'kelautan-perikanan': {
    ptn: ['IPB University', 'UNDIP', 'Universitas Brawijaya (UB)', 'Universitas Hasanuddin (UNHAS)', 'ITB (Oseanografi)'],
    pts: ['Universitas Hang Tuah Surabaya', 'Universitas Bung Hatta', 'Universitas Muhammadiyah Malang (UMM)'],
    selectionNote: 'Bisa memilih fokus sains laut (Oseanografi/Ilmu Kelautan) atau budidaya dan pengolahan hasil perikanan (Akuakultur).'
  },
  arsitektur: {
    ptn: ['Institut Teknologi Bandung (ITB - SAPPK)', 'Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'ITS', 'UNDIP'],
    pts: ['Universitas Katolik Parahyangan (UNPAR)', 'Universitas Kristen Petra', 'Universitas Tarumanagara (UNTAR)', 'Universitas Trisakti'],
    selectionNote: 'Beberapa PTN tidak mewajibkan portofolio gambar untuk Arsitektur (berbeda dengan Seni/DKV), tetapi cek ketentuan SNPMB tiap kampus.'
  },
  'pwk-planologi': {
    ptn: ['Institut Teknologi Bandung (ITB - SAPPK)', 'Universitas Gadjah Mada (UGM)', 'ITS', 'UNDIP', 'Universitas Brawijaya (UB)'],
    pts: ['Universitas Tarumanagara (UNTAR)', 'Universitas Trisakti', 'ITENAS Bandung', 'Universitas Islam Bandung (UNISBA)'],
    selectionNote: 'Di ITB, mahasiswa mendaftar lewat SAPPK sebelum memilih Arsitektur atau PWK di tahun kedua.'
  },
  dkv: {
    ptn: ['Institut Teknologi Bandung (ITB - FSRD)', 'ISI Yogyakarta', 'ITS', 'Universitas Negeri Malang (UM)', 'UNS'],
    pts: ['BINUS University', 'Universitas Multimedia Nusantara (UMN)', 'Institut Kesenian Jakarta (IKJ)', 'Universitas Kristen Petra'],
    selectionNote: 'Jalur SNBP dan SNBT untuk DKV di PTN mewajibkan unggah Portofolio Seni Rupa, Desain, dan Kriya.'
  },
  'desain-interaksi': {
    ptn: ['Institut Teknologi Bandung (ITB - FSRD)', 'ITS (Desain Produk)', 'UNS', 'ISI Yogyakarta', 'UPI'],
    pts: ['BINUS University', 'Telkom University', 'Universitas Multimedia Nusantara (UMN)', 'Universitas Pelita Harapan (UPH)'],
    selectionNote: 'Untuk fokus UI/UX digital, bisa ditempuh lewat Desain Produk, DKV peminatan Interaktif, atau Sistem Informasi.'
  },
  'desain-interior': {
    ptn: ['Institut Teknologi Bandung (ITB - FSRD)', 'ITS', 'ISI Yogyakarta', 'UNS', 'Universitas Negeri Jakarta (UNJ)'],
    pts: ['Universitas Kristen Petra', 'BINUS University', 'Universitas Tarumanagara (UNTAR)', 'Telkom University'],
    selectionNote: 'Pendaftaran jalur PTN umumnya mensyaratkan unggah Portofolio Seni Rupa, Desain, dan Kriya.'
  },
  'film-animasi': {
    ptn: ['ISI Yogyakarta', 'ISI Surakarta', 'Universitas Padjadjaran (UNPAD - Televisi & Film)', 'Universitas Pendidikan Indonesia (UPI)', 'Politeknik Negeri Media Kreatif'],
    pts: ['Institut Kesenian Jakarta (IKJ)', 'Universitas Multimedia Nusantara (UMN)', 'BINUS University', 'SAE Institute Jakarta'],
    selectionNote: 'Cek syarat portofolio Film & Televisi pada laman SNPMB jauh hari sebelum pendaftaran ditutup.'
  },
  'seni-rupa-pertunjukan': {
    ptn: ['Institut Teknologi Bandung (ITB - FSRD)', 'ISI Yogyakarta', 'ISI Denpasar', 'ISBI Bandung', 'Universitas Negeri Jakarta (UNJ)'],
    pts: ['Institut Kesenian Jakarta (IKJ)', 'Telkom University (Kriya Tekstil & Fesyen)', 'Universitas Kristen Maranatha'],
    selectionNote: 'Jalur PTN mewajibkan portofolio sesuai cabang (Seni Rupa/Kriya, Tari, Musik, Karawitan, atau Teater).'
  },
  'ilmu-ekonomi': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (UNAIR)', 'Universitas Padjadjaran (UNPAD)', 'IPB University'],
    pts: ['Universitas Katolik Parahyangan (UNPAR)', 'Universitas Islam Indonesia (UII)', 'Unika Atma Jaya Jakarta'],
    selectionNote: 'Cek sub-peminatan seperti Ekonomi Pembangunan, Ekonomi Moneter, atau Ilmu Ekonomi Islam di tiap FEB.'
  },
  'akuntansi-keuangan': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (UNAIR)', 'UNDIP', 'Universitas Brawijaya (UB)', 'PKN STAN (Kedinasan)'],
    pts: ['Universitas Trisakti', 'Universitas Tarumanagara (UNTAR)', 'BINUS University', 'Universitas Surabaya (UBAYA)', 'Universitas Prasetiya Mulya'],
    selectionNote: 'Akuntansi termasuk prodi soshum dengan jumlah peminat terbesar hampir di setiap PTN di Indonesia.'
  },
  'manajemen-bisnis': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'ITB (SBM - Sekolah Bisnis dan Manajemen)', 'UNAIR', 'UNPAD'],
    pts: ['Universitas Prasetiya Mulya', 'BINUS University', 'Universitas Ciputra', 'Universitas Katolik Parahyangan (UNPAR)'],
    selectionNote: 'SBM ITB, FEB UI, dan FEB UGM memiliki rasio keketatan sangat tinggi di jalur SNBP maupun SNBT.'
  },
  'bisnis-digital': {
    ptn: ['Universitas Padjadjaran (UNPAD)', 'Universitas Sebelas Maret (UNS)', 'Universitas Pendidikan Indonesia (UPI)', 'Universitas Negeri Jakarta (UNJ)', 'Universitas Negeri Surabaya (UNESA)'],
    pts: ['BINUS University', 'Universitas Prasetiya Mulya', 'Telkom University', 'Universitas Ciputra'],
    selectionNote: 'Bisnis Digital termasuk salah satu prodi S1 dengan keketatan paling tinggi di SNBT karena kuota relatif kecil dan peminat yang melonjak cepat.'
  },
  'administrasi-bisnis': {
    ptn: ['Universitas Indonesia (UI - FIA Ilmu Administrasi Niaga)', 'Universitas Brawijaya (UB - FIA)', 'Universitas Padjadjaran (UNPAD)', 'UNDIP', 'UPN Veteran Yogyakarta'],
    pts: ['Telkom University', 'Universitas Katolik Parahyangan (UNPAR)', 'Unika Atma Jaya Jakarta', 'Universitas Trisakti'],
    selectionNote: 'Di UI dan sebagian kampus, nama prodinya adalah Ilmu Administrasi Niaga, sedangkan di UB, UNPAD, dan UNDIP disebut Administrasi Bisnis.'
  },
  'keuangan-perbankan': {
    ptn: ['Universitas Indonesia (Vokasi Administrasi Keuangan & Perbankan)', 'Universitas Brawijaya (Keuangan & Perbankan)', 'Universitas Airlangga (Vokasi Perbankan & Keuangan)', 'Politeknik Negeri Jakarta / Bandung'],
    pts: ['Perbanas Institute', 'STIE Indonesia Banking School (IBS)', 'Universitas Prasetiya Mulya (Finance)', 'Universitas Trisakti'],
    selectionNote: 'Banyak tersedia di jalur Vokasi (D3/D4) PTN maupun S1 khusus keuangan di kampus spesialis perbankan seperti Perbanas dan IBS.'
  },
  kewirausahaan: {
    ptn: ['Institut Teknologi Bandung (ITB - SBM Kewirausahaan)', 'Universitas Brawijaya (UB)', 'Universitas Pendidikan Indonesia (UPI)', 'Universitas Negeri Makassar (UNM)'],
    pts: ['Universitas Ciputra Surabaya', 'BINUS University (Business Creation)', 'Universitas Prasetiya Mulya', 'Universitas Agung Podomoro'],
    selectionNote: 'SBM ITB memisahkan S1 Manajemen dan S1 Kewirausahaan; jalur Kewirausahaan berfokus kuat pada inkubasi dan praktik membangun bisnis nyata.'
  },
  'bisnis-internasional-logistik': {
    ptn: ['Universitas Padjadjaran (UNPAD - Bisnis Internasional)', 'Universitas Indonesia (Vokasi Bisnis Kreatif / Logistik)', 'ITS (Manajemen Bisnis / Teknik Logistik)', 'Politeknik APP Jakarta (Kemenperin)'],
    pts: ['Universitas Logistik dan Bisnis Internasional (ULBI)', 'Institut Transportasi dan Logistik (ITL) Trisakti', 'BINUS University (International Business)', 'Universitas Prasetiya Mulya'],
    selectionNote: 'Selain PTN akademik, Politeknik APP (Kemenperin), ULBI, dan ITL Trisakti dikenal kuat di bidang manajemen logistik dan ekspor-impor.'
  },
  'ekonomi-syariah': {
    ptn: ['IPB University', 'Universitas Indonesia (UI - Ilmu Ekonomi Islam)', 'Universitas Airlangga (UNAIR)', 'UNDIP', 'UIN Syarif Hidayatullah Jakarta', 'UIN Sunan Kalijaga'],
    pts: ['Institut Tazkia', 'Universitas Muhammadiyah Yogyakarta (UMY)', 'Universitas Islam Indonesia (UII)'],
    selectionNote: 'Tersedia luas baik melalui jalur PTN Kemendikbud (SNPMB) maupun PTKIN (SPAN-PTKIN / UM-PTKIN).'
  },
  'pariwisata-perhotelan': {
    ptn: ['Universitas Gadjah Mada (UGM)', 'Universitas Udayana (UNUD)', 'Universitas Pendidikan Indonesia (UPI)', 'Universitas Brawijaya (UB)', 'Politeknik Pariwisata (Kemenparekraf)'],
    pts: ['Universitas Kristen Petra', 'Universitas Ciputra', 'Sekolah Tinggi Pariwisata Trisakti', 'Universitas Pelita Harapan (UPH)'],
    selectionNote: 'Untuk jalur praktik perhotelan dan kuliner intensif, Politeknik Pariwisata Kemenparekraf (Bandung, Bali, Lombok, Makassar, Medan, Palembang) sangat kuat.'
  },
  'ilmu-hukum': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (UNAIR)', 'Universitas Padjadjaran (UNPAD)', 'UNDIP'],
    pts: ['Universitas Islam Indonesia (UII)', 'Universitas Trisakti', 'Universitas Katolik Parahyangan (UNPAR)', 'Universitas Pelita Harapan (UPH)'],
    selectionNote: 'Daya tampung FH di PTN besar biasanya cukup banyak, tetapi jumlah pendaftarnya juga termasuk yang terbesar secara nasional.'
  },
  'ilmu-politik': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Airlangga (UNAIR)', 'Universitas Padjadjaran (UNPAD)', 'UNDIP'],
    pts: ['Universitas Muhammadiyah Yogyakarta (UMY)', 'Universitas Nasional (UNAS)', 'Universitas Bakrie'],
    selectionNote: 'Di UGM namanya adalah Politik dan Pemerintahan (DPP); banyak lulusannya berkarya di riset kebijakan dan media.'
  },
  'hubungan-internasional': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (UNPAD)', 'Universitas Airlangga (UNAIR)', 'Universitas Brawijaya (UB)'],
    pts: ['Universitas Katolik Parahyangan (UNPAR)', 'Universitas Muhammadiyah Yogyakarta (UMY)', 'BINUS University', 'President University'],
    selectionNote: 'HI UI, UGM, dan UNPAD secara konsisten masuk daftar prodi S1 Soshum dengan keketatan paling tinggi di SNBT.'
  },
  'administrasi-publik': {
    ptn: ['Universitas Indonesia (UI - FIA)', 'Universitas Gadjah Mada (UGM - MKP)', 'Universitas Brawijaya (UB - FIA)', 'UNDIP', 'UNAIR'],
    pts: ['Universitas Muhammadiyah Yogyakarta (UMY)', 'Universitas Katolik Parahyangan (UNPAR)', 'Universitas Pasundan'],
    selectionNote: 'Nama prodinya bervariasi antar kampus: Ilmu Administrasi Negara, Administrasi Publik, atau Manajemen dan Kebijakan Publik (UGM).'
  },
  'sosiologi-antropologi': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (UNPAD)', 'Universitas Airlangga (UNAIR)', 'Universitas Hasanuddin (UNHAS)'],
    pts: ['Universitas Muhammadiyah Malang (UMM)', 'Universitas Widya Mataram', 'Universitas Nasional (UNAS)'],
    selectionNote: 'Sosiologi umumnya berada di FISIP, sedangkan Antropologi di sebagian PTN berada di FISIP dan di sebagian lain di FIB.'
  },
  'kriminologi-kessos': {
    ptn: ['Universitas Indonesia (UI - Kriminologi & Ilmu Kesejahteraan Sosial)', 'Universitas Padjadjaran (UNPAD - Kesejahteraan Sosial)', 'UGM (PSdK)', 'Universitas Jember'],
    pts: ['Universitas Budi Luhur (Kriminologi)', 'Universitas Islam Riau (Kriminologi)', 'Universitas Muhammadiyah Jakarta (Kessos)'],
    selectionNote: 'Prodi S1 Kriminologi sangat terbatas di PTN (UI sebagai rujukan utama) sehingga persaingannya sangat ketat.'
  },
  psikologi: {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (UNPAD)', 'Universitas Airlangga (UNAIR)', 'UNDIP'],
    pts: ['Unika Atma Jaya Jakarta', 'Universitas Surabaya (UBAYA)', 'Universitas Islam Indonesia (UII)', 'Universitas Muhammadiyah Surakarta (UMS)'],
    selectionNote: 'Di beberapa PTN (seperti UNPAD), Psikologi dulu masuk rumpun Saintek, namun di sistem SNPMB terbaru terbuka lintas jurusan.'
  },
  'komunikasi-media': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Padjadjaran (UNPAD - Fikom)', 'UNAIR', 'UNDIP'],
    pts: ['Universitas Multimedia Nusantara (UMN)', 'London School of Public Relations (LSPR)', 'BINUS University', 'Telkom University'],
    selectionNote: 'Ilmu Komunikasi secara konsisten termasuk prodi S1 dengan keketatan paling tinggi di jalur SNBT.'
  },
  'sastra-bahasa': {
    ptn: ['Universitas Indonesia (UI - FIB)', 'Universitas Gadjah Mada (UGM - FIB)', 'Universitas Padjadjaran (UNPAD - FIB)', 'UNAIR', 'UPI'],
    pts: ['Universitas Sanata Dharma', 'BINUS University', 'Universitas Kristen Maranatha', 'Universitas Darma Persada (Sastra Jepang)'],
    selectionNote: 'Tiap kampus menawarkan pilihan bahasa asing dan daerah berbeda (Inggris, Jepang, Korea, Arab, Mandarin, Prancis, Jerman, Jawa, Sunda).'
  },
  'linguistik-komputasional': {
    ptn: ['Universitas Indonesia (UI - kolaborasi FIB & Fasilkom)', 'Universitas Gadjah Mada (UGM)', 'ITB (Informatika - NLP)', 'Universitas Pendidikan Indonesia (UPI)'],
    pts: ['Telkom University', 'BINUS University', 'Unika Atma Jaya Jakarta'],
    selectionNote: 'Di jenjang S1 Indonesia, bidang ini biasanya ditempuh lewat peminatan Linguistik/Sastra yang mengambil kuliah komputasi, atau dari Ilmu Komputer fokus NLP.'
  },
  'sejarah-arkeologi': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM)', 'Universitas Udayana (UNUD)', 'Universitas Hasanuddin (UNHAS)', 'Universitas Jambi'],
    pts: ['Universitas Sanata Dharma (Sejarah)', 'Universitas Kristen Indonesia'],
    selectionNote: 'Program S1 Arkeologi hanya tersedia di sejumlah kecil PTN (seperti UI, UGM, UNUD, UNHAS, UNJA, UHO).'
  },
  'ilmu-perpustakaan': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Padjadjaran (UNPAD)', 'UNDIP', 'Universitas Airlangga (UNAIR)', 'Universitas Brawijaya (UB)'],
    pts: ['Universitas YARSI', 'Universitas Lancang Kuning', 'Universitas Muhammadiyah Mataram'],
    selectionNote: 'Banyak kampus kini memodernisasi kurikulumnya menjadi Sains Informasi dan Manajemen Arsip Digital.'
  },
  'pendidikan-guru': {
    ptn: ['Universitas Pendidikan Indonesia (UPI)', 'Universitas Negeri Yogyakarta (UNY)', 'Universitas Negeri Malang (UM)', 'Universitas Negeri Jakarta (UNJ)', 'Universitas Negeri Semarang (UNNES)'],
    pts: ['Universitas Sanata Dharma', 'Universitas Muhammadiyah Surakarta (UMS)', 'Universitas Ahmad Dahlan (UAD)', 'Universitas Pelita Harapan (UPH - Teachers College)'],
    selectionNote: 'Setelah lulus S1 Pendidikan, calon guru profesional mengikuti Pendidikan Profesi Guru (PPG).'
  },
  'filsafat-etika': {
    ptn: ['Universitas Indonesia (UI)', 'Universitas Gadjah Mada (UGM - Fakultas Filsafat)', 'UIN Syarif Hidayatullah Jakarta', 'UIN Sunan Kalijaga'],
    pts: ['Sekolah Tinggi Filsafat (STF) Driyarkara', 'Universitas Katolik Parahyangan (UNPAR)', 'Universitas Paramadina'],
    selectionNote: 'UGM memiliki Fakultas Filsafat tersendiri; UI menawarkannya di FIB, dan STF Driyarkara dikenal kuat di jalur PTS.'
  }
};
