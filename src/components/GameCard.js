import React from "react";
import { motion } from "framer-motion";
import "../styles/GameCard.css";

export default function GameCard({ title, image, url }) {
  return (
    <motion.div 
      className="game-card"
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
    >
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <motion.a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="play-btn"
        whileHover={{ scale: 1.1 }}
      >
        Play ▶️
      </motion.a>
    </motion.div>
  );
}
