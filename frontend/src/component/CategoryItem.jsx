import React from 'react';
import {BsFillPlayFill} from "react-icons/bs";
export default function CategoryItem({ item }) {
  return (
    <div className="card" >
      <img className="card-img-top" src={item.img} style={{"height":"50vh"}} alt="Card image cap h-75"/>
      <div className="card-body  ">
        <div className='d-flex '>
             <p className="card-text text-sm text-secondary">{item.title}</p>
        <button className='btn  btn-sm h-25  btn-outline-secondary
         text-black border-white 
          mx-5'>Shop now <BsFillPlayFill/></button></div>
       
      </div>
    </div>
    
  );
}
