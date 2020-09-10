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
        name: `cms`,
        path: `${__dirname}/cms/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/page-template.js"),
        },
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-remark-collection`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Palanquin`,
            variants: [`300`, `700`],
          },
          {
            family: `Alegreya`,
          },
          {
            family: `Source Serif Pro`,
          },
        ],
      },
    },
  ],
}
