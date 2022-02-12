import React, { useEffect, useRef } from "react";
import "./intro.scss";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 40,
      strings: ["a Commodore PET 4032", "a little teapot", "wonderfully wacky", "the best investment you'll ever make"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/svsw.jpg" alt="me being a geek" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>My name is</h2>
          <h1>Steven Vallarsa</h1>
          <h2 className="padBot">And I'm . . .</h2>
          <h2>
            <span ref={textRef}></span>
          </h2>
        </div>
        <a href="#works" className="blink">
          {" "}
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80, fill: "#030" }} />
        </a>
      </div>
    </div>
  );
}
