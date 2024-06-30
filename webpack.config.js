const Dotenv = require('dotenv-webpack');

module.exports = {
  // ... otras configuraciones de Webpack
  plugins: [
    new Dotenv()
  ]
};