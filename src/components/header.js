/** @jsx jsx */
import { jsx } from "theme-ui"
import Logo from "./logo"
import Container from "./container"
import ThemeSwitcher from "./theme-switcher"
import Nav from "./nav"

const Header = () => (
  <Container>
    <header
      sx={{
        mt: 5,
        mb: 2,
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

      <div>
        <ThemeSwitcher />
      </div>
    </header>
    <Nav />
  </Container>
)

export default Header
