'use client';

import { motion } from 'framer-motion';
import MagneticElement from './MagneticElement';
import { useLanguage } from './LanguageProvider';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            {/* Background Image */}
            <div className={styles.backgroundImage}>
                <img
                    src="/workspace.jpg"
                    alt="Workspace"
                    className={styles.workspaceImage}
                />
                <div className={styles.overlay} />
            </div>

            {/* Animated Particles */}
            <div className={styles.particles}>
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={styles.particle}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            y: [0, -100],
                            x: [0, (i % 2 === 0 ? 20 : -20)],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                        style={{
                            left: `${5 + (i * 4.5)}%`,
                            bottom: '10%',
                        }}
                    />
                ))}
            </div>

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Badge */}
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <span className={styles.badgeDot}></span>
                        <span>{t.hero.caption}</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className={styles.headline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {t.hero.headline1}
                        <br />
                        <span className={styles.highlight}>{t.hero.headline2}</span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        className={styles.subheadline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {t.hero.subheadline}
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        className={styles.statsRow}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>15+</div>
                            <div className={styles.statLabel}>Clients</div>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>85%</div>
                            <div className={styles.statLabel}>Efficiency</div>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>⭐ 5.0</div>
                            <div className={styles.statLabel}>Rating</div>
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        className={styles.ctaWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <MagneticElement strength={0.3} maxDistance={100}>
                            <a href="#contact" className={styles.primaryCta}>
                                <span>{t.hero.cta}</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </MagneticElement>

                        <a href="#archive" className={styles.secondaryCta}>
                            Lihat Portfolio
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollDown}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </motion.div>
                <span>Scroll</span>
            </motion.div>
        </section>
    );
}
