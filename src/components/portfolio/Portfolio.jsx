import "./portfolio.scss";
import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const menuList = [
    {
      id: "featured",
      name: "Featured",
    },
    {
      id: "websites",
      name: "Websites",
    },
    {
      id: "webApps",
      name: "Web Apps",
    },
    {
      id: "mobileApps",
      name: "Mobile Apps",
    },
    {
      id: "otherThings",
      name: "Non Sequitur",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {menuList.map(item => (
          <PortfolioList
            item={item}
            selected={selected}
            setSelected={() => {
              setSelected(item.id);
            }}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/super_sighting_thumb.jpg" alt="Java-Spring Boot MVC-JDBC-Thymbleaf Website thumbnail" />
          <h3>Java - Spring Boot - Thymeleaf - SQL</h3>
        </div>
        <div className="item">
          <img src="assets/NuCampThumbnail.jpg" alt="website thumbnail" />
          <h3>HTML + CSS + JavaScript + Bootstrap</h3>
        </div>
        <div className="item">
          <img src="assets/farview_farms_preview.jpg" alt="Farview Farm Static Website thumbnail" />
          <h3>Raw HTML</h3>
        </div>
        <div className="item">
          <img src="assets/dad_app_thumb.jpg" alt="Dad App thumbnail" />
          <h3>
            React
            <br />
            Native
            <br />
            JS
            <br />
            SQL
          </h3>
        </div>
        <div className="item">
          <img
            src="assets/steve_on_motorcycle.jpg"
            alt="Me on a 2011 Husqvarna TE250 ridden by Mert Lawwill and Malcolm Smith"
          />
          <h3>2011 Husqvarna TE250</h3>
        </div>
        <div className="item">
          <img src="assets/kilarney_park.jpg" alt="website thumbnail" />
          <h3>Kilarney Provincial Park</h3>
        </div>
      </div>
    </div>
  );
}
