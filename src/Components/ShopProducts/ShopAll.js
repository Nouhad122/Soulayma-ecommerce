import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams, useNavigate } from 'react-router-dom';
import products from '../../Products/products.json';
import './ShopProducts.css';

const ShopAll = () => {
  const { category, page } = useParams();  // Capture the page from the URL
  const navigate = useNavigate();

  const productsPerPage = 24;  // Updated to show 24 products per page
  const currentPage = parseInt(page, 10) || 1;

  // Filter products based on category
  const filteredProducts = products.filter(product => product.category === category);

  // Calculate the number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get the products for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  // Create pagination links
  const paginationLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationLinks.push(
      <Link 
        key={i} 
        to={`/shop/all/${category}/page/${i}`}
        className={`pagination-link ${i === currentPage ? 'active' : ''}`}>
        {i}
      </Link>
    );
  }

  // Handle next and previous buttons
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      navigate(`/shop/all/${category}/page/${currentPage + 1}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      navigate(`/shop/all/${category}/page/${currentPage - 1}`);
    }
  };

  return (
    <div className='shop-products'>
      <div className='products-text'>
            <h1>Shop All {category}</h1>
        </div>
      <div className='products-container'>
        {currentProducts.map(product => (
          <Link to={`/shop/product/${product.category}/${product.kind}/${product.id}`} className='shop-product-link' key={product.id}>
            <div className='shop-product'>
              <div className='images'>
                <img className='image1' src={product.image1} alt={product.title} />
                <img className='image2' src={product.image2} alt={product.title} />
              </div>
              <h2>{product.title} - {product.color}</h2>
              <h4>{product.price}$</h4>
              <div className='feedbacks-container'>
                <div className='feedbacks'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className='rate'>5.0 <span className='num-of-rates'>(5)</span></p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination - only show if there are more than 24 products */}
      {filteredProducts.length > productsPerPage && (
        <div className='pagination'>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          {paginationLinks}
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      )}
    </div>
  );
};

export default ShopAll;
