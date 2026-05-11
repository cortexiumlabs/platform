import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const products = [
  {
    id: 'vectra',
    name: 'Vectra',
    // 👇 Use a path relative to the static/ folder
    icon: '/img/vectra-logo.png',
    tagline: 'Intent-Aware Governance Gateway for Autonomous AI Agents',
    description:
      'Vectra is a powerful API gateway designed to manage and govern AI applications. It provides intent-aware routing, security, and monitoring for AI agents, ensuring that your applications run smoothly and securely.',
    features: ['Semantic Intent Analysis', 'Dynamic Policy Enforcement', 'Agent Governance', 'Human-in-the-Loop (HITL)'],
    link: '/products/vectra',
  },
];

function ProductCard({ name, icon, tagline, description, features, link }) {
  return (
    <div className={`${styles.card} card`}>
      <div className={styles.cardInner}>
        <div className={styles.iconWrapper}>
          {icon && <img src={icon} alt={`${name} icon`} className={styles.icon} />}
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.productName}>{name}</h3>
          <span className={styles.tagline}>{tagline}</span>
          <p className={styles.description}>{description}</p>
          {features && (
            <ul className={styles.features}>
              {features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {link && (
        <div className={styles.cardFooter}>
          <a href={link} className="button button--primary button--block">
            Explore {name}
          </a>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Layout title="Products" description="Building the future of AI infrastructure with secure, scalable, and developer-friendly tools">
      <header className={styles.hero}>
        <div className={styles.heroPattern} />
        <div className={styles.heroBlob} />

        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            Cortexium Labs <span className={styles.highlight}>Products</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Building the future of AI infrastructure with secure, scalable, and developer-friendly tools.
          </p>
        </div>

        <div className={styles.heroWave}>
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,60 C360,120 720,0 1440,60 L1440,120 L0,120 Z"
              fill="var(--ifm-background-color)"
            />
          </svg>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col col--6 margin-bottom--lg">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}