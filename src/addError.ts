type TReadonlyList<T> = ReadonlyArray<T>;

enum WarningType {
  LEGACY_CODE_DEPENDENCY,
}

type TWarning = {
  type: WarningType;
};

const createWarning = (type: WarningType): TWarning => {
  return {
    type,
  };
};

const addError = (errors: TReadonlyList<TWarning>, errorType: WarningType ) => {
  return [...errors, createWarning(errorType)];
};


const addLegacyCodeDependencyError = (errors: TReadonlyList<TWarning>) => {
  return [...errors, createWarning(WarningType.LEGACY_CODE_DEPENDENCY)];
};

/*
  Что было?
  объявлена функция addError которая получает на вход массив ошибок и 
  туда добавляет warning
  
  Что было плохо и почему?
  очень сильно пахнет Misleading Names

  1) в примере идет смешение warning и error, но я исхожу из того 
  что это так задумано

  2) плохое название функции addError, которое подразумевает, 
  что можно добавить любую ошибку

  3) массив errors в функции мутируется  

  Что стало лучше и почему?

  1)  не стал ничего менять, 
 
  2)  добавил в функцию addError возможность создавать ошибки всех типов
      добавил функцию addLegacyCodeDependencyError - которая добавляет 
      ошибку LEGACY_CODE_DEPENDENCY 

  3)  добавил неизменяемый массив и функции возвращают новый массив, а не 
      мутируют исходный
  
*/
