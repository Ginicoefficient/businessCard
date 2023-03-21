import React from "react";
import selfPortrait from "/src/assets/self-portrait.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const evelope = <FontAwesomeIcon icon={faEnvelope} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;

export default function Header() {
  return (
    <div className="header">
      <div className="img-container">
        <img className="portrait-img" src={selfPortrait} />
      </div>
      <h1>Ginny Mitchell</h1>
      <p>Frontend Developer in Training</p>
      <p>ginny.e.mitchell@gmail.com</p>
      <div className="btn-container">
        <button className="btn-email">{evelope} Email</button>
        <button className="btn-linkdin">{linkedIn} LinkedIn</button>
      </div>
    </div>
  );
}
