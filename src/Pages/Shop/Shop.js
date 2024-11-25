import React from 'react';
import ShopProducts from '../../Components/ShopProducts/ShopProducts';
import FilterProducts from '../../Components/FilterProducts/FilterProducts';
import products from '../../Products/products.json';
import { useParams } from 'react-router-dom';

const Shop = ({ openedFilter , setOpenedFilter }) => {
  const { category } = useParams();
  return (
    <div className='shopPage'>
      <FilterProducts category = {category} products={products} openedFilter={openedFilter} setOpenedFilter={setOpenedFilter}/>
      <ShopProducts/>
    </div>
  )
}

export default Shop
