import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import WebPortal from "./WebPortal"; // Replace with your actual WebPortal component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/webportal" element={<WebPortal />} /> {/* Ensure this is correct */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
