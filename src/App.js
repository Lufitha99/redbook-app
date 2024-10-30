import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./Components/About";

function App() {
  const navStyle = {
    padding: "12px",
    display: "flex",
    marginBottom: "20px",
    listStyle: "none",
    backgroundColor: "#fff",
    justifyContent: "space-around",
  };

  const linkStyle = {
    padding: "12px 20px",
    fontWeight: "bold",
    color: "#333",
    borderRadius: "8",
    backgroundColor: "greys",
    TextDecoration: "none",
  };

  const titleStyle = {
    textAlign: "center",
    margin: "20px 0",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/about" style={linkStyle}>
          Nosotros
        </Link>
      </nav>

      <h1 style={titleStyle}> RED BOOK</h1>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
