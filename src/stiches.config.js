import { createStitches } from "@stitches/react";
export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  dune: "#383533", // [button bg hover]
  lightPink: "#faf2f4", // [section, banner]
  mistyRose: "#f5e3e7", // [section alt color]
  alabaster: "#faf9f7", // [section, banner, alt bg warm-grey]
  lightGrey: "#D9D9D9", // [outline button border]
  mercury: "#E7E8EA", // [card-img-bg]
  bianca: "#fafafa", // [card-surface/bg]
  whiteSmoke: "#f5f6f7", // [card-quickview]
  boulder: "rgb(119, 118, 120)", // [outline-button-border-hover]
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...colors,
      bg_primary: colors.white,
      text_primary: colors.black,
      bg_secondary: colors.black,
      text_secondary: colors.white,
      btn_bg: colors.black,
      btn_text: colors.white,
      btn_bg_hover: colors.dune,
      outline_btn_bg: colors.white,
      outline_btn_text: colors.black,
      outline_btn_border: colors.lightGrey,
      outline_btn_border_hover: colors.boulder,
      card_info_bg: colors.bianca,
      card_img_bg: colors.mercury,
      card_quickview_bg: colors.whiteSmoke,
      transparent_bg_hover: colors.bianca,
    },
    fonts: {
      untitled: "'Nunito', Untitled Sans, -apple-system, system-ui, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "26px",
      6: "28x",
      7: "35px",
      8: "59px",
      primary_heading_size: "$6",
      secondary_heading_size: "$5",
      secondary_body_size: "$2",
      primary__body_size: "$3",
    },
    fontWeights: {
      1: 300,
      2: 400,
      3: 500,
      4: 700,
      5: 900,
      primary_heading_weight: "$4",
      secondary_heading_weight: "$4",
      seondary_body_weight: "$2",
      primary__body_weight: "$4",
      bold: "$3",
    },
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
    media: {
      bp1: "(min-width: 460px)",
      bp2: "(min-width: 600px)",
      bp3: "(min-width: 750px)",
      bp4: "(min-width: 900px)",
      motion: "(prefers-reduced-motion)",
      hover: "(any-hover: hover)",
      dark: "(prefers-color-scheme: dark)",
      light: "(prefers-color-scheme: light)",
    },
    utils: {
      // Abbreviated margin properties
      m: (value) => ({
        margin: value,
      }),
      mt: (value) => ({
        marginTop: value,
      }),
      mr: (value) => ({
        marginRight: value,
      }),
      mb: (value) => ({
        marginBottom: value,
      }),
      ml: (value) => ({
        marginLeft: value,
      }),
      mx: (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value) => ({
        marginTop: value,
        marginBottom: value,
      }),
      p: (value) => ({
        padding: value,
      }),
      pt: (value) => ({
        paddingTop: value,
      }),
      pr: (value) => ({
        paddingRight: value,
      }),
      pb: (value) => ({
        paddingBottop: value,
      }),
      pl: (value) => ({
        paddingLeft: value,
      }),
      px: (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      // A property for applying width/height together
      size: (value) => ({
        width: value,
        height: value,
      }),
      // A property to apply linear gradient
      linearGradient: (value) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),

      // An abbreviated property for border-radius
      br: (value) => ({
        borderRadius: value,
      }),
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    hiContrast: "hsl(206,2%,93%)",
    loContrast: "hsl(206,8%,8%)",

    gray100: "hsl(206,8%,12%)",
    gray200: "hsl(206,7%,14%)",
    gray300: "hsl(206,7%,15%)",
    gray400: "hsl(206,7%,24%)",
    gray500: "hsl(206,7%,30%)",
    gray600: "hsl(206,5%,53%)",
  },
  space: {},
  fonts: {},
});
