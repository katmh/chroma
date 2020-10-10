/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === "light" ? "dark" : "light"
  return (
    <button
      sx={{
        backgroundColor: "transparent",
        color: "primary",
        border: 0,
        px: 2,
        pt: 2,
        pb: 1,
        cursor: "pointer",
        outline: "none"
      }}
      onClick={() => setColorMode(nextColorMode)}
    >
      <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor">
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentcolor"
          stroke-width="4"
        ></circle>
        <path d="M 16 0 A 16 16 0 0 0 16 32 z"></path>
      </svg>
    </button>
  )
}

export default ThemeSwitcher
