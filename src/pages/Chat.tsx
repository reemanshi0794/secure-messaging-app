import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatPanel from "../components/Chatpanel";
import "../styles/chat.scss";
import { Contact, User } from "../types/contact";
import { getContacts } from "../services/contact";

const Header: React.FC<{ loggedInUser: any }> = ({ loggedInUser }) => {
  return (
    <div className="header">
      <div className="user-info">
        <span className="user-name">{loggedInUser.name}</span>
        <img
          src={
            loggedInUser.avatar ||
            "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg"
          }
          alt={loggedInUser.name}
          className="user-avatar"
        />
      </div>
    </div>
  );
};

const Chat: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const loggedInUser = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchContacts = async () => {
    try {
      const response = await getContacts();
      console.log("responseresponse", response);
      setContacts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchContacts();
  }, []);

  const handleContactSelect = (user: Contact) => {
    setSelectedContact(user);
  };
  return (
    <div className="chat-container">
      <Header loggedInUser={loggedInUser} />

      <Sidebar
        selectedContact={selectedContact}
        onContactSelect={handleContactSelect}
        contacts={contacts}
      />
      <ChatPanel
        selectedContact={selectedContact}
        fetchContacts={fetchContacts}
      />
    </div>
  );
};

export default Chat;
