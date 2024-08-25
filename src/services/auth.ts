import API from './api';

export const login = (email: string, password: string) => {
  return API.post('/auth/login', { email, password });
};

export const register = (name: string, email: string, password: string) => {
  return API.post('/auth/signup', { name, email, password });
};
