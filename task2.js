let thirdValue = +prompt('Задание 2. Введите первое значение', 872);
let fourthValue = +prompt('Задание 2. Введите второе значение', 8);

function showCalculationResult(val1, val2) {

  if (!val1 || !val2) {
    return `Некорректный ввод!`;
  } 
  return `Ответ: ${val1 + val2}, ${val1 / val2}.`;
}

let result2 = showCalculationResult(thirdValue, fourthValue);
console.log(result2);
