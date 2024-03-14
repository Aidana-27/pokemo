//обьект пишется на фигурных скобках
//  const dress={
//     color: "red",
//     size:"XS",
//     prise:"100$",
// }

//изменение значение
// const human={
//     name:"Aidana",
//     age:"20",
//     nation:"Kyrgyz"
// }
// human.age="21"
// console.log(human);

//добратся до значение
// const pen={
//     name:"Flair",
//     color:"blue",
//     prise:"1$"
// }
// console.log(pen.color);

//удалить значение
// const pen={
//     name:"Flair",
//     color:"blue",
//     prise:"1$"
// }
// delete pen.prise
// console.log(pen);

//можно заморозить обьект и не дать ему менятся 
// const pen={
//     name:"Flair",
//     color:"blue",
//     prise:"1$"
// }
// Object.freeze(pen)
// delete pen.color

// console.log(pen);


//можно получить все ключи обьекта
// const pen={
//     name:"Flair",
//     color:"blue",
//     prise:"1$"
// }
// console.log(Object.keys(pen));

// так же можно получить и все значени обьекта
// const pen={
//     name:"Flair",
//     color:"blue",
//     prise:"1$"
// }
// console.log(Object.values(pen));

//можно получить и поле на обьекте в массиве
// const pen={
//     name:"Flair",
//     color:"blue",
//     prise:"1$"
// }
// console.log(Object.entries(pen));

// task1 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(Object.keys(obj).length);

// task 3 3. Создайте объект заработных плат obj = {Ширин: '1000',
//     Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// const obj={
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: '200'
// }
// console.log(obj.Атай, obj.Ширин);


// task 5 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
//     Добавьте к объекту ключ Медет со значением 1500.

//добавить новое поле в обьект
// const people = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: '200'
// }
// people.Медет="1500"
// console.log(people)

//способы обрашение
// через точку 
//["ключ"] если ключ состоит из двух слов

//что бы в ключ был составлен из двух слов или более можно ключ разместить в ковычки 


// task 9 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Получите все ключи объекта.

// const people={
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: {salary: '500'}
// }
// console.log(Object.keys(people));

// task 13 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] .
//  Выведите все id в консоль через map.

// const getId=(id)=>{
// return id.map((el)=>{
//     return Object.keys(el)
// }).join(" ")
// }
// console.log(getId([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]));



// task15  15. Вам дан объект product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%. Если это не так, сделайте скидку на 7%. Обновите объект.


// const product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// }
// if(product.price>100){
//     console.log(product.price*0.9);
// }else{
//     console.log(product.price*0.93);
// }


// 1 Вам дан обьект
// удалите из обьекта все ключи с негативными значениями
// оставшиеся значения умножить на самих себя

// const getObj = (obj) => {
// let arr=Object.keys(obj)
// arr.forEach((el)=>{
//     if(obj[el]<0){
//         delete obj[el]
//     }else{
//         obj[el]=obj[el]*obj[el]
//     }
// })
// return obj
// }
// console.log(getObj({
//     a: 1,
//     b: -2,
//     c: 8,
//     d: -3
// }));

//task 2
// const findEven=(obj)=>{
//     let arr=Object.keys(obj)
//    return arr.map((el)=>{
//    if(obj[el].length%2===1){
//   return "1"
//    }
//    else{
//      return "0"
//    }
//    })
//   }
//   console.log(findEven({name: 'Igor',address:"Bishkek"}));