"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/chatinterface.module.css";
import Sidebar from "@/components/SideBar.js";
import { generateResponse } from "@/utils/chatbot";
import { Typography, Skeleton } from "@mui/material";
import { saveChat, saveMessage, renameChat } from "@/client/utils/chatbot";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "Previous Chat 1" },
    { id: 2, title: "Previous Chat 2" },
  ]);
  const [activeChat, setActiveChat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const extractChatTitle = (message) => {
    // Extract a meaningful title from the message
    return message.split(" ").slice(0, 3).join(" ");
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
        const aiMessage = { text: botResponse, sender: "ai" };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);

        if (activeChat === null || activeChat === undefined) {
          console.error("activeChat is null or undefined");
          return;
        }

        await saveMessage(activeChat, userMessage);
        await saveMessage(activeChat, aiMessage);

        // Rename chat based on the first user message
        if (messages.length === 0) {
          const newTitle = extractChatTitle(userMessage.text);
          await renameChat(activeChat, newTitle);
          setChatHistory(
            chatHistory.map((chat) =>
              chat.id === activeChat ? { ...chat, title: newTitle } : chat,
            ),
          );
        }
      } catch (error) {
        console.error("Error:", error);
        setError(error.message || "Failed to get a response from the AI");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const startNewChat = async () => {
    const newChatId = Date.now();
    const newChat = { id: newChatId, title: `Chat ${newChatId}` };
    setChatHistory([...chatHistory, newChat]);
    setActiveChat(newChatId);
    setMessages([]);
    await saveChat(newChat);
  };

  const selectChat = (chatId) => {
    if (chatId === null || chatId === undefined) {
      console.error("chatId is null or undefined");
      return;
    }
    setActiveChat(chatId);
    setMessages([]);
  };

  const renderMessage = (message, index) => {
    if (message === null || message === undefined) {
      console.error("message is null or undefined");
      return null;
    }
    if (message.sender === null || message.sender === undefined) {
      console.error("message.sender is null or undefined");
      return null;
    }
    return (
      <div
        className={`max-w-[70%] rounded-xl px-4 py-2 mb-4 ${
          message.sender === "user"
            ? "bg-blue-500 text-white self-end"
            : "bg-gray-600 text-black self-start"
        }`}
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
        <div className="text-center mt-10">
          <h1 className="text-3xl font-semibold">Feel free to chat with me</h1>
          <p className="text-xl text-gray-600">
            Ask me a question to get your full support
          </p>
        </div>
        <div className={styles.chatMessages}>
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              {renderMessage(message, index)}
            </React.Fragment>
          ))}
          {isLoading && (
            <div className={`${styles.message} ${styles.ai}`}>
              <Typography variant="body1">
                <Skeleton width="100%" />
                <Skeleton width="80%" />
                <Skeleton width="60%" />
              </Typography>
            </div>
          )}
          {error && (
            <div className={`${styles.message} ${styles.error}`}>
              {typeof error === "string"
                ? error
                : error.message || "An error occurred"}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form
          onSubmit={handleSendMessage}
          className="flex items-center p-4 border rounded-full  border-gray-500 bg-white fixed bottom-0 w-3/4 right-0 mx-16 my-5"
        >
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask AI..."
            className="flex-1 p-2 border rounded-full mr-2 border-gray-300"
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
