import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './ShopProducts.css';

const ShopAll = ({ products, category, page, activeColor }) => {
  const navigate = useNavigate();

  const productsPerPage = window.innerWidth > 1600 ? 25 : 24;
  const currentPage = Math.max(parseInt(page, 10) || 1, 1);

  // Filter products based on category and color
  const filteredProducts = products.filter(product => {
    const categoryMatch = product.category === category;
    const colorMatch = activeColor ? product.color === activeColor : true;
    return categoryMatch && colorMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get products for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  // Handle page navigation
  const goToPage = (pageNumber) => navigate(`/shop/${category}/page/${pageNumber}`);

  return (
    <div className='shop-products'>
      <div className='products-text'>
        <h1>Shop {category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      </div>
      <div className='products-container'>
        {currentProducts.map(product => (
          <Link
            to={`/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`}
            className='shop-product-link'
            key={product.id}
          >
            <div className='shop-product'>
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
          </Link>
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
  );
};

export default ShopAll;
