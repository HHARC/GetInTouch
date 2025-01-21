import axios from "axios";
import { useEffect, useState } from "react";

const useWebSocket = (url) => {
    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]); // Initialize as an empty array

    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:4200/api/messages');
            console.log(response.data.messages);
            if (messages.length === 0) { // Check if messages is empty
                setMessages(response.data.messages);
            }
        } catch (err) {
            console.error('Failed to fetch messages: ', err);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    useEffect(() => {
        let socket;

        const connectWebSocket = () => {
            socket = new WebSocket(url);
            setWs(socket);

            socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                if (message.clientID && localStorage.getItem('clientID') == null) {
                    localStorage.setItem("clientID", message.clientID);
                }

                setMessages((prevMessages) => [...prevMessages, message]);
            };

            socket.onclose = () => {
                console.log("WebSocket connection closed");
            };
        };

        connectWebSocket();

        return () => {
            if (socket) {
                socket.close();
                console.log("WebSocket connection cleaned up");
            }
        };
    }, [url]);

    const sendMessage = (message) => {
        console.log("Final Message: ", message);
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(message));
        } else {
            console.error("WebSocket is not open");
            localStorage.clear();
        }
    };

    return { messages, sendMessage };
};

export default useWebSocket;

