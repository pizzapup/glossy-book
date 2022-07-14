import { useEffect, useState } from "react";
import "./theme.css";
const theme = {
  colors: {
    bg_primary: "var(--colors-bg-primary)",
    bg_secondary: "var(--colors-bg-secondary)",
    surfaces00: "var(--colors-bg-surfaces00)",
    surfaces01: "var(--colors-bg-surfaces01)",
    surfaces02: "var(--colors-bg-surfaces02)",
    surfacesAlt00: "var(--colors-bg-surfaces-alt00)",
    surfacesAlt01: "var(--colors-bg-surfaces-alt01)",
    surfacesAlt02: "var(--colors-bg-surfaces-alt02)",
    border_light: "var(--colors-border-olBtn)",
    border_dark: "var(--colors-olBtn-hover)",
    button_bg: "var(--colors-bg-btn)",
    button_bg_hover: "var(--colors-bg-btn-hover)",
    outline_button_bg: "var(--colors-bg-olBtn)",
    outline_button_bg_hover: "var(--colors-bg-olBtn)",
    outline_button_border: "var(--colors-border-olBtn)",
    outline_button_border_hover: "var(--colors-border-olBtn-hover)",
    on_primary: "var(--colors-on-primary)",
    on_secondary: "var(--colors-on-secondary)",
    on_button: "var(--colors-on-btn)",
    on_outline_button: "var(--colors-on-olBtn)",
    card: {
      bg: "var(--colors-bg-surfaces00)",
      quickview: "var(--colors-bg-surfaces01)",
      skeleton: "var(--colors-bg-surfaces02)",
    },
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
    sm: "var(--spacing-sm)",
    md: "var(--spacing-md)",
    lg: "var(--spacing-lg)",
    gap: "var(--spacing-gap)",
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
    icon: "var(--size-icon)",
  },
  font: {
    size: {
      xs: "var(--font-size-xs)", // stickers
      sm: "var(--font-size-sm)", // body sm | card txt
      md: "var(--font-size-md)", // body md
      lg: "var(--font-size-lg)", // headings sm
      xl: "var(--font-size-xl)", // headings md
    },

    weight: {
      xm: "var(--font-weight-xs)",
      sm: "var(--font-weight-sm)",
      md: "var(--font-weight-md)", // body
      lg: "var(--font-weight-lg)", // headings | links
      xl: "var(--font-weight-xl)",
    },
  },
  radii: {
    1: "4px",
    2: "6px",
    3: "8px",
    4: "12px",
    sm: "var(--radii-sm)",
    md: "var(--radii-md)",
    lg: "var(--radii-lg)",
    xl: "var(--radii-xl)",
    round: "50%",
    pill: "9999px",
  },
  zIndices: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    max: "999",
    send_back: "var(--zIndex-send-back)",
    brind_forward: "var(--zIndex-bring-forward)",
    middle: "var(--zIndex-middle)",
  },
  // media: {
  // bp1: "(min-width: 460px)",
  // bp2: "(min-width: 600px)",
  // bp3: "(min-width: 750px)",
  // bp4: "(min-width: 900px)",
  // },
};
export { theme };

export function ThemeToggler() {
  const [theme, setTheme] = useState("light");
  const nextTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  return (
    <button onClick={() => setTheme(nextTheme)}>
      Change to {nextTheme} mode
    </button>
  );
}
//
// bgPrimary: "var(--colors-bg-primary)",
// bgSecondary: "var(--colors-bg-secondary)",
// bgBtn: "var(--colors-bg-btn)",
// bgBtnHover: "var(--colors-bg-btn-hover)",
// bgOlBtn: "var(--colors-bg-olBtn)",
// borderOlBtn: "var(--colors-border-olBtn)",
// borderOlBtnHover: "var(--colors-olBtn-hover)",
// bgSurfaces00: "var(--colors-bg-surfaces00)",
// bgSurfaces01: "var(--colors-bg-surfaces01)",
// bgSurfaces02: "var(--colors-bg-surfaces02)",
// bgSurfacesCardBg: "var(--colors-bg-surfaces00)",
// bgSurfacesCardQuickview: "var(--colors-bg-surfaces01)",
// bgSurfacesCardSkele: "var(--colors-bg-surfaces02)",
// bgSurfacesAlt00: "var(--colors-bg-surfaces-alt00)",
// bgSurfacesAlt01: "var(--colors-bg-surfaces-alt01)",
// bgSurfacesAlt02: "var(--colors-bg-surfaces-alt02)",
// primary: "var(--colors-primary)",
// secondary: "var(--colors-secondary)",
// bg: "var(--colors-bg)",
// buttons: {
//   bg: "var(--colors-bg-btn)",
//   text: "var(--colors-on-btn)",
//   bgHover: "var(--colors-bg-btn-hover)",
//   outline: {
//     bg: "var(--colors-bg-olBtn)",
//     text: "var(--colors-olBtn-text)",
//     border: "var(--colors-border-olBtn)",
//     borderHover: "var(--colors-border-olBtn-hover)",
//   },
// },
// surfaces: {
//   bg_primary: "",
//   bg: "",
// },
// 1: "12px",
// 2: "14px",
// 3: "16px",
// 4: "20px",
// 5: "26px",
// 6: "28x",
// 7: "35px",
// 8: "59px",
// 1: 300,
// 2: 400,
// 3: 500,
// 4: 700,
// 5: 900,
