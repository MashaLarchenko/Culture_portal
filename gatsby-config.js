module.exports = {
  siteMetadata: {
    title: `Directors of Belarus`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, 
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uerfyhz8hu2i`,
        accessToken: "bmNXLIzWPPLECN6GIQvrzFBeYRcSgjIZdIk5c3StAow",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], 
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    // {
    //   resolve: '@wapps/gatsby-plugin-lingui',
    //   options: {
    //     availableLngs: ['en', 'by', 'ru'],
    //     fallbackLng: 'en',
    //     siteUrl: 'http:/https://dreamy-chandrasekhar-6ded29.netlify.com/',
    //   },
    // },
  ],
}
