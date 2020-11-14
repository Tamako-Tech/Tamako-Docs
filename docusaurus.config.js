module.exports = {
  title: 'Tamako',
  tagline: 'Multipurpose Discord Bot',
  url: 'https://shipbot.gq/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.png',
  organizationName: 'Bear', // Usually your GitHub org/user name.
  projectName: 'Tamako', // Usually your repo name.
  themeConfig: {
   announcementBar: {
    id: 'support_us', // Any value that will identify this message.
    content:
       'If you like Tamako, Vote her on <a target="_blank" href="https://top.gg/bot/721100913611112470">top.gg</a> | Invite  my Onnechan <a href="https://discord.com/oauth2/authorize?client_id=702074452317307061&scope=bot&permissions=1043721303">Mai</a>',
     backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
  },
    navbar: {
       hideOnScroll: true,
      title: 'Tamkao - A discord bot',
      logo: {
        alt: 'Tamako',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/welcome',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
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
