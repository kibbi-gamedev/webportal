import React from "react";
import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import { motion } from "framer-motion"; // Add animation library
import "../styles/WebPortal.css";

const games = [
  { title: "Ahsan, Sapu Terbang, dan Hutan Rahasia", image: `${process.env.PUBLIC_URL}/images/game1.png`, url: "https://kibbitech.github.io/Ahsan-dan-Hutan-Rahasia/" },
  { title: "Ahsan, Maxi, dan Hujan Angka", image: `${process.env.PUBLIC_URL}/images/game2.png`, url: "https://kibbitech.github.io/Ahsan-Maxi-dan-Hujan-Angka/" },
  { title: "Ahsan dan Kota Warna-Warni", image: `${process.env.PUBLIC_URL}/images/game3.png`, url: "https://kibbitech.github.io/Ahsan-Kota-Warna-Warni-dan-Bus-Telolet/" },
  { title: "Ahsan dan Kota Warna-Warni Bagian Dua", image: `${process.env.PUBLIC_URL}/images/game11.png`, url: "https://kibbitech.github.io/Ahsan-dan-Kota-Warna-Warni-Bagian-Dua/" },
  { title: "Ahsan, Sandy dan Petualangan di Gurun Pasir", image: `${process.env.PUBLIC_URL}/images/game4.png`, url: "https://maxton19.github.io/Ahsan-dan-Sandy-Petualangan-di-Gurun-Pasir/" },
  { title: "Ahsan, Sandy, dan Kurma yang Melayang", image: `${process.env.PUBLIC_URL}/images/game5.png`, url: "https://maxton19.github.io/Ahsan-Sandy-dan-Buah-Kurma-yang-Melayang/" },
  { title: "Ahsan dan Mister Po, Penguin yang Tertinggal", image: `${process.env.PUBLIC_URL}/images/game6.png`, url: "https://kibbitech.github.io/Ahsan-dan-Mister-Po-Penguin-Baik-Hati/" },
  { title: "Ahsan dan Mister Po, Penguin yang Cerdas", image: `${process.env.PUBLIC_URL}/images/game7.png`, url: "https://kibbitech.github.io/Ahsan-dan-Mister-Po-Penguin-Cerdas/" },
  { title: "Maxi dan Mister Po, Penguin yang Tersesat", image: `${process.env.PUBLIC_URL}/images/game8.png`, url: "https://kibbitech.github.io/Mister-Po-dan-Maxi-Penguin-Yang-Tersesat/" },
  { title: "Mister Po dan Angka Yang Melompat-Lompat", image: `${process.env.PUBLIC_URL}/images/game9.png`, url: "https://kibbitech.github.io/Mister-Po-dan-Angka-Yang-Melompat-Lompat/" },
  { title: "Ahsan dan Koko, Landak yang Suka Berlari", image: `${process.env.PUBLIC_URL}/images/game10.png`, url: "https://maxton19.github.io/Ahsan-dan-Koko-Landak-Yang-Suka-Berlari/" },
];

export default function WebPortal() {
  return (
    <div className="home-container">
      <Navbar />

      {/* Animated Welcome Message */}
      <motion.h1 
        className="welcome-message"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to the Web Portal 🎮
      </motion.h1>

      {/* Animated Game Cards */}
      <motion.div 
        className="game-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {games.map((game, index) => (
          <motion.div 
            key={index} 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: index * 0.1 }}
          >
            <GameCard {...game} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
