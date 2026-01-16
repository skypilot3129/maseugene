'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';
import { useLanguage } from './LanguageProvider';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className={`section ${styles.testimonials}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="caption">{t.testimonials.caption}</p>
                    <h2>
                        {t.testimonials.title1}
                        <br />
                        <span className="gold-shimmer">{t.testimonials.title2}</span>
                    </h2>
                    <div className="divider divider-wide mt-md" />
                </motion.div>

                <div className={styles.carouselContainer}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className={styles.testimonialCard}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Stars Rating */}
                            <div className={styles.rating}>
                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                    <span key={i} className={styles.star}>★</span>
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className={styles.quote}>
                                "{currentTestimonial.content}"
                            </blockquote>

                            {/* Author Info */}
                            <div className={styles.author}>
                                <div className={styles.authorInfo}>
                                    <p className={styles.authorName}>{currentTestimonial.name}</p>
                                    <p className={styles.authorRole}>
                                        {currentTestimonial.role} • {currentTestimonial.company}
                                    </p>
                                    {currentTestimonial.projectType && (
                                        <p className={styles.projectType}>{currentTestimonial.projectType}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className={styles.navigation}>
                        <button
                            className={styles.navButton}
                            onClick={goToPrevious}
                            aria-label="Previous testimonial"
                        >
                            ←
                        </button>

                        {/* Dots */}
                        <div className={styles.dots}>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            className={styles.navButton}
                            onClick={goToNext}
                            aria-label="Next testimonial"
                        >
                            →
                        </button>
                    </div>

                    {/* Auto-play Toggle */}
                    <button
                        className={styles.autoPlayToggle}
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    >
                        {isAutoPlaying ? '⏸' : '▶'} {t.testimonials.autoPlay}
                    </button>
                </div>
            </div>
        </section>
    );
}
