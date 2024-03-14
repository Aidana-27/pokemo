// task1  Вам дан массив: [4, 54, 49]. Сделайте из него массив,
// состоящий из квадратов этих чисел. Используйте foreach
// let arr=[4, 54, 49]
// let newArr=[]
// arr.forEach((el)=>{
//      newArr=[...newArr,el**2]
// })
// console.log(newArr);

// task2 Вам дан массив [3134, 4, -143, -245, -214]. Выведите первое отрицательное число

// let arr=[3134, 4, -143, -245, -214]
// let newArr=arr.find((el)=>{
//     return el<0
// })
// console.log(newArr);

// task3 Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа. Используйте foreach

// let arr=[3, 51, 30, 54, 60]
// let newArr=[]
// arr.forEach((el)=>{
//  if(el%2===0){
//    newArr= [...newArr,el]
//  }
// })
// console.log(newArr);

// task4  Вам дан массив ['Бегимай', 'Баяман', 'Калмамат','Саша'].
// Оставьте в нем  строку, длина которой больше 5-ти символов.
// let str=["Бегимай","Баяман","Калмамат","Саша"]
// let newStr=str.find((el,idx)=>{
//     return el.length>5
// })
// console.log(newStr);


// task5  Вам дан массив [-13, 96, -41, -28, 40].
// Посчитайте количество отрицательных чисел в этом массиве. Используйте foreach
// let arr= [-13, 96, -41, -28, 40]
// let newArr=[]
// arr.forEach((el)=>{
//     if(el<0){
//         newArr=[...newArr,el]
//     }
// })
// console.log(newArr.length);


// task6  Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
// Затем возведите в третью степень Используйте foreach
// let arr=[3, 51, -30, -54, 60]
// let newArr=arr.filter((el)=>{
//     return el>0
// })
// let newArr2=[]
// newArr.forEach((el)=>{
//     newArr2=[...newArr2,el**3]
// })
// console.log(newArr2);


// task7 Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем первое неповторяющееся число.
// let arr=[55, 44, 55, 44, 15, 49]
// let newArr=arr.find((el,idx,arr)=>{
//     return arr.indexOf(el)===arr.lastIndexOf(el)
// })
// console.log(newArr);



// task8 Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки. Используйте foreach
// let str=['Бегимай', 'Баяман', 'Калмамат']
// let newStr=[]
// str.forEach((el)=>{
//    newStr=[...newStr,el.length]
// })
// console.log(newStr);

// вам дана строка и массив нужно обьяденить их Н:"hello world test hi"
// let str='hello'
// let arr=['world','test','hi']
// arr.forEach((el,idx,arr)=>{
//    str=str+" "+el
// })
// console.log(str);

//найдите среднее ариф-кое 

// let arr=[1,2,3,4,5,6]
// let newArr=0
// arr.forEach((el,idx,arr)=>{
//     newArr= newArr+el
// })
// console.log(newArr/arr.length);



//найдите произ-ние чисел

// let arr=[1,2,3,4]
// let newArr=1
// arr.forEach((el)=>{
//     newArr=newArr*el
// })
// console.log(newArr);


//reduce

// let arr=[1,2,3,4]
// let newArr=arr.reduce((acc,rec,idx,arr)=>{
// return acc+rec
// },0)
// console.log(newArr);

// let arr=[1,2,3,4]
// let newArr=arr.reduce((acc,rec,idx,arr)=>{
// return acc=[...acc,rec+1]
// },[])
// console.log(newArr);


// let arr=[false,false,false,false]
// let newArr=arr.reduce((acc,rec)=>{
// return acc||rec
// },false)
// console.log(newArr);





// let arr=[4, 54, 49]
// let newArr=arr.reduce((acc,rec)=>{
//     return acc=[...acc,rec**2]
// },[])
// console.log(newArr);


// let str=['Бегимай', 'Баяман', 'Калмамат']
// let newStr=str.reduce((acc,rec)=>{
// return acc=[...acc,rec.length]
// },[])
// console.log(newStr);


 1                                           //11.01.2024

// let arr=[1,2,3,4]
// let newArr=arr.reduce((acc,rec)=>{
//     return acc+rec
// },0)
// console.log(newArr);



// let arr=[-1,2,-3,5,6,-6]
// let newArr=arr.reduce((acc,rec,idx,arr)=>{
// if(rec<0){
//    return acc+rec
// }else{
//   return acc
// }
// },0)
// console.log(newArr);


// task 1  Напишите функцию, которая принимает массив чисел,
// строк и булеан если тип булеан сделайте противоположное значение.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false] 
// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]

// let arr = [1,2,3,4,"string", "hello", true, false]
// let newArr=arr.reduce((acc,rec)=>{
// if(typeof rec==="boolean"){
//     return acc=[...acc,!rec]
// }else{
//     return acc=[...acc,rec]
// }
// },[])
// console.log(newArr);


// task 2// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.
//     Пример входных данных: "test"
//     Результат: "tteesstt"
// let str="test"
// let newStr=str.split("").reduce((acc,rec)=>{
// return acc+rec+rec
// },"")
// console.log(newStr);


// task 3// Напишите функцию, которая принимает строку и выводит индекс каждого символа
//  let str = [1,2,3,4,5,4]
//  let newStr=str.reduce((acc,rec,idx)=>{
// return acc=[...acc,idx]
//  },[])
// console.log(newStr);


//Function
// function myFunction(a,b){               //параметры
// return a+b
// }
// console.log(myFunction(2,3));           //запуск функции без консоль.(2,3)-аргументы


//  function getId (arr){
// return arr.filter((el,idx)=>{
//     return idx===el%2
// })
//  }
// console.log(getId([[22, -6, 32, 82, 9, 25]]));



// function getSum(a,b){
//     return Number(a)+Number(b)+""
       
// }
// console.log(getSum("2","4"));










