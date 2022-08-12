let firstValue = +prompt('Задание 1. Введите первое значение', 10);
let secondhValue = +prompt('Задание 1. Введите второе значение', 2);

function numberSystemChange(val1, val2) {

  if (!val1 || !val2) {
        return `Некорректный ввод!`;
  } 
  return val1.toString(val2);
}

let result = numberSystemChange(firstValue, secondhValue);
console.log(result);