import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import MyTown from "./pages/MyTown";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/about">About Me</Link> | <Link to="/town">My Town</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/town" element={<MyTown />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
