'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from './LanguageProvider';
import styles from './PhilosophySection.module.css';

export default function PhilosophySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { t } = useLanguage();

    return (
        <section ref={ref} className={`section ${styles.philosophy}`}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left: Text Content */}
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="caption">{t.philosophy.caption}</p>
                        <h2 className={styles.title}>
                            {t.philosophy.title1}
                            <br />
                            <span className="gold-shimmer">{t.philosophy.title2}</span>
                        </h2>

                        <div className="divider divider-wide" style={{ margin: 'var(--spacing-md) 0' }} />

                        <p className={styles.philosophy_text}>
                            {t.philosophy.description1}
                        </p>

                        <p className={styles.philosophy_text}>
                            {t.philosophy.description2}
                        </p>

                        <blockquote className={styles.quote}>
                            {t.philosophy.quote}
                        </blockquote>
                    </motion.div>

                    {/* Right: Value Propositions */}
                    <motion.div
                        className={styles.values}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {t.philosophy.values.map((value, index) => (
                            <motion.div
                                key={index}
                                className={`card ${styles.valueCard}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            >
                                <div className={styles.valueNumber}>{String(index + 1).padStart(2, '0')}</div>
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="linen-texture" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        </section>
    );
}
