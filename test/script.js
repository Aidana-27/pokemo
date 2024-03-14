// 3. Вам дана переменная a=-2. Составьте условие, 
// по которому в консоль будет выводиться 'positive' 
// - если число больше 0, 'равно' если число равно 0, 
// "negative" если число меньше 0
// let a=-2
// if(a>0){
//     console.log("positive");
// }else if(a===0){
//     console.log("равно");
// }else{
//     console.log("negative");
// }


//9. Вам дана переменная str = 'Максимально Ужасно'.
//  Выведите в консоль индекс первого последнего буквы о
// let str="Максимально Ужасно"
// let a=str.indexOf("о")
// console.log(str.lastIndexOf("о"));

// function solution(str){
//     return str.split("").reverse("").join("")
//   }

// console.log(solution("hello"));

// task 1  Напишите функцию, которая принимает массив чисел, 
// строк и булеан если тип булеан сделайте противоположное значение.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false] 
// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]

// let arr=[4,54,49]
// let newArr=arr.reduce((acc,rec)=>{
// return acc=[...acc,rec**2]
// },[])
// console.log(newArr);

// let arr=[4,54,49]
// let arr2=[]
// arr.forEach((el)=>[
//     arr2=[...arr2,el**2]
// ])

// console.log(arr2);
// task2 Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// let arr = [3134, 4, -143, -245, -214]
// let arr=[3134, 4, -143, -245, -214]
// let newArr=arr.filter((el)=>{
//     return el<0
// })
// console.log(newArr);

// let arr = [3134, 4, -143, -245, -214]
// let newArr=arr.reduce((acc,rec)=>{
// if(rec<0){
//     acc=[...acc,rec]
// }
// return acc
// },[])
// console.log(newArr);

// let arr=[3134, 4, -143, -245, -214]
// let newArr=[]
// arr.forEach((el)=>{
//     if(el<0){
//         newArr=[...newArr,el]
//     }
// })
// console.log(newArr);


//task7 Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.
// let arr = [55, 44, 55, 44, 15, 49]
// let newArr=arr.filter((el,ind,arr)=>{
//     if(arr.indexOf(el)===arr.lastIndexOf(el)){
//         return arr
//     }
// })
// console.log(newArr);

// let arr = [55, 44, 55, 44, 15, 49]
// let newArr=arr.reduce((acc,rec,ind,arr)=>{
// if(arr.indexOf(rec)===arr.lastIndexOf(rec)){
//     acc=[...acc,rec]
// }
// return acc
// },[])
// console.log(newArr);

// let arr = [55, 44, 55, 44, 15, 49]
// let newArr=[]
// arr.forEach((el)=>{
//     if(arr.indexOf(el)===arr.lastIndexOf(el)){
//         newArr=[...newArr,el]
//     }
// })
// console.log(newArr);

// task 6 С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let num=0
// for (let i=1; i<=100;i++){
//     num= num+i
// }
//  console.log(num);








// 1. Вам дана переменная
//  str = ‘LIGHTCODE PROGRAMMING’. 
// Выведите в консоль длину первого слова

// const getLength=(str)=>{
// let newStr= str.split(" ")
// return newStr[0].length
// }
// console.log(getLength('LIGHTCODE PROGRAMMING'));


 

// "4",  "5" --> "9"

// const getSum=(str,str2)=>{
// let num=Number(str)+Number(str2)
// return String(num)
// }
// console.log(getSum("4","5"));




// / task 2 2. Создайте объект  obj = {a: 1, b: 2, c: 3}.
//     Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.

// const obj={
//     a:1,
//     b:2,
//     c:3
// }
// console.log(obj.c);
// console.log(obj["c"]);

// task 16 Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
//     С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти


// let arr= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// let result=[]
// for(let i=0; i<arr.length;i++){
//     if(arr[i]>0 && arr[i]<10){
//         result=[...result,arr[i]]
//     }
// }
// console.log(result);

// function onesComplement(n) {
//   let result=""
//   for(let i=0;i<n.length;i++){
//     if(n[i]==="0"){
//       result+="1"
//     }else if(n[i]==="1"){
//       result+="0"
//     }
//   }
//   return result
// }

// console.log(onesComplement(""));


