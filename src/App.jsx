import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSingUp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<LoginSignup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
