/** @jsx jsx */
import { jsx } from "theme-ui"

const WIDTHS = {
  thin: 700,
  medium: 900,
  wide: 1100,
}

const Container = ({ children, width }) => (
  <section
    sx={{
      width: "90%",
      maxWidth: `${width ? WIDTHS[width] : WIDTHS.wide}px`,
      mx: "auto",
    }}
  >
    {children}
  </section>
)

export default Container
