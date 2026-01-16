'use client';

import { motion } from 'framer-motion';
import MagneticElement from './MagneticElement';
import { useLanguage } from './LanguageProvider';
import styles from './ContactSection.module.css';

export default function ContactSection() {
    const { t } = useLanguage();
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="caption">{t.contact.caption}</p>
                    <h2 className={styles.title}>
                        {t.contact.title1}
                        <br />
                        <span className="gold-shimmer">{t.contact.title2}</span>
                    </h2>

                    <p className="subtitle" style={{ marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                        {t.contact.subtitle}
                    </p>

                    <div className={styles.ctaButtons}>
                        <MagneticElement strength={0.4} maxDistance={120}>
                            <a href="mailto:eugene@atelier.com" className="btn btn-primary">
                                {t.contact.email}
                            </a>
                        </MagneticElement>

                        <MagneticElement strength={0.3} maxDistance={100}>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                {t.contact.whatsapp}
                            </a>
                        </MagneticElement>
                    </div>

                    {/* Install PWA Prompt */}
                    <motion.div
                        className={styles.installPrompt}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className={styles.installCard}>
                            <p className={styles.installTitle}>Simpan Arsip di Layar Utama</p>
                            <p className={styles.installDesc}>
                                Akses portfolio ini kapan saja dengan menginstall sebagai aplikasi PWA
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer */}
                <motion.footer
                    className={styles.footer}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <div className="divider" style={{ marginBottom: 'var(--spacing-lg)' }} />

                    <div className={styles.footerContent}>
                        <div className={styles.footerBrand}>
                            <h3 className={styles.brandName}>Eugene's Atelier</h3>
                            <p className={styles.brandTagline}>The Digital Artisan</p>
                        </div>

                        <div className={styles.footerLinks}>
                            <a href="#philosophy" className={styles.footerLink}>Philosophy</a>
                            <a href="#archive" className={styles.footerLink}>Portfolio</a>
                            <a href="#calculator" className={styles.footerLink}>Calculator</a>
                            <a href="#contact" className={styles.footerLink}>Contact</a>
                        </div>
                    </div>

                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Eugene's Atelier. Kerapihan adalah bentuk tertinggi dari kemewahan operasional.
                    </p>
                </motion.footer>
            </div>

            {/* Background Texture */}
            <div className="linen-texture" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        </section>
    );
}
