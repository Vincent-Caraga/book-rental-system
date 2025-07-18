import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ViewBooks from "./pages/ViewBooks/ViewBooks";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<ViewBooks />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
