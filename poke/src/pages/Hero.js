import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { NavLink } from 'react-router-dom';

function Hero({setDetail,search}) {
    const [str,setStr]=useState([])
    const totalImages = 104;
    const imagesPerLoad = 12; 
    const [visibleImages, setVisibleImages] = useState(imagesPerLoad);
    useEffect(()=>{
      axios("https://pokeapi.co/api/v2/pokemon?limit=104&offset=0")
      .then(({data})=>setStr(data.results))
    },[])


const handleShowMoreImages = () => {
  setVisibleImages(prevVisibleImages => prevVisibleImages + imagesPerLoad);
};

  return (
<>
<section class="hero max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600">
        Узнай о покемонах больше
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Погрузись в мир покемонов
        </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {str.slice(0, visibleImages).map((el, index) => (
            <NavLink to="/detail">
              <Card key={index} el={el} index={index} setDetail={setDetail} search={search}/>
            </NavLink>
          ))}
    </div>
    {visibleImages < totalImages && (
        <button className='hero__button' onClick={handleShowMoreImages}>Показать еще</button>
      )}
</section>



</>
  )
}

export default Hero
