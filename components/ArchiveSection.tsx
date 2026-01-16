'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { portfolioItems } from '@/data/portfolio';
import { useLanguage } from './LanguageProvider';
import styles from './ArchiveSection.module.css';

export default function ArchiveSection() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeFilter, setActiveFilter] = useState<'all' | 'pwa' | 'web' | 'mobile'>('all');
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const filteredProjects = activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66%']);

    // Check scroll position
    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    // Scroll functions
    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
            setTimeout(checkScroll, 300);
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <section ref={containerRef} className={`section ${styles.archive}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="caption">{t.portfolio.caption}</p>
                    <h2>
                        {t.portfolio.title1}
                        <br />
                        <span className="gold-shimmer">{t.portfolio.title2}</span>
                    </h2>
                    <div className="divider divider-wide mt-md" />

                    {/* Filter Buttons */}
                    <div className={styles.filterContainer}>
                        {[
                            { key: 'all', label: t.portfolio.filters.all },
                            { key: 'pwa', label: t.portfolio.filters.pwa },
                            { key: 'web', label: t.portfolio.filters.web },
                            { key: 'mobile', label: t.portfolio.filters.mobile },
                        ].map((filter) => (
                            <motion.button
                                key={filter.key}
                                className={`${styles.filterButton} ${activeFilter === filter.key ? styles.active : ''}`}
                                onClick={() => setActiveFilter(filter.key as typeof activeFilter)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {filter.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className={styles.scrollWrapper}>
                {/* Left Arrow */}
                {canScrollLeft && (
                    <button
                        className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
                        onClick={handleScrollLeft}
                        aria-label="Scroll left"
                    >
                        ←
                    </button>
                )}

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
                        onClick={handleScrollRight}
                        aria-label="Scroll right"
                    >
                        →
                    </button>
                )}

                <div
                    className={styles.scrollContainer}
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                >
                    <motion.div className={styles.projectsWrapper}>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className={styles.projectCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                layout
                            >
                                {/* Project Image with Curtain Reveal */}
                                <div className={styles.imageWrapper}>
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={styles.projectImage}
                                        />
                                    ) : (
                                        <div className={styles.imagePlaceholder}>
                                            <div className={styles.projectIcon}>📱</div>
                                            <p className={styles.projectType}>PWA Application</p>
                                        </div>
                                    )}
                                    <motion.div
                                        className={styles.curtain}
                                        initial={{ scaleX: 1 }}
                                        whileInView={{ scaleX: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                                    />
                                </div>

                                {/* Project Info */}
                                <div className={styles.projectInfo}>
                                    <p className={styles.client}>{project.client}</p>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>

                                    {/* Tags */}
                                    <div className={styles.tags}>
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>

                                    {/* Metrics */}
                                    <div className={styles.metrics}>
                                        <div className={styles.metric}>
                                            <div className="gold-shimmer" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
                                                {project.metrics.timeSaved}
                                            </div>
                                            <p className={styles.metricLabel}>{t.portfolio.timeSaved}</p>
                                        </div>
                                        <div className={styles.metric}>
                                            <div className="gold-shimmer" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
                                                {project.metrics.efficiencyGain}
                                            </div>
                                            <p className={styles.metricLabel}>{t.portfolio.efficiency}</p>
                                        </div>
                                    </div>

                                    {/* Challenge & Solution */}
                                    <div className={styles.details}>
                                        <div>
                                            <h5>{t.portfolio.challenge}</h5>
                                            <p>{project.challenge}</p>
                                        </div>
                                        <div>
                                            <h5>{t.portfolio.solution}</h5>
                                            <p>{project.solution}</p>
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    {project.testimonial && (
                                        <blockquote className={styles.testimonial}>
                                            "{project.testimonial}"
                                        </blockquote>
                                    )}

                                    {/* View Case Study Button */}
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className={styles.caseStudyButton}
                                    >
                                        {t.portfolio.viewCase} →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}

                        {/* End Spacer */}
                        <div className={styles.endSpacer} />
                    </motion.div>
                </div>
            </div>

            <div className="gold-line" />
        </section>
    );
}
