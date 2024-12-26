import React from 'react';
import classes from './Chatbot.module.css';
import logo from '../../assets/S-logo.png';

const ChatMessages = () => {
  return (
    <div className={classes.chatMessages}>
      <p className={classes.messageDate}>December 25</p>
      <p className={classes.customerMessage}>Do you offer free shipping?</p>
      <div className={classes.supportBot}>
        <img src={logo} alt="Soulayma Boutique Logo"/>
        <h6>Soulayma Support Bot</h6>
      </div>
      <p className={classes.serviceMessage}>
         US - FREE shipping on all orders over $50 USD!

        Canada - FREE shipping on all orders over $75 CAD!

        Europe - FREE shipping on all orders over €50 EUR!

        United Kingdom - FREE shipping on all orders over £50 GBP!

        International - FREE shipping on all international orders over $150 USD!
      </p>
      <p className={classes.serviceMessage}>Was this helpful?</p>
    </div>
  )
}

export default ChatMessages
