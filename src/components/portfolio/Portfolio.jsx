import "./portfolio.scss";
import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { portfolioItems } from "../../portfolioData";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const menuList = [
    {
      id: "featured",
      name: "Featured",
    },
    {
      id: "website",
      name: "Websites",
    },
    {
      id: "webApp",
      name: "Web Apps",
    },
    {
      id: "mobileApp",
      name: "Mobile Apps",
    },
    {
      id: "otherThing",
      name: "Non Sequitur",
    },
  ];

  useEffect(() => {
    setData([]);
    const newArr = [];
    portfolioItems.forEach(item => {
      if (item.category.includes(selected)) {
        newArr.push(item);
      }
    });
    setData(newArr);
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>What I've Done</h1>
      <h3>A sampling of projects I've worked on</h3>
      <h4>Sorry, no clicky-clicky yet</h4>
      <ul>
        {menuList.map(item => (
          <PortfolioList
            item={item}
            isSelected={selected === item.id}
            setSelected={() => {
              setSelected(item.id);
            }}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(item => (
          <div className="item" key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.tech}</p>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <a href="#testimonials" className="blink">
        {" "}
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80, fill: "#030" }} />
      </a>
    </div>
  );
}
