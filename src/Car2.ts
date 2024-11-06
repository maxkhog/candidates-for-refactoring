class Car2 {
  private static readonly COLORS = ['red', 'blue', 'green'];

  public static isColorAvailable(color: string): boolean {
    return this.COLORS.includes(color);
  }
}

/*
  Что было?
  Я вижу класс Car2 со статичными полем COLORS и методом isColorAvailable, 
    
  пахнет Lack of Encapsulation 

  Что было плохо и почему?
    1) возможна проблема с this. При наследовании в подклассах this может
    поменяться и тогда возможно будет расширить исходный readonly массив COLORS

  Что стало лучше и почему?
    1) заменил доступность на static readonly COLORS = ['red', 'blue', 'green'] на private, 
    теперь это поле будет не доступно для потомков для переопределения

*/
