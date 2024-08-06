import React from "react";
import styles from "@/styles/sidebar.module.css";

const Sidebar = ({ chatHistory, activeChatId, OnNewChat, OnChatSelect }) => {
  return (
    <div className={styles.sidebar}>
      <button onClick={OnNewChat} className={styles.newChatButton}>
        New Chat
      </button>
      <div className={styles.chatList}>
        {chatHistory.map((chat) => (
          <div
            key={chat.id}
            onClick={() => OnChatSelect(chat.id)}
            className={
              `${styles.chatItem} ${chat.id === activeChatId ? styles.active : ''}`
            }
          >
            {chat.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;