// 1. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

/**
 * Determine if an array contains a string.
 * @param {array} array
 * @param {string} string
 * @returns {boolean}
 */
function hasElem(array, string) {
  return array.includes(string);
}

// 2. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

/**
 * Determine if an array contains a number.
 * @param {array} array
 * @param {number} number
 * @returns {boolean}
 */
function hasNumber(array, number) {
  return array.includes(number);
}

// 3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true  [2,2,1], а если нет - вернуть false [1,2,1].

/**
 * Check if an array contains two identical numbers in a row.
 * @param {array} array
 * @returns {boolean}
 */
function hasIdenticalNumbers(array) {
  return array.some(function (element, i, array) {
    return i !== 0 && element === array[i - 1];
  });
}

// 4. Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()

let randomNumbersArray = [];
/**
 * Get random numbers in the interval and fill the array with them.
 * @param {number} min 
 * @param {number} max 
 * @param {number} count 
 * @returns {array}
 */
function getRandomNumbers(min, max, count) {
  for (let i = 0; i < count; i++) {
    randomNumbersArray[i] = Math.round(Math.random() * (max - min) + min);
  }
  return randomNumbersArray;
}
getRandomNumbers(5, 33, 10);