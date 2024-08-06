import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/sidebar.module.css";

const Sidebar = ({ chatHistory, activeChatId, OnNewChat, OnChatSelect }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Handle logout process
    // Clearing the authentication token
    console.log("Logging out...");
    // Redirect to the homepage
    router.push("/");
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <button onClick={OnNewChat} className={styles.newChatButton}>
          New Chat
        </button>
        <div className={styles.chatList}>
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              onClick={() => OnChatSelect(chat.id)}
              className={`${styles.chatItem} ${
                chat.id === activeChatId ? styles.active : ""
              }`}
            >
              {chat.title}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
