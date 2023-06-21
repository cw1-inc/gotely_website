"use client"

import React, { useState } from 'react';


function ChatBot() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [userMessage, setUserMessage] = useState('');

    const handleChatOpen = () => {
        setIsChatOpen(true);
    };

    

  

    return (
        <div className="fixed bottom-0 right-0 m-6" style={{ zIndex: 99999999999999 }}>
            {isChatOpen ? (
                <div className="bg-white p-4 rounded shadow-lg w-96 h-[500px]" >
                    <iframe src="https://web.powerva.microsoft.com/environments/4aedb994-766a-e8c5-a94c-e575a346335d/bots/cre16_bot1/webchat" frameborder="0" className="w-full h-full" ></iframe>
                </div>
            ) : (
                <button onClick={handleChatOpen} className="p-4 bg-blue-500 text-white rounded-full">
                    Chat
                </button>
            )}
        </div>
    );
}

export default ChatBot;
