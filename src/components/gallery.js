/** @jsx jsx */
import { jsx } from "theme-ui"

const Gallery = ({ children }) => {
  return (
    <section
      sx={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, minmax(400px, 1fr))`,
        gridGap: `2rem`
      }}
    >
      {children}
    </section>
  )
}

export default Gallery