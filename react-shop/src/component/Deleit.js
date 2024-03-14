import React from 'react'

function Deleit({setNum}) {
    let a=10
  return (
    <div onClick={()=>setNum(a)}> Deleit</div>
  )
}

export default Deleit