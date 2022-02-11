import "./top.scss";

export default function Top({ menuOpen, setMenuOpen }) {
  return (
    <div className={"top " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <h4>**** STEVEN VALLARSA 4.0 ****</h4>
          <h4>&nbsp; 15359 BYTES FREE</h4>
          <h4>READY...</h4>
        </div>
        <div className="right">
          <div onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
