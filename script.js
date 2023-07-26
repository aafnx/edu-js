// **Задание 1**
// Необходимо с помощью цикла `for` вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function task1(iteration) {
    for (let i = 0; i <= iteration; i++) {
        if (i === 0) {
            console.log(`${i} — это ноль`);
            continue;
        }
        console.log((i % 2 === 0) ? `${i} — это четное число` : `${i} — это нечетное число`);
    }
}
task1(10);


// **Задание 2**
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);



// **Задание 3**
// Используя `Math.random()` вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const rndArray = [];
for (let i = 0; i < 5; i++) {
    rndArray.push(parseInt(Math.random() * 10));
}
console.log(rndArray);

// 1. сумма
console.log(rndArray.reduce((sum, item) => sum + item));

// 2. минимальное число
let min = Infinity;
rndArray.forEach(item => min = min < item ? min : item);
console.log(min);

// еще проще
console.log(Math.min(...rndArray));

// 3. есть ли 3 в массиве
const isThreeInArray = rndArray.includes(3);
console.log(isThreeInArray ? '3 содержится' : '3 отсутствует');

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл `for`), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// ```
// x
// xx
// xxx
// xxxx
// xxxxx
// ```

function drawMountain(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += symbol
        }
        console.log(str);
    }
}

drawMountain(20, '*');