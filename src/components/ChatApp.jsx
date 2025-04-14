import { useState, useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import styles from "./ChatApp.module.css";

export default function ChatApp() {
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem("chatMessages");
        return saved ? JSON.parse(saved) : [];
    });

    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const endRef = useRef(null);

    useEffect(() => {
        localStorage.setItem("chatMessages", JSON.stringify(messages));
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        if (editIndex !== null) {
            const updatedMessages = [...messages];
            updatedMessages[editIndex].text = input;
            setMessages(updatedMessages);
            setEditIndex(null);
            setInput("");
            return;
        }

        const newMessage = {
            text: input,
            timestamp: new Date().toLocaleTimeString(),
            from: "user",
        };

        setMessages((prev) => [...prev, newMessage]);
        setInput("");

        setTimeout(() => {
            const botReply = {
                text: "This is a bot reply!",
                timestamp: new Date().toLocaleTimeString(),
                from: "bot",
            };
            setMessages((prev) => [...prev, botReply]);
        }, 1000);
    };

    const handleDelete = (index) => {
        const updatedMessages = messages.filter((_, i) => i !== index);
        setMessages(updatedMessages);
    };

    const handleEdit = (index) => {
        setInput(messages[index].text);
        setEditIndex(index);
    };

    return (
        <div className={styles.chatApp}>
            <ChatHeader />
            <ChatMessages
                messages={messages}
                endRef={endRef}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
            <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
        </div>
    );
}