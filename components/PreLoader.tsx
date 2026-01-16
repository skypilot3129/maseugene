'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PreLoader.module.css';

export default function PreLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const duration = 2000; // 2 seconds
        const interval = 50;
        const steps = duration / interval;
        const increment = 100 / steps;

        let currentProgress = 0;
        const timer = setInterval(() => {
            currentProgress += increment;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(timer);
                setTimeout(() => setIsLoading(false), 500);
            }
            setProgress(currentProgress);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className={styles.preloader}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.content}>
                        {/* Animated Logo */}
                        <motion.div
                            className={styles.logoContainer}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        >
                            <motion.div
                                className={styles.logo}
                                animate={{
                                    rotateY: [0, 360],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                E
                            </motion.div>
                        </motion.div>

                        {/* Brand Name */}
                        <motion.div
                            className={styles.brandContainer}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <h1 className={styles.brandName}>Eugene</h1>
                            <p className={styles.brandTagline}>PWA Development Specialist</p>
                        </motion.div>

                        {/* Progress Bar */}
                        <motion.div
                            className={styles.progressContainer}
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            <div className={styles.progressBar}>
                                <motion.div
                                    className={styles.progressFill}
                                    style={{ width: `${progress}%` }}
                                    transition={{ duration: 0.05 }}
                                />
                            </div>
                            <div className={styles.progressText}>
                                {Math.round(progress)}%
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className={styles.decorativeLines}>
                            <motion.div
                                className={styles.line}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            />
                            <motion.div
                                className={styles.line}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            />
                        </div>
                    </div>

                    {/* Ambient Background Effect */}
                    <div className={styles.ambient}>
                        <motion.div
                            className={styles.ambientCircle}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
