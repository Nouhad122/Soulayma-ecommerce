import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import products from '../../Products/products.json';
import './ShopProducts.css';

const ShopProducts = () => {
  const { category, kind } = useParams();
  const filteredProducts = products.filter(product => product.category === category);
  return (
    <div className='shop-products'>
        <div className='products-text'>
            <h1>{kind}</h1>
        </div>
      <div className='products-container'>
            {
                filteredProducts.map(product =>(
                    <Link to={`/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`} className='shop-product-link' key={product.id}>
                        <div className='shop-product'>
                            <div className='images'>
                                <img className='image1' src={product.image1} alt={product.title}/>
                                <img className='image2' src={product.image2} alt={product.title}/>
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
                ))
            }
        </div>
    </div>
  )
}

export default ShopProducts
