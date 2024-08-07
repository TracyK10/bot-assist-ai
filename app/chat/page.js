"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/chatinterface.module.css";
import Sidebar from "@/components/SideBar.js";
import { generateResponse } from "@/utils/chatbot";
import { Typography, Skeleton } from "@mui/material";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "Previous Chat 1" },
    { id: 2, title: "Previous Chat 2" },
    // More chat history
  ]);
  const [activeChat, setActiveChat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      const userMessage = { text: inputMessage, sender: "user" };
      setMessages([...messages, userMessage]);
      setInputMessage("");
      setIsLoading(true);
      setError(null);

      try {
        const botResponse = await generateResponse(inputMessage, messages);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: "ai" },
        ]);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message || "Failed to get a response from the AI");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const startNewChat = () => {
    const newChatId = Date.now(); //Timestamp as unique id
    setChatHistory([
      ...chatHistory,
      { id: newChatId, title: `Chat ${newChatId}` },
    ]);
    setActiveChat(newChatId);
    setMessages([]);
  };

  const selectChat = (chatId) => {
    setActiveChat(chatId);
    // Load chat messages from backend
    // Clear the message
    setMessages([]);
  };

  const renderMessage = (message, index) => {
    if (message.sender === "ai" && isLoading && index === messages.length - 1) {
      return (
        <div className={`${styles.message} ${styles.ai}`} key={index}>
          <Typography variant="body1">
            <Skeleton width="100%" />
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </Typography>
        </div>
      );
    }
    return (
      <div
        className={`${styles.message} ${styles[message.sender]}`}
        key={index}
      >
        {message.text}
      </div>
    );
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
            <React.Fragment key={index}>
              {renderMessage(message, index)}
            </React.Fragment>
          ))}
          {error && (
            <div className={`${styles.message} ${styles.error}`}>
              {typeof error === "string"
                ? error
                : error.message || "An error occurred"}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className={styles.chatInputArea}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask AI..."
            className={styles.chatInput}
            disabled={isLoading}
          />
          <button
            type="submit"
            className={styles.sendButton}
            disabled={isLoading}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
