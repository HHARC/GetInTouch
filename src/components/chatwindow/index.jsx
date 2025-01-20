import React from "react";

const ChatWindow = () => {
  const messages = [
    { text: "Hey love!", time: "10:30 AM", isSent: false, avatar: "🌟" },
    { text: "Yes My Love :)", time: "10:32 AM", isSent: true },
    {
      text: "Is the UI finished?",
      time: "10:35 AM",
      isSent: false,
      avatar: "🌟",
    },
  ];

  return (
    <div className="flex-1 flex flex-col p-4 space-y-4 bg-white dark:bg-gradient-to-b from-blue-700 to-black text-black dark:text-blue-300 border-2  border-black">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.isSent ? "justify-end" : "justify-start"
            } items-end`}
          >
            {!msg.isSent && (
              <div className="w-8 h-8 bg-blue-300 text-white rounded-full flex items-center justify-center mr-3">
                {msg.avatar}
              </div>
            )}
            <div
              className={`p-3 max-w-sm rounded-2xl shadow-md ${
                msg.isSent
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-300 dark:bg-gray-800"
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs text-gray-500 dark:text-blue-300 block text-right">
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 flex items-center space-x-3 bg-gray-200 dark:bg-gray-800 rounded-lg">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
