import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"

export default function PageTemplate({ children }) {
  return (
    <Layout>
      <Container>
        {children}
      </Container>
    </Layout>
  )
}