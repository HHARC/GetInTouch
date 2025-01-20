import { useEffect, useState } from "react";

const useWebSocket = (url) => {
    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = new WebSocket(url);
        setWs(socket);

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data)
            console.log(event.data)
            if (message.clientID && localStorage.getItem('clientID') == null)
                localStorage.setItem("clientID", message.clientID)
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        socket.onclose = () => {
            console.log("WebSocket connection closed");
        };

        return () => {
            socket.close();
        };
    }, [url]);

    const sendMessage = (message) => {
        console.log("Final Message: ", message)
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
