enum ShapeType {
  Circle,
  Square,
}

interface Circle {
  type: ShapeType.Circle;
  radius: number;
}

interface Square {
  type: ShapeType.Square;
  side: number;
}

type Shape = Circle | Square;

function calculateArea(shape: Shape): number {
  switch (shape.type) {
    case ShapeType.Circle:
      return Math.PI * Math.pow(shape.radius, 2);
    case ShapeType.Square:
      return Math.pow(shape.side, 2);
  }
}

console.log(calculateArea({type: ShapeType.Circle, radius: 5})); // Output: 78.54


/*

  Пахнет Primitive Obsession, Temporary Field
  Что было плохо и почему?
    1) параметры функций простые значения и смешивается специфичность фигур в radiusOrSide
    2) используется временная переменная area
    3) Можно поменять избавиться от swith
  Что стало лучше и почему?
   1) добавил обЪект Shape: теперь не смешивается специфичность фигур
   2) сделал return значения 
   3) не сделал т.к. нужно вносить много изменений

*/