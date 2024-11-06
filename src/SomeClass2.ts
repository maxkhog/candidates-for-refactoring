class SomeClass2 {

  constructor() {
    console.log('Constructor is unnecessary if not initializing anything');
  }

  public someMethod(): void {
    console.log('This method performs a useful action');
  }
}

/*

  Пахнет Unused Variable
  Что было плохо и почему?
    1) private unusedVariable - неиспользуемое свойство


  Что стало лучше и почему?
   1) удалил неиспользуемое свойство - код стал чище

*/