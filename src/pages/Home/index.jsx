import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ChatWindow from "../../components/ChatWindow";
import axios from "axios";

const HomePage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [users, setUsers] = useState([]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark", !darkMode);
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:4200/api/users");
            setUsers(response.data.users)
        } catch (err) {
            console.error('Failed to fetch users: ', err);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div
            className={`h-screen w-screen overflow-hidden ${darkMode ? "bg-black" : "bg-white"
                } transition-all`}
        >
            {/* Header */}
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* Main Content */}
            <div className="flex h-[calc(100%-4rem)]">
                <Sidebar users={users} />
                <ChatWindow updateUsers={fetchUsers} />
            </div>
        </div>
    );
};

export default HomePage;
