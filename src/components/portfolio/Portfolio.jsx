import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Website</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>My Old Motorcycle</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="" alt="" />
          <h3>Superhero Sighter App</h3>
        </div>
      </div>
    </div>
  );
}
