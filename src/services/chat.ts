import API from './api';


export const sendMessage = (content: string) => {
  return API.post('/chat/message', {content });
};

export const getMessages = (contactId:number) => {
  return API.get(`chat/messages/${contactId}`);
};