import React, { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa";
import classes from './Chatbot.module.css';

const ChatSuggs = () => {

    const [chatSuggs, setChatSuggs] = useState([
            {
                id: 0,
                text: "Do you offer free shipping?",
            },
            {
                id: 1,
                text: "How should I clean and care for my hijab?",
            },
            {
                id: 2,
                text: "How can I get notified about restocks?",
            },
            {
                id: 3,
                text: "How long does delivery take?",
            },
            {
                id: 4,
                text: "What's your return policy?",
            },
        ]);
  return (
    <div className={classes.suggessions}>
                {
                    chatSuggs.map(sugg =>
                    <div className={classes.chatSugg} key={sugg.id}>
                        <p>{sugg.text}</p>
                        <FaGreaterThan className={classes.greaterIcon}/>
                    </div>
                    )
                }
    </div>
  )
}

export default ChatSuggs
