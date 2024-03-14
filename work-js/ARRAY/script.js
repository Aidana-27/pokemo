// let arr=[1,2,3,"hello","world",12]
// let newArr=arr.map((el,test,arr)=>{
// return arr
// })
// console.log(newArr);

//конкатинация "" + "" "Обычное сложение строк"
// let str=[1,2,3,12]
// let newStr=str.map((el)=>{
//     return "мне " + el + " лет"
// })
// console.log(newStr);

//интерполяция часто использовается(обратная ковычка, доллар , фигурные скобки, элемент)"более элегатная сложение строк"
// let str=[1,2,3,12]
// let newStr=str.map((el)=>{
//     return ` мне ${el} лет`
// })
// console.log(newStr);

// let str=[1,2,3,12]
// let name="Aidana"
// let newStr=str.map((el)=>{
//     return ` hello ${name} `
// })
// console.log(newStr);

//filter это метод массива который переберает массив и возвращает новый массив с нужным количеством элементов. В этом методе уже содержится условие

// let arr = [1,2,3,4,5,12,23]
// let newArr=arr.map((el)=>{
//     if(el % 2 === 0){
//         return el
//     }else{
//         return "no"
//     }
// })
// console.log(newArr);


//filter здесь не нужно использовать if else
// let arr = [1,2,3,4,5,12,23,24]
// let newArr = arr.filter((el)=>{
//     return el % 2 === 0
// })
// console.log(newArr);

//как выбрать метод
//1. это массив или нет, если это массив то выбираем один из 5 методов
//2. мне нужно перебрать эти элементы или нет?
//3. мне нужно что то вернуть или нет?
//4. мне нужно вернуть массив?
//5. мне нужно вернуть такое же количество элементов?

// вывести число только отрицательных чисел "сколько их там"
// let arr=[1,-2,3,-3,5,-6,7,-8,10]
// let newArr=arr.filter((el)=>{
//     return el < 0
// })
// console.log(newArr.length);

// task6  Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
// Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// let arr = [3, 51, -30, -54, 60]
// let newArr = arr.filter((el)=>{
//     return el > 30
// })
// let newArr2=newArr.map((el)=>{
//     return Math.sqrt(el)
// })
// console.log(newArr2);

// task7 Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.

// let arr = [55, 44, 55, 44, 15, 49]
// let newArr=arr.filter((el)=>{
//     return  arr.indexOf(el)===arr.lastIndexOf(el)
// })
// console.log(newArr);

// task8 Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.

// let str = ["Бегимай", "Баяман", "Калмамат"]
// let newStr = str.map((el)=>{
//     return el.length
// })
// console.log(newStr);

// alert("hello")

// коньюкция логическое умножение &&(и) 1 * 0 = false
// дизьюнкция логическое сложение ||(или) 1 + 0 = 1 true

// вам дан массив оставте в нем только четные числа
// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newArr=arr.filter((el)=>{
//     return el%2===0
// })
// console.log(newArr);

//вам дана строка "hello" верните строку в обратном порядке

// let str="test"
// let newStr = str.split("")
// let newStr2 = newStr.map((el,idx,arr)=>{
//  return arr[arr.length-1-idx];
// }).join("")
// console.log(newStr2);

//метод перебирание sort() он мутирует 
// let arr=["a","r","s","b"]
// console.log(arr.sort());

// let arr=[1,3,2,4,6,5] по возврастанию
// let newArr = arr.sort((a,b) => a-b)
// console.log(newArr);

// let arr=[1,3,2,4,6,5] по убыванию
// let newArr = arr.sort((a,b) => b-a)
// console.log(newArr);

// let arr=["a","r","s","b"]
// let newArr = arr.sort()
// console.log(newArr);

// let str="toffee"
// let str2="foefet"
// let newStr =str.split("").sort().join("")
// let newStr2=str2.split("").sort().join("")
// console.log(newStr===newStr2);

// Возьмите массив и удалите из него каждый второй элемент. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

// let arr = ["Keep", "Remove", "Keep", "Remove", "Keep"]
// let newArr = arr.filter((el,idx)=>{
//     return idx%2===0;
// })
// console.log(newArr);


// let arr = [1,2,true,"hello","test",false]
/// вам дан массив найдите булеан и сделайте его против-м

 
// let arr = [1,2,true,"hello","test",false]
// let newArr = arr.find((el)=>{
//     return typeof el === "boolean"
// })
// console.log(!newArr);

//найдите значение с четным количеством символов и повторите это значение

// let arr=[1,2,4,"test","hello","world"]
// let newArr=arr.find((el,idx)=>{
//     return el.length === 4
// })
// console.log(newArr+" "+newArr);


// let arr=[1,2,3]
// let newArr=[4,5,6,7]
// let newArr2=[...arr,newArr]
// console.log(newArr2);




//// spread операторы помогают нам избежать мутацию 
//// ... это все что внутри массива бери начинку или бери что есть внутри


//вам дан массив [1,2,3,4,5,6] найдите максимальное число
// let arr=[1,2,3,4,5,6]
// console.log(Math.max(...arr));

//Вам дан пустой массив в этот массив надо положить 1234

// let arr=[]
// let newArr=[1,2,3,4]
// let newArr2=[...newArr,"hello"]
// console.log(newArr2);
//можно что угодно добавить после spread оператора Н(75,...newArr,"hello",1,2)






// let name="Sasha ivanova"
// let newName=name.split(" ").map((el,idx)=>{
//     return el[0].toUpperCase() + el.slice(1)
// }).join(" ")
// console.log(newName);


















































