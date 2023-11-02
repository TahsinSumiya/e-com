import React from 'react'
import Navbar from '../component/Navbar'
import Announcement from '../component/Announcement'
import Products from '../component/Products'
import Newsletter from '../component/Newsletter'
import Footer from '../component/Footer'

export default function ProductList() {
  return (
    <>
      <Navbar/>
      <Announcement/>
      <h2 className='mx-3 text-success'>Dresses</h2>
      <div class="d-flex justify-content-between mx-3">
     <div>
     <p className='btn btn-outline-secondary btn-sm mt-3 border-0
      '>filter products:</p>
         <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <select class="custom-select" id="inputGroupSelect01" className='mx-2'>
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
     </div>
     
       
     <div>
     <p className='btn btn-outline-secondary btn-sm mt-3 border-0
       '>sort roducts:</p>
         <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
     </div>
      </div>
<Products/>
<Newsletter/>
<Footer/>

     
    </>
  )
}
