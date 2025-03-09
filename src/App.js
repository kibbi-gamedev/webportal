import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import WebPortal from "./pages/WebPortal";

function App() {
  // Check login state and expiration time
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLogin = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
    const expiryTime = JSON.parse(localStorage.getItem("expiryTime")) || 0;
    return storedLogin && expiryTime > Date.now();
  });

  useEffect(() => {
    if (isLoggedIn) {
      const expiryTime = JSON.parse(localStorage.getItem("expiryTime"));
      const timeLeft = expiryTime - Date.now();

      // Set a timeout to log out the user automatically
      const logoutTimer = setTimeout(() => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("expiryTime");
        setIsLoggedIn(false);
      }, timeLeft);

      return () => clearTimeout(logoutTimer);
    }
  }, [isLoggedIn]);

  return (
    <Router basename="/webportal"> {/* Ensure correct routing on GitHub Pages */}
      <Routes>
        {/* Redirect to WebPortal if logged in, else go to Login */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/webportal" /> : <Navigate to="/login" />} />
        
        {/* Login Page */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        
        {/* Web Portal Page */}
        <Route path="/webportal" element={isLoggedIn ? <WebPortal /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
