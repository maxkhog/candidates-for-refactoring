
// Модуль 1
function calculateTotalPrice (items: {price: number}[]) :number {
  return items.reduce((total, item) => total + item.price, 0)
}



// Модуль 2
function applyDiscount(totalPrice: number, discountPercentage: number): number {
  if ( discountPercentage < 0 || discountPercentage > 100) {
    throw new Error('discountPercentage must be between 0 and 100')
  }
  return totalPrice * (1 - discountPercentage / 100);
}




/*
  Что было?
  Я вижу две функции:
    1) calculateTotalPrice считает общую сумму цен items
    2) applyDiscount - считает общую сумму учитывая скидку
    
  пахнет: For Loop Smell и Temporary Field

  Что было плохо и почему?
    1) нет типов параметров функций 
    2) forEach - можно заменить на reduce
    3) нет проверки на то что discountPercentage в диапозоне от 0 до 100
  Что стало лучше и почему?
    1) добавил типы в параметры функций
    2) заменил forEach на reduce
    3) добавил проверку чтобы discountPercentage был в диапазоне от 0 до 100 
   
*/

