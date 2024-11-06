const square = (number: number) => {
  return number * number;
};


/*
  Что было?
    функция calculate которая считает квадрат числа
    пахнет Misleading Names
  Что было плохо и почему?
    1) плохой нейминг функции - не отображает полностью что выполняет функция
    2) возможно производительность умножение числа меньше, чем Math.pow() 
  Что стало лучше и почему?
    1) назвал функцию square - название отображает назначение функции
 
*/
