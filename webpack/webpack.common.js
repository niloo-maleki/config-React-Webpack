import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// get the resolved path to the file
const __filename = fileURLToPath(import.meta.url);

// get the name of the directory
const __dirname = dirname(__filename);

export default {
  entry: {
    bundle: resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      // CSS and SCSS Loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // images loaded
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      // Font Loader for handling font files (e.g., .woff,.woff2,.ttf,.otf)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Babel Loader for handling modern JavaScript
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "src/icons" }],
    // }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    alias: {
      '@assets': resolve(__dirname, '../src/assets/'),
      '@features': resolve(__dirname, '../src/features/'),
      '@src': resolve(__dirname, '../src/'),
    },
  },
};
