import React, { createContext, useReducer } from 'react';
import chatReducer from '../reducers/chatReducer';
import useInstantDB from '../hooks/useInstantDB';
import useIndexedDB from '../hooks/useIndexedDB';

export const AppContext = createContext();

const initialState = {
    contacts: [],
    selectedChat: null,
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(chatReducer, initialState);

    const { contacts, selectedChat } = state;

    // Methods for selecting contacts and sending messages
    const selectContact = (contactId) => {
        dispatch({ type: 'SELECT_CONTACT', payload: contactId });
    };

    const sendMessage = (message) => {
        dispatch({ type: 'SEND_MESSAGE', payload: message });
    };

    // Custom hook interactions with InstantDB and IndexedDB
    useInstantDB(dispatch);
    useIndexedDB(dispatch);

    return (
        <AppContext.Provider value={{ contacts, selectedChat, selectContact, sendMessage }}>
            {children}
        </AppContext.Provider>
    );
};
