import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your backend server address

export default socket;
