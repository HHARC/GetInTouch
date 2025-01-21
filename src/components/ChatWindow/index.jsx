import { useState } from "react";
import useWebSocket from "../../hooks/useWebSocket";

const ChatWindow = () => {
  // const wMessages = [
  //     { text: "Hey love!", time: "10:30 AM", isSent: false, avatar: "🌟" },
  //     { text: "Yes My Love :)", time: "10:32 AM", isSent: true },
  //     { text: "Is the UI finished?", time: "10:35 AM", isSent: false, avatar: "🌟" },
  // ];

  const username = localStorage.getItem("username");
  const clientID = localStorage.getItem("clientID");

  const { messages, sendMessage } = useWebSocket(
    `https://chat-back.up.railway.app?userID=${clientID}&username=${username}`
  );
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() != "") {
      const date = new Date(Date.now()).toLocaleString("en-US", {
        timeZone: "UTC",
      });
      const data = {
        time: date.split(" ")[1],
        text: input,
        isSent: true,
        avatar: username.charAt(0).toUpperCase(),
        clientID,
      };
      sendMessage(data);
      setInput("");
    }
  };

  return (
    <div className="flex-1 flex flex-col p-4 space-y-4 bg-white dark:bg-gradient-to-b from-blue-700 to-black text-black dark:text-blue-300 border-2-4 border-black-500 dark:border-gray-600 ">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.type == "info"
                ? "justify-center"
                : clientID == msg.clientID && msg.isSent
                ? "justify-end"
                : "justify-start"
            } items-end`}
          >
            {clientID != msg.clientID && msg.type != "info" && (
              <div className="w-8 h-8 bg-blue-300 text-white rounded-full flex items-center justify-center mr-3">
                {msg.avatar}
              </div>
            )}
            {msg.type == "info" ? (
              <div className="p-3 max-w-sm rounded-2xl shadow-md bg-gray-300 dark:bg-gray-800">
                <p>{msg.text}</p>
                <span className="text-xs text-gray-500 dark:text-blue-300 block text-right">
                  {msg.time}
                </span>
              </div>
            ) : (
              <div
                className={`p-3 max-w-sm rounded-2xl shadow-md ${
                  clientID == msg.clientID && msg.isSent
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-300 dark:bg-gray-800"
                }`}
              >
                {clientID != msg.clientID && (
                  <strong className="text-blue-900 text-sm">
                    {msg.username}
                  </strong>
                )}
                <p>{msg.text}</p>
                <span className="text-xs text-gray-500 dark:text-blue-300 block text-right">
                  {msg.time}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 flex items-center space-x-3 bg-gray-200 dark:bg-gray-800 rounded-lg">
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") handleSendMessage();
          }}
          className="w-full px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
          onClick={handleSendMessage}
        >
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
