import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Cortexium',
  tagline: 'Build, govern, and operate autonomous agents with secure runtimes, policy enforcement, and execution control.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cortexium.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cortexiumlabs', // Usually your GitHub org/user name.
  projectName: 'platform', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'product',              // Product docs plugin instance
          path: 'product/docs',            // Folder: /product/docs/
          routeBasePath: 'docs',      // Accessible at /docs on the main domain
          sidebarPath: require.resolve('./product/sidebars.ts'),
        },
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
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vectra',
        path: 'vectra/docs',
        routeBasePath: 'vectra',
        sidebarPath: require.resolve('./vectra/sidebars.ts'),
      },
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Cortexium',
      logo: {
        alt: 'Cortexium Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          label: 'Products',
          position: 'left',
          items: [
            {
              label: 'Vectra',
              to: '/vectra/intro'
            }
          ],
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          to: '/about', 
          label: 'About', 
          position: 'left'
        }
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'Cortexium Logo',
        src: 'img/horizontal_logo.jpg',
        href: '/',
        width: 196,
      },
      copyright: `Copyright © ${new Date().getFullYear()} - <a href="https://cortexiumlabs.com" target="_blank">Cortexium Labs</a> - All rights reserved.<br />
      Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>. Hosted at <a href="https://pages.github.com/" target="_blank">Github Pages</a>.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
