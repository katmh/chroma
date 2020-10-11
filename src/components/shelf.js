/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "./container"
import { darken } from "@theme-ui/color"

const Shelf = ({ children }) => (
  <section
    sx={{
      bg: "muted",
      pt: 4,
      pb: '3rem'
    }}
  >
    <Container>
      <h2
        sx={{
          my: 0,
        }}
      >
        <a href="https://issuu.com/mitchroma"
          sx={{
            color: 'secondary',
            fontFamily: 'heading',
            fontSize: 4,
            display: 'inline-block',
            mb: '1rem',
            textDecoration: 'none',
            transition: '0.1s ease-in-out',
            ':hover': {
              color: darken('secondary', 0.075)
            }
          }}
        >
          Check out our print issues
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            sx={{
              verticalAlign: "sub",
              display: "inline-block",
              ml: 2
            }}
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"></path>
          </svg>
        </a>
      </h2>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: ["repeat(2, 1fr)", "repeat(5, 1fr)"],
          gridGap: [3, 4],
        }}
      >
        {children}
      </div>
    </Container>
  </section>
)

export default Shelf