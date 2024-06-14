import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="text-brandPrimary">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
    </div>
  );
}
