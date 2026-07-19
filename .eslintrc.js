module.exports = {
  root: true,
  extends: ["expo"],

  ignorePatterns: [
    "dist/**",
    "coverage/**",
    ".expo/**",
    "node_modules/**",
  ],

  overrides: [
    {
      files: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
      ],

      env: {
        jest: true,
        node: true,
      },
    },
  ],
};