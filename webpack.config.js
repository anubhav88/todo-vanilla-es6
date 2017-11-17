const path = require('path');

module.exports = {
  entry:'./target/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'scripts.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
