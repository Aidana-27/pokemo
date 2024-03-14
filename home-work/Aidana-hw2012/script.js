// 1 Вам дана переменная age=*любое двузначное число*. Составьте условие, по которому, в консоль будет выводиться "Мне ** год", "Мне ** лет", в зависимости от возраста. Наример мне 21 год, мне 20 лет.

// let age=44
// if(age>0 && typeof age==="number"){
//     if(age % 100 >= 11 && age % 100 <= 20){
//         console.log(`мне ${age} let`);
//     }else if(age % 10 === 1){
//         console.log(`мне ${age} god`);
//     }else if (age % 10 >= 2 && age % 10 <= 4){
//         console.log(`мне ${age} goda`);
//     }else{
//         console.log(`мне ${age} let`);
//     }
// }else{
//     console.log('Введите число');
// }

// 15. Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие, по которому время будет делиться на четверти. Пример: time = 12 - Первая четверть. Если число больше 60, то в консоли будет выдаваться "Неверное число".

// let time = 4
// if(time>=1 && time<=60 && typeof time==="number"){
// if(time>=1 && time<=15){
//     console.log("Первая четверть");
// }else if(time>=16 && time<=30){
//     console.log("вторая четверть");
// }else if(time>=31 && time<=45){
//     console.log("третья четверть");
// }else if(time>=46 && time<=60){
//     console.log("третья четверть");
// }else{
//     console.log("Введите число от 1 до 60");
// }}

// 14. Вам дана переменная age=*любое двузначное число*. Составьте условие, по которому, в консоль будет выводиться "Мне ** год", "Мне ** лет", в зависимости от возраста. Наример мне 21 год, мне 20 лет.

// let age=44
// if(age>0 && typeof age==="number"){
//     if(age % 100 >= 11 && age % 100 <= 20){
//         console.log(`мне ${age} let`);
//     }else if(age % 10 === 1){
//         console.log(`мне ${age} god`);
//     }else if (age % 10 >= 2 && age % 10 <= 4){
//         console.log(`мне ${age} goda`);
//     }else{
//         console.log(`мне ${age} let`);
//     }
// }else{
//     console.log('Введите число');
// }



//class work

// let age = 23
// let num = age.toString()[1]
// if (age >= 10 && age <= 99) {
//     if (age >= 10 && age <= 20) {
//         console.log("мне " + age + " лет");
//     }else if(num === "1" || num === "2" || num ==="3" || num ==="4"){
// console.log("мне " + age + " год");
//     }else{
//         console.log("мне " + age + " лет");
//     }
// }else {
//     console.log("Введите двузначное число");
// }


// 2 Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие, по которому время будет делиться на четверти. Пример: time = 12 - Первая четверть. Если число больше 60, то в консоли будет выдаваться "Неверное число".

// let time = 4
// if(time>=1 && time<=60 && typeof time==="number"){
// if(time>=1 && time<=15){
//     console.log("Первая четверть");
// }else if(time>=16 && time<=30){
//     console.log("вторая четверть");
// }else if(time>=31 && time<=45){
//     console.log("третья четверть");
// }else if(time>=46 && time<=60){
//     console.log("третья четверть");
// }else{
//     console.log("Введите число от 1 до 60");
// }}

// 3 вам дана переменная “ADA PROGRAMMING” Выведите длину первого слова.

// let a="ADA"
// let b=" PROGRAMMING"
// console.log(a.length+b);

//class work

// let a = "ADA PROGRAMMING"
// console.log(a.split(" ")[0].length);
// split  только к строке

// 4 Вам даны переменные a = "145",b = "37". Выведите сумму.
// let a="145"
// let b="37"
// console.log(Number(a)+ Number(b));

// 5. Вам дана переменная a = 1234567. Выведите длину.

// let a=1234567
// console.log(String(a).length);


//class work

// можно мутировать данные и это никак не меняет первоначальный тип данных

//ОШИБКИ

// 1 тип ошибок это "type error" это говорит о том что мы приминяем метод не к тому типу данных "ошибка типа"
// Например:
//  let a = 9
//  console.log(a.split(""));

// 2 тип ошибок это  "reference error" это ошибка отсылки  в основном он возникает если мы не обявили переменную 
 
// console.log(a);

//  console.log(a);
//  let a = 8

// 3 тип ошибок это "syntax error" ошибка синтаксиса в этом случае мы забыли закрыть фигурные скобки 

// let a = 9
// if (a===9){
//     console.log("hello world");
// }else{
//     console.log("poka");

// let a = "hello world"
// console.log(a.toLowerCase);

// написание кодов методов или переменных
// camelCase Н:toLowerCase,toString,addTwoNums
// kebab-case
// snake_case
// PascalCase Н: Number,

//toLowerCase нижний регистр
//toUpperCase верхний регистр

//.slice взять или опредилить одну часть ее пишем  через круглые скобки без индекса

// let a="Hello World"
// let b= a[0].toUpperCase()
// console.log( b + a.slice(1).toLowerCase());


// 2. Вам дана переменная str = 'Максимально УЖАСНО'. // Выведите в консоль слово УЖАСНО, только нижним регистром.


// let str = "Максимально УЖАСНО"
// let a= str.split(" ")[1]
// console.log(a.toLowerCase());

// 4. Вам дана переменная str = 'Максимально Ужасно'.//  Выведите в консоль 'мально Ужасно', используя метод slice.

// let str = 'Максимально Ужасно'
// console.log(str.slice(5));


// let a="Hello World"
// console.log(a.indexOf("e"));
// console.log(a.lastIndexOf("l"));
// можно использовать для фильтрации
//indexOf индекс первого вхождение(-1 если не встречали это слово или букву)
//lastIndexOf индекс последнего вхождение(-1 если не встречали это слово или букву)

// сколько раз мы втречали букву l больше одного раза, меньше одного раза и один раз

// let a="Hello World"
// let sym= "l"
// if(a.indexOf(sym)===-1){
//     console.log("встречается менее одного раза");
// }else if (a.indexOf(sym)===a.lastIndexOf(sym)){
//     console.log("встречается только один раз");
// }else{
//     console.log("встречается более одного раза");
// }





























