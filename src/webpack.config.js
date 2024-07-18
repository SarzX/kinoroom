const path = require('path');

module.exports = {
  entry: './src/index.js', // точка входа вашего приложения
  output: {
    path: path.resolve(__dirname, 'dist'), // папка для сборки
    filename: 'bundle.js' // имя выходного файла
  },
  module: {
    rules: [
      {
        test: /\.js$/, // применять к .js файлам
        exclude: /node_modules/, // исключить из обработки node_modules
        use: {
          loader: 'babel-loader' // использовать babel-loader для транспиляции JavaScript
        }
      },
      {
        test: /\.css$/, // применять к .css файлам
        use: ['style-loader', 'css-loader'] // использовать style-loader и css-loader для обработки CSS
      }
      // добавьте другие правила по необходимости
    ]
  },
  // добавьте плагины и другие настройки по вашему выбору
};
