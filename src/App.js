import Header from "./Components/Header";
import Explore from "./Components/Explore";
import Background from "./Components/Background";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Header title={"Library Management System"} />
        <Routes>
          <Route exact path="/" element={<Background />}>
          </Route>
          <Route exact path = "/explore" element={<Explore/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
