class Calculator {
  public static add(a: number, b: number): number {
    return a + b;
  }
  public static subtract(a: number, b: number): number {
    return a - b;
  }
  public static multiply(a: number, b: number): number {
    return a * b;
  }
  public static divide(a: number, b: number): number {
    return a / b;
  }
}


/*
  Что было?
    Я вижу класс Calculator с публичными методами, которые не зависят от состояние объекта

    не могу определить чем именно пахнет, но пахнет плохо
    
  Что было плохо и почему?
    1) методы класса можно будет вызвать только через инстанс класса,
    хотя явно можно их вызвать без инстанса

 Что стало лучше и почему?
    1) сделал методы статичными, теперь можно вызывать методы без создания класса

*/