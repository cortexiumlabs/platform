import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HeroMain() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.kicker}>AI INFRASTRUCTURE PLATFORM</div>
          <Heading as="h1" className={styles.title}>
            Infrastructure for
            <br />
            <span>Autonomous AI Systems</span>
          </Heading>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
          <div className={styles.actions}>
            <Link
              to="https://docs.cortexium.dev/vectra/overview"
              className={clsx('button button--primary button--lg')}
            >
              Get Started with Vectra
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMain() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutInner}>
          <div className={styles.aboutLeft}>
            <h2>About Cortexium</h2>
            <p>
              Cortexium Labs builds infrastructure for autonomous AI systems.
              Our platform provides the runtime, governance, and control layers
              required to safely operate intelligent agents at scale.
            </p>
            <p>
              Instead of treating AI as isolated models, Cortexium focuses on
              full-system execution — enabling agents to run reliably,
              securely, and under defined policies.
            </p>
          </div>
          <div className={styles.aboutRight}>
            <div className={styles.aboutCard}>
              <div className={styles.aboutItem}>
                <span>Runtime</span>
                <p>Secure execution environment for agents</p>
              </div>
              <div className={styles.aboutItem}>
                <span>Governance</span>
                <p>Policy enforcement and intent validation</p>
              </div>
              <div className={styles.aboutItem}>
                <span>Control</span>
                <p>Execution visibility and lifecycle management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsMain() {
  const mainProducts = [
    {
      name: 'Vectra',
      description: 'Intent-aware governance and runtime control for autonomous AI agents.',
      link: 'https://docs.cortexium.dev/vectra/overview',
      status: 'core',
    },
  ];

  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.productsHeader}>
          <h2>Products</h2>
          <p>Modular infrastructure components for AI systems</p>
        </div>
        <div className={styles.grid}>
          {mainProducts.map((p, i) =>
            p.status === 'core' ? (
              <Link key={i} to={p.link} className={styles.cardPrimary}>
                <div className={styles.badge}>CORE</div>
                <div className={styles.cardTitle}>{p.name}</div>
                <div className={styles.cardDesc}>{p.description}</div>
                <div className={styles.cardFooter}>Explore →</div>
              </Link>
            ) : (
              <div key={i} className={styles.card}>
                <div className={styles.placeholderIcon}>+</div>
                <div className={styles.cardTitle}>{p.name}</div>
                <div className={styles.cardDesc}>{p.description}</div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();
  const buildTarget = siteConfig.customFields?.buildTarget as string;

  useEffect(() => {
    if (buildTarget === 'dev') {
      window.location.replace('https://docs.cortexium.dev');
    } else if (buildTarget === 'docs') {
      history.replace('/vectra/overview');
    }
  }, [buildTarget, history]);

  if (buildTarget === 'dev' || buildTarget === 'docs') {
    return null;
  }

  return (
    <Layout
      title="Cortexium Labs"
      description="Infrastructure for Autonomous AI Systems"
    >
      <HeroMain />
      <AboutMain />
      <ProductsMain />
    </Layout>
  );
}