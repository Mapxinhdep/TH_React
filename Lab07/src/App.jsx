import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";


export default function App() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {/* <Dashboard /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
