import React from "react";

const Sidebar = () => {
    const chats = [
        {
            name: "Anas My Love",
            avatar: "🌟",
            message: "Last message...",
            time: "2:10 PM",
        },
        {
            name: "Wahab Pookie",
            avatar: "🌸",
            message: "How are you?",
            time: "1:05 PM",
        },
        {
            name: "Hanzala The Goat",
            avatar: "🔥",
            message: "Let’s catch up!",
            time: "12:30 PM",
        },
    ];

    return (
        <div className="w-1/4 h-full p-4 bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-700 dark:to-black text-white">
            <input
                type="text"
                placeholder="Search or start new chat"
                className="w-full px-4 py-2 rounded-lg bg-blue-400 dark:bg-gray-800 placeholder-white focus:outline-none focus:ring focus:ring-blue-300"
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
