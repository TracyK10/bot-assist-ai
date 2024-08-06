"use client";

import React, { useState } from "react";
import styles from "@/styles/chatinterface.module.css";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

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

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h1>Talk Data to me</h1>
      </div>
      <div className={styles.chatSubHeader}>
        <p>Ask me a question to get your full support</p>
      </div>
      <div className={styles.chatMessages}>
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className={styles.chatInputArea}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here..."
          className={styles.chatInput}
        />
        <button type="submit" className={styles.sendButton}>Send</button>
      </form>
    </div>

  );
}
