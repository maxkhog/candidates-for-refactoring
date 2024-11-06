interface Stack<T> {
  pop(): T | null;
  push(item: T): void;
}

class LimitedStack<T> implements Stack<T> {
  percentFull(): number {

  };
}

class UnlimitedStack<T> implements Stack<T> {
  pop() {
    return null
  }

  push() {

  }
}

/*
  Пахнет тем, что UnlimitedStack ошибочно реализует percentFull из интерфейса, 
  можно отнести к Refused Bequest
  Что было плохо и почему?
    1) интерфейс Stack накладывает не нужные обязанности 
    на классы которые реализует этот интерфейс


  Что стало лучше и почему?
   1) убрал метод percentFull() из интерфейса Stack, необходимую фукнциональность
   можно реализовать в классе LimitedStack

*/
