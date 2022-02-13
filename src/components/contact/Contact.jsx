import { useState } from "react";
import "./contact.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Contact() {
  const [sentMessage, setSentMessage] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSentMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <h3>
          While waiting for your message I shall indulging myself by reading classic Belgian literature in its original
          French{" "}
        </h3>
        <div className="imageContainer">
          <img src="assets/steve_schtroumpfs.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="container">
          <h1>Let's Keep In Touch</h1>
          <p>
            <a href="mailto:stevenvallarsa@gmail.com">
              <MailOutlineIcon
                style={{
                  fontSize: "18px",
                  color: "white",
                  padding: "8px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  width: "40px",
                  verticalAlign: "middle",
                }}
              />{" "}
              stevenvallarsa@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/stevenvallarsa" target="_blank" rel="noreferrer">
              <LinkedInIcon
                style={{
                  fontSize: "18px",
                  color: "white",
                  padding: "8px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  width: "40px",
                  verticalAlign: "middle",
                }}
              />{" "}
              linkedin.com/in/stevenvallarsa
            </a>
          </p>
          <p>
            <a href="http://www.github.com/stevenvallarsa" target="_blank" rel="noreferrer">
              <GitHubIcon
                style={{
                  fontSize: "18px",
                  color: "white",
                  padding: "8px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  width: "40px",
                  verticalAlign: "middle",
                }}
              />{" "}
              github.com/stevenvallarsa
            </a>
          </p>
          <p>
            <a href="tel:6168481920">
              <LocalPhoneIcon
                style={{
                  fontSize: "18px",
                  color: "white",
                  padding: "8px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  width: "40px",
                  verticalAlign: "middle",
                }}
              />{" "}
              616.848.1920
            </a>
          </p>
          <p>
            <a href="assets/sv-resume-2022.pdf" target="_blank">
              <PictureAsPdfIcon
                style={{
                  fontSize: "18px",
                  color: "white",
                  padding: "8px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  width: "40px",
                  verticalAlign: "middle",
                }}
              />{" "}
              My Resume
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} action="">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="text" name="phone" id="phone" placeholder="Phone" />
          <textarea
            name="message"
            placeholder="This form has yet to be set up. Please use the old fashioned communications methods above."
          ></textarea>
          <button type="submit">SEND</button>
          <p style={{ color: "red", display: sentMessage ? "inline" : "none" }}>
            Sorry.This isn't connected yet. But thanks for trying!
          </p>
        </form>
        <a href="#intro" className="blink">
          {" "}
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80, fill: "#030", transform: "rotate(180deg)" }} />
        </a>
      </div>
    </div>
  );
}
