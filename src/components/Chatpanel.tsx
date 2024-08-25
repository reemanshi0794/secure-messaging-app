import React, { useState, useEffect, useCallback } from "react";
import MessageInput from "./MessageInput";
import "../styles/chatpanel.scss";
import AddContact from "./AddContact";
import { getMessages, sendMessage } from "../services/chat";
import { Contact } from "../types/contact";

type Message = {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: string;
  createdAt?: string;
};

interface ChatPanelProps {
  selectedContact: Contact | null;
  fetchContacts: any;
}

const ChatPanel: React.FC<ChatPanelProps> = ({
  fetchContacts,
  selectedContact,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const user = JSON.parse(localStorage.getItem("userDetails") || "{}");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");
    setWs(socket);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "message" && selectedContact) {
        setMessages((prevMessages) => [...prevMessages, data.message]);
      }
    };

    return () => {
      socket.close();
    };
  }, [selectedContact]);

  useEffect(() => {
    if (selectedContact) {
      const fetchMessages = async () => {
        const contactId = selectedContact.User?.id;
        const fetchedMessages = await getMessages(contactId);
        setMessages(fetchedMessages.data);
      };

      fetchMessages();
    }
  }, [selectedContact]);

  const sendRealTimeMessage = useCallback(
    async (messageContent: string) => {
      if (selectedContact && ws) {
        const message = {
          receiverId: selectedContact?.User.id,
          content: messageContent,
          timestamp: new Date().toISOString(),
        };
        await sendMessage(message as any);
        ws.send(JSON.stringify({ type: "message", message }));
        setMessages((prevMessages) => [...prevMessages, message] as any);
      }
    },
    [selectedContact, ws]
  );

  const handleContactAdded = () => {
    fetchContacts();
  };
  console.log("messagesmessages", messages);

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <AddContact onContactAdded={handleContactAdded} />
        <h3>{selectedContact && selectedContact.User.name}</h3>
      </div>
      <div className="chat-messages">
        {selectedContact ? (
          user?.id &&
          messages.map((msg) => {
            const messageTime = msg?.createdAt || msg?.timestamp;
            const messageSendTime = new Date(messageTime).toLocaleTimeString();

            return (
              <div
                key={msg.id}
                className={`chat-message ${
                  msg.senderId === Number(user.id) || !msg.senderId
                    ? "sent"
                    : "received"
                }`}
              >
                {msg.content}
                <span className="message-time">{messageSendTime}</span>
              </div>
            );
          })
        ) : (
          <div className="no-contact-selected">
            <p>Please select a contact to start chatting.</p>
          </div>
        )}
      </div>

      {selectedContact && <MessageInput onSend={sendRealTimeMessage} />}
    </div>
  );
};

export default ChatPanel;
