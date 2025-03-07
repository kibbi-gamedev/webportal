import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import WebPortal from "./pages/WebPortal";

function App() {
  // Convert the string value from localStorage to a boolean
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn") || "false");

  return (
    <Router basename="/webportal">  {/* Ensure correct routing on GitHub Pages */}
      <Routes>
        {/* Redirect to WebPortal if logged in, else go to Login */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/webportal" /> : <Navigate to="/login" />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Web Portal Page */}
        <Route path="/webportal" element={<WebPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
