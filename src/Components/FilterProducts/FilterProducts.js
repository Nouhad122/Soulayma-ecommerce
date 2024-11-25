import React from 'react';
import './FilterProducts.css';
import { IoMdClose } from "react-icons/io";

const FilterProducts = ({products, category, openedFilter, setOpenedFilter}) => {
    const colorsForFilter = products.filter((product) => product.category === category);
  return (
    <div className='filter-products'>
        <div className= {`${openedFilter ? 'opened-filter-colors filter-colors' : 'filter-colors'}`}>
            <div className='filter-title'>
               <h1>Filter By Color</h1> 
               <IoMdClose onClick={() => setOpenedFilter(false)} className='filter-x-mark'/>
            </div>
            
            <div className='colors-in'>
            {
                colorsForFilter.map((product, index, array) =>(
                    array.findIndex(item => item.color === product.color) === index ?
                     <p key={product.id}>{product.color}</p> 
                     : null
                ))
            } 
            </div>
            <button className='reset-btn custom-btn btn-15'>Reset</button>
           
        </div>
        <button onClick={() => setOpenedFilter(true)} className='filter-btn custom-btn btn-15'>Filter</button>
    </div>
  )
}

export default FilterProducts
