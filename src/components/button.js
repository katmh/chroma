/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { lighten } from "@theme-ui/color"

const Button = ({ text, to }) => {
  return (
    <Link
      to={to}
      sx={{
        px: 3,
        py: '.75rem',
        bg: 'primary',
        textDecoration: 'none',
        fontFamily: 'heading',
        fontWeight: 'bold',
        fontSize: 3,
        lineHeight: '100%',
        borderRadius: 5,
        color: 'background',
        display: 'inline-block',
        transition: '.1s ease-in-out',
        ':hover': {
          bg: lighten('primary', 0.05)
        }
      }}
    >
      {text}
    </Link>
  )
}

export default Button