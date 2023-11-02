import React from 'react';
import { popularProducts } from './data';
import Product from './Product';
import './css/ProductCard.css'
export default function Products() {


  return (
    <>

   <div className='justify-content-center tag1 my-5 bg-white'style={{  justifyContent: 'center', alignItems: 'center' }}>
    {popularProducts.map(item => (
              
                  <Product item={item} key={item.id} />

              ))}

</div>

    </>
  );
}
