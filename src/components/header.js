/** @jsx jsx */
import { jsx } from "theme-ui"
import Logo from "./logo"
import Container from "./container"
import Nav from "./nav"

const Header = ({ smallLogo }) => (
  <Container>
    <Nav smallLogo={smallLogo} />
    {smallLogo ? null : (<header
      sx={{
        mt: "7rem",
        mb: "8rem",
        textAlign: "center"
      }}
    >
      <Logo /> 
    </header>)}
  </Container>
)

export default Header
