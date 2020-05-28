/** @jsx jsx */
import { jsx } from "theme-ui"

const Container = ({ children }) => (
  <main
    sx={{
      width: "90%",
      maxWidth: "1000px",
      mx: "auto"
    }}
  >
    {children}
  </main>
)

export default Container