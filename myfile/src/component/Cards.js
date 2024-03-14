import React , {useState} from 'react'
import axios from 'axios'

function Cards() {
  const [obj,setObj]=useState({})
    axios('https://www.cbr-xml-daily.ru/daily_json.js')
  .then(({data}) => setObj(data.Valute))
let newObj=Object.values(obj)
console.log(newObj);
  return (
  <>
  <section className="hero mx-auto w-10/12 grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-5">
{
newObj.map((el)=>(
<div class="card each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
    <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">{el.CharCode}</div>
    <div class="desc p-4 text-gray-800">
      <span className='title text-sm block py-2 border-gray-400 mb-2"'>{el.ID}</span>
      <span class="description text-sm block py-2 border-gray-400 mb-2">{el.CharCode}</span>
      <span class="description text-sm block py-2 border-gray-400 mb-2">{el.Name}</span>
      <span class="description text-sm block py-2 border-gray-400 mb-2">{el.Nominal}</span>
      <span class="description text-sm block py-2 border-gray-400 mb-2">{el.NumCode}</span>
      <span class="description text-sm block py-2 border-gray-400 mb-2">{el.Previous}</span>
      <span class="description text-sm block py-2 border-gray-400 mb-2">{el.Value}</span>
    </div>
  </div>
))
   }
</section> 

   </>
  )
}

export default Cards


























// import React, { useState } from 'react'
// import Card from './Card'
// import axios from 'axios'
// import Spinner from "../img/spinner/Bars-1.1s-208px.svg"

// function Cards({setCard}) {
//   const [arr,setArr]=useState([])
//   axios('https://fakestoreapi.com/products')
//   .then(({data}) => setArr(data))
 
  

//   return (
//     <>
//     <div className='spinner'>
//     <img src={Spinner} alt='Spinner'/>
//     </div>
// <div class="heading text-center font-bold text-2xl m-5 text-gray-100">Full Responsive Video Cards</div>
// <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
// {arr.map((el)=>(
//   <Card setCard={setCard} product={el}/>
// ))}
// </div>
// </>
//   )
// }
