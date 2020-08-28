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
            mb: 5
          }}
        >
          {articles.map(edge => (
            <article key={edge.node.id}>
              <Link
                to={"/p/" + edge.node.frontmatter.path}
                sx={{
                  textDecoration: "none",
                  color: "primary"
                }}
              >
                <h1
                  sx={{
                    fontFamily: "heading",
                    fontSize: 4,
                    mb: 0
                  }}
                >
                  {edge.node.frontmatter.title}
                </h1>
              </Link>
              <p
                sx={{
                  color: "#777",
                  mt: 1,
                  mb: 2
                }}
              >
                By {edge.node.frontmatter.author}, {edge.node.frontmatter.date}
              </p>
              <div
                sx={{
                  fontFamily: "body",
                  fontSize: 2
                }}
                dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}
              />
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

export default IndexPage
