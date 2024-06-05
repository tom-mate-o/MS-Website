// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Miriam Sterl, Oceanographer',
  tagline: 'Miriam Sterl, Oceanograaf',
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
        metadatas: [
          {
            name: 'description',
            content:
              "My Name is Miriam Sterl. I'm a PhD student working at the Royal Netherlands Institute for Sea Research (NIOZ) and the Institute for Marine and Atmospheric research Utrecht (IMAU), supervised by Sjoerd Groeskamp and Michiel Baatsen. My research focuses on mesoscale eddies and turbulence and how they are influenced by a sloping seafloor. Before my PhD I completed a bachelor in Physics and Mathematics and a master in Climate Physics at Utrecht University. Apart from doing research, I enjoy outreach activities to teach a broad audience about oceanography, climate change and the experiences of being a researcher. Furthermore I find it very important to contribute to making the world of research as inclusive as possible.",
          },
          {
            name: 'keywords',
            content:
              'Miriam Sterl, Oceanographer, Dutch, Netherlands, Oceanography, PhD student, Royal Netherlands Institute for Sea Research, NIOZ, Institute for Marine and Atmospheric research Utrecht, IMAU, mesoscale eddies, turbulence, sloping seafloor, oceanography, climate change, outreach activities, inclusivity in research, Utrecht University, Physics, Mathematics, Climate Physics, researcher experiences',
          },
        ],
        items: [
          { to: '/about', label: 'About Me', position: 'left' },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Talks & Publications',
          // },
          { to: '/publications', label: 'Publications', position: 'left' },
          { to: '/outreach', label: 'Outreach', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          // { to: '/cv', label: 'CV', position: 'left' },
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
                label: 'About Me',
                to: '/about',
              },
              {
                label: 'Publications',
                to: '/publications',
              },
              {
                label: 'Outreach',
                to: '/outreach',
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
                label: 'Privacy',
                to: '/privacy',
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
