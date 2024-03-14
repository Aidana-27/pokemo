import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Detail = ({detail}) => {
    const [getInfo,setGetInfo]=useState({})
useEffect(()=>{
    axios(detail?detail:"https://pokeapi.co/api/v2/pokemon/1/")
    .then(({data})=>setGetInfo(data))
},[detail])

  return (
    <>
  <div class="detail w-full rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img class="object-center object-cover h-auto w-full" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getInfo.id}.png
`} alt="pokemon"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="detail__name text-xl font-bold mb-2">{getInfo.name}</p>
            <div class="left-column">
              <ul>
                <li className='li'>
                  <span class="attribute-title">Height:</span>
                  <span class="attribute-value">{getInfo.height}</span>
                </li>
                <li className='li'>
                  <span class="attribute-title">Weight:</span>
                  <span class="attribute-value">{getInfo.weight}</span>
                </li>
                <li className='li'>
                  <span class="attribute-title">Gender:</span>
                  <span class="attribute-value">
                  <i class="men fa-solid fa-venus" style={{color:"#0d14e3;"}}></i>
                  <i class="women fa-solid fa-mars" style={{color: "#b30f7f;"}}></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
            </div>
    </>
  )
}

export default Detail