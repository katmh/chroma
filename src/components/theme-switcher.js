/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === "light" ? "dark" : "light"
  return (
    <button
      sx={{
        backgroundColor: "primary",
        color: "background",
        border: 0,
        px: 3,
        py: 2,
        cursor: "pointer",
      }}
      onClick={() => setColorMode(nextColorMode)}
    >
      Toggle mode
    </button>
  )
}

export default ThemeSwitcher
