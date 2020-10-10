/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Shelf from "../components/shelf"
import Banner from "../components/banner"
import ArticleCard from "../components/article-card"
import Gallery from "../components/gallery"
import Button from "../components/button"

function IndexPage({data}) {
  let articles = data.articles.edges
  let covers = data.covers.edges
  console.log(articles)

  return (
    <Layout>
      <SEO title="Home" />

      <Banner>
        <i>Chroma</i> is a student-run magazine engaging the MIT community with the intersection between the sciences and the humanities through in-depth writing and thought-provoking art.
      </Banner>
      
      <Container>
        <section
          sx={{
            my: 5,
          }}
        >
          <Gallery>
            {articles.map(edge => (
              <ArticleCard key={edge.node.id} node={edge.node} />
            ))}
          </Gallery>
          <div sx={{
            textAlign: "center",
            mb: 4
          }}>
            <Button
              text="Read More"
              to="articles"
            />
          </div>
        </section>
      </Container>

      <Shelf>
        {covers.map(edge => (
          <div
            key={edge.node.id}
            sx={{
              transition: "0.1s ease-in-out",
              ":hover": {
                transform: "scale(1.025)"
              }
            }}
          >
            <a href={edge.node.frontmatter.issuu_link}>
              <img
                src={edge.node.frontmatter.cover}
                alt={edge.node.frontmatter.title}
                sx={{
                  width: "100%",
                }}
              />
            </a>
          </div>
        ))}
      </Shelf>
    </Layout>
  )
}

export const query = graphql`
{
  articles: allMarkdownRemark(
    filter: {fields: {collection: {eq: "articles"}}},
    limit: 2,
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
        }
        excerpt(pruneLength: 350)
        id
      }
    }
  }
  covers: allMarkdownRemark(
    filter: {fields: {collection: {eq: "covers"}}}
  ) {
    edges {
      node {
        frontmatter {
          cover
          semester
          issuu_link
        }
        id
      }
    }
  }
}
`

export default IndexPage
