import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="text-brandPrimary">
      <Navbar />
      <Home />
      <Services />
    </div>
  );
}
