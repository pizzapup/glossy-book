module.exports = {
  stories: [
    "../src/Intro.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "addon-screen-reader",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    previewMdx2: true, // 👈 MDX 2 enabled here
  },
};
