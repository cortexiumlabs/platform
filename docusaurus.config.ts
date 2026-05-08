import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ======================================================
// Supported build targets
// ======================================================

const BUILD_TARGET = (process.env.BUILD_TARGET ?? 'main') as
  | 'main'
  | 'dev'
  | 'docs';

// ======================================================
// Per-target configuration
// ======================================================

const configs = {
  main: {
    url: 'https://cortexiumlabs.com',
    title: 'Cortexium Labs',
    tagline:
      'Infrastructure for Autonomous AI Systems.',
  },

  dev: {
    url: 'https://cortexium.dev',
    title: 'Cortexium Developer Portal',
    tagline:
      'SDKs, APIs, runtimes, tooling, and developer resources for Cortexium products.',
  },

  docs: {
    url: 'https://docs.cortexium.dev',
    title: 'Cortexium Docs',
    tagline:
      'Technical documentation for Cortexium products and platforms.',
  },
} as const;

const current = configs[BUILD_TARGET];

// ======================================================
// Base shared configuration
// ======================================================

const config: Config = {
  customFields: {
    buildTarget: BUILD_TARGET,
  },

  title: current.title,
  tagline: current.tagline,

  favicon: 'img/favicon.ico',

  url: current.url,
  baseUrl: '/',

  organizationName: 'cortexiumlabs',
  projectName: 'platform',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [],

  plugins: [],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Cortexium',
      logo: {
        alt: 'Cortexium Logo',
        src: 'img/logo.jpg',
        href: 'https://cortexiumlabs.com',
        target: '_self',
      },
      items: [],
    },

    footer: {
      style: 'light',

      logo: {
        alt: 'Cortexium Logo',
        src: 'img/horizontal_logo.jpg',
        href: 'https://cortexiumlabs.com',
        target: '_self',
        width: 196,
      },

      copyright: `Copyright © ${new Date().getFullYear()} - <a href="https://cortexiumlabs.com" target="_blank">Cortexium Labs</a> - All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

// ======================================================
// Build Target Overrides
// ======================================================

switch (BUILD_TARGET) {
  // ====================================================
  // MAIN SITE
  // cortexiumlabs.com
  // ====================================================

  case 'main': {
    config.presets = [
      [
        'classic',
        {
          docs: false,
          blog: {
            showReadingTime: true,
            showLastUpdateTime: true,
            routeBasePath: 'blog',
            blogSidebarCount: 10,
            postsPerPage: 6,
            blogTitle: 'Blog',
            blogDescription: 'Technical articles and tutorials'
          },
          theme: {
            customCss: './src/css/custom.css',
          },
        } satisfies Preset.Options,
      ],
    ];

    config.plugins = [
      [
        '@docusaurus/plugin-content-pages',
        {
          id: 'products',
          path: 'products',
          routeBasePath: '/products',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}']
        },
      ],
    ];

    config.themeConfig!.navbar.items = [
      {
        to: 'https://docs.cortexium.dev',
        label: 'Docs',
        position: 'left',
        target: '_self',
      },
      // {
      //   to: '/products', 
      //   label: 'Products', 
      //   position: 'left'
      // },
      {
        to: '/blog', 
        label: 'Blog', 
        position: 'left'
      },
      {
        href: 'https://github.com/cortexiumlabs',
        label: 'GitHub',
        position: 'right',
        target: '_self',
      }
    ];

    break;
  }

  // ====================================================
  // DEVELOPER PORTAL
  // cortexium.dev
  // ====================================================

  case 'dev': {
    config.presets = [
      [
        'classic',
        {
          docs: false,
          blog: false,
          theme: {
            customCss: './src/css/custom.css',
          },
        } satisfies Preset.Options,
      ],
    ];

    config.themeConfig!.navbar.items = [
      {
        to: 'https://docs.cortexium.dev',
        label: 'Docs',
        position: 'left',
        target: '_self',
      },
      {
        href: 'https://cortexiumlabs.com/blog',
        label: 'Blog',
        position: 'left',
        target: '_self',
      },
      {
        href: 'https://github.com/cortexiumlabs',
        label: 'GitHub',
        position: 'right',
      },
    ];

    break;
  }

  // ====================================================
  // DOCS
  // docs.cortexium.dev
  // ====================================================

  case 'docs': {
    config.presets = [
      [
        'classic',
        {
          docs: false,
          blog: false,
          theme: {
            customCss: './src/css/custom.css',
          },
        } satisfies Preset.Options,
      ],
    ];

    config.plugins = [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'vectra',
          path: 'docs/vectra',
          routeBasePath: 'vectra',
          sidebarPath: require.resolve(
            './docs/vectra/sidebars.ts',
          ),
        },
      ],
    ];

    config.themeConfig!.navbar.items = [
      {
        to: '/',
        label: 'Docs',
        position: 'left',
        target: '_self',
      },
      {
        href: 'https://cortexiumlabs.com/blog',
        label: 'Blog',
        position: 'left',
        target: '_self',
      },
      {
        href: 'https://github.com/cortexiumlabs',
        label: 'GitHub',
        position: 'right',
      },
    ];

    break;
  }
}

export default config;