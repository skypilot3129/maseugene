'use client';

import { motion } from 'framer-motion';
import { solutions } from '@/data/solutions';
import { useLanguage } from './LanguageProvider';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
    const { t } = useLanguage();

    return (
        <section className={`section ${styles.skills}`} id="solutions">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="caption">{t.skills.caption}</p>
                    <h2>
                        {t.skills.title1}
                        <br />
                        <span className="gold-shimmer">{t.skills.title2}</span>
                    </h2>
                </motion.div>

                {/* Solutions Grid */}
                <div className={styles.solutionsGrid}>
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            className={styles.solutionCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, boxShadow: 'var(--shadow-medium)' }}
                        >
                            <div className={styles.solutionIcon}>
                                <span className={styles.icon}>{solution.icon}</span>
                                <div className={styles.iconGlow} />
                            </div>

                            <h3 className={styles.solutionTitle}>
                                {(t.skills.solutions as any)[solution.titleId]}
                            </h3>

                            <p className={styles.solutionDescription}>
                                {(t.skills.solutions as any)[`${solution.titleId}Desc`]}
                            </p>

                            <ul className={styles.benefitsList}>
                                {solution.benefits.map((benefit, i) => (
                                    <li key={i} className={styles.benefitItem}>
                                        <span className={styles.checkIcon}>✓</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
