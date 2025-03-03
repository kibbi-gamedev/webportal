import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>🎮 Petualangan Matematika Bersama Ahsan</h1>
      <div className="nav-links">
        <Link to="/">Bermain Sambil Belajar Matematika</Link>
      </div>
    </nav>
  );
}
