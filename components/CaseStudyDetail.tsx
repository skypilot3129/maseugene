'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PortfolioItem, getRelatedProjects } from '@/data/portfolio';
import { useLanguage } from './LanguageProvider';
import styles from './CaseStudyDetail.module.css';

interface CaseStudyDetailProps {
    project: PortfolioItem;
}

export default function CaseStudyDetail({ project }: CaseStudyDetailProps) {
    const { t } = useLanguage();
    const relatedProjects = getRelatedProjects(project.id, 3);

    return (
        <div className={styles.container}>
            {/* Navigation */}
            <nav className={styles.breadcrumb}>
                <Link href="/#archive" className={styles.backButton}>
                    ← {t.caseStudy.backButton}
                </Link>
            </nav>

            {/* Hero Section */}
            <motion.div
                className={styles.hero}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className={styles.category}>{project.category.toUpperCase()}</span>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.client}>{project.client}</p>

                {/* Tags */}
                <div className={styles.tags}>
                    {project.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </motion.div>

            {/* Project Info Grid */}
            <motion.div
                className={styles.infoGrid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className={styles.infoCard}>
                    <div className={styles.infoLabel}>{t.caseStudy.timeline}</div>
                    <div className={styles.infoValue}>{project.timeline}</div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoLabel}>{t.caseStudy.team}</div>
                    <div className={styles.infoValue}>{project.team || '1 Developer'}</div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoLabel}>{t.caseStudy.category}</div>
                    <div className={styles.infoValue}>{project.category.toUpperCase()}</div>
                </div>
            </motion.div>

            {/* Hero Image Section */}
            {project.image && (
                <motion.div
                    className={styles.heroImageSection}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className={styles.heroImageContainer}>
                        <div className={styles.heroImageWrapper}>
                            <img
                                src={project.image}
                                alt={`${project.title} interface`}
                                className={styles.heroImage}
                            />
                            <div className={styles.heroImageOverlay} />
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Visit Website Button */}
            {project.link && (
                <motion.div
                    className={styles.visitWebsiteSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.visitWebsiteButton}
                    >
                        <span>{t.caseStudy.visitWebsite}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                </motion.div>
            )}

            {/* Main Content */}
            <div className={styles.content}>
                {/* Overview */}
                <motion.section
                    className={styles.section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2>{t.caseStudy.overview}</h2>
                    <p className={styles.overview}>{project.overview}</p>
                </motion.section>

                {/* Challenge & Solution Grid */}
                <div className={styles.grid}>
                    <motion.section
                        className={styles.card}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3>🎯 {t.caseStudy.challenge}</h3>
                        <p>{project.challenge}</p>
                    </motion.section>

                    <motion.section
                        className={styles.card}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3>💡 {t.caseStudy.solution}</h3>
                        <p>{project.solution}</p>
                    </motion.section>
                </div>

                {/* Key Features */}
                <motion.section
                    className={styles.section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h2>{t.caseStudy.features}</h2>
                    <div className={styles.featuresGrid}>
                        {project.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.featureCard}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                            >
                                <span className={styles.featureIcon}>✓</span>
                                <p>{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Technical Stack */}
                <motion.section
                    className={styles.section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2>{t.caseStudy.techStack}</h2>
                    <div className={styles.techStack}>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className={styles.techBadge}>{tech}</span>
                        ))}
                    </div>
                </motion.section>

                {/* Development Process */}
                <motion.section
                    className={styles.section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <h2>{t.caseStudy.process}</h2>
                    <div className={styles.processTimeline}>
                        {project.process.map((phase, index) => (
                            <motion.div
                                key={index}
                                className={styles.processPhase}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            >
                                <div className={styles.phaseNumber}>{index + 1}</div>
                                <div className={styles.phaseContent}>
                                    <h4>{phase.phase}</h4>
                                    <p>{phase.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Metrics */}
                <motion.section
                    className={`${styles.section} ${styles.metricsSection}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h2>{t.caseStudy.impact}</h2>
                    <div className={styles.metricsGrid}>
                        <div className={styles.metric}>
                            <div className={`${styles.metricValue} gold-shimmer`}>
                                {project.metrics.timeSaved}
                            </div>
                            <div className={styles.metricLabel}>{t.portfolio.timeSaved}</div>
                        </div>
                        <div className={styles.metric}>
                            <div className={`${styles.metricValue} gold-shimmer`}>
                                {project.metrics.efficiencyGain}
                            </div>
                            <div className={styles.metricLabel}>{t.portfolio.efficiency}</div>
                        </div>
                    </div>
                </motion.section>

                {/* Testimonial */}
                {project.testimonial && (
                    <motion.section
                        className={styles.testimonialSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <h2>{t.caseStudy.testimonialTitle}</h2>
                        <blockquote className={styles.testimonial}>
                            "{project.testimonial}"
                        </blockquote>
                        <p className={styles.testimonialAuthor}>— {project.client}</p>
                    </motion.section>
                )}

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <motion.section
                        className={styles.section}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <h2>{t.caseStudy.related}</h2>
                        <div className={styles.relatedGrid}>
                            {relatedProjects.map((relatedProject, index) => (
                                <Link
                                    key={relatedProject.id}
                                    href={`/projects/${relatedProject.id}`}
                                    className={styles.relatedCard}
                                >
                                    <span className={styles.relatedCategory}>
                                        {relatedProject.category.toUpperCase()}
                                    </span>
                                    <h4>{relatedProject.title}</h4>
                                    <p>{relatedProject.client}</p>
                                    <div className={styles.relatedTags}>
                                        {relatedProject.tags.slice(0, 3).map((tag, idx) => (
                                            <span key={idx} className={styles.relatedTag}>{tag}</span>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* CTA */}
                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                >
                    <h2>{t.caseStudy.ctaTitle}</h2>
                    <p>{t.caseStudy.ctaSubtitle}</p>
                    <Link href="/#contact" className="btn btn-primary">
                        {t.caseStudy.ctaButton}
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
