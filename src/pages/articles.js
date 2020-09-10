/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import PageTemplate from "../templates/page-template"
import Gallery from "../components/gallery"
import ArticleCard from "../components/article-card"

const ArticlesPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges
  return (
    <PageTemplate>
      <Gallery>
        {articles.map(article => (
          <ArticleCard key={article.node.id} node={article.node} />
        ))}
      </Gallery>
    </PageTemplate>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {fields: {collection: {eq: "articles"}}}) {
      edges {
        node {
          frontmatter {
            path
            author
            date(formatString: "MMMM D, YYYY")
            title
          }
          excerpt(pruneLength: 350)
          fields {
            collection
          }
          id
        }
      }
    }
  }
`

export default ArticlesPage