// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Exodia wiki 🇵🇸 Free Palestine',
  tagline: '🇵🇸 Free Palestine',
  favicon: 'Logos/with-bg/exodia-cyan-black-bg.png',

  // Set the production url of your site here
  url: 'https://exodia-os.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wiki',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Exodia-OS', // Usually your GitHub org/user name.
  projectName: 'Exodia OS wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'news',
        routeBasePath: 'news',
        path: './news',
        showReadingTime: false,
        blogTitle: 'News',
        blogSidebarTitle: 'Latest News',
        blogSidebarCount: 15,
        editUrl: 'https://github.com/Exodia-OS/wiki/tree/master',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Exodia-OS/wiki/tree/master',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Exodia-OS/wiki/tree/master',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'Logos/with-bg/exodia-cyan-black-bg.png',
        navbar: {
          style: 'dark',
          logo: {
            alt: 'My Site Logo',
            src: 'Logos/with-bg/exodia-cyan-black-bg.png',
            href: '/',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Docs',
              className: 'navbar__text',
            },
            { to: '/blog', label: 'Tips', position: 'left', className: 'navbar__text' },
            { to: '/news', label: 'News', position: 'left', className: 'navbar__text' },
            {
              href: 'https://github.com/Exodia-OS/wiki',
              className: 'header-github-link',
              position: 'right',
            },
          ],
        },
        // announcementBar: {
        //   id: 'announcementBar', // Increment on change
        //   content: `Add your announcement text here`,
        //   backgroundColor: '#fafbfc',
        //   textColor: '#091e42',
        //   isCloseable: false,
        //   isCloseable: true,
        //   backgroundColor: '#04D3E4',
        //   textColor: '#000000',
        // },
        algolia: {
          themes: ['@docusaurus/theme-search-algolia'],
          appId: 'SJSCFND0L4',
          apiKey: '53c7014fae1952c4975c42631c12c348',
          indexName: 'exodia_wiki',
          contextualSearch: true,
          externalUrlRegex: 'external\\.com|domain\\.com',
          replaceSearchResultPathname: {
            from: '/docs/',
            to: '/',
          },
          searchParameters: {},
          searchPagePath: 'search',
        },
        footer: {
          style: 'dark',
          copyright: `Exodia OS is licensed under the GPL-3 License © ${new Date().getFullYear()} Exodia OS Development & Cyb3rTh1eveZ Team`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;
