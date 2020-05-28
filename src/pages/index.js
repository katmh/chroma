/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/container"
import Shelf from "../components/shelf"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Shelf />
    <Container>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div sx={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
