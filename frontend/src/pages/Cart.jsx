import React from 'react'
import Navbar from '../component/Navbar'
import Announcement from '../component/Announcement'
import Footer from '../component/Footer'

export default function Cart() {
  return (
    <div className='h-100' style={{"height":"100vh"}}>
      <Navbar/>
      <Announcement/>
      <div className="d-flex justify-content-between mx-5 my-2">
      <button type="button" class="btn btn-outline-secondary">continue shopping</button>
      <button type="button" class="btn btn-outline-secondary">checkout</button>
      </div>
      <div className='d-flex'>
      <div className="mx-5 d-flex  border col-6 my-5 justify-content-between ">
<div className='d-flex my-2 mx-2 '>
<img src="https://images.unsplash.com/photo-1555885425-f605efd01224?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxsYWRpZXMlMjBjbG90aHN8ZW58MHx8MHx8fDA%3D
" alt="" srcset=""  className=' ' style={{"height":"220px", "width":"550x"}}/>

<div className="mx-5"><p className=''>id:127323729</p>
<p className=''>product:127323729</p>

<div class="input-group mb-3 ">
  <div class="input-group-prepend">
    <label class="input-group-text bg-secondary text-white" for="inputGroupSelect01">Color</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text bg-secondary text-white" for="inputGroupSelect01">Color</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

</div>




                       </div>
<div>
                       <div className='d-flex justify-content-center align-items-center mx-5 my-5'>
                        <button style={{"height":"30px", "width":"550x"}} className=' btn btn-sm btn-outline-secondary'>+</button>
                        <p className='mx-2 mt-3 '>1</p>
                        <button style={{"height":"30px", "width":"550x"}} className='btn btn-sm
                         btn-outline-secondary'>-</button>


                       </div>
                       <h3 className='mx-5'>$2000</h3>
                       </div>
<div>


</div>

      </div>
<div className='container border my-5 mx-5'>
<h3 className='align-items-center text-center'>Order summary</h3>
<div className='d-flex justify-content-between'>
<p>Subtotal:</p>
<p>$880</p>
</div>
<div className='d-flex justify-content-between'>
<p>Estimated Shipping:</p>
<p>$88</p>
</div>
<div className='d-flex justify-content-between'>
<p>Shipping-discount:</p>
<p>$80</p>
</div>
<div className='d-flex justify-content-between'>
<p>Total</p>
<p>$8880</p>
</div>
<div className=' d-flex justify-content-end my-3'>
<button className='btn btn-outline-secondary'>Check out</button>
</div>

</div>
      </div>
     
     
          </div>
  )
}
