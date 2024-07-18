const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Здесь можно добавить другие middleware и настройки Express

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Middleware для обработки ошибок
if (process.env.NODE_ENV === 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500).json({
        error: {
          message: err.message,
        },
      });
    });
  } else {
    // Middleware для обработки ошибок в продакшн
    app.use((err, req, res, next) => {
      res.status(err.status || 500).json({
        error: {
          message: 'Internal Server Error',
        },
      });
    });
  }
  