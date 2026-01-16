'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import MagneticElement from './MagneticElement';
import styles from './Navigation.module.css';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import MobileMenu from './MobileMenu';
import { useLanguage } from './LanguageProvider';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useLanguage();
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ['rgba(253, 252, 248, 0)', 'rgba(253, 252, 248, 0.95)']
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#philosophy', label: t.nav.philosophy },
        { href: '#skills', label: t.nav.skills },
        { href: '#experience', label: t.nav.experience },
        { href: '#archive', label: t.nav.portfolio },
        { href: '#calculator', label: t.nav.calculator },
        { href: '#contact', label: t.nav.contact },
    ];

    return (
        <motion.nav
            className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
            style={{ backgroundColor }}
        >
            <div className={styles.navContainer}>
                {/* Logo */}
                <motion.a
                    href="#"
                    className={styles.logo}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.logoMain}>Eugene's</span>
                    <span className={styles.logoSub}>Atelier</span>
                </motion.a>

                {/* Desktop Navigation */}
                <motion.div
                    className={styles.navLinks}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {navLinks.map((link, index) => (
                        <MagneticElement key={link.href} strength={0.2} maxDistance={50}>
                            <motion.a
                                href={link.href}
                                className={styles.navLink}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            >
                                {link.label}
                            </motion.a>
                        </MagneticElement>
                    ))}
                </motion.div>

                {/* Navigation Actions */}
                <motion.div
                    className={styles.navActions}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <LanguageToggle />
                    <ThemeToggle />
                    <MagneticElement strength={0.3} maxDistance={80}>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
                            {t.nav.letsTalk}
                        </a>
                    </MagneticElement>
                </motion.div>

                {/* Mobile Menu */}
                <MobileMenu />
            </div>

            {/* Gold accent line */}
            {isScrolled && (
                <motion.div
                    className={styles.accentLine}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                />
            )}
        </motion.nav>
    );
}
