const DEFAULT_TIMEOUT = 5000;

function fetchData(url: string, timeout = DEFAULT_TIMEOUT) {
  // Используем значение по умолчанию для таймаута
  fetch(url, { timeout })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}


/*
  Пахнет Hardcoding
  Что было плохо и почему?
    1) значение timeout жестко прописан в вызове fetch


  Что стало лучше и почему?
   1) значение timeout передается как параметр функции и по умолчанию 
   равен DEFAULT_TIMEOUT
*/