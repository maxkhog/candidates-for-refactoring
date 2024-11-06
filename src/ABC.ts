class A {
  // ...
  getB() {
    return new B();
  }
}

class B {
  // ...
  getC() {
    return new C();
  }
}

class C {
  // ...
  doSomething() {
    // Логика
  }
}

// Использование транзитивного обращения
const a = new A();
const b = a.getB()
const c= b.getC()
c.doSomething();



/*
  Что было?
  Я вижу две абстрактные фабрики:
    1) класс A создает объекты класса B
    2) класс B создает объекты класса С 

  пахнет: Message Chains
  Что было плохо и почему?
    транзитивное обращение к методы класса С doSomething может запутать 

  Что стало лучше и почему?
    явно объявляются интсансы классов B и С b тем самым вызов метода doSomething стал явным
*/