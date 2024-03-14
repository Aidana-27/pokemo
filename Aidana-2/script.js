// 1
// напишите функцию которая принимает в себя строку состоящую из нескольких слов
// (например «lorem ipsum dolor»), а на выходе
// возвращает строку состоящую из длин каждого слова

// const getLength=(str)=>{
//     return str.split(" ").map((el)=>{
//         return el.length
//     })
// }
// console.log(getLength("lorem ipsum dolor"));



// БЫЛО: “Ну здравствуй дивный мир”
// СТАЛО: “2  10  6  3”

// 2
// напишите функцию которая принимает в себя имя, возраст, пол и на их основе возвращает
// объект. При этом необходимо провести валидацию (проверку), если возраст менее
// 18 лет, то вместо объекта вернуть строку «Не подходит по возрасту»

// const getAge=(obj)=>{
// if (obj.age<18){
//     return "Не подходит по возрасту"
// }else{
//     return obj
// }
// }
// console.log(getAge({
//     name:"Askat",
//     age:"16",
//     floor:"men"
// }));


// Для решения надо отправить github репозиторий

//вам дан массив ["apple","bannana","orange"]



// const getObj=(arr)=>{
//     let obj={}
//  arr.forEach((el,idx) => {
//     obj={...obj,[el]:`${idx+3}kg`}
// })
// return obj
// }
// console.log(getObj(["apple","bannana","orange"]));


// const findAverage = function (nums) {
//     return nums.reduce((acc,el)=>{
// return acc=acc+el/nums.length
//     },0)
//   }
// console.log(findAverage([1,3,5,7]));


// Конец учебного года, роковой момент вашего школьного отчета. Необходимо рассчитать средние значения. Все студенты приходят к вам и умоляют вычислить для них средний балл. Легкий ! Вам просто нужно написать сценарий.
// Возвращает среднее значение данного массива, округленное до ближайшего целого числа.
// Массив никогда не будет пустым

// function getAverage(marks){
//   if(marks.length===0){
//     return 0
//   }
//  return Math.floor(marks.reduce((acc,rec)=>{
//     return acc+rec
//       },0)/marks.length)
  
// }
// console.log(getAverage([15,40,50]));



// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
// name + " plays banjo" 
// name + " does not play banjo"
// Указанные имена всегда являются допустимыми строками

// function areYouPlayingBanjo(name) {
//     if(name[0]==="R"|| name[0]==="r"){
//         ret
//     }
//   }
// console.log(areYouPlayingBanjo("Ruslan") );

// function arrayPlusArray(arr1, arr2) {
//     let a=arr1.reduce((acc,rec)=>{
// return acc+rec
//     },0)
//     let b=arr2.reduce((acc,rec)=>{
// return acc+rec
//     },0)
//     return a+b
//   }
//   console.log(arrayPlusArray([1,2,3,4],[1,21,3,4]));





function findOutlier(integers){
    return integers.find((el)=>{
      if(el>0){
        return el%2!==0
      }
    })
  
  }
  console.log(findOutlier([2,6,8,10,3]));