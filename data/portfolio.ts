export interface PortfolioItem {
    id: string;
    client: string;
    title: string;
    category: 'pwa' | 'web' | 'mobile';
    tags: string[];
    challenge: string;
    solution: string;
    overview: string;
    features: string[];
    technologies: string[];
    process: {
        phase: string;
        description: string;
    }[];
    metrics: {
        timeSaved: string;
        efficiencyGain: string;
    };
    image: string;
    images?: string[];
    timeline: string;
    team?: string;
    link?: string;
    testimonial?: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: 'c2ms',
        client: 'Cahaya Cargo Express',
        title: 'C2-MS - Sistema Manajemen Kargo',
        category: 'pwa',
        tags: ['PWA', 'Firebase', 'Next.js', 'Real-time'],
        challenge: 'Manajemen transaksi dan armada masih manual menggunakan buku, menyebabkan kesulitan tracking dan reporting. Owner sulit memantau bisnis secara real-time, dan proses rekap memakan waktu berhari-hari.',
        solution: 'Sistem PWA terintegrasi dengan database real-time untuk transaksi, armada, dan laporan owner dengan akses offline. Dashboard analytics lengkap untuk monitoring bisnis dari mana saja.',
        overview: 'C2-MS adalah solusi manajemen komprehensif untuk bisnis logistik kargo yang mendigitalkan seluruh operasional dari pencatatan transaksi, manajemen armada, hingga reporting otomatis untuk owner. Sistem ini dirancang untuk bekerja offline-first dengan sinkronisasi otomatis.',
        features: [
            'Manajemen transaksi dengan surat jalan digital',
            'Tracking armada dan driver real-time',
            'Dashboard owner dengan analytics lengkap',
            'Export laporan otomatis (Excel/PDF)',
            'Offline-first PWA dengan auto-sync',
            'Multi-user role management',
            'Database client dan history transaksi',
            'Notifikasi real-time untuk update penting'
        ],
        technologies: ['Next.js 14', 'TypeScript', 'Firebase Firestore', 'PWA', 'Framer Motion', 'TailwindCSS'],
        process: [
            {
                phase: 'Discovery & Planning',
                description: 'Analisis proses bisnis existing, identifikasi pain points, dan desain solusi yang sesuai dengan workflow perusahaan.'
            },
            {
                phase: 'Design & Prototyping',
                description: 'Membuat wireframe dan prototype UI/UX yang intuitif untuk berbagai user roles (admin, operator, owner).'
            },
            {
                phase: 'Development',
                description: 'Implementasi fitur secara iteratif dengan testing berkelanjutan. Focus pada offline capability dan real-time sync.'
            },
            {
                phase: 'Training & Deployment',
                description: 'Training pengguna, deployment bertahap, dan monitoring untuk memastikan adoption yang smooth.'
            }
        ],
        metrics: {
            timeSaved: '15 jam/minggu',
            efficiencyGain: '85%'
        },
        image: '/projects/c2ms.png',
        timeline: '3 bulan',
        team: '1 Full-stack Developer',
        link: 'https://ccems.cahayacargoexpress.com',
        testimonial: 'Sekarang saya bisa pantau bisnis dari mana saja. Report otomatis, tidak perlu hitung manual lagi. Investasi yang sangat worth it!'
    },
    {
        id: 'umkm-inventory',
        client: 'Toko Sejahtera',
        title: 'Smart Inventory untuk Toko Retail',
        category: 'pwa',
        tags: ['PWA', 'Inventory', 'Barcode', 'Analytics'],
        challenge: 'Kehilangan track stok barang, sering kehabisan atau kelebihan stok, pencatatan masih manual di buku. Tidak ada data untuk analisis penjualan dan keputusan restocking.',
        solution: 'Aplikasi inventory management dengan barcode scanner, notifikasi stok rendah, dan laporan analitik otomatis untuk optimasi inventory.',
        overview: 'Sistem inventory management modern yang membantu toko retail mengelola stok dengan efisien. Dilengkapi dengan barcode scanning, tracking in/out barang, dan analytics dashboard untuk insight penjualan.',
        features: [
            'Barcode scanner untuk input/output cepat',
            'Multi-category product management',
            'Notifikasi otomatis stok rendah',
            'Laporan inventory dan sales analytics',
            'Track supplier dan purchase history',
            'Mobile-friendly PWA interface',
            'Export data ke Excel',
            'Dashboard visual dengan charts'
        ],
        technologies: ['React', 'Firebase', 'PWA', 'Chart.js', 'QuaggaJS (Barcode)', 'CSS Modules'],
        process: [
            {
                phase: 'Requirements Gathering',
                description: 'Interview dengan pemilik toko untuk memahami workflow dan kebutuhan spesifik inventory management.'
            },
            {
                phase: 'System Design',
                description: 'Desain data structure untuk produk, kategori, dan transaksi. Planning untuk barcode integration.'
            },
            {
                phase: 'Implementation',
                description: 'Build core features dengan focus pada user experience yang simple namun powerful.'
            },
            {
                phase: 'User Acceptance Testing',
                description: 'Testing dengan real inventory data dan iterasi berdasarkan feedback pengguna.'
            }
        ],
        metrics: {
            timeSaved: '15 Jam/Minggu',
            efficiencyGain: '70%'
        },
        image: '/projects/inventory.png',
        timeline: '2 bulan',
        team: '1 Developer'
    },
    {
        id: 'inventory-umkm',
        client: 'Toko Berkah',
        title: 'Sistem Inventory & POS',
        category: 'pwa',
        tags: ['PWA', 'Inventory', 'POS', 'Barcode'],
        challenge: 'Stok barang sering tidak akurat, pencatatan penjualan lambat, dan sulit tracking produk laris. Rekap harian memakan waktu 2-3 jam setiap hari.',
        solution: 'Aplikasi PWA dengan scan barcode, manajemen stok otomatis, dan dashboard analitik penjualan. POS system terintegrasi untuk transaksi cepat.',
        overview: 'Solusi all-in-one untuk toko retail yang menggabungkan inventory management dengan Point of Sale system. Dirancang untuk mempercepat transaksi sambil maintaining akurasi stok secara real-time.',
        features: [
            'Point of Sale dengan interface cepat',
            'Barcode scanning untuk produk',
            'Auto-update stok setelah transaksi',
            'Sales analytics dan best-seller tracking',
            'Multi-payment method support',
            'Print receipt otomatis',
            'Inventory alerts dan reorder points',
            'Customer database management'
        ],
        technologies: ['Next.js', 'Firebase', 'PWA', 'Recharts', 'Barcode Scanner API', 'Thermal Printer API'],
        process: [
            {
                phase: 'Process Analysis',
                description: 'Observasi proses penjualan dan inventory existing untuk identify optimization opportunities.'
            },
            {
                phase: 'UI/UX Design',
                description: 'Design POS interface yang intuitive dan cepat untuk digunakan saat transaksi ramai.'
            },
            {
                phase: 'Feature Development',
                description: 'Implementasi POS dan inventory features dengan real-time synchronization.'
            },
            {
                phase: 'Go-Live & Support',
                description: 'Parallel running dengan system lama, training staff, dan ongoing support.'
            }
        ],
        metrics: {
            timeSaved: '10 jam/minggu',
            efficiencyGain: '75%'
        },
        image: '/projects/inventory-pos.png',
        timeline: '2.5 bulan',
        team: '1 Developer',
        testimonial: 'Stock opname yang dulu 2 hari, sekarang cuma 2 jam. Luar biasa! Transaksi juga jadi lebih cepat, pelanggan senang.'
    },
    {
        id: 'restaurant-pos',
        client: 'Warung Nusantara',
        title: 'System POS Restoran',
        category: 'pwa',
        tags: ['PWA', 'POS', 'Payment', 'Kitchen Display'],
        challenge: 'Antrian kasir lambat, kesalahan perhitungan manual, sulit tracking pesanan di dapur. Sering miss-communication antara kasir dan dapur yang menyebabkan pesanan salah.',
        solution: 'PWA Point of Sale dengan kitchen display system, payment gateway integration, dan analytics real-time untuk monitoring performa restoran.',
        overview: 'Sistem POS khusus untuk restoran yang mengintegrasikan proses dari order taking, kitchen management, hingga payment processing. Dirancang untuk mengurangi error dan mempercepat service.',
        features: [
            'Touch-friendly POS interface',
            'Kitchen Display System (KDS) untuk chef',
            'Table management dan order tracking',
            'Multiple payment methods',
            'Menu management dengan gambar',
            'Sales reporting dan analytics',
            'Split bill dan discount handling',
            'Real-time order status updates'
        ],
        technologies: ['React', 'Node.js', 'Firebase', 'PWA', 'Payment Gateway API', 'WebSocket'],
        process: [
            {
                phase: 'Workflow Analysis',
                description: 'Study alur kerja dari customer order hingga payment, identify bottlenecks.'
            },
            {
                phase: 'System Architecture',
                description: 'Design architecture untuk real-time communication antara POS dan Kitchen Display.'
            },
            {
                phase: 'Development & Testing',
                description: 'Build features dengan extensive testing in simulated restaurant environment.'
            },
            {
                phase: 'Deployment & Training',
                description: 'Deploy system, training staff untuk POS dan KDS, fine-tuning berdasarkan usage.'
            }
        ],
        metrics: {
            timeSaved: '20 Jam/Minggu',
            efficiencyGain: '75%'
        },
        image: '/projects/pos.png',
        timeline: '3 bulan',
        team: '1 Full-stack Developer',
        testimonial: 'Pelanggan senang dengan kecepatan layanan, saya senang dengan akurasi pencatatan. Win-win solution!'
    },
    {
        id: 'attendance-system',
        client: 'PT Maju Jaya',
        title: 'Smart Attendance System',
        category: 'web',
        tags: ['Web App', 'GPS', 'Attendance', 'Export'],
        challenge: 'Absensi karyawan masih pakai kertas, sering manipulasi, dan rekap gaji memakan waktu lama. HRD kesulitan monitoring kehadiran karyawan lapangan yang tersebar di berbagai lokasi.',
        solution: 'Web app dengan GPS tracking, foto verifikasi, dan export otomatis untuk payroll. Dashboard admin untuk monitoring real-time dan reporting komprehensif.',
        overview: 'Solusi absensi digital untuk perusahaan dengan karyawan lapangan. Sistem menggunakan GPS verification dan photo capture untuk memastikan authenticity, dengan interface yang mudah untuk admin dan karyawan.',
        features: [
            'GPS-based attendance check-in/out',
            'Photo verification untuk authenticity',
            'Real-time attendance dashboard',
            'Automatic timesheet calculation',
            'Leave management system',
            'Export ke Excel untuk payroll',
            'Mobile-responsive interface',
            'Push notifications untuk reminders'
        ],
        technologies: ['Next.js', 'Firebase', 'Geolocation API', 'Camera API', 'ExcelJS', 'Chart.js'],
        process: [
            {
                phase: 'Requirements Analysis',
                description: 'Diskusi dengan HRD untuk understand absensi workflow dan compliance requirements.'
            },
            {
                phase: 'Security Planning',
                description: 'Design security measures untuk prevent fraud dan protect karyawan privacy.'
            },
            {
                phase: 'Development',
                description: 'Build attendance system dengan focus pada reliability dan ease of use.'
            },
            {
                phase: 'Rollout & Training',
                description: 'Gradual rollout dengan training untuk HR team dan employees.'
            }
        ],
        metrics: {
            timeSaved: '20 jam/bulan',
            efficiencyGain: '90%'
        },
        image: '/projects/attendance.png',
        timeline: '2 bulan',
        team: '1 Developer'
    }
];

// Helper function to get related projects
export function getRelatedProjects(currentProjectId: string, limit: number = 3): PortfolioItem[] {
    const currentProject = portfolioItems.find(p => p.id === currentProjectId);
    if (!currentProject) return [];

    // Filter by same category or shared tags
    const related = portfolioItems
        .filter(p => p.id !== currentProjectId)
        .map(p => {
            let score = 0;
            // Same category gets higher score
            if (p.category === currentProject.category) score += 3;
            // Shared tags
            const sharedTags = p.tags.filter(tag => currentProject.tags.includes(tag));
            score += sharedTags.length;
            return { project: p, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.project);

    return related;
}
