export const projects = [
  {
    id: 'pole-calc-web',
    title: 'Platform Kalkulasi & Desain Pole Terintegrasi',
    category: 'Project Integrasi',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    shortDescription: 'Sistem web app untuk kalkulasi beban dan desain pole telekomunikasi yang terintegrasi dengan Autodesk Inventor.',
    description: 'Menggantikan proses manual dengan sistem otomasi penuh. Web app ini memungkinkan engineer untuk menginput parameter beban angin dan material, lalu sistem secara otomatis menghasilkan kalkulasi struktur sesuai SNI dan men-generate model 3D beserta drawing 2D melalui integrasi API Autodesk Inventor.',
    techStack: ['React', 'Python', 'Autodesk Forge', 'PostgreSQL'],
    features: [
      'Kalkulasi beban otomatis',
      'Generate 3D model & 2D drawing',
      'Export laporan teknis PDF',
      'Manajemen data proyek'
    ],
    featured: true
  },
  {
    id: 'tower-design-bali',
    title: 'Desain Struktur Tower Monopole 42m',
    category: 'Teknik Sipil',
    image: 'https://images.unsplash.com/photo-1541888087616-4c48011246d6?auto=format&fit=crop&q=80&w=1000',
    shortDescription: 'Perencanaan dan kalkulasi struktur menara telekomunikasi di area rawan gempa.',
    description: 'Proyek perencanaan struktur tower monopole setinggi 42 meter di Bali. Melibatkan analisis beban dinamis, desain pondasi, dan simulasi ketahanan gempa menggunakan software SAP2000.',
    techStack: ['SAP2000', 'AutoCAD', 'Civil 3D'],
    features: [
      'Analisis struktur dinamis',
      'Desain pondasi dalam',
      'Optimasi penggunaan material baja'
    ],
    featured: false
  },
  {
    id: 'asset-management-sys',
    title: 'Sistem Informasi Manajemen Aset Infrastruktur',
    category: 'IT & Digital',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    shortDescription: 'Aplikasi dashboard untuk monitoring kondisi dan jadwal pemeliharaan aset infrastruktur.',
    description: 'Pengembangan dashboard interaktif untuk klien pemerintahan daerah guna melacak ribuan titik aset infrastruktur jalan dan jembatan, lengkap dengan fitur pelaporan kerusakan dan penjadwalan maintenance.',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox GL'],
    features: [
      'Pemetaan aset berbasis GIS',
      'Sistem pelaporan real-time',
      'Dashboard analitik kondisi aset'
    ],
    featured: false
  }
];
