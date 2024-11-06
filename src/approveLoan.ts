if (
  isAgeValid(user.age) &&
  user.employmentStatus === 'employed' &&
  !user.criminalRecord
) {
  approveLoan();
}

if (!isAgeValid(user.age)){
  return
}


/*
  Что было?
  я вижу большое условие, которое проверяет возраст, трудовой статус 
  и наличие судимости
    
  пахнет: Long Condition

  Что было плохо и почему?
    1) большое условие
    2) сравнение булевого значения с false


  Что стало лучше и почему?
    1) вынес в отдельную функцию проверку на возраст
    2) добавил !user.criminalRecord - вместо сравнения с false
   
    Guard Clause - не стал использовать - т.к. тут нет вложенности
*/