import axios from 'axios';

const API_BASE_URL = 'https://api.instantdb.com/v1'; // Replace with actual base URL

// Fetch contacts from InstantDB
export const fetchContacts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/contacts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching contacts:', error);
    }
};

// Fetch chat history for a contact
export const fetchChatHistory = async (contactId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/chats/${contactId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching chat history:', error);
    }
};

// Send a new message
export const sendMessageToContact = async (contactId, message) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/chats/${contactId}/messages`, message);
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
    }
};
