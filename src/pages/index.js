/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/container"
import Shelf from "../components/shelf"
import { Link } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Shelf />
    <Container>
      <section
        sx={{
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 4,
        }}
      >
      {data.allMarkdownRemark.edges.map(edge => (
        <article>
          <Link to={'p/' + edge.node.frontmatter.path}>
            <h1>{edge.node.frontmatter.title}</h1>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
        </article>
      ))}
      </section>
    </Container>
  </Layout>
)

export const query = graphql`
{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {}}) {
    edges {
      node {
        frontmatter {
          path
          author
          date(formatString: "MMMM D, YYYY")
          title
        }
        excerpt(pruneLength: 200)
      }
    }
  }
}
`

export default IndexPage
