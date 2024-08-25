import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.scss";
import { Contact } from "../types/contact";

interface SidebarProps {
  onContactSelect: (contact: Contact) => void;
  contacts: Contact[];
  selectedContact: Contact | null;
}

const Sidebar: React.FC<SidebarProps> = ({ onContactSelect, contacts, selectedContact }) => {
  const navigate = useNavigate();

  const handleContactClick = (contact: Contact) => {
    onContactSelect(contact); // Notify parent about the selected contact
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Contacts</h3>
      <ul className="contact-list">
        {contacts && contacts.length > 0 ? (
          contacts.map((contact) => (
            <li
              key={contact.id}
              className={`contact-item ${selectedContact?.id === contact.id ? 'selected' : ''}`}
              onClick={() => handleContactClick(contact)}
            >
              {contact.User.name}
            </li>
          ))
        ) : (
          <li className="contact-item">No contacts available</li>
        )}
      </ul>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
