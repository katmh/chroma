module.exports = {
  siteMetadata: {
    title: `Chroma`,
    description: `Chroma is a student-run magazine that aims to engage the MIT community with the intersection between the sciences and the humanities through in-depth writing and thought-provoking art.`,
    author: `MIT Chroma`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/cms/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `covers`,
        path: `${__dirname}/cms/covers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `members`,
        path: `${__dirname}/cms/members`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/cms/pages`,
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Palanquin`,
              variants: [`300`, `700`],
            },
            {
              family: `Source Serif Pro`,
              variants: [`400`, `400i`, `700`],
            },
          ],
        },
      },
    },
  ],
}
