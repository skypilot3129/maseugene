export interface Solution {
    id: string;
    icon: string;
    titleId: string;
    descriptionEn: string;
    benefits: string[];
}

export const solutions: Solution[] = [
    {
        id: 'digital-marketing',
        icon: '🌐',
        titleId: 'digitalMarketing',
        descriptionEn: 'Modern website to reach more customers online',
        benefits: ['SEO Optimized', 'Mobile Responsive', 'Fast Loading']
    },
    {
        id: 'operational-app',
        icon: '📱',
        titleId: 'operationalApp',
        descriptionEn: 'Custom application to streamline operations',
        benefits: ['Automation', 'Real-time Data', 'Cloud Access']
    },
    {
        id: 'inventory-system',
        icon: '📊',
        titleId: 'inventorySystem',
        descriptionEn: 'Smart system to manage stock efficiently',
        benefits: ['Auto Alerts', 'Reports', 'Multi-location']
    },
    {
        id: 'customer-management',
        icon: '💬',
        titleId: 'customerManagement',
        descriptionEn: 'CRM to build better customer relationships',
        benefits: ['Contact Database', 'Follow-ups', 'Analytics']
    },
    {
        id: 'process-automation',
        icon: '🔄',
        titleId: 'processAutomation',
        descriptionEn: 'Automate repetitive tasks to save time',
        benefits: ['80% Time Saved', 'Error Free', 'Scalable']
    },
    {
        id: 'pwa-development',
        icon: '⚡',
        titleId: 'pwaDevelopment',
        descriptionEn: 'Progressive Web App for native-like experience',
        benefits: ['Offline Access', 'App-like Feel', 'No Install']
    }
];
