module.exports = {
  useTabs: false,
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  jsxBracketSameLine: true,
  noSemi: false,
  overrides: [
    {
      "files": "**/*.json",
      "options": { "parser": "json" }
    }
  ]
};