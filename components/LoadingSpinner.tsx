'use client';

import { motion } from 'framer-motion';
import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    text?: string;
}

export default function LoadingSpinner({ size = 'medium', text }: LoadingSpinnerProps) {
    return (
        <div className={`${styles.container} ${styles[size]}`}>
            <motion.div
                className={styles.spinner}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            >
                <div className={styles.circle} />
            </motion.div>
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
}
