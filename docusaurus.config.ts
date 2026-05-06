import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Supported build targets – add more as needed
const BUILD_TARGET = (process.env.BUILD_TARGET ?? 'main') as
  'main' | 'docs' | 'demo' | 'app';

// Base configuration shared by all builds
const baseConfig: Config = {
  title: 'Cortexium',
  tagline: 'Build, govern, and operate autonomous agents with secure runtimes, policy enforcement, and execution control.',
  favicon: 'img/favicon.ico',
  url: 'https://cortexium.dev',
  baseUrl: '/',
  organizationName: 'cortexiumlabs',
  projectName: 'platform',
  onBrokenLinks: 'throw',
  i18n: { 
    defaultLocale: 'en', 
    locales: ['en'] 
  },
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: 'Cortexium',
      logo: { alt: 'Cortexium Logo', src: 'img/logo.jpg' },
      items: [], // Will be filled per build target
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'Cortexium Logo',
        src: 'img/horizontal_logo.jpg',
        width: 196,
        // href set conditionally below
      },
      copyright: `Copyright © ${new Date().getFullYear()} - <a href="https://cortexiumlabs.com" target="_blank">Cortexium Labs</a> - All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

// ---------- Per‑target overrides ----------
switch (BUILD_TARGET) {
  // ============================
  // Main site (cortexium.dev)
  // ============================
  case 'main': {
    baseConfig.url = 'https://cortexium.dev';
  
    baseConfig.presets = [
      [
        'classic',
        {
          docs: false,
          blog: false,
          theme: { customCss: './src/css/custom.css' },
        } satisfies Preset.Options,
      ],
    ];
  
    baseConfig.plugins = [];
  
    baseConfig.themeConfig!.navbar = {
      items: [
        { href: 'https://cortexiumlabs.com', label: 'Home', position: 'left' },
        { href: 'https://docs.cortexium.dev', label: 'Documentation', position: 'left' },
        { href: 'https://cortexiumlabs.com/blog', label: 'Blog', position: 'left' },
        { href: 'https://cortexiumlabs.com/about', label: 'About', position: 'left' },
      ],
    };
  
    if (baseConfig.themeConfig?.footer?.logo) {
      baseConfig.themeConfig.footer.logo.href = '/';
      baseConfig.themeConfig.footer.logo.width = 196;
    }
  
    break;
  }

  // ============================
  // DOCS site (docs.cortexium.dev)
  // ============================
  case 'docs': {
    baseConfig.url = 'https://docs.cortexium.dev';
    baseConfig.presets = [
      [
        'classic',
        {
          docs: {
            id: 'product',
            path: 'product/docs',
            routeBasePath: '/',         // Product docs at root
            sidebarPath: require.resolve('./product/sidebars.ts'),
          },
          blog: false,
          theme: { customCss: './src/css/custom.css' },
        } satisfies Preset.Options,
      ],
    ];
    baseConfig.plugins = [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'vectra',
          path: 'vectra/docs',
          routeBasePath: 'vectra',
          sidebarPath: require.resolve('./vectra/sidebars.ts'),
        },
      ],
    ];
    baseConfig.themeConfig!.navbar = {
      items: [
        { 
          href: 'https://cortexiumlabs.com', 
          label: 'Home', 
          position: 'left' 
        },
        {
          type: 'docSidebar',
          docsPluginId: 'vectra',
          sidebarId: 'vectraSidebar',
          label: 'Vectra',
          position: 'left',
        }
      ]
    };

    if (baseConfig.themeConfig?.footer?.logo) {
      baseConfig.themeConfig.footer.logo.href = '/';
      baseConfig.themeConfig.footer.logo.width = 196;
    }
    
    break;
  }
}

export default baseConfig;