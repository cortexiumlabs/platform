import React from 'react';
import ProductDetailsLayout from '@site/src/components/ProductDetailsLayout';
import type { Feature } from '@site/src/components/ProductDetailsLayout';

const vectraFeatures: Feature[] = [
  {
    title: 'Zero‑trust security',
    description:
      'Every request is authenticated and authorized, with continuous verification across all services.',
    icon: '🛡️',
  },
  {
    title: 'Automated threat detection',
    description:
      'Machine learning models detect anomalies and block attacks in real‑time, before they reach your stack.',
    icon: '🔍',
  },
  {
    title: 'Policy as code',
    description:
      'Define security and routing rules in code, version them, and deploy with your CI/CD pipeline.',
    icon: '📄',
  },
  {
    title: 'Global rate limiting',
    description:
      'Protect your APIs from abuse with distributed rate limiting, synced across all edge locations.',
    icon: '🌍',
  },
  {
    title: 'Secrets management',
    description:
      'Securely store, rotate, and monitor API keys, environment variables, and third‑party credentials.',
    icon: '🔐',
  },
  {
    title: 'Human‑in‑the‑loop controls',
    description:
      'Pause or modify agent actions based on risk scores, with real‑time notifications and overrides.',
    icon: '👥',
  }
];

export default function VectraPage(): JSX.Element {
  return (
    <ProductDetailsLayout
      name="Vectra"
      icon="/img/vectra-logo.png"
      tagline="Intent-Aware Governance Gateway for Autonomous AI Agents"
      description="Vectra is a powerful API gateway designed to manage and govern AI applications. It provides intent-aware routing, security, and monitoring for AI agents, ensuring that your applications run smoothly and securely."
      features={vectraFeatures}
      ctaLink="https://docs.cortexium.dev/vectra/getting-started"
      ctaText="Get started"
      documentationLink="https://docs.cortexium.dev/vectra"
    />
  );
}