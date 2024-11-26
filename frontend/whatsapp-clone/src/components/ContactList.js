import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import styles from '../styles/ContactList.module.scss';

const ContactList = () => {
    const { contacts, selectContact } = useContext(AppContext);

    return (
        <div className={styles.contactList}>
            {contacts.map(contact => (
                <div
                    key={contact.id}
                    className={styles.contact}
                    onClick={() => selectContact(contact.id)}
                >
                    <img src={contact.avatar} alt="Avatar" className={styles.avatar} />
                    <div className={styles.contactInfo}>
                        <h3>{contact.name}</h3>
                        <p>{contact.lastMessage}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
