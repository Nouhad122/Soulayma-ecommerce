import React from 'react';
import logo from '../../assets/S-logo.png';
import classes from './Chatbot.module.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import ChatSuggs from './ChatSuggs';

const ChatBox = ({ onMessageChosen }) => {
  return (
    <div className={classes.chatbotBox}>
      <h2>Hello, how can we help you?</h2>
            <ChatSuggs onMessageChosen={onMessageChosen}/>
            <div className={classes.soulaymaSupport}>
                <img src={logo} alt='soulayma boutique logo'/>
                <div className={classes.textSupport}>
                    <h6>Soulayma Support</h6>
                    <p>Leave a message</p>
                </div>
                <MdSend />
            </div>
            <div className={classes.goToPrevChat}>
                <span>Go to previous conversation <FaLongArrowAltRight /></span>
            </div>
    </div>
  )
}

export default ChatBox
