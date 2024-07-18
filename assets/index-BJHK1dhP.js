fetch('http://kinoroom.fun/kinoroom/assets/index-BJHK1dhP.js')
  .then(response => {
    if (!response.ok) {
      throw new Error('Запрашиваемый ресурс не найден');
    }
    return response.text();
  })
  .then(data => {
    // Обработка успешного ответа
    console.log('Текст ответа:', data);
  })
  .catch(error => {
    // Обработка ошибки
    console.error('Ошибка при выполнении запроса:', error);
  });
