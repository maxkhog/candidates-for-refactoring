const hasNotFoundStatus = (response: Response) => {
  return response.status === HttpStatusCode.NOT_FOUND_404;
};

const hasForbiddenStatus = (response: Response) => {
  return response.status === HttpStatusCode.FORBIDDEN_403;
};

const hasServiceUnavailableStatus = (response: Response) => {
  return response.status === HttpStatusCode.SERVICE_UNAVAILABLE_503;
};

/*
  Что было?
  
  Даны 3 функции предиката, которые проверяют наличие HttpStatusCode
    
  Пахнет Magic Numbers
  Что было плохо и почему?
    1) в hasServiceUnavailableStatus сравнение идет с числом, а не 
    со значением из enum как в других функциях, как минимум нарушается стилистика кода

  Что стало лучше и почему?
   1) в hasServiceUnavailableStatus добавил сравнение с enum HttpStatusCode.SERVICE_UNAVAILABLE_503, 
   как минимум не нарушается стилистика кода

*/