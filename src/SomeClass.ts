class SomeClass {

  public someMethod() {
    this.doSomethingSafe();
  }

  private doSomethingSafe() {
     console.log('Safe operation')
  }
}


/*

  Пахнет Dead Code
  Что было плохо и почему?
    1) есть не используемый метод neverUsedMethod
    2) есть условие которое никогда не будет выполнено
    3) doSomethingSafe - метод по умолчанию безопасный

  Что стало лучше и почему?
    1) убрал метод neverUsedMethod
    2) убрал условие которое никогда не будет выполнено
    3) убрал try catch - у безопасного метода

*/