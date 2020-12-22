import { transparentize } from "@theme-ui/color"

export default {
  useCustomProperties: true,
  initialColorMode: "light",
  colors: {
    // based on Illusion color palette
    background: "#eeeeee",
    text: "#332b2b",
    primary: "#bb4433",
    secondary: "#666262",
    muted: "#bad0ce",
    modes: {
      dark: {
        // based on Horizons color palette
        background: "#332233",
        text: "#faeee9",
        primary: "#f6a666",
        secondary: "#f59a9d",
        muted: "#664455",
      },
    },
  },
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 48, 64, 128, 256, 512],
  fonts: {
    body: "Source Serif Pro, serif",
    heading: "Palanquin, Helvetica, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 18, 20, 24, 30, 44, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      margin: "1em 0 1rem",
    },
    byline: {
      color: transparentize("text", 0.15),
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 6,
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
      lineHeight: "140%",
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    p: {
      fontSize: [2, 3],
    },
    li: {
      fontSize: 2,
    },
    a: {
      color: "primary",
    },
  },
}
