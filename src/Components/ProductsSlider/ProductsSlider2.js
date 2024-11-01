import React, { useRef } from 'react';
import './ProductsSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan,faStar,faLessThan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import products from '../../Products/products.json';

const ProductsSlider = () => {

    const scrollRef = useRef(null);

    const scrollLeft = () =>{
        scrollRef.current.scrollBy({left: window.innerWidth > 350 ? -300 : -300,behavior: 'smooth'}) ;
    };
    
    const scrollRight = () =>{
        scrollRef.current.scrollBy({left: window.innerWidth > 350 ? 300 : 300,behavior: 'smooth'});
    };
  return (
    <div className='products-slider'>
        <div className='title'>
            <h3>Shop Now</h3>
            <h1>Instant Hijabs</h1>
        </div>
        <div className='slider-container'>
        <FontAwesomeIcon icon={faLessThan} onClick={scrollLeft} className='scrolling-icon left-icon' />
        <div className='slider' ref={scrollRef}>
            {
                products.map(product =>(
                    product.title === "Instant Premium Jersey Hijab" &&
                    <Link to={`/shop/product/${product.category}/${product.kind}/${product.id}`} className='product-link' key={product.id}>
                        <div className='product'>
                            <img className='image1' src={product.image1} alt={product.title}/>
                            <img className='image2' src={product.image2} alt={product.title}/>
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
        <FontAwesomeIcon icon={faGreaterThan} onClick={scrollRight} className='scrolling-icon right-icon'/>
        </div>
      
    </div>
  )
}

export default ProductsSlider
