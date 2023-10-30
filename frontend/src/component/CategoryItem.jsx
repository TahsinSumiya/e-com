import React from 'react';
import {BsFillPlayFill} from "react-icons/bs";

export default function CategoryItem({ item }) {
  return (
    <div className="card">
    <img className="card-img-top" src={item.img} style={{"height":"50vh"}} alt="Card image cap h-75" />
    <p className="card-text text-sm text-secondary text-center">{item.title}</p>
    <div className='d-flex justify-content-center align-items-center'>
      <button className='btn btn-sm h-25 btn-outline-secondary
       text-black border-white'>
        Shop now <BsFillPlayFill />
      </button>
    </div>
  </div>
  
    
  );
}
