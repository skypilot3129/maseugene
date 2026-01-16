export interface Article {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: number;
    publishDate: string;
    featured: boolean;
    externalUrl?: string;
}

export const articles: Article[] = [
    {
        id: 'why-pwa-for-umkm',
        title: 'Mengapa PWA adalah Solusi Terbaik untuk UMKM?',
        excerpt: 'Progressive Web Apps menawarkan pengalaman native-like dengan biaya development yang jauh lebih rendah. Pelajari mengapa PWA cocok untuk UMKM.',
        category: 'PWA',
        readTime: 5,
        publishDate: '2024-01-15',
        featured: true,
    },
    {
        id: 'automate-business-process',
        title: '5 Proses Bisnis yang Harus Otomatis di UMKM',
        excerpt: 'Dari inventory management hingga customer relationship, temukan proses mana yang paling berdampak ketika diotomatisasi.',
        category: 'Business',
        readTime: 7,
        publishDate: '2024-01-10',
        featured: false,
    },
    {
        id: 'firebase-for-beginners',
        title: 'Firebase: Backend as a Service untuk Startup',
        excerpt: 'Memulai dengan Firebase untuk membangun aplikasi real-time tanpa perlu setup server sendiri. Tutorial lengkap untuk pemula.',
        category: 'Tutorial',
        readTime: 10,
        publishDate: '2024-01-05',
        featured: true,
    },
    {
        id: 'roi-automation',
        title: 'Menghitung ROI dari Otomasi Bisnis',
        excerpt: 'Framework sederhana untuk menghitung return on investment dari investasi teknologi di bisnis Anda.',
        category: 'Business',
        readTime: 6,
        publishDate: '2023-12-20',
        featured: false,
    }
];
