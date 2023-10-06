/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-astro')],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: '**/*.astro',
      options: { parser: 'astro' },
    },
  ],
};

module.exports = config;
