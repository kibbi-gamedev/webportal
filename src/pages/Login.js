import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Login.css";

const correctPIN = "417";  // Default PIN

export default function Login() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Check if the user is already logged in when the page loads
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/webportal"); // Redirect to web portal if logged in
    }
  }, [navigate]);

  const handleNumberClick = (num) => {
    if (pin.length < 3) {
      setPin(pin + num);
    }
  };

  const handleSubmit = () => {
    if (pin === correctPIN) {
      localStorage.setItem("isLoggedIn", "true"); // Save login state in localStorage
      navigate("/webportal"); // Redirect to the web portal
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
        setPin("");
      }, 800);
    }
  };

  return (
    <div className="login-container">
      <motion.div
        className="pin-display"
        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}} // Shake animation on error
      >
        {pin.split("").map((_, i) => (
          <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            ●
          </motion.span>
        ))}
      </motion.div>

      <div className="numpad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <motion.button
            key={num}
            whileTap={{ scale: 0.8 }}
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </motion.button>
        ))}
      </div>

      <motion.button
        className="submit-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleSubmit}
      >
        Enter
      </motion.button>
    </div>
  );
}
