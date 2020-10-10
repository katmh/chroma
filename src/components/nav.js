/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { darken } from "@theme-ui/color"
import ThemeSwitcher from "./theme-switcher"

const Nav = () => {
  return (
    <nav
      sx={{
        display: "flex",
        justifyContent: "space-between",
        pt: "1.5rem"
      }}
    >
      <div
        sx={{
          a: {
            display: "inline-block",
            textDecoration: "none",
            fontFamily: "heading",
            fontSize: 3,
            color: "primary",
            mr: 4,
            transition: "0.1s ease-in-out",
            ":hover": {
              color: darken("primary", 0.1),
            },
          },
        }}
      >
        <Link to="/about">About</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <ThemeSwitcher />
    </nav>
  )
}

export default Nav