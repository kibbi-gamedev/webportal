import React from "react";
import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import "../styles/Home.css";



const games = [
  { title: "Ahsan, Sapu Terbang, dan Hutan Rahasia", image: "images/game1.png", url: "https://kibbitech.github.io/Ahsan-dan-Hutan-Rahasia/" },
  { title: "Ahsan, Maxi, dan Hujan Angka", image: "/images/game2.png", url: "https://kibbitech.github.io/Ahsan-Maxi-dan-Hujan-Angka/" },
  { title: "Ahsan dan Kota Warna-Warni", image: "/images/game3.png", url: "https://kibbitech.github.io/Ahsan-Kota-Warna-Warni-dan-Bus-Telolet/" },
  { title: "Ahsan, Sandy dan Petualangan di Gurun Pasir", image: "images/game4.png", url: "" },
  { title: "Ahsan dan Koko, Landak yang Suka Berlari", image: "/images/game5.png", url: "" },
  { title: "Ahsan dan Mister Po, Penguin yang Tertinggal", image: "/images/game6.png", url: "https://kibbitech.github.io/Ahsan-dan-Mister-Po-Penguin-Baik-Hati/" },
  { title: "Ahsan dan Mister Po, Penguin yang Cerdas", image: "/images/game7.png", url: "https://kibbitech.github.io/Ahsan-dan-Mister-Po-Penguin-Cerdas/" },
  { title: "Maxi dan Mister Po, Penguin yang Tersesat", image: "images/game8.png", url: "https://kibbitech.github.io/Mister-Po-dan-Maxi-Penguin-Yang-Tersesat/" },
  { title: "Mister Po dan Angka yang Melompat", image: "/images/game9.png", url: "https://kibbitech.github.io/Mister-Po-dan-Angka-Yang-Melompat-Lompat/" },
];

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="game-grid">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
}
