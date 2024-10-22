import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import BlogPage from "./BlogPage";
import HomePage from "./HomePage";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/blog/:title" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
