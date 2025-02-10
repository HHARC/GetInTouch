import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ChatWindow from "../../components/ChatWindow";
import axios from "axios";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null); // WebSocket instance
  const API_URL = import.meta.env.VITE_API_URL;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/users`);
      setUsers(response.data.users);
    } catch (err) {
      console.error("Failed to fetch users: ", err);
    }
  };

  // Initialize WebSocket on component mount
  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:4200"); // Update with your WebSocket server URL
    setSocket(newSocket);

    newSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Received message:", message);
    };

    return () => {
      newSocket.close();
    };
  }, []);

  const startOneToOneChat = (user) => {
    console.log(`Starting one-to-one chat with ${user.username}`);
    socket.send(
      JSON.stringify({ type: "private", to: user.clientID, text: "Hello!" })
    );
  };

  const startGroupChat = (selectedUsers) => {
    console.log("Starting group chat with users:", selectedUsers);
    const roomID = selectedUsers.map(user => user.clientID).join("-");
    socket.send(
      JSON.stringify({ type: "group", roomID, text: "Hello group!" })
    );
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div
      className={`h-screen w-screen overflow-hidden ${darkMode ? "bg-black" : "bg-white"
        } transition-all`}
    >
      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <div className="flex h-[calc(100%-4rem)]">
        <Sidebar
          users={users}
          startOneToOneChat={startOneToOneChat}
          startGroupChat={startGroupChat}
        />
        <ChatWindow updateUsers={fetchUsers} />
      </div>
    </div>
  );
};

export default HomePage;
