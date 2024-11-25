import React from 'react';
import ShopAll from '../../Components/ShopProducts/ShopAll';
import FilterProducts from '../../Components/FilterProducts/FilterProducts';
import { useParams } from 'react-router-dom';
import products from '../../Products/products.json';

const Shop2 = ({openedFilter , setOpenedFilter}) => {
  const { category, page } = useParams();
  return (
    <div>
      <FilterProducts category = {category} products={products} openedFilter={openedFilter} setOpenedFilter={setOpenedFilter}/>
      <ShopAll category = {category} page = {page} products={products}/>
    </div>
  )
}

export default Shop2
