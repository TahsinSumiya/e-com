import React from 'react'
import {BsFillPlayFill} from "react-icons/bs";
export default function Descrition1() {
  return (
    <>
    <div className='absolute d-flex bg-dark text-white my-3
     text-center justify-content-center align-items-center' 
     style={{ width: '100%', height: '100%' }}>
    <div className='align-items-center'>
      get up to <strong>30%</strong> discount on Our new products
    </div>

    <button className='btn btn-outline-secondary text-white border-white my-2 mx-3'>Shop now <BsFillPlayFill/></button>
    </div>
    </>
  )
}
