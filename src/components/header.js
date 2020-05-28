/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "./logo"

const Header = () => (
  <header
    sx={{
      bg: 'background',
      mb: 4,
    }}
  >
    <div
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 sx={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo width="400" />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
