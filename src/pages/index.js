/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Shelf from "../components/shelf"
import { Link } from "gatsby"

function IndexPage({data}) {
  let articles = data.allMarkdownRemark.edges.filter(
    edge => edge.node.fields.collection === "articles"
  );
  let covers = data.allMarkdownRemark.edges.filter(
    edge => edge.node.fields.collection === "covers"
  );

  return (
    <Layout>
      <SEO title="Home" />
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
      <Container>
        <section
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: 4,
          }}
        >
          {articles.map(edge => (
            <article key={edge.node.id}>
              <Link to={"/p/" + edge.node.frontmatter.path}>
                <h1>{edge.node.frontmatter.title}</h1>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
            </article>
          ))}
        </section>
      </Container>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          author
          date(formatString: "MMMM D, YYYY")
          title

          cover
          semester
          image
        }
        excerpt(pruneLength: 200)
        fields {
          collection
        }
        id
      }
    }
  }
}
`

export default IndexPage
