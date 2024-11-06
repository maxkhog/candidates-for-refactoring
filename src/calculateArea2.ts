function calculateCircleArea(radius: number): number {
  return Math.PI * radius * radius; // "волшебное число" 3.14
}


/*
  Что было?
  
  Даны функция подсчета площади круга
    
  Пахнет Magic Numbers и Misleading Names
  Что было плохо и почему?
    1) есть магическое число 3.14
    2) название функции не точное

  Что стало лучше и почему?
   1) поменял магическое число на Math.PI
   2) заменил название на более точное

*/
