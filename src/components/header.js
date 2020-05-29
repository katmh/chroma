/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Logo from "./logo"
import Container from "./container"

const Header = () => (
  <Container>
    <header
      sx={{
        my: 5,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Logo />
        <h2
          sx={{
            fontFamily: "heading",
            fontSize: 5,
            fontWeight: "heading",
            letterSpacing: ".5px",
            my: 3,
          }}
        >
          MIT's Science and Humanities Magazine
        </h2>
      </div>

      <nav>
        <Link to="/about">About</Link>
        <Link to="/about">Dark</Link>
      </nav>
    </header>
  </Container>
)

export default Header
