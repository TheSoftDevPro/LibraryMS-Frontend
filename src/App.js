import Header from "./Components/Header";
import Explore from "./Components/Explore";
import Background from "./Components/Background";
import Signup from "./Components/Signup";
import React from "react";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const BaseURL = "http://127.0.0.1:8000"

function App() {
  return (
    <>
      <Router>
      <Header title={"Library Management System"} />
        <Routes>
          <Route exact path="/" element={<Background />}/>
          <Route exact path = "/explore" element={<Explore/>}/>
          <Route exact path = "/login" element={<Login/>}/>
          <Route exact path = "/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
