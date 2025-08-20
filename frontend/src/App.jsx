import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Timeline from "./pages/Timeline";
import Insights from "./pages/Insights";

function App() {
    return (
        <Router>
            <div className="flex flex-col h-screen bg-gradient-to-br from-green-300 to-indigo-800">
                <Navbar />
                <div className="flex-1 overflow-hidden">
                    <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/insights" element={<Insights />} />
                </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
