import React, { useState } from 'react'
import ChatBot from '../../Components/ChatBot/ChatBot.js'
import ChatButton from '../../Components/ChatBot/ChatButton.js'

const ChatBotPage = () => {
    const [chatOpen, setChatOpen] = useState(false);

    const handleChatOpen = () =>{
        setChatOpen(prevState => !prevState);
    }
  return (
    <>
    <ChatBot chatOpen={chatOpen}/> 
    <ChatButton chatOpen={chatOpen} onChatOpen={handleChatOpen}/>
    </>
  )
}

export default ChatBotPage
