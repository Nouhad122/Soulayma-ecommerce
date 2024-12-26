import React from 'react';
import classes from './Chatbot.module.css';
import ChatBox from './ChatBox';
import ChatMessages from './ChatMessages';


const ChatBot = ({chatOpen, chatMessages, onMessageChosen, onCloseChatMessages}) => {
  return(
    <>
    {
    chatOpen ?
        <div className={classes.chatbot}>
          {
            chatMessages.opened ?
              <ChatMessages onCloseChatMessages={onCloseChatMessages} chatMessages={chatMessages}/>:
              <ChatBox onMessageChosen={onMessageChosen}/>
          }
          
        </div> :
        null 
    }
    
  </>
)
}

export default ChatBot
