export interface Skill {
    id: string;
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'design';
    level: number; // 1-5
    description: string;
    icon: string;
}

export const skills: Skill[] = [
    // Frontend
    {
        id: 'nextjs',
        name: 'Next.js',
        category: 'frontend',
        level: 5,
        description: 'Framework React untuk produksi dengan SSR dan SSG',
        icon: '⚛️'
    },
    {
        id: 'react',
        name: 'React',
        category: 'frontend',
        level: 5,
        description: 'Library JavaScript untuk membangun UI interaktif',
        icon: '⚛️'
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        category: 'frontend',
        level: 5,
        description: 'JavaScript dengan type safety untuk kode yang reliable',
        icon: '📘'
    },
    {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'frontend',
        level: 4,
        description: 'Utility-first CSS framework untuk styling cepat',
        icon: '🎨'
    },
    {
        id: 'pwa',
        name: 'PWA',
        category: 'frontend',
        level: 5,
        description: 'Progressive Web Apps untuk pengalaman native-like',
        icon: '📱'
    },

    // Backend
    {
        id: 'firebase',
        name: 'Firebase',
        category: 'backend',
        level: 5,
        description: 'Platform BaaS untuk real-time database dan authentication',
        icon: '🔥'
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        category: 'backend',
        level: 4,
        description: 'Runtime JavaScript untuk backend scalable',
        icon: '🟢'
    },
    {
        id: 'api',
        name: 'REST API',
        category: 'backend',
        level: 5,
        description: 'Desain dan implementasi API RESTful',
        icon: '🔌'
    },

    // Tools
    {
        id: 'git',
        name: 'Git',
        category: 'tools',
        level: 5,
        description: 'Version control untuk kolaborasi tim',
        icon: '📦'
    },
    {
        id: 'vscode',
        name: 'VS Code',
        category: 'tools',
        level: 5,
        description: 'Code editor dengan ekstensibilitas tinggi',
        icon: '💻'
    },
    {
        id: 'figma',
        name: 'Figma',
        category: 'design',
        level: 4,
        description: 'Design tool untuk UI/UX prototyping',
        icon: '🎨'
    },
    {
        id: 'vercel',
        name: 'Vercel',
        category: 'tools',
        level: 5,
        description: 'Platform deployment untuk aplikasi modern',
        icon: '▲'
    },
];

export const skillCategories = {
    frontend: 'Frontend Development',
    backend: 'Backend & Database',
    tools: 'Tools & Deployment',
    design: 'Design & UX'
};
