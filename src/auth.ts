type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService) => {
  const rcCode = gateway.sendAuth(payment);
  return { ...payment, rcCode };
};

/*

  Пахнет мутацией исходных данных 
  Что было плохо и почему?
    1) функция auth мутирует объект переданный параметром, 
    я исхожу из того что предназначение функции это изменить данные 
 
  Что стало лучше и почему?
   1) функция auth возвращает новый объект

*/

