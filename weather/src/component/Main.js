import React from 'react'
import axios from 'axios'
import  {useState,useEffect} from 'react'

function Main({value}) {
  const [product,setProduct]=useState({})

  useEffect(() => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=c15601da476242f8e33e17e82e4421e2`)
      .then(({ data }) => setProduct(data)) 
  }, [value]);
console.log(product);
  return (
    <>
      {product.name && product.name.toLowerCase().includes(value.toLowerCase()) && 
        <main className='main'>
          <div className='container'>
          <div className='main__wrapper'>
          <h2 className='main__name'>{product.name} {product?.sys?.country}</h2>
          <div className='main__info'>
          <div className='temp'>
          <p className='main__temp'>{Math.round(product?.main?.temp - 275.15)}'</p>
          <div className='temp__img'>
          <img src={`http://openweathermap.org/img/w/${product.weather[0].icon}.png`} alt="icon"/>
          </div>
          </div>
          <div className='main__desc'>{product.weather[0].description}</div>
          <div className='main__tempMinMax'>
          <p className='main__minMax'>Day:{Math.round(product?.main?.temp_max - 275.15)}</p>
          <p className='main__minMax'>Night:{Math.round(product?.main.temp_min - 275.15)}</p>
          <div className='main__minMax'>{product.weather[0].main}</div>
          </div>
          </div>
          </div>
        </div>
        </main>
      }
    </>
  )
}

export default Main