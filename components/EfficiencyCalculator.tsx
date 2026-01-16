'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import MagneticElement from './MagneticElement';
import { useLanguage } from './LanguageProvider';
import styles from './EfficiencyCalculator.module.css';

export default function EfficiencyCalculator() {
    const { t } = useLanguage();
    const [employees, setEmployees] = useState<number>(5);
    const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
    const [hourlyValue, setHourlyValue] = useState<number>(50000);
    const [showResults, setShowResults] = useState(false);

    // Calculations - assuming 80% efficiency gain
    const efficiencyGain = 0.8;
    const timeSavedPerWeek = hoursPerWeek * efficiencyGain;
    const timeSavedPerMonth = timeSavedPerWeek * 4;
    const moneySavedPerMonth = timeSavedPerMonth * hourlyValue * employees;
    const moneySavedPerYear = moneySavedPerMonth * 12;

    const handleCalculate = () => {
        setShowResults(true);
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <section className={`section ${styles.calculator}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="caption">{t.calculator.caption}</p>
                    <h2>
                        {t.calculator.title1}
                        <br />
                        <span className="gold-shimmer">{t.calculator.title2}</span>
                    </h2>
                    <p className="subtitle" style={{ marginTop: 'var(--spacing-md)', maxWidth: '600px' }}>
                        {t.calculator.subtitle}
                    </p>
                </motion.div>

                <div className={styles.calculatorGrid}>
                    {/* Input Form */}
                    <motion.div
                        className={styles.inputSection}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.inputGroup}>
                            <label htmlFor="employees">{t.calculator.employees}</label>
                            <input
                                id="employees"
                                type="number"
                                value={employees}
                                onChange={(e) => setEmployees(Number(e.target.value))}
                                min="1"
                                max="100"
                                className={styles.input}
                            />
                            <div className={styles.inputHint}>{t.calculator.employeesHint}</div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="hours">{t.calculator.hoursPerWeek}</label>
                            <input
                                id="hours"
                                type="number"
                                value={hoursPerWeek}
                                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                min="1"
                                max="168"
                                className={styles.input}
                            />
                            <div className={styles.inputHint}>{t.calculator.hoursHint}</div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="hourlyValue">{t.calculator.hourlyValue}</label>
                            <input
                                id="hourlyValue"
                                type="number"
                                value={hourlyValue}
                                onChange={(e) => setHourlyValue(Number(e.target.value))}
                                min="0"
                                step="10000"
                                className={styles.input}
                            />
                            <div className={styles.inputHint}>{t.calculator.valueHint}</div>
                        </div>

                        <MagneticElement strength={0.3}>
                            <button onClick={handleCalculate} className="btn btn-primary" style={{ width: '100%' }}>
                                {t.calculator.calculate}
                            </button>
                        </MagneticElement>
                    </motion.div>

                    {/* Results Section */}
                    <motion.div
                        className={styles.resultsSection}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {showResults ? (
                            <motion.div
                                className={styles.results}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className={styles.resultsTitle}>{t.calculator.resultsTitle}</h3>

                                <div className={styles.resultCard}>
                                    <div className={styles.resultLabel}>{t.calculator.timeSavedWeek}</div>
                                    <div className={`${styles.resultValue} gold-shimmer`}>
                                        {timeSavedPerWeek.toFixed(1)} {t.calculator.hours}
                                    </div>
                                </div>

                                <div className={styles.resultCard}>
                                    <div className={styles.resultLabel}>{t.calculator.timeSavedMonth}</div>
                                    <div className={`${styles.resultValue} gold-shimmer`}>
                                        {timeSavedPerMonth.toFixed(0)} {t.calculator.hours}
                                    </div>
                                </div>

                                <div className={styles.resultCard + ' ' + styles.highlighted}>
                                    <div className={styles.resultLabel}>{t.calculator.moneySavedMonth}</div>
                                    <div className={`${styles.resultValue} gold-shimmer`}>
                                        {formatCurrency(moneySavedPerMonth)}
                                    </div>
                                </div>

                                <div className={styles.resultCard + ' ' + styles.highlighted}>
                                    <div className={styles.resultLabel}>{t.calculator.moneySavedYear}</div>
                                    <div className={`${styles.resultValue} gold-shimmer`} style={{ fontSize: '2.5rem' }}>
                                        {formatCurrency(moneySavedPerYear)}
                                    </div>
                                </div>

                                <p className={styles.disclaimer}>
                                    {t.calculator.disclaimer}
                                </p>
                            </motion.div>
                        ) : (
                            <div className={styles.placeholder}>
                                <div className={styles.placeholderIcon}>📊</div>
                                <p>{t.calculator.placeholder}</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
