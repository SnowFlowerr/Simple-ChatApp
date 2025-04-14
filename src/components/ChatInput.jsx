import styles from "./ChatInput.module.css";

const ChatInput = ({ input, setInput, handleSend }) => {
    return (
        <div className={styles.inputContainer}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className={styles.input}
            />
            <button onClick={handleSend} className={styles.sendButton}>
                Send
            </button>
        </div>
    );
};

export default ChatInput;