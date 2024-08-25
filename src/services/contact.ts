import API from './api';

export const getContacts = () => {
    return API.get('/chat/contacts');
  };
  export const addContact = (contactEmail: string) => {
    return API.post('/chat/contacts/add', {contactEmail });
  };
    