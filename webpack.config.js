module.exports = {
  entry: './App.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['', '.jsx', '.js'],
  },
};
