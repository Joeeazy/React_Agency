import React from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
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
      <Blog />
      <NewsLetter />
      <MyFooter />
    </div>
  );
}
