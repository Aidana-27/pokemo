import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

function Header({setValue}) {

    const getString=(e)=>{
     if(e.key==="Enter" && e.target.value.length){
      setValue(e.target.value)
     }
    }
  return (
<>
<header className='header'>
<div className='container'>
<nav class="header__wrapper">
  <div class="header__log">
    <a href="/home" class="header__home">LogoText</a>
  </div>
  <div className='header__inp'>
    <input class="w-80" type="text" onKeyDown={(e)=>getString(e)}  placeholder="Поиск по городу или индексу"/>
  </div>
  <div class="header__weather">
  <div class="h-10" style={{display: "table-cell", verticalAlign: "middle"}}> 
    <NavLink to="/" className='header__text'>
    Home
    </NavLink>
    <NavLink to="/details" className='header__text'>
    Details
    </NavLink>
   </div>
  </div>
</nav>
</div>
</header>
 

</>
  )
}

export default Header

 