import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ChatWindow from "../../components/chatwindow";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div
      className={`h-screen w-screen overflow-hidden ${
        darkMode ? "bg-black" : "bg-white"
      } transition-all`}
    >
      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <div className="flex h-[calc(100%-4rem)]">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
};

export default HomePage;
