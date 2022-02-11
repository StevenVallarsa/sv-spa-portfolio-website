import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="left">
        <h1>The Computer That Sparked My Flame</h1>
        <h3>
          The Commodore PET with its off-white metal case, black trim, green monochrome monitor, and a whopping 15359
          bytes free.{" "}
        </h3>
        <a href="#portfolio" className="blink">
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
