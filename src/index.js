/**
 * Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
 * во третьем и четвертом максимальное и умножить эти два числа
 * @param {number} minFirst
 * @param {number} minSecond
 * @param {number} maxFirst
 * @param {number} maxSecond
 * @returns {number}
 */
export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {
    const minNum = Math.min(minFirst, minSecond);
    const maxNum = Math.max(maxFirst, maxSecond);
    const result = minNum * maxNum;
    return result
};


/**
 * Функция принимает один числовой аргумент, это радиус круга. Функция должна
 * вернуть площадь круга, формулу найдите в интернете, если не помните
 * и число пи используйте встроенное в js
 * @param {number} radius
 * @returns {number}
 */
export const getSquareOfCircle = (radius) => {
    const square = Math.PI * (radius ** 2);
    return square
};

/**
 * Функция принимает число и точность к которой нужно округлить
 * Примеры можно смотреть в checks.js
 * Нужно использовать Math.round
 * @param {number} number
 * @param {number} accuracy
 * @returns {number}
 */
export const getFixedValue = (number, accuracy) => {
    let rounded;
    const rest = number % 1;
    const integer = number - rest;

    if (accuracy === 1) {
        rounded = (Math.round(rest * 10)) / 10;
    } else if (accuracy === 2) {
        rounded = (Math.round(rest * 100)) / 100;
    } else if (accuracy === 3) {
        rounded = (Math.round(rest * 1000)) / 1000;
    } else {
        alert('This value of accuracy is not correct');
    }
    return integer + rounded;

};

/**
 * Если целая часть числа четная, то срабатывает Math.floor для этого числа
 * если нечетное, то Math.ceil
 * @param {number} number
 * @returns {number}
 */
export const getFlooroCeil = (number) => {
    const integer = number - (number % 1);
    let result;

    if (integer % 2 === 0) {
        result = Math.floor(number);
    } else {
        result = Math.ceil(number);
    }
    return result
};


/**
 * Мы передаем два числа, от какого и до какого числа и функция должна
 * выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
 * Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
export const randomizer = (from, to) => {
    return Math.floor(Math.randoь() * (to - from + 1) + from);
};
