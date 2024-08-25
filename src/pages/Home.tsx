import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to Secure Messaging App</h1>
        <p>Your private and secure communication platform.</p>
        <div className="home-links">
          <Link to="/login" className="home-link">
            Login
          </Link>
          <Link to="/register" className="home-link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
