import React, { useState, useEffect } from 'react';
import ShopAll from '../../Components/ShopProducts/ShopAll';
import FilterProducts from '../../Components/FilterProducts/FilterProducts';
import { useParams, useSearchParams } from 'react-router-dom';
import products from '../../Products/products.json';

const Shop2 = ({ openedFilter, setOpenedFilter }) => {
  const { category, page } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeColor, setActiveColor] = useState('');

  const filterColor = searchParams.get('filter');

 useEffect(() => {
    if (filterColor) {
      setActiveColor(filterColor);
      setOpenedFilter(false);
    }
  }, [filterColor]);

  return (
    <div>
      <FilterProducts
        category={category}
        products={products}
        openedFilter={openedFilter}
        setOpenedFilter={setOpenedFilter}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        setSearchParams={setSearchParams}
      />
      <ShopAll
        category={category}
        page={page}
        products={products}
        activeColor={activeColor}
      />
    </div>
  );
};

export default Shop2;
