import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [sentMessage, setSentMessage] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSentMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <h3>Enjoying classic Belgian literature in the original French </h3>
        <div className="imageContainer">
          <img src="assets/steve_schtroumpfs.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Stay In Touch</h1>
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
      </div>
    </div>
  );
}
