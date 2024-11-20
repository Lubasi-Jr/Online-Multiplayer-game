import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Heading from "./components/Heading";
import Menu from "./components/Menu";
import Search from "./components/Search";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Heading />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
