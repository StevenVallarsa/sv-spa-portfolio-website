import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="left">
        <h1>What I Know</h1>
        <h3>
          I've come a long with from my first encounter with "modern" computing and the Commodore PET in September 1981.
        </h3>
        <h4>
          <span>FRONT END</span>HTML • CSS • JavaScript • jQuery • Bootstrap • React • Reactstrap • Redux
        </h4>
        <h4>
          <span>BACK END</span>Java • C# • .NET • NodeJS • ExpressJS • SQL • MongoDB • GraphQL • Apollo
        </h4>
        <h4>
          <span>MOBILE</span>React Native
        </h4>
        <h4>
          <span>MORE</span>Git + Visual Studio + VS Code + Netbeans
        </h4>
        <a href="#testimonials" className="blink">
          {" "}
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80, fill: "#030" }} />
        </a>
      </div>
      <div className="right">
        <div className="imageContainer">
          <img src="assets/pet4032.png" alt="The Glorious Commodore PET" />
        </div>
      </div>
    </div>
  );
}
