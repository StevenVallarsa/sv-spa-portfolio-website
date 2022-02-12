import { useState } from "react";
import "./testimonials.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { slidersData } from "../../slidersData";

export default function Testimonials() {
  const [currentSlider, setCurrentSlider] = useState(0);

  return (
    <div className="testimonials" id="testimonials">
      <h1>Where I've Been</h1>
      <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
        {slidersData.map(item => (
          <div className="container" key={item.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div style={{ backgroundColor: item.colour }} className="imageContainer"></div>
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
