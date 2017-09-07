const autoprefixer = require('autoprefixer');
const postcssEasyImport = require('postcss-easy-import');

module.exports = {
  plugins: [
    postcssEasyImport({ prefix: '_' }),
    autoprefixer({})
  ]
};
