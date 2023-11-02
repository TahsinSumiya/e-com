import React from 'react'
import './css/ProductCard.css'
import {BsFillSuitHeartFill,BsFillCartFill,BsSearch} from "react-icons/bs";
export default function Product({item}) {
  return (
<>

<div className="card">
    <img className="card-img-top" src={item.img} style={{"height":"50vh"}}
     alt="Card image cap h-75" />
    <p className="card-text text-sm text-secondary text-center">{item.title}</p>
    <div className='d-flex justify-content-center align-items-center'>
      <button className='btn btn-sm h-25 btn-outline-secondary
       text-black border-white mx-2 px-2'>
        <BsFillSuitHeartFill />
       
      </button>
      <button className='btn btn-sm h-25 btn-outline-secondary
       text-black border-white mx-2 px-2'>
       
        <BsFillCartFill/>
       
      </button>
      <button className='btn btn-sm h-25 btn-outline-secondary
       text-black border-white mx-2 px-2'>
     
        <BsSearch/>
      </button>
    </div>
  </div>

  </>
  
  )
}
