const pay = (employees) => {
  employees.forEach((e) => {
    if (e.isPayday()) {
      const pay = e.calculatePay();
      e.deliverPay(pay);
    }
  });
};

/*

  Пахнет Global State
  Что было плохо и почему?
    1) employees - массив является глобальным по отношению к функции pay 
    и функция pay не явно получает доступ к этой переменной
    2) я думаю вкусовщина, но можно цикл заменить на forEach

  Что стало лучше и почему?
   1) employees - явно передается как параметр
   2) поменял цикл на forEach

*/
