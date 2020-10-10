/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import PageTemplate from "../templates/page-template"
import ArticleCard from "../components/article-card"
import SEO from "../components/seo"

const ArticlesPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges
  return (
    <PageTemplate>
      <SEO title="Articles" />

        {articles.map(article => (
          <ArticleCard key={article.node.id} node={article.node} horizontal />
        ))}

    </PageTemplate>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {fields: {collection: {eq: "articles"}}},
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            path
            author
            date(formatString: "MMMM D, YYYY")
            title
            image
            tagline
          }
          excerpt(pruneLength: 300)
          id
        }
      }
    }
  }
`

export default ArticlesPage