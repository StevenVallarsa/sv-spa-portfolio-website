import { useState } from "react";
import "./testimonials.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Testimonials() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      colour: "blue",
      title: "Graphic Designer",
      years: "1994 - 2015",
      tech: [
        "Aldus PageMaker 4.0\n",
        "Aldus FreeHand 3.1\n",
        "QuarkXPress 3.3",
        "Adobe Photoshop 2.5",
        "Macintosh Plus",
      ],
      src: "assets/steve_graphic_designer_square.jpg",
    },
    {
      id: 2,
      colour: "yellow",
      title: "Sign Maker",
      years: "2001 - 2013",
      tech: [
        "Roland VersaCAMM 300",
        "Epson Stylus Pro 7600",
        "Adobe Illustrator CS4",
        "Adobe Photoshop CS4",
        "iMac 27",
      ],
      src: "assets/SudburySteve.jpg",
    },
    {
      id: 3,
      colour: "green",
      title: "Manufacturing",
      years: "2013 - 2017",
      tech: ["Gibben Panel Saws", "Holzmann Edgebanders", "Drill Presses", "Lithium Battery Production"],
      src: "assets/steve_in_factory.jpg",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Where I've Been</h1>
      <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
        {data.map(item => (
          <div className="container" key={item.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div style={{ backgroundColor: item.colour }} className={"imageContainer"}></div>
                  <h2>{item.title}</h2>
                  <p>{item.years}</p>
                  <span>
                    {item.tech.map(t => (
                      <>
                        {t}
                        <br />
                      </>
                    ))}
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={item.src} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow_left" onClick={() => setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)}>
        <ArrowBackIosNewIcon sx={{ fontSize: 48, fill: "#030" }} />
      </div>
      <div className="arrow_right" onClick={() => setCurrentSlider(currentSlider < 2 ? currentSlider + 1 : 0)}>
        <ArrowBackIosNewIcon sx={{ fontSize: 48, fill: "#030", transform: "scaleX(-1)" }} />
      </div>
      <a href="#contact" className="blink">
        {" "}
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80, fill: "#030" }} />
      </a>
    </div>
  );
}
