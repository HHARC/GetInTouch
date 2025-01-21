import React from "react";
import logo from "../../assets/logo/1.png";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-700 dark:to-black text-white shadow-md">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-15  "
          style={{ height: "1.5rem" }}
        />
      </div>
      <button
        onClick={toggleDarkMode}
        className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition-transform"
      >
        {darkMode ? (
          <span className="text-yellow-400 text-2xl">☀️</span>
        ) : (
          <span className="text-blue-600 text-2xl">🌙</span>
        )}
      </button>
    </header>
  );
};

export default Header;
