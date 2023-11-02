import React from 'react';
import CategoryItem from './CategoryItem';
import { categories } from './data';

export default function Categories() {
  return (
<div className='flex' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  {categories.map(item => (
    <div className='flex mx-5' key={item.id}>
      <CategoryItem item={item} key={item.id}  /> 
    </div>
  ))}
</div>

   
  );
}
