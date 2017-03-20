const Promise = require("bluebird")
const {join} = require("path")
const {readdirAsync, statAsync} = Promise.promisifyAll(require('fs'))
const HtmlWebpackPlugin = require('html-webpack-plugin')

const relativeTo = (...args) => join(__dirname, ...args)

const jsFilesTest = /\.jsx?$/
const cssFilesTest = /\.css$/
const htmlFilesTest = /\.html$/

module.exports = function (env) {
    return listDirectories("./src")
      .then((directories) => {
          const entry = generateEntries(directories);

          const htmlPages = generateHtmlPages(directories)

          return {
              entry,
              output: {
                  path: relativeTo("./docs"),
                  filename: '[name].[hash].js',
              },
              module: {
                  rules: [
                      {
                          test: jsFilesTest,
                          use: 'babel-loader'
                      },
                      {
                          test: cssFilesTest,
                          use: [
                              "style-loader",
                              "css-loader",
                              "postcss-loader",
                          ]
                      },
                      {
                          test: htmlFilesTest,
                          use: 'html-loader',
                      },
                      {
                          exclude: [jsFilesTest, cssFilesTest, htmlFilesTest],
                          use: {
                              loader: "url-loader",
                              options: {
                                  limit: 1000
                              }
                          }
                      }
                  ]
              },
              plugins: [
                  ...htmlPages,
              ]
          }
      })

}

function generateEntries(directories) {
    return directories
      .reduce(
        (entry, {name, path}) => {
            entry[name] = ["babel-polyfill", join(path, 'index.js')]
            return entry
        },
        {}
      )
}

function generateHtmlPages(directories) {
    return directories.map(({name, path}) =>
      new HtmlWebpackPlugin({
          title: name,
          filename: `${name}/index.html`,
          template: join(path, 'index.html'),
          chunks: [name],
      })
    ).concat(new HtmlWebpackPlugin({
        title: "Home",
        filename: "index.html",
        template: relativeTo("./src/index.html"),
        chunks: []
    }))
}

function listDirectories(srcPath) {
    return readdirAsync(relativeTo(srcPath))
      .then(files =>
        Promise.all(files.map((file) => {
            const path = relativeTo(srcPath, file);
            return statAsync(path).then(stat => {
                stat.path = path
                stat.name = file
                return stat
            })
        }))
      )
      .then(filesStats =>
        filesStats
          .filter(file => file.isDirectory())
      )
}