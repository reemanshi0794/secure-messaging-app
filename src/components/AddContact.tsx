import React, { useState } from "react";
import { addContact } from "../services/contact";
import "../styles/addcontact.scss";
import { toast } from "react-toastify";

interface AddContactProps {
  onContactAdded: () => void;
}

const AddContact: React.FC<AddContactProps> = ({ onContactAdded }) => {
  const [contactEmail, setContactEmail] = useState("");
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");

  const handleAddContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (contactEmail === userDetails.email) {
      toast.error("You cannot chat with yourself!");
      return;
    }

    try {
      const userId = localStorage.getItem("token");
      if (!userId) {
        throw new Error("User not logged in");
      }
      await addContact(contactEmail);
      toast.success("Contact added succesfully");
      onContactAdded();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="add-contact">
      <h4>Add New Contact</h4>
      <form onSubmit={handleAddContact}>
        <input
          type="email"
          placeholder="Contact Email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <p className="note">
        Note: Only registered users can be added as contacts.
      </p>
    </div>
  );
};

export default AddContact;
