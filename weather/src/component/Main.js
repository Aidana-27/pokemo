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
        <div>
          <p>City:{product.name}</p>
          <p>Temp:{Math.round(product?.main?.temp - 275.15)}</p>
          <p>Day:{Math.round(product?.main?.temp_max - 275.15)}</p>
          <p>Night:{Math.round(product?.main.temp_min - 275.15)}</p>
          <img src={`http://openweathermap.org/img/w/${product.weather[0].icon}.png`} alt="icon"/>
          <div>{product.weather[0].description}</div>
          <div>{product.weather[0].main}</div>
          <div>{product?.sys?.country}</div>
        </div>
      }
    </>
  )
}

export default Main