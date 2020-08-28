exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blog-template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.path && node.frontmatter.path != null) {
      createPage({
        path: `/p/${node.frontmatter.path}`,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.path,
        },
      })
    }
  })
}
