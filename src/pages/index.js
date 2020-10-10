/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Shelf from "../components/shelf"
import Banner from "../components/banner"
import ArticleCard from "../components/article-card"
import Gallery from "../components/gallery"

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
        </section>
        <Link
          to="articles"
          sx={{

          }}
        >
          Read more
        </Link>
      </Container>

      <Shelf>
        {covers.map(edge => (
          <div key={edge.node.id}>
            <img
              src={edge.node.frontmatter.cover}
              alt={edge.node.frontmatter.title}
              sx={{
                width: "100%",
              }}
            />
          </div>
        ))}
      </Shelf>
    </Layout>
  )
}

export const query = graphql`
{
  articles: allMarkdownRemark(filter: {fields: {collection: {eq: "articles"}}}, limit: 2) {
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
  covers: allMarkdownRemark(filter: {fields: {collection: {eq: "covers"}}}) {
    edges {
      node {
        frontmatter {
          cover
          semester
        }
        id
      }
    }
  }
}
`

export default IndexPage
