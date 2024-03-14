// 13. Вам дана переменная a='12345'.//  Проверьте, что первым символом этой 
//  переменной является цифра 1, 2 или 3. 
//  Если это так – выведите ‘да’, в противном случае выведите ‘нет’.
// let a= prompt ("type number")
// if (a[0]==="1" || a[0]==="2" || a[0]==="3"){
//     console.log("да");
// }else{
//     console.log("нет");
// }
// trim()  убирает отступы слева и вправо т.е не считает отступы за символы
// let str = "    Hello World    "
// console.log(str.trim());
// let str = "Hello"
// console.log(str.replace("e","a"));
// let str = "Helloeeee"
// console.log(str.replaceAll("e","a"));
// Math.round() округляет число в одно число и где больше как в матиматике
// console.log(Math.round(2.633));
// console.log(Math.floor(2.911)); округляет в меньшую сторону
// console.log(Math.ceil(2.322)); округляет в большую сторону
// console.log(Math.random()); сгенирирует случайное число
// console.log(Math.round(Math.random()*10));



// 7. Вам дана переменная arr = ["hello",1,2,"hello",3].
//    Выведите в консоль "встречается более 1 раза",
//    если "hello" встречается более 1 раза, иначе "встречается менее одного раза"

// let arr= ["hello",1,2,"hello",3]
// if(arr.indexOf("hello")===arr.lastIndexOf("hello")){
//     console.log("встречается менее одного раза");
// }else {
//     console.log("встречается более 1 раза");
// }


// console.log(Math.min(1, 2, 3, 4));
// console.log(Math.max(1,2,3,4));


//массивы это набор любых данных

// let arr = ["hello", 123, true]
// console.log(arr);

// в массиве к каждому из них можно обратится через индексы "hello"  у него 0 индекс

// let a = ["hello", 1234 , true]
// a[3] = 1
// a[1] = false
// console.log(a);
// так можно изменить какое то значение или что то добавить 


// let arr = ["hello", 1234 , true]
// let newArr = [ 1,2,3,4]
// arr[3] = newArr[0]
// arr[4] = newArr[1]
// arr[5] = newArr[2]
// arr[6] = newArr[3]
// console.log(arr);

// let arr = ["hello", 1234 , true]
// arr[0] = arr[0]+1
// arr[1]= arr[1]+"1"
// arr[2]=arr[2]+"1"
// console.log(arr);

//перебор массива это достучатся до каждого элемента и что то с этим элементом сделать 
//map  это метод перебора массива основанный на циклах
//map  перебирает массив и возвращает новый массив с таким же количеством данныхю Ее нельзя использовать по отношению к number,string 
// let arr = ["hello", 1234 , true,23,34,46,67,79,80]
// let newArr = arr.map((el)=>{
// return el+"1";
// })
// console.log(newArr);

//сделать так что бы "Hello"  изменился на "Hheelllloo"

// let str="hello"
// let a=str.split("")
// let b= a.map((el)=>{
// return el+el
// }).join("")
// console.log(b);

//map он не мутирует поэтому его надо в отдельную переменую. Map работает только в массиве

//нужно четные числа изменить на "odd" если нечетные то на "even"
// let arr = [1,2,3,4,5]
// let a = arr.map((el)=>{
//     if(el%2===0){
//         return "even"
//     }else{
//         return "odd"
//     }
// }) 
// console.log(a);















