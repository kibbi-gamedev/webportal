import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Login.css";

const correctPIN = "12345"; // Updated PIN

export default function Login({ setIsLoggedIn }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/webportal", { replace: true }); // Redirect if already logged in
    }
  }, [navigate]);

  const handleNumberClick = (num) => {
    if (pin.length < 5) {
      setPin((prev) => prev + num);
    }
  };

  const handleSubmit = () => {
    if (pin === correctPIN) {
      const expiryTime = Date.now() + 2 * 60 * 60 * 1000; // 2 hours from now
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("expiryTime", JSON.stringify(expiryTime));
      setIsLoggedIn(true);
      navigate("/webportal", { replace: true }); // Prevent back button issues
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
        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
      >
        {pin.split("").map((_, i) => (
          <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            ●
          </motion.span>
        ))}
      </motion.div>

      <div className="numpad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
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
