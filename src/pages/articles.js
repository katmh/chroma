/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import PageTemplate from "../templates/page-template"
import ArticleCard from "../components/article-card"
import SEO from "../components/seo"
import { useState } from "react"
import Fuse from "fuse.js"

const ArticlesPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges.map(edge => edge.node)
  const fuse = new Fuse(articles, {
    keys: ["frontmatter.title", "frontmatter.author", "excerpt"],
  })
  const [query, updateQuery] = useState("")
  const onSearch = ({ currentTarget }) => updateQuery(currentTarget.value)
  const results = fuse.search(query)
  const articleResults = query ? results.map(article => article.item) : articles

  return (
    <PageTemplate width="wide">
      <SEO title="Articles" />
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={onSearch}
        sx={{
          padding: ".4rem .5rem",
          fontSize: 2,
          border: "none",
          borderBottom: "1px solid #aaa",
          borderRadius: "0",
          outline: "none",
          width: "80%",
          maxWidth: "25rem",
          bg: "transparent",
          mt: "2rem",
          fontFamily: "body",
          color: "text",
        }}
      />

      {articleResults.map(article => (
        <ArticleCard key={article.id} node={article} horizontal />
      ))}

      {articleResults.length === 0 ? <p>No results found :/</p> : null}
    </PageTemplate>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "articles" } } }
      sort: { fields: frontmatter___date, order: DESC }
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
