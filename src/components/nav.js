/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { darken } from "@theme-ui/color"
import ThemeSwitcher from "./theme-switcher"
import Logo from "./logo"

const Nav = ({ smallLogo }) => {
  return (
    <nav
      sx={{
        display: "flex",
        justifyContent: "space-between",
        pt: "1.5rem",
        pb: "1.25rem",
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
            verticalAlign: "middle",
            ":hover": {
              color: darken("primary", 0.1),
            },
          },
        }}
      >
        {smallLogo ? <Logo width={250} /> : null}
        <Link to="/about">About</Link>
        <Link to="/articles">Articles</Link>
      </div>
      <ThemeSwitcher />
    </nav>
  )
}

export default Nav
