export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    startDate: string;
    endDate?: string;
    description: string;
    achievements: string[];
    technologies: string[];
    type: 'fulltime' | 'freelance' | 'contract';
}

export const experiences: Experience[] = [
    {
        id: 'freelance-pwa-dev',
        role: 'PWA Developer & Consultant',
        company: 'Freelance',
        period: '2023 - Sekarang',
        startDate: '2023-01',
        type: 'freelance',
        description: 'Membantu UMKM mengotomatisasi proses bisnis mereka melalui aplikasi PWA yang ringan dan efisien.',
        achievements: [
            'Berhasil menyelesaikan 8+ proyek PWA untuk berbagai UMKM',
            'Meningkatkan efisiensi operasional klien hingga 85%',
            'Menghemat 15-25 jam/minggu waktu kerja manual klien',
            'Membangun sistem yang terbukti meningkatkan ROI 250-400%'
        ],
        technologies: ['Next.js', 'React', 'Firebase', 'TypeScript', 'PWA', 'Tailwind CSS']
    },
    {
        id: 'web-developer',
        role: 'Full Stack Web Developer',
        company: 'Tech Startup',
        period: '2021 - 2023',
        startDate: '2021-06',
        endDate: '2023-01',
        type: 'fulltime',
        description: 'Mengembangkan dan memelihara aplikasi web untuk startup di bidang e-commerce dan logistics.',
        achievements: [
            'Lead developer untuk 3 major product releases',
            'Implementasi CI/CD pipeline yang mengurangi deployment time 60%',
            'Mentoring 2 junior developers',
            'Optimasi performa aplikasi hingga 40% lebih cepat'
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'REST API']
    },
    {
        id: 'frontend-dev',
        role: 'Frontend Developer',
        company: 'Digital Agency',
        period: '2020 - 2021',
        startDate: '2020-03',
        endDate: '2021-05',
        type: 'contract',
        description: 'Membangun landing pages dan web applications untuk berbagai klien dari agency.',
        achievements: [
            'Delivered 15+ client projects on time',
            'Meningkatkan conversion rate client hingga 35%',
            'Implementasi responsive design best practices',
            'Kolaborasi dengan design team untuk pixel-perfect implementations'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Figma', 'Git']
    }
];
