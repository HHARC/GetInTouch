import React, { useEffect, useState } from "react";

const Sidebar = ({ users }) => {
  const [search, setSearch] = useState("");

  // Function to handle search filtering
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-1/4 h-full p-4 bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-700 dark:to-black text-white">
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
              className="flex items-center space-x-3 p-3 bg-blue-400 dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transform transition-all cursor-pointer"
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
    </div>
  );
};

export default Sidebar;
