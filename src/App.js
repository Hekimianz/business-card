import React from "react";
import "./styles.css";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
export default function App() {
  return (
    <div id="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
