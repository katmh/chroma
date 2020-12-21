/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import Footer from "../components/footer"
import styles from "../gatsby-plugin-theme-ui/index"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout smallLogo>
      <header
        sx={{
          backgroundImage: `url(${frontmatter.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          textAlign: "center",
          mb: 5,
        }}
      >
        <div
          className="overlay"
          sx={{
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,.35)",
            display: "table",
          }}
        >
          <div
            className="overlay-content"
            sx={{
              display: "table-cell",
              verticalAlign: "bottom",
              pb: "10vh",
              color: "#eee",
            }}
          >
            <h1
              sx={{
                ...styles.styles.h1,
                textShadow: "1px 1px 4px rgba(0,0,0,.3)",
                maxWidth: "90%",
                mx: "auto",
              }}
            >
              {frontmatter.title}
            </h1>
            <p
              sx={{
                fontSize: 3,
                textShadow: "1px 1px 4px rgba(0,0,0,.3)",
              }}
            >
              By{" "}
              <span sx={{ textTransform: "uppercase" }}>
                {frontmatter.author}
              </span>
              , {frontmatter.date}
            </p>
          </div>
        </div>
      </header>
      <Container width="thin">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
          sx={{
            ...styles.styles,
            img: {
              mx: "auto",
              display: "block",
            },
          }}
        />
      </Container>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        image
      }
    }
  }
`
