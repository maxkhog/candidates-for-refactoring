class LowLevelModule implements ILowLevelModule {
  doSomething() {
    // реализация
  }
}

interface ILowLevelModule {
  doSomething: Function
}

class HighLevelModule {
  private lowLevelModule: ILowLevelModule;

  constructor() {
    this.lowLevelModule = new LowLevelModule(); // создание экземпляра
  }

  doSomethingElse() {
    this.lowLevelModule.doSomething(); // использование непосредственной зависимости
  }
}


/*
  Пахнет Tight Coupling 
  Что было плохо и почему?
    1) HighLevelModule напрямую зависит от конкретной реализации LowLevelModule.


  Что стало лучше и почему?
   1) Добавил интерфейс ILowLevelModule, теперь HighLevelModule 
   зависит от интрфейса, а не от конкретного класса

*/