import React, { useRef, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleCheck, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './ViewProduct.css';
import { addToCartAction } from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

const ViewProduct = () => {
    const products = useSelector(state => state.products);
    
    const {category,id} = useParams();

    const productId = Number(id);

    const [activePoint, setActivePoint] = useState('point1');

    const point1Ref = useRef(null);
    const point2Ref = useRef(null);

    const handlePointClick = (point) => {
    setActivePoint(point); 
    if (point === 'point1') {
        point1Ref.current.scrollIntoView({ behavior: 'smooth' });
      } 
    else if (point === 'point2') {
        point2Ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const [productsSpecifics, setProductsSpecifics] = useState([
        {
            id: 1001,
            specTitle: "Description",
            specParag: `<strong>Soulayma Pre-Sewn Instant Ribbed Jersey Hijabs</strong><br/>
            Our classic instant jersey hijab just got an upgrade.  You still enjoy the ease of a slip-on hijab that looks like a wrap, but rom the fabric to the seams we really nailed it with this one.  The bamboo fabric was processed sustainably using natural fibres that are ultra soft and antibacterial which means your skin (especially sensitive skin) and hair will love you.
            Sustainable, Soft, Lightweight and Breathable, Antibacterial and Built in UV Protection
            Some of the things you will love about our instant bamboo ribbed jersey is the built in UV Protection, the breathability and comfort in all climates, how smoothly it drapes, and the luxurious feeling you get every time you wear it. 
            Of course, like our classic instant jersey hijab, you just slip it on, give it a quick wrap, and go! No pins required.
            While we try our best to ensure product colors shown are a true depiction of the actual product colors, we do not guarantee a true color match.`,
            isOpened: false
        },
        {
            id: 1002,
            specTitle: "Fabric specification",
            specParag: ` <strong>Specifications and Care:</strong><br/>
                        <strong>Shape:</strong> Slip-on hijab with long rectangle<br/>
                        <strong>Thickness:</strong> Light<br/>
                        <strong>Weight:</strong> Light<br/>
                        <strong>Texture:</strong> Buttery Soft and Stretchy<br/>
                        <strong>Visibility:</strong> Opaque <br/>
                        <strong>Creasing:</strong> Slightly prone to creasing<br/>
                        <strong>Wearability:</strong> Not slippery and holds well<br/><br/>
                        <strong>Fabric Description:</strong>
                        • 100% Bamboo
                        • 71" x 27" (180 cm x 70 cm)`,
            isOpened: false
        },
        {
            id: 1003,
            specTitle: "Fabric & Care",
            specParag: `<strong>Fabric Care:</strong><br/>
                        •Hand wash/dry clean /machine wash on delicate with a light detergent on warm with only other scarves in like colors. Tumble dry on low. For stains, spot-treat with a delicate fabric stain remover.<br/><br/>
                        While we try our best to ensure product colors shown are a true depiction of the actual product colors, we do not guarantee a true color match.`,
            isOpened: false
        },
        {
            id: 1004,
            specTitle: "SHIPPING & RETURNS",
            specParag: `We want you to be 100% satisfied with your purchase so if you're not happy with an item, send it back for a full refund.
                         You may return product in its original condition within 30 days or receiving it.`,
            isOpened: false
        },
    ]);

    const toggleSpecs = (id) =>{
        setProductsSpecifics(productsSpecifics.map(spec => spec.id === id ?{
          ...spec, isOpened: !spec.isOpened
        }
        : spec))
    }

    function getRandomIdsByCategory(products, category, count) {
        const filteredProducts = products.filter(product => product.category === category);
        const ids = filteredProducts.map(product => product.id);
        const shuffledIds = ids.sort(() => 0.5 - Math.random());
        return shuffledIds.slice(0, count);
      }
      const randomIds = getRandomIdsByCategory(products, category, 5);
      
    const chosenProduct = products.find(product => product.id === productId);
    const filteredSuggs = products.filter(product => product.category === category && randomIds.includes(product.id)).slice(0,5);
    const dispatch = useDispatch();
    const addToCart = () =>{
        dispatch(addToCartAction(chosenProduct));
    }
  
  return (
    <div className='view-product'>
        
                <div className='product-container'>
                    <div className='product-images'>
                        <img className='prod-image1' src={chosenProduct.image1} alt='' ref={point1Ref}/>
                        <img className='prod-image2' src={chosenProduct.image2} alt='' ref={point2Ref}/>
                    </div>
                    
                    <div className='images-points'>
                            <div onClick={() => handlePointClick('point1')} className={`point ${activePoint === 'point1' ? 'active-point' : ''}`}></div>
                            <div onClick={() => handlePointClick('point2')} className={`point ${activePoint === 'point2' ? 'active-point' : ''}`}></div>
                    </div>
        
                    <div className='product-details'>
        
                        <div className='product-reviews'>
                        <div className='feedbacks'>
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className='rate'>5.0 based on 16 reviews</p>
                        </div>
        
                        <div className='product-cap'>
                            <h1>{chosenProduct.title}</h1>
                            <h3>{chosenProduct.price}$</h3>
                            <div className='product-infos'>
                                <div className='checked-info'>
                                   <FontAwesomeIcon icon={faCircleCheck} />
                                   <p>Sustainable Bamboo Fabric, Ethically Produced In Turkey</p>
                                </div>
                                <div className='checked-info'>
                                   <FontAwesomeIcon icon={faCircleCheck} />
                                   <p>Buttery Soft, Gentle On Skin & Hair</p>
                                </div>
                                <div className='checked-info'>
                                   <FontAwesomeIcon icon={faCircleCheck} />
                                   <p>Easy Styling, No Pins Required</p>
                                </div>
                            </div>
                            <div className='product-color'>
                                <p>Color: {chosenProduct.color}</p>
                            </div>
                            
                            <button onClick={addToCart} className="custom-btn btn-15">Add To Cart</button>
                            <p className='free-shipping'>free shipping on orders over $50</p>
                            <p className='estimated-delivery'>Estimated delivery to , <strong>October 21 - November 5</strong></p>
                        </div>
        
                        <div className='product-specifics'>
                            {
                                productsSpecifics.map(prodSpec =>(
                                    <div className={`prod-spec ${prodSpec.isOpened ? 'opened-spec' : ''}`} key={prodSpec.id}>
                                        <div onClick={() => toggleSpecs(prodSpec.id)} className='spec-title'>
                                        <h3>{prodSpec.specTitle}</h3>
                                        <div className='prod-plus-minus'>
                                            <FontAwesomeIcon icon={faPlus} className={`${prodSpec.isOpened ? 'hidden-svg' : ''}`}/> 
                                            <FontAwesomeIcon icon={faMinus} className={`${!prodSpec.isOpened ? 'hidden-svg' : ''}`} /> 
                                        </div>
                                        </div> 
                                        <p dangerouslySetInnerHTML={{ __html: prodSpec.specParag }}></p>
                                    </div>
                                ))
                            }
                        </div>
        
                    </div>
                </div>

        <div className='suggested-products-container'>

        <div className='sugg-prod-title'>
            <h3>Products From</h3>
            <h1>The Same Category</h1>
        </div>

        <div className='suggested-products'>
            {
                filteredSuggs.map(sugg =>(
                <Link to={`/shop/product/${sugg.category}/${sugg.kind}/${sugg.id}`} className='sugg-prod-link' key={sugg.id}>
                    <div className='sugg-prod'>
                        <div className='sugg-prod-images'>
                            <img className='sugg-prod-image1' src={sugg.image1} alt={sugg.title}/>
                            <img className='sugg-prod-image2' src={sugg.image2} alt={sugg.title}/>
                        </div>
                            <h2>{sugg.title} - {sugg.color}</h2>
                            <h4>{sugg.price}$</h4>

                            <div className='sugg-prod-feedbacks'>
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
      
    </div>
  )
}

export default ViewProduct
