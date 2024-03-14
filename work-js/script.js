// task1  Вам дан массив: [4, 54, 49]. Сделайте из него массив, 
// состоящий из квадратов этих чисел.

// let arr=[4, 54, 49]
// let arr2=arr.map((el)=>{
//     return el**2
// })
// console.log(arr2);


// let arr=[1,2,3,4]

// arr[0] = arr[0]+1
// arr[1] = arr[1]+1
// arr[2] = arr[2]+1
// arr[3] = arr[3]+1

// console.log(arr);

// можно заменить на ->

// let arr=[1,2,3,4]
// let arr2=arr.map((el)=>{
//    return  el + "hello" 
// })
// console.log(arr2);

// task2 Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.// let arr = [3134, 4, -143, -245, -214]

// let arr= [3134, 4, -143, -245, -214]
// let newArr=arr.map((el)=>{
//     if(el<0){
// return el
//     }else{
// return "положительное число"
//     }
// })
// console.log(newArr);


// task4  Вам дан массив ['Бегимай', 'Баяман', 'Калмамат'].//     Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let arr = ['Бегимай', 'Баяман', 'Калмамат', 'Саша']

// let arr = ['Бегимай', 'Баяман', 'Калмамат', 'Саша']
//  let newArr = arr.map((el)=>{
//     if(el.length>5){
//         return el
//     }else{
//         return"Длина меньше 5"
//     }
//  })
// console.log(newArr);

// task 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
//     Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 40, 135, 2000]
// let newArr= arr.map((el)=>{
//     if(el.toString()[0]==="1" || el.toString()[0]==="2" || el.toString()[0]==="5"){
//         return el
//     }else{
//         return "No"
//     }
// })
// console.log(newArr);


// task 12 Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-
// let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr= arr.map((el)=>{
// return "-"+ el
// }).join("")
// console.log(newArr);

// task 20 Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.

// let str="jzvzszrzpz"
// let str2=str.split("")
// let arr= str2.map((el,id)=>{
//    if (id%2===0){
//     return el
//    }else{
//     return el.toUpperCase()
//    }
// }).join("")
// console.log(arr);

// task 19 Вам дан массив  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].//     Создайте цикл, который выводит нечетные числа, которые больше 10.


// let arr= [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// let newArr = arr.map((el)=>{
//     if(el > 10 && el % 2 === 0 ){
//         return el
//     }
//     else{
//         return "no"
//     }
// })
// console.log(newArr);

// Напишите функцию которая принимает строку “яблоко” и заменяет все буквы “o” на  “a”// let str = "яблоко"

// let str="яблоко"
// let arr= str.replaceAll("о","а")
// console.log(arr);

// let str="walter"
// console.log(str.split("").reverse().join("")==="anna");


// let str="Aidana"
// let newArr = str.split("")
// let a=newArr.map((el)=>{
//     return el + el
// }).join("")
// console.log(a);

// task 1  Напишите функцию, которая принимает массив чисел, // строк и булеан если тип булеан сделайте противоположное значение.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false] 
// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]

// let arr = [1,2,3,4,"string", "hello", true, false]
// let newArr = arr.map((el)=>{
//     if(typeof el === "boolean"){
//         return !el
//     }else{
//         return el
//     }
// })
// console.log(newArr);


// task 4  Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.

// let num = [1,2,3,4,"string", "hello", true, false]
// let newArr = num.map((el)=>{
//     if(typeof el==="number"){
// return el
//     }else{
//         return "не число"
//     }
// })
// console.log(newArr);


// Возвращает массив, содержащий числа от 1 до N, где N — значение параметра.
// Однако замените определенные значения, если выполнено любое из следующих условий:
// Если значение кратно 3: вместо этого используйте значение «Fizz».
// Если значение кратно 5: вместо этого используйте значение «Живая лента».
// Если значение кратно 3 и 5: вместо этого используйте значение «FizzBuzz».
// N никогда не будет меньше 1.

// let num=[1,2,3,4,5,"N"]
// let num1= num.map((el)=>{
//     if(el%3 === 0 && el % 5===0){
//         return "FizzBuzz"
//     }else if( el%5 === 0 ){
//         return "Buzz"
//     }else if (el%3===0){
//         return "Fizz"
//     }else{
//         return el
//     }
// })
// console.log(num1);

















