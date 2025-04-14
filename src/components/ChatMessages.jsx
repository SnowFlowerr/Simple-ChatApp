import styles from "./ChatMessages.module.css";

const ChatMessages = ({ messages, endRef, onDelete, onEdit }) => {
    return (
        <div className={styles.messageContainer}>
            {messages.map((msg, idx) => (
                <div
                    key={idx}
                    className={`${styles.message} ${msg.from === "user" ? styles.userMessage : styles.botMessage
                        }`}
                >
                    <p>{msg.text}</p>
                    <span className={styles.timestamp}>{msg.timestamp}</span>
                    {msg.from === "user" && (
                        <div className={styles.actions}>
                            <button onClick={() => onEdit(idx)} className={styles.actionBtn}>Edit</button>
                            <button onClick={() => onDelete(idx)} className={styles.actionBtn}>Delete</button>
                        </div>
                    )}
                </div>
            ))}
            <div ref={endRef} />
        </div>
    );
};

export default ChatMessages;