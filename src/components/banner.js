/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "./container";

const Banner = ({ children }) => (
  <section
    sx={{
      bg: "muted",
      py: 4,
    }}
  >
    <Container>
      <h2
        sx={{
          color: 'text',
          fontFamily: 'body',
          fontSize: 4,
          textAlign: 'center',
          my: 0,
          mb: 2,
          mx: 'auto',
          maxWidth: '800px'
        }}
      >
        {children}
      </h2>
    </Container>
  </section>
)

export default Banner