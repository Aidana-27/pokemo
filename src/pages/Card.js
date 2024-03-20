import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'



const Card = ({el,index,setDetail,search}) => {
  const[getId,setGetId]=useState("")
 const handleClick = () => {
setDetail(el.url)
 }

  axios(el.url)
.then(({data})=>setGetId(data.id))

console.log(getId);
  return (
    <>
    {String(getId).includes(String(search)) &&
   <NavLink to="/detail" onClick={handleClick}> 
      <div class="hero__card w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center border-2 border-solid border-green-300">
            <div class="mb-8">
                <img class="object-center object-contain rounded-full h-36 w-36" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png
`} alt="pokemon"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">{el.name}</p>
            </div>
      
        </div>
        </NavLink>

       }
    </>
  )
}

export default Card
