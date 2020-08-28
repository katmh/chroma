/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav
      sx={{
        mb: 4,
        a: {
          display: "inline-block",
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: 3,
          color: "primary",
          mr: 4,
        }
      }}
    >
      <Link to="/about">About</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav