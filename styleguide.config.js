const path = require("path");

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
  },
  title: "Boosted MaterialUI form fields",
  styleguideDir: "dist-docs",
  moduleAliases: {
    "boosted-materialui-forms": path.resolve(__dirname, "src"),
  },
  sections: [
    { content: "docs/introduction.md" },
    {
      name: "Documentation",
      sections: [
        {
          name: "Installation",
          content: "docs/installation.md",
          // description: "The description for the installation section",
        },
        {
          name: "Live Demo",
          content: "src/components/FormField.md",
          // external: true,
          // href: "http://example.com",
        },
        {
          name: 'Props',
          content: 'docs/props.md'
        }
      ],
    },
  ],
};
