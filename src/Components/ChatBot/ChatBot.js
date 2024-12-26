import React from 'react';
import classes from './Chatbot.module.css';
import ChatBox from './ChatBox';
import ChatMessages from './ChatMessages';


const ChatBot = ({chatOpen}) => {
  return(
    <>
    {
    chatOpen ?
        <div className={classes.chatbot}>
          <h2>Hello, how can we help you?</h2>
          <ChatBox />
          <ChatMessages />
        </div> :
        null 
    }
    
  </>
)
}

export default ChatBot
