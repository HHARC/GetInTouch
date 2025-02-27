/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon

const Sidebar = ({ users, startOneToOneChat, startGroupChat }) => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar
  const [selectedUsers, setSelectedUsers] = useState([]); // State to track selected users

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  const handleProfileClick = (user) => {
    startOneToOneChat(user);
  };

  const handleUserSelection = (user) => {
    if (selectedUsers.some((u) => u.clientID === user.clientID)) {
      setSelectedUsers(selectedUsers.filter((u) => u.clientID !== user.clientID));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="p-4 bg-blue-500 text-white md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-700 dark:to-black text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-1/4 w-3/4 p-4`}
      >
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full min-w-[80px] px-4 py-2 rounded-lg bg-blue-400 dark:bg-gray-800 placeholder-white focus:outline-none focus:ring focus:ring-blue-300"
        />
        <div className="mt-4 space-y-4">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.clientID}
                onClick={() => handleUserSelection(user)}
                className={`flex items-center space-x-3 p-3 ${
                  selectedUsers.some((u) => u.clientID === user.clientID)
                    ? "bg-blue-600"
                    : "bg-blue-400 dark:bg-gray-800"
                } rounded-lg shadow-md hover:scale-105 transform transition-all cursor-pointer`}
              >
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{user.username}</h3>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-white">No users found</div>
          )}
        </div>

        {/* Button to Start Group Chat */}
        {selectedUsers.length > 1 && (
          <button
            onClick={() => startGroupChat(selectedUsers)}
            className="w-full mt-4 px-4 py-2 bg-green-500 rounded-lg text-white font-medium hover:bg-green-600"
          >
            Start Group Chat
          </button>
        )}
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
