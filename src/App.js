import "./App.css";
import React from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Setting from "./components/Setting";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
