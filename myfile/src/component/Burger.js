import React from 'react'

function Burger({card,setCard}) {
    console.log(card);
  return (
    <>
    {card && <div>
      <div onClick={()=> setCard(true)} class="card each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
    <div className='img'>
    <img class="w-full" src={card.image} alt={card.category} />
    </div>
    <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">{card.price}$</div>
    <div class="desc p-4 text-gray-800">
      <span className='title text-sm block py-2 border-gray-400 mb-2"'>{card.title}</span>
      <span class="description text-sm block py-2 border-gray-400 mb-2">{card.description}</span>
    </div>
  </div>
      
      
      </div>}
    </>
  )
}

export default Burger