export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar?: string;
    projectType?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 'cahaya-cargo',
        name: 'Bapak Hermawan',
        role: 'Owner',
        company: 'Cahaya Cargo Express',
        content: 'Sekarang saya bisa pantau bisnis dari mana saja. Report otomatis, tidak perlu hitung manual lagi. Sistem ini benar-benar game changer untuk bisnis saya!',
        rating: 5,
        projectType: 'C2-MS - Cargo Management System'
    },
    {
        id: 'toko-berkah',
        name: 'Ibu Sarah',
        role: 'Pemilik Toko',
        company: 'Toko Berkah',
        content: 'Stock opname yang dulu 2 hari, sekarang cuma 2 jam. Luar biasa! Saya lebih fokus ke customer sekarang, bukan ngurusin administrasi.',
        rating: 5,
        projectType: 'Inventory & POS System'
    },
    {
        id: 'pt-maju-jaya',
        name: 'Pak Andi',
        role: 'HR Manager',
        company: 'PT Maju Jaya',
        content: 'Absensi karyawan jadi akurat, tidak ada lagi manipulasi. Rekap gaji yang dulu 3 hari sekarang otomatis. Sangat membantu sekali!',
        rating: 5,
        projectType: 'Attendance Management System'
    },
    {
        id: 'warung-nusantara',
        name: 'Mas Budi',
        role: 'Owner',
        company: 'Warung Nusantara',
        content: 'Pelanggan senang dengan kecepatan layanan, saya senang dengan akurasi pencatatan. Win-win solution! ROI tercapai dalam 4 bulan.',
        rating: 5,
        projectType: 'Restaurant POS System'
    },
    {
        id: 'toko-sejahtera',
        name: 'Ibu Rina',
        role: 'Owner',
        company: 'Toko Sejahtera',
        content: 'Aplikasinya mudah dipakai, bahkan kasir saya yang gaptek langsung paham. Training cuma 1 jam sudah bisa jalan!',
        rating: 5,
        projectType: 'Smart Inventory System'
    }
];
