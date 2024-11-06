function processUserData(user) {
  // Получаем данные пользователя
  const userData = getUserData(user);

  // Проверяем данные пользователя
  if (userData.age < 18) {

    console.error('User is under 18');

    return
  } 
  // Обрабатываем данные
  processUser(user);
}


/*

  Пахнет Large Function
  Что было плохо и почему?
    1) есть if else - что влияет на читаемость

  Что стало лучше и почему?
    1) использовал 


*/