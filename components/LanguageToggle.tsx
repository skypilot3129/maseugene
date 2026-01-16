'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.toggle}>
            <button
                className={`${styles.langButton} ${language === 'id' ? styles.active : ''}`}
                onClick={() => setLanguage('id')}
                aria-label="Switch to Indonesian"
            >
                ID
            </button>
            <button
                className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
                onClick={() => setLanguage('en')}
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    );
}
