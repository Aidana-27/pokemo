import React from 'react'
import { UseSelector, useSelector } from 'react-redux'

const Basket = () => {
   let data = useSelector((state) => state.products)
   console.log(data);
  return (
    <div>Basket</div>
  )
}

export default Basket