// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MIRIAM STERL, Oceaongrapher.',
  tagline: 'MIRIAM STERL, Oceaongrapher.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://miriamsterl.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
  },
  plugins: ['@docusaurus/plugin-sitemap'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: ['./src/dist/style.css'],
        },
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          feedOptions: {
            type: 'rss', // 'all', 'none', or 'rss'
            title: 'Miriam Sterl - News Blog',
            description: 'recent updates from Miriam Sterl',
            language: 'en',
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Miriam Sterl',
        logo: {
          alt: 'Miriam Sterl',
          src: 'img/logo.svg',
        },

        items: [
          { to: '/about', label: 'About Me', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Talks & Publications',
          },
          { to: '/blog', label: 'Blog', position: 'left' },

          { to: '/work', label: 'Work', position: 'left' },
          { to: '/cv', label: 'CV', position: 'left' },
          { to: '/contact', label: 'Contact', position: 'left' },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: ' ',
            items: [
              {
                label: 'Talks & Publications',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: ' ',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'RSS-Feed',
                to: 'https://miriamsterl.netlify.app/blog/rss.xml',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MiriamSterl',
              },
            ],
          },
          {
            title: ' ',
            items: [
              {
                label: 'Contact',
                to: '/contact',
              },
              {
                label: 'Imprint',
                to: '/imprint',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Miriam Sterl - Made with 💙 by <a href="https://tomkra.dev" target="_blank" style="white-space: nowrap;">Tom Kra</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
