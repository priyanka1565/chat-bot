const chatReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONTACTS':
            return { ...state, contacts: action.payload };
        case 'SELECT_CONTACT':
            const selectedContact = state.contacts.find(c => c.id === action.payload);
            return { ...state, selectedChat: selectedContact };
        case 'SEND_MESSAGE':
            const updatedContacts = state.contacts.map(contact => {
                if (contact.id === state.selectedChat.id) {
                    return {
                        ...contact,
                        messages: [...contact.messages, action.payload]
                    };
                }
                return contact;
            });
            return { ...state, contacts: updatedContacts };
        default:
            return state;
    }
};

export default chatReducer;
