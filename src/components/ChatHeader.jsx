import styles from "./ChatHeader.module.css";

const ChatHeader = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Simple ChatApp</h1>
        </div>
    );
};

export default ChatHeader;