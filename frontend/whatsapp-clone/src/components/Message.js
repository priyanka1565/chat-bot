import React from 'react';
import styles from '../styles/Message.module.scss';

const Message = ({ message }) => {
    return (
        <div className={`${styles.message} ${message.sender === 'me' ? styles.sent : styles.received}`}>
            <div className={styles.text}>{message.text}</div>
        </div>
    );
};

export default Message;
