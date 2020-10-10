/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "./container";

const Shelf = ({ children }) => (
  <section
    sx={{
      bg: "muted",
      pt: 4,
      pb: 5
    }}
  >
    <Container>
      <h2
        sx={{
          color: 'secondary',
          fontFamily: 'heading',
          fontSize: 4,
          my: 0,
          mb: 3
        }}
      >
        Check out our print issues <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"></path></svg>
      </h2>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: ["repeat(2, 1fr)", "repeat(5, 1fr)"],
          gridGap: 4,
        }}
      >
        {children}
      </div>
    </Container>
  </section>
)

export default Shelf