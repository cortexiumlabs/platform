import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './ProductDetailsLayout.module.css';

interface Feature {
  title: string;
  description: string;
  icon?: string; // emoji or simple string icon
}

interface ProductDetailsLayoutProps {
  name: string;
  icon?: string;          // path to icon image
  tagline?: string;
  description: string;
  features?: Feature[];
  ctaLink?: string;
  ctaText?: string;
  documentationLink?: string;
}

const ProductDetailsLayout: React.FC<ProductDetailsLayoutProps> = ({
  name,
  icon,
  tagline,
  description,
  features = [],
  ctaLink,
  ctaText = 'Get started',
  documentationLink,
}) => {
  return (
    <Layout title={name} description={description}>
      {/* ── Hero (unchanged) ── */}
      <header className={styles.hero}>
        <div className={styles.heroPattern} />
        <div className={styles.heroBlob} />

        <div className={`container ${styles.heroContent}`}>
          {icon && (
            <img
              src={icon}
              alt={`${name} icon`}
              className={styles.heroIcon}
            />
          )}
          <h1 className={styles.heroTitle}>{name}</h1>
          {tagline && <span className={styles.tagline}>{tagline}</span>}
          <p className={styles.heroDescription}>{description}</p>

          {ctaLink && (
            <a
              href={ctaLink}
              className={`button button--primary button--lg margin-top--md ${styles.ctaButton}`}
            >
              {ctaText}
            </a>
          )}
        </div>
      </header>

      {/* ── Features ── */}
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <div className="row">
              {features.map((feature, idx) => (
                <div key={idx} className="col col--4 margin-bottom--lg">
                  {/* 👇 Added featureCard class */}
                  <div className={`card ${styles.featureCard}`}>
                    <div className="card__body">
                      {feature.icon && (
                        <div className={styles.featureIcon}>
                          <span className={styles.featureEmoji}>
                            {feature.icon}
                          </span>
                        </div>
                      )}
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                      <p className={styles.featureDescription}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional Docs link */}
            {documentationLink && (
              <div className="margin-top--lg text--center">
                <Link
                  to={documentationLink}
                  className="button button--outline button--primary"
                >
                  📘 Read the docs
                </Link>
              </div>
            )}

            {/* Back to products */}
            <div className="margin-top--md text--center">
              <Link to="/products" className={styles.backLink}>
                ← Back to all products
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProductDetailsLayout;
export type { Feature };