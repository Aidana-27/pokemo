// let getSum=function (a,b){//function через обьявление переменной
// return  a+b
// }
// getSum(1,2)


//fuction des через ключевое слово
// function getSum(){

// }
// getSum()

 
//arrow Function это стрелочная функция он отличается по синтаксису, нет arguments , у стрелочной функции нет своего контекста
//обьявляется через const, тоже называть надо через глаголы, ()=>{}стрелочная функция
// const getSum=(a,b) => {
// return a+b
// }
// console.log(getSum(2,3));


//вам дан массив ["Sasha","Masha","Ivan"] выведите  строку в котором есть слово и рядом количество

// const getStr=(arr)=>{
//     return arr.map((el)=>{
//         return `${el} ${el.length}`
//     }).join(", ")
// }
// console.log(getStr(["Sasha","Masha","Ivan"]));

//&&
//||
//неочивидные операции с булеан

//""=false пустая строка
// 0= false
//undefined=false
//nul=false
//false=false
// то есть элементы сами по себе тоже могут быть false или true


//number=true любая цивра отличающиеся от 0 даже минусовые
//"kkmkjnj"=true
//[]=true пустой массив
//{}=true пустой обьект

  
// в неочивидных логических умножениях если первая часть true то работает вторая часть, если первая часть false то работае первая часть 

// console.log(1234 && "Hello");неочивидное операция или логические сравнение 
// console.log(true && false); очивидное операция с булеан

// console.log(123 && "hello");
// console.log(undefined && false);
// console.log("" && 234);


//если неочивидных логических сложениях если первая часть true то работает первая часть, если первая часть false то работает вторая часть 

// console.log("" || []);
// console.log(false || "32543");
//работает по тому же принципу как в математике сначала умножение потом уже сложение

//вам дан массив [777 , false , undefined] найдите результат логического умножение над ними

// const getBoolean=(arr)=>{
// return arr.reduce((acc,rec)=>{
// return acc&&rec 
// },true) 
// }
// console.log(getBoolean([777 , false ,undefined]));
//(){} никогда не меняется

//цыклы

//1 цыкл for условие (), действие  {}

// console.log("hello"); цыклу нужно знать откуда начинать и до какого
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
//i++ это сокращение от i= или i+1

// let arr=[]
// for(let i=0; i<10;i++){
//    arr=[...arr,i]
// }
// console.log(arr);


// let arr=""
// for(let i=0;i<10;i++){
//     arr=arr+"x"
//     console.log(arr);
// }

//вам дана строка "hello" повторите каждый символ 3 раза

// const getStr=(str)=>{
//     let newStr=str.split("")
//     let newStr2=""
//     for(let i=0;i<str.length;i++){
//         newStr2=newStr2+newStr[i]+newStr[i]+newStr[i]
//     }
//     console.log(newStr2);
// }
// getStr("hello");








