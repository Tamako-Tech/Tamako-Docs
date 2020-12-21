module.exports = {
  title: 'Tamako',
  tagline: 'Multipurpose Discord Bot',
  url: 'https://tamako.tech/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  scripts: [
  // String format.
  'https://docusaurus.io/script.js',
  // Object format.
  {
    src:
      'https://arc.io/widget.min.js#ynoq11ke',
    async: true,
  },
],
  favicon: 'img/logo.png',
  organizationName: 'BearTS', // Usually your GitHub org/user name.
  projectName: 'Tamako-Docs',
  themeConfig: {
   announcementBar: {
    id: 'support_us',
    content:
       'If you like Tamako, Vote her on <a target="_blank" href="https://top.gg/bot/721100913611112470">top.gg</a> | Invite  my Onnechan <a href="https://discord.com/oauth2/authorize?client_id=702074452317307061&scope=bot&permissions=1043721303">Mai</a>',
     backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
  },
    navbar: {
       hideOnScroll: true,
      title: 'Tamako - A discord bot',
      logo: {
        alt: 'Tamako',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/welcome',
          label: 'Docs',
          position: 'left',
        },
        {
            to: 'docs/api/chatapi',
            label: 'API',
            position: 'right',
          },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://discord.com/oauth2/authorize?client_id=721100913611112470&scope=bot&permissions=1043721303',
          label: 'Invite Now',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',

      copyright: `Copyright © ${new Date().getFullYear()} Tamako Bot, Made By Bear#3437 | Built with Discord.js`,
    },
  },
 plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {

        hashed: true,
      	indexDocs: true
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      },
    ],
  ],
};
