import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 h-full p-4 bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-700 dark:to-black text-white">
      <input
        type="text"
        placeholder="Search"
        className="w-full min-w-[80px] px-4 py-2 rounded-lg bg-blue-400 dark:bg-gray-800 placeholder-white focus:outline-none focus:ring focus:ring-blue-300 text-wrap whitespace-normal"
      />
      {/* <div className="mt-4 space-y-4"> */}
      {/*     {chats.map((chat, index) => ( */}
      {/*         <div */}
      {/*             key={index} */}
      {/*             className="flex items-center space-x-3 p-3 bg-blue-400 dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transform transition-all cursor-pointer" */}
      {/*         > */}
      {/*             <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-300 dark:bg-gray-600 text-white text-xl"> */}
      {/*                 {chat.avatar} */}
      {/*             </div> */}
      {/*             <div className="flex-1"> */}
      {/*                 <h3 className="text-lg font-medium">{chat.name}</h3> */}
      {/*             </div> */}
      {/*             <span className="text-sm">{chat.time}</span> */}
      {/*         </div> */}
      {/*     ))} */}
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
