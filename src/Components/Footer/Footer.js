import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/S-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPaypal, faCcMastercard, faApplePay } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [inputValue, setInputValue] = useState('');
  return (
    <>
    <div className='coupon-sub-container'>
        <div className='newsletter'>
        <FontAwesomeIcon icon={faEnvelope} />
        <h1>Sign Up To Newsletter</h1>
        </div>
        <div className='subscription'>
            <p>...And Receive $25 Coupon For First Shopping.</p>
            <div className='input-button'>
                <input placeholder='Enter Your Email' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button><Link className='sub-link'>Subscribe</Link></button>
            </div>
        </div>
    </div>
    <footer>
    <div className="all-footer-elements">
    <div className="owner-info">
        <div className="logo">
        <img src={logo} alt='logo'/>
        </div>
        <h3>Contact</h3>
        <p><strong>Adress: </strong>Tripoli,Abu Samra,Alshiraa</p>
        <p><strong>Phone: </strong>(+90) 534 442 1873/(+961) 06 422 189</p>
        <p><strong>Hours: </strong>9:00-21:00,Mon-Sat</p>
        <div className="follow-me">
            <Link className="footer-link"><FontAwesomeIcon icon={faFacebookF}/></Link>
            <Link className="footer-link"><FontAwesomeIcon icon={faInstagram}/></Link>
        </div>
    </div>
    <div className="address-info">
        <h3>Adress</h3>
        <Link className="footer-link">About Us</Link>
        <Link className="footer-link">Delivery Information</Link>
        <Link className="footer-link">Privacy Policy</Link>
        <Link className="footer-link">Terms & Conditions</Link>
        <Link className="footer-link">Contact Us</Link>
    </div>
    <div className="account-info">
        <h3>My Account</h3>
        <Link className="footer-link">Sign In</Link>
        <Link className="footer-link">View Cart</Link>
        <Link className="footer-link">My Wishlist</Link>
        <Link className="footer-link">Track My Order</Link>
        <Link className="footer-link">Help</Link>
        <Link className="footer-link">Order</Link>
    </div>
    <div className="payment-info">
        <h3>Secured Payment Gateways</h3>
        <Link className="footer-link"><FontAwesomeIcon icon={faPaypal}/></Link>
        <Link className="footer-link"><FontAwesomeIcon icon={faCcMastercard}/></Link>
        <Link className="footer-link"><FontAwesomeIcon icon={faApplePay}/></Link>
    </div>
</div>
<div className="owner">
    <p>From 1980 - Bassam Elhallab</p>
</div>
   </footer>
    </>
  )
}

export default Footer
