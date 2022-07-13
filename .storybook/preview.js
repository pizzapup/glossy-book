import { theme, darkTheme } from "../src/stiches.config";
import "../src/theme/theme.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  // presets: ["@emotion/babel-preset-css-prop"],
};
