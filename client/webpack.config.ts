import path from 'path'
import {Configuration, EnvironmentPlugin} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
const server_port = Number(process.env.PORT!) || 3000
const server_host = '0.0.0.0'

const webpackConfig = () => ({
  entry: './src/components/index.tsx',
  ...(process.env.production || !process.env.development ? {} : {devtool: 'eval-source-map'}),

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})],
    alias: {
      '@globals': path.resolve(__dirname, 'src/assets/stylesheets/_globals.scss'),
    },
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'build.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        exclude: path.resolve(__dirname, 'src/assets/webfonts'),
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        include: path.resolve(__dirname, 'src/assets/webfonts'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            esModule: false,
          },
        },
      },
    ],
  },
  devServer: {
    port: server_port,
    open: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
      template: './public/index.html',
      favicon: './src/assets/images/favicon.png',
    }),
    new EnvironmentPlugin({
      'process.env': process.env.production || !process.env.development,
      API_ROOT: 'http://localhost:4000',
    }),
    new ForkTsCheckerWebpackPlugin({
      // Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
    }),
  ],
})

export default webpackConfig
