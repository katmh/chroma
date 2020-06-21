module.exports = {
  siteMetadata: {
    title: `Chroma`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `covers`,
        path: `${__dirname}/covers/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-remark-collection`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
