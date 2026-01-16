'use client';

import { motion } from 'framer-motion';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import { CSSProperties, ReactNode } from 'react';

interface MagneticElementProps {
    children: ReactNode;
    strength?: number;
    maxDistance?: number;
    className?: string;
    style?: CSSProperties;
}

export default function MagneticElement({
    children,
    strength = 0.3,
    maxDistance = 100,
    className = '',
    style = {},
}: MagneticElementProps) {
    const { ref, position } = useMagneticEffect({ strength, maxDistance });

    return (
        <motion.div
            ref={ref as any}
            className={className}
            style={style}
            animate={{
                x: position.x,
                y: position.y,
            }}
            transition={{
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.1,
            }}
        >
            {children}
        </motion.div>
    );
}
