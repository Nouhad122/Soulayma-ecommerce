import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../../utils/Pagination';
import '../ShopProducts/ShopProducts.css';
import products from '../../Products/products.json';

const SearchedProducts = ({ searchInput }) => {
  const [productsPerPage] = useState(window.innerWidth > 1600 ? 25 : 24);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="shop-products searched-products">
      <div className="products-container">
        {currentProducts.map((product) => (
          <div key={product.id} className="shop-product">
            <div className="images">
              <img className="image1" src={product.image1} alt={product.title} />
              <img className="image2" src={product.image2} alt={product.title} />
            </div>
            <h2>{product.title} - {product.color}</h2>
            <h4>{product.price}$</h4>
            <div className="feedbacks-container">
              <div className="feedbacks">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <p className="rate">5.0 <span className="num-of-rates">(5)</span></p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      {filteredProducts.length > productsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      )}
    </div>
  );
};

export default SearchedProducts;
