/** @type {import('@docusaurus/types').DocusaurusConfig} */
const navbar = require('./config/navbar');
const footer = require('./config/footer');

const config = {
  title: '飞冰',
  tagline: '基于 React 的研发解决方案',
  url: 'https://ice.work',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'alibaba',
  projectName: 'ice',
  themeConfig: {
    announcementBar: {
      id: 'announcementBar-2',
      content: 'icejs 2.0 版本已发布，支持 Webpack 5 和 Vite 两种构建模式，点击 <a href="/docs/guide/upgrade">快速升级</a>',
      isCloseable: true,
    },
    navbar,
    footer,
    algolia: {
      apiKey: '01f284e7e1c13eac3dc14beb6d8b153d',
      indexName: 'ice',
    },
    gtag: {
      trackingID: 'G-QZ0FEKY38G',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./config/sidebars.js'),
          editUrl:
            'https://github.com/ice-lab/site/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve("./plugins/redirect.js"),
  ]
};

if (process.env.USE_LOCAL_SEARCH) {
  // 内部站点无法使用 algolia
  delete config.themeConfig.algolia;
  config.plugins.push([
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
      language: ["en", "zh"],
    },
  ]);
}

module.exports = config;