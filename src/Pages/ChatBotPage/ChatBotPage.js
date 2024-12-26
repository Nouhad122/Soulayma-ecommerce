import React, { useState } from 'react'
import ChatBot from '../../Components/ChatBot/ChatBot.js'
import ChatButton from '../../Components/ChatBot/ChatButton.js'

const ChatBotPage = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState({
      opened: false,
      id: null,
      text:'',
      botText: ''
    });

    const handleChatOpen = () =>{
        setChatOpen(prevState => !prevState);
    }

    const handleChatMessages = (id, text, botText) =>{
      setChatMessages(prevState =>{
        return{
          ...prevState,
          opened: true,
          id: id,
          text: text,
          botText: botText
        }
      }); 
    }
    const handleCloseChatMessages = () =>{
      setChatMessages(prevState =>{
        return{
          ...prevState,
          opened: false
        }
      });
    }
  return (
    <>
    <ChatBot chatOpen={chatOpen} chatMessages={chatMessages} onMessageChosen={handleChatMessages} onCloseChatMessages={handleCloseChatMessages}/> 
    <ChatButton chatOpen={chatOpen} onChatOpen={handleChatOpen}/>
    </>
  )
}

export default ChatBotPage
