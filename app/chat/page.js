"use client";

import React, { useState } from "react";
import styles from "@/styles/chatinterface.module.css";
import Sidebar from "@/components/Sidebar";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "Previous Chat 1" },
    { id: 2, title: "Previous Chat 2" },
    // More chat history
  ]);
  const [activeChat, setActiveChat] = useState(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      setInputMessage("");

      // Send message to AI backend
      // then add the AI response to the messages

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Hello, how can I help you?", sender: "ai" },
        ]);
      }, 1000);
    }
  };

  const startNewChat = () => {
    const newChatId = Date.now(); //Timestamp as unique id
    setChatHistory([
      ...chatHistory,
      { id: newChatId, title: `Chat ${newChatId}` },
    ]);
    setActiveChatId(newChatId);
    setMessages([]);
  };

  const selectChat = (chatId) => {
    setActiveChatId(chatId);
    // Load chat messages from backend
    // Clear the message
    setMessages([]);
  };

  return (
    <div className={styles.pageContainer}>
      <Sidebar
        chatHistory={chatHistory}
        activeChatId={activeChat}
        OnNewChat={startNewChat}
        OnChatSelect={selectChat}
      />
      <div className={styles.chatContainer}>
        <div className={styles.chatHeader}>
          <h1>Talk Data to me</h1>
        </div>
        <div className={styles.chatSubHeader}>
          <p>Ask me a question to get your full support</p>
        </div>
        <div className={styles.chatMessages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${styles[message.sender]}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className={styles.chatInputArea}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask AI..."
            className={styles.chatInput}
          />
          <button type="submit" className={styles.sendButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
