import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import FilterProducts from '../../Components/FilterProducts/FilterProducts';
import products from '../../Products/products.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ShopProducts.css';

const ShopProducts = ({ openedFilter, setOpenedFilter, activeColor, setActiveColor }) => {
  const { category, kind, page } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const productsPerPage = window.innerWidth > 1600 ? 25 : 24;
  const currentPage = Math.max(parseInt(page, 10) || 1, 1);


  // Filter products based on category, kind, and color
  const filteredProducts = products.filter(product => {
    const categoryMatch = product.category === category;
    const kindMatch = kind ? product.kind === kind : true;
    const colorMatch = activeColor ? product.color === activeColor : true;
    return categoryMatch && kindMatch && colorMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const goToPage = (pageNumber) => {
    navigate(`/shop/all/${category}/page/${pageNumber}`);
  };

  return (
    <div className='shopPage'>
      <div className='shop-products'>
        <div className='products-text'>
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        </div>
        <div className='products-container'>
          {currentProducts.map(product => (
            <div key={product.id} className='shop-product'>
              <div className='images'>
                <img className='image1' src={product.image1} alt={product.title} />
                <img className='image2' src={product.image2} alt={product.title} />
              </div>
              <h2>{product.title} - {product.color}</h2>
              <h4>{product.price}$</h4>
              <div className='feedbacks-container'>
                <div className='feedbacks'>
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
                <p className='rate'>5.0 <span className='num-of-rates'>(5)</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {filteredProducts.length > productsPerPage && (
          <div className='pagination'>
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={i + 1 === currentPage ? 'active' : ''}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopProducts;
