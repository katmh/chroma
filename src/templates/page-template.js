import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"

export default function PageTemplate({ children, title, data }) {
  return (
    <Layout>
      <SEO title={title} />
      <Container>{children}</Container>
    </Layout>
  )
}