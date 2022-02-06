import React, { useState } from "react";
import Top from "./components/top/Top";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Top menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
      <p></p>
    </div>
  );
}

export default App;
