/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"

export default function PageTemplate({ children, title, data }) {
  return (
    <Layout smallLogo>
      <SEO title={title} />
      <Container width="thin">
        {children}
        <div sx={{ height: "3rem" }} />
      </Container>
    </Layout>
  )
}
