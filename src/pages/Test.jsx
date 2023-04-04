import React, { useState } from 'react';

function Text() {
  const [selectedChat, setSelectedChat] = useState(null);
  const chats = [
    { id: 1, name: 'Chat 1', messages: ['Message 1', 'Message 2'] },
    { id: 2, name: 'Chat 2', messages: ['Message 3', 'Message 4'] },
    { id: 3, name: 'Chat 3', messages: ['Message 5', 'Message 6'] },
  ];

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="chat-app">
      <div className="chats">
        {chats.map((chat) => (
          <div key={chat.id} className="chat" onClick={() => handleChatClick(chat)}>
            {chat.name}
          </div>
        ))}
      </div>
      {selectedChat && (
        <div className="chat-body">
          <div className="chat-header">
            {selectedChat.name}
          </div>
          <div className="messages">
            {selectedChat.messages.map((message) => (
              <div key={message} className="message">
                {message}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Text;
