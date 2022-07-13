import { useEffect, useState } from "react";
import "./theme.css";
const theme = {
  colors: {
    primary: "var(--colors-primary)",
    secondary: "var(--colors-secondary)",
    bg: "var(--colors-bg)",
    buttons: {
      bg: "var(--colors-btn-bg)",
      text: "var(--colors-btn-text)",
      bgHover: "var(--colors-btn-bg-hover)",
      outline: {
        bg: "var(--colors-btn-bg)",
        text: "var(--colors-olBtn-text)",
        border: "var(--colors-olBtn-border)",
        borderHover: "var(--colors-olBtn-border-hover)",
      },
    },
    surfaces: {
      bg_primary: "",
      bg: "",
    },
  },
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
