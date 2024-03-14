// task 1 Напишите функцию, которая принимает массив чисел,
// строк и булеан если тип булеан сделайте противоположное значение.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false]
// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]

// let arr = [1,2,3,4,"string","hello", true, false]
// let newArr = arr.map((el)=>{
//     if(el===false){
//         return "true"
//     }else if(el===true){
//         return "false"
//     }else{
//         return el
//     }
// })
// console.log(newArr);

// task 2
// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.
// Пример входных данных: "test"
// Результат: "tteesstt"

// let arr="test"
// let a=arr.split("")
// let b = a.map((el)=>{
//     return el+el
// }).join("")
// console.log(b);

// task 3
// Напишите функцию, которая принимает строку и выводит индекс каждого символа

// let arr = "hello"
// let a = arr.split("").map((el,index)=>{
//     return index
// })
// console.log(a);



// task 4
// Напишите функцию которая принимает массив с четными и нечетными числами
//и возвращает вместо четных “четное” вместо нечетных “нечетное”

// let arr = [1,2,3,4,5]
// let a = arr.map((el)=>{
//     if(el%2===0){
//         return "четное"
//     }else{
//         return "нечетное"
//     }
// })
// console.log(a);



// task-5 // Вам дана переменная str = 'максимально ужасно'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// let str = 'Максимально Ужасно'

// let str = "максимально  ужасно"
// const task = str.split(" ").filter(el=> el!=="").map((el)=>{
//     let first = el[0].toUpperCase()
//     const result = el.replace(el[0], first)
//     return result
// }) .join(" ")
    
// console.log(task);