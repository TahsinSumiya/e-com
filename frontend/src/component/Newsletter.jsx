import React from 'react'
import {BsFillSendFill} from "react-icons/bs";
export default function Newsletter() {
  return (
    <>
    <div className='my-5 '>
   <form   className='my-5'>
 <h1 className='d-flex text-secondary align-items-center
  text-center justify-content-center'>NewsLetter</h1>
  <p className='d-flex text-secondary align-items-center 
  text-center justify-content-center'>get timely updatesd from your favourite products!</p>
  <div class="form-group my-5 "style={{ display: 'flex', justifyContent: 'center',
    alignItems: 'center' }}>
   
    <input type="email" class="form-control" id="formGroupExampleInput2" 
    placeholder="enter your email address" className='w-75 col-3'/>
      <button className='btn d-flex text-dark bg-secondary align-items-center 
  text-center justify-content-center mx-2 text-white'><BsFillSendFill className='text-white mx-2'/></button>
  </div>

</form>
</div>
    </>
  )
}
