/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "./container";

const Shelf = ({ children }) => (
  <section
    sx={{
      bg: "muted",
      py: [3, 4],
    }}
  >
    <Container>
      <h2
        sx={{
          position: 'absolute',
          transform: 'rotate(-90deg)',
          transformOrigin: 'left bottom',
          display: 'inline-block',
          mt: 6,
          ml: '-0.5rem',
          textShadow: '5px 5px 0 #AF4846',
          letterSpacing: '2.5px',
          color: '#eee',
          textTransform: 'uppercase',
          font: 'heading',
        }}
      >
        Print
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