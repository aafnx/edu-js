// **Задание 1**
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const getNumberCube = number => Math.pow(number, 3);
const cubeNumberTwo = getNumberCube(2)
const cubeNumberThree = getNumberCube(3)
console.log(cubeNumberTwo, cubeNumberThree);
console.log(cubeNumberTwo + cubeNumberThree);

// **Задание 2**
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const getSalaryAfterTax = number => number * 0.87;

const checkForNanDataFromUser = data => Number.isNaN(data) ? true : false;

function showSalaryAfterTax() {
    const salaryFromUser = Number(prompt('Введите размер заработной платы'));

    console.log(checkForNanDataFromUser(salaryFromUser) ? 'Вы ввели неверное значение' : `Размер заработной платы за вычетом налогов равен ${getSalaryAfterTax(salaryFromUser)}`);
}

showSalaryAfterTax();

// **Задание 3**
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function maxNumber() {
    const number1 = Number(prompt('Введите первое число'));
    const number2 = Number(prompt('Введите второе число'));
    const number3 = Number(prompt('Введите третье число'));

    let max = number2 > number1 ? number2 : number1;
    max = number3 > max ? number3 : max;
    return max;
}

console.log(maxNumber());

// **Задание 4**
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление

// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.


const sum = (a, b) => a + b;
const difference = (a, b) => a > b ? a - b : b - a;
const mult = (a, b) => a * b;
const division = (a, b) => b === 0 ? 'Ошибка на ноль делить нельзя' : a / b;

console.log(sum(2, 6));
console.log(difference(2, 6));
console.log(difference(27, 3));
console.log(mult(2, 6));
console.log(division(0, 0));
console.log(division(10, 0));
console.log(division(0, 23));
console.log(division(2, 10));
console.log(division(8, 4));

