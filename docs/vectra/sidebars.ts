import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  vectraSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting Started',
    },
    {
      type: 'doc',
      id: 'architecture',
      label: 'Architecture',
    },
    {
      type: 'doc',
      id: 'docker',
      label: 'Docker',
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsed: true,
      items: [
        'configuration/configuration-overview',
        'configuration/configuration-system',
        'configuration/configuration-security',
        'configuration/configuration-policy',
        'configuration/configuration-semantic',
        'configuration/configuration-hitl',
        'configuration/configuration-observability',
        'configuration/configuration-secret-management',
      ],
    },
    {
      type: 'doc',
      id: 'agents',
      label: 'Agents',
    },
    {
      type: 'category',
      label: 'Policies',
      collapsed: true,
      items: [
        'policies/policies-overview',
        'policies/policies-examples',
      ],
    },
    {
      type: 'doc',
      id: 'proxy',
      label: 'Proxying Requests',
    },
    {
      type: 'doc',
      id: 'decision-engine',
      label: 'Decision Engine',
    },
    {
      type: 'doc',
      id: 'risk-scoring',
      label: 'Risk Scoring',
    },
    {
      type: 'doc',
      id: 'hitl',
      label: 'Human-in-the-Loop',
    },
    {
      type: 'doc',
      id: 'persistence',
      label: 'Persistence',
    },
    {
      type: 'doc',
      id: 'api-reference',
      label: 'API Reference',
    },
    {
      type: 'doc',
      id: 'contributing',
      label: 'Contributing',
    }
  ],
};

export default sidebars;