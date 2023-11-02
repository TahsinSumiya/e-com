import React from 'react'
import Announcement from '../component/Announcement'
import Newsletter from '../component/Newsletter'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

export default function SingleProduct() {
  return (
    <>
    <Navbar/>
      <Announcement/>
<div className="container h-75 w-75  justify-content-center
 align-items-center ">
<div className='container my-5 d-flex justify-content-center 
        position-relative align-items-center mx-auto'>
        <div class="card" style={{"width": "18rem"}}>
  <img class="card-img-top" 
  src="https://images.unsplash.com/photo-1558507676-92c16503cd4c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxsYWRpZXMlMjBjbG90aHN8ZW58MHx8MHx8fDA%3D" alt="Card image cap"/>
 
</div >
<div className='container my-5 mx-auto justify-content-center align-items-center'>
                       <h2>Jumpsuit</h2>
<p className='w-75 h-25 overflow-y-auto justify-content-center align-items-center mb-5'>Lorem ipsum, 
dolor sit amet consectetur adipisicing elit. Minima aliquam,
 enim laudantium dolorum ipsum quasi ad magni non quos praesentium eius,
  voluptates iure eaque. Consectetur fugiat accusamus aliquid temporibus cum
   exercitationem reprehenderit corrupti possimus saepe quo neque
    necessitatibus in mollitia veniam minima deleniti animi illum
                       architecto dolor, commodi tempora fuga.</p>
                       <div className=' text-secondary font-italic 
                       font-weight-bold'>Price</div>
                       <div className='d-flex my-5'>
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
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text bg-secondary text-white" for="inputGroupSelect01">Size</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
                       </div>
                       <div className='d-flex'>
                        <button className=' btn px-3 btn-outline-secondary'>+</button>
                        <p className='mx-2 mt-3 '>1</p>
                        <button className='btn px-3
                         btn-outline-secondary'>-</button>

<button type="button" class="btn btn-outline-secondary mx-5">Add to Cart</button>
                       </div>
                       </div>
                   
</div>

    
 </div>
      <Newsletter/>
     <Footer/>
    </>
  )
}
