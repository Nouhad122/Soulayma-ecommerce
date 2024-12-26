import React, { useEffect, useState } from 'react';
import classes from './Chatbot.module.css';
import logo from '../../assets/S-logo.png';
import { IoClose } from "react-icons/io5";

const ChatMessages = ({ onCloseChatMessages, chatMessages}) => {
    const [showBotMessage, setShowBotMessage] = useState(false);
    useEffect(() =>{
        const botMessageTimer = setTimeout(() =>{
            setShowBotMessage(true);
        },1000);

        return () => clearTimeout(botMessageTimer);
    },[])
  return (
    <div className={classes.chatMessages}>
        <IoClose onClick={onCloseChatMessages}/>
      <p className={classes.messageDate}>December 25</p>
      <p className={classes.customerMessage}>{chatMessages.text}</p>
      {
        showBotMessage ?
        <>
            <div className={classes.supportBot}>
                <img src={logo} alt="Soulayma Boutique Logo"/>
                <h6>Soulayma Support Bot</h6>
            </div>
            <p className={classes.serviceMessage}>
                {chatMessages.botText}
            </p>
            <p className={classes.serviceMessage}>Was this helpful?</p>
        </>:
        <p className={classes.serviceMessage}>Typing...</p>
      }
      
    </div>
  )
}

export default ChatMessages
