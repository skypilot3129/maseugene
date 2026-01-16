'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import styles from './MobileMenu.module.css';

export default function MobileMenu() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const menuItems = [
        { href: '#philosophy', label: t.nav.philosophy },
        { href: '#skills', label: t.nav.skills },
        { href: '#experience', label: t.nav.experience },
        { href: '#archive', label: t.nav.portfolio },
        { href: '#calculator', label: t.nav.calculator },
        { href: '#contact', label: t.nav.contact },
    ];

    return (
        <>
            {/* Hamburger Button */}
            <button
                className={`${styles.hamburger} ${isOpen ? styles.isOpen : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className={styles.backdrop}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={closeMenu}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            className={styles.menu}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            {/* Menu Header */}
                            <div className={styles.menuHeader}>
                                <div className={styles.logo}>
                                    <span className={styles.logoMain}>Eugene</span>
                                    <span className={styles.logoSub}>PWA Developer</span>
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <nav className={styles.menuNav}>
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={styles.menuLink}
                                            onClick={closeMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Menu Footer */}
                            <div className={styles.menuFooter}>
                                <div className={styles.toggleContainer}>
                                    <ThemeToggle />
                                    <LanguageToggle />
                                </div>
                                <Link href="#contact" className={`btn btn-primary ${styles.ctaButton}`} onClick={closeMenu}>
                                    {t.nav.cta}
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
