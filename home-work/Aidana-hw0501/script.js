// Возьмите массив и удалите из него каждый второй элемент. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

// let arr = ["Keep", "Remove", "Keep", "Remove", "Keep"]
// let newArr = arr.filter((el,idx)=>{
//     return idx%2===0;
// })
// console.log(newArr);

// let str = "you will win"
// let newStr = str.split(" ").map((el,idx,arr)=>{
// return el +(" ")+el.length
// })
// console.log(newStr);

//  task 1 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
// Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.

// let str=['Аскар', 'Баяман', 'Калмамат']
// let newStr=str.map((el)=>{
//     return el.toLowerCase().split("а").join("я")
// }).join(" ")
// let newArr=newStr.split(" ").filter(el=> el!=="").map((el)=>{
//         let first = el[0].toUpperCase()
//         let result = el.replace(el[0], first)
//         return result
//     })
// console.log(newArr);

// task 4  Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.

// let arr=[1 ,"Osh",2 ,"Bishkek",3 ,"cat",-3]
// let newArr=arr.filter((el,idx)=>{
//     return el>=0 || el<=0
// })
// console.log(newArr);






