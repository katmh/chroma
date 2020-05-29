/** @jsx jsx */
import { jsx } from "theme-ui"

const Container = ({ children }) => (
  <section
    sx={{
      width: "90%",
      maxWidth: "1000px",
      mx: "auto",
    }}
  >
    {children}
  </section>
)

export default Container
