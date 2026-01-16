'use client';

import { motion } from 'framer-motion';
import { articles } from '@/data/articles';
import { useLanguage } from './LanguageProvider';
import styles from './ArticlesSection.module.css';

export default function ArticlesSection() {
    const { t } = useLanguage();
    const featuredArticles = articles.filter(article => article.featured).slice(0, 2);
    const recentArticles = articles.filter(article => !article.featured).slice(0, 2);

    return (
        <section className={`section ${styles.articles}`}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="caption">{t.articles.caption}</p>
                    <h2>
                        {t.articles.title1}
                        <br />
                        <span className="gold-shimmer">{t.articles.title2}</span>
                    </h2>
                    <p className="subtitle" style={{ marginTop: 'var(--spacing-md)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                        {t.articles.subtitle}
                    </p>
                </motion.div>

                {/* Featured Articles */}
                <div className={styles.featuredGrid}>
                    {featuredArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            className={styles.featuredCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={styles.cardContent}>
                                <span className={styles.category}>{article.category}</span>
                                <h3 className={styles.articleTitle}>{article.title}</h3>
                                <p className={styles.excerpt}>{article.excerpt}</p>

                                <div className={styles.meta}>
                                    <span className={styles.readTime}>📖 {article.readTime} min read</span>
                                    <span className={styles.date}>
                                        {new Date(article.publishDate).toLocaleDateString('id-ID', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>

                                <button className={styles.readMore}>
                                    {t.articles.readMore} →
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Recent Articles - Compact */}
                <div className={styles.recentGrid}>
                    {recentArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            className={styles.recentCard}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            whileHover={{ x: 5 }}
                        >
                            <span className={styles.categorySmall}>{article.category}</span>
                            <h4 className={styles.recentTitle}>{article.title}</h4>
                            <div className={styles.metaSmall}>
                                <span>{article.readTime} min</span>
                                <span>•</span>
                                <span>{new Date(article.publishDate).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' })}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
