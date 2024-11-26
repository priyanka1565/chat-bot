import React, { useState } from 'react';
import styles from '../styles/MessageInput.module.scss';

const MessageInput = ({ onSend }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSend({ sender: 'me', text: message });
            setMessage('');
        }
    };

    return (
        <div className={styles.messageInput}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default MessageInput;
