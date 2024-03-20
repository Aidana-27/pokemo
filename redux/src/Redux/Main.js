import React from 'react'
import data from './Data'
import { useDispatch } from 'react-redux';

const Main = () => {
    const dispatch = useDispatch()
    dispatch({type:'GET_PRODUCTS' , products:data})
  return (
    <div>Main</div>
  )
}

export default Main