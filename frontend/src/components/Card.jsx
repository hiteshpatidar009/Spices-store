import React from 'react'

function Card({item}) {
    
  return (<>
    <div className="mt-8 my-2">
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src= {item.image}  
      alt="Spices" />  
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">New-1kg</div>
    </h2>  
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline"> ₨{item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card
