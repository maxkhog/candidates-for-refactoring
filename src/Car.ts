class Car {
  protected make: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected price: number;
  protected mileage: number;
}

/*
  Что было?
  Я вижу класс Car c приватными методами, 
    
  пахнет Data Clumps, но думаю проблема не в этом

  Что было плохо и почему?
    1) все свойства класса объявлены как private и это усложнит
      доступ к свойствам класса при наследовании

  Что стало лучше и почему?
    1) заменил private на protected - теперь при наследовании
    в подклассах можно будет обращаться к свойствам класса

*/

