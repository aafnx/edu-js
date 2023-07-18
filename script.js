// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

const num1 = Number(prompt('Введите первое число'));
const num2 = Number(prompt('Введите второе число'));

alert((num1 <= 1) ? 'Первое число подходит' : 'Первое число НЕ подходит');
alert((num2 >= 3) ? 'Второе число подходит' : 'Второе число НЕ подходит');



// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

let test = true;
console.log((test === true) ? '+++' : '---');


// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = parseInt(Math.random() * 31 + 1);
if (day <= 10) {
    alert(`День ${day} — Первая декада`);
} else if (day <= 20) {
    alert(`День ${day} — Вторая декада`);
} else if (day <= 31) {
    alert(`День ${day} — Третья декада`);
}

// Задание 4
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"
// Уточнение: пользователь всегда вводит корректное положительное целое число.

const userNumber = Number(prompt('Введите число'));
let remainderFromUserNumber = userNumber;
const result = [];

for (let i = 0; i < 3; i++) {
    result.push(parseInt(remainderFromUserNumber) % 10);
    remainderFromUserNumber /= 10;
}

alert(`В числе ${userNumber} количество сотен: ${result[2]}, десятков: ${result[1]}, единиц: ${result[0]}`);

// еще вариант через строки
const userNumberString = prompt('Введите число');
let resultString = '';

for (let i = 3; i > 0; i--) {
    const number = (userNumberString[userNumberString.length - i] === undefined) ? '0' : userNumberString[userNumberString.length - i];
    resultString += number;
}

alert(`В числе ${userNumberString} количество сотен: ${resultString[0]}, десятков: ${resultString[1]}, единиц: ${resultString[2]}`);





