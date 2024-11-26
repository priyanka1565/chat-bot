import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Message from './Message';
import MessageInput from './MessageInput';
import styles from '../styles/ChatWindow.module.scss';

const ChatWindow = () => {
    const { selectedChat, sendMessage } = useContext(AppContext);

    if (!selectedChat) return <div className={styles.emptyChat}>Select a contact to start chatting!</div>;

    return (
        <div className={styles.chatWindow}>
            <div className={styles.chatHeader}>
                <h2>{selectedChat.name}</h2>
            </div>
            <div className={styles.chatHistory}>
                {selectedChat.messages.map((msg, index) => (
                    <Message key={index} message={msg} />
                ))}
            </div>
            <MessageInput onSend={sendMessage} />
        </div>
    );
};

export default ChatWindow;
