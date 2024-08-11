import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/sidebar.module.css";

const Sidebar = ({ chatHistory, activeChatId, OnNewChat, OnChatSelect }) => {
  const router = useRouter();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleLogout = () => {
    // Handle logout process
    // Clearing the authentication token
    console.log("Logging out...");
    // Redirect to the homepage
    router.push("/");
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="fixed top-0 left-0 h-full w-60 bg-gray-800 text-white p-4 md:p-6 lg:p-10">
      <button onClick={toggleSidebar} className="mb-4">
        {isSidebarVisible ? 'Minimize' : 'Expand'}
      </button>
      {isSidebarVisible && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Sidebar;