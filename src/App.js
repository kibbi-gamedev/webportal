import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import WebPortal from "./pages/WebPortal";

function App() {
  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Router basename="/webportal">
      <Routes>
        {/* Default route: if logged in, go to /webportal, else go to /login */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/webportal" /> : <Navigate to="/login" />}
        />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* WebPortal Route */}
        <Route path="/webportal" element={<WebPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
