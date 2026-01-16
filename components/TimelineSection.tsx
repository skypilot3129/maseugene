'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { useLanguage } from './LanguageProvider';
import styles from './TimelineSection.module.css';
import { useState } from 'react';

export default function TimelineSection() {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const { t } = useLanguage();

    return (
        <section className={`section ${styles.timeline}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="caption">{t.experience.caption}</p>
                    <h2>
                        {t.experience.title1}
                        <br />
                        <span className="gold-shimmer">{t.experience.title2}</span>
                    </h2>
                    <div className="divider divider-wide mt-md" />
                </motion.div>

                <div className={styles.timelineContainer}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Timeline Node */}
                            <div className={styles.timelineNode}>
                                <motion.div
                                    className={styles.nodeDot}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                                />
                            </div>

                            {/* Experience Card */}
                            <motion.div
                                className={`${styles.experienceCard} ${expandedId === exp.id ? styles.expanded : ''}`}
                                whileHover={{ y: -5, boxShadow: 'var(--shadow-medium)' }}
                            >
                                <div className={styles.cardHeader}>
                                    <div>
                                        <span className={styles.typeBadge}>{
                                            exp.type === 'fulltime' ? t.experience.types.fulltime :
                                                exp.type === 'freelance' ? t.experience.types.freelance : t.experience.types.contract
                                        }</span>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <p className={styles.company}>{exp.company}</p>
                                    </div>
                                    <div className={styles.period}>{exp.period}</div>
                                </div>

                                <p className={styles.description}>{exp.description}</p>

                                {/* Expandable Content */}
                                <motion.div
                                    className={styles.expandableContent}
                                    initial={false}
                                    animate={{
                                        height: expandedId === exp.id ? 'auto' : 0,
                                        opacity: expandedId === exp.id ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={styles.achievements}>
                                        <h4>{t.experience.achievements}</h4>
                                        <ul>
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.technologies}>
                                        <h4>{t.experience.technologies}</h4>
                                        <div className={styles.techStack}>
                                            {exp.technologies.map((tech, i) => (
                                                <span key={i} className={styles.techBadge}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Expand Button */}
                                <button
                                    className={styles.expandButton}
                                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                                >
                                    {expandedId === exp.id ? t.experience.readLess : t.experience.readMore}
                                    <span className={styles.expandIcon}>
                                        {expandedId === exp.id ? '▲' : '▼'}
                                    </span>
                                </button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
