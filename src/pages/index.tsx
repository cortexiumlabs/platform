import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Cortexium.dev">
      <main className={styles.wrapper}>
        
        <div className={styles.card}>
        <img
            src="/img/logo.jpg" // put your logo here
            alt="Cortexium"
            className={styles.logo}
          />

          <h1 className={styles.title}>Cortexium.dev</h1>

          <p className={styles.note}>
            {siteConfig.tagline}
          </p>

          <a
            className={styles.primaryLink}
            href="https://docs.cortexium.dev"
          >
            → Go to Documentation
          </a>
        </div>

      </main>
    </Layout>
  );
}