import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const twitter = <FontAwesomeIcon icon={faTwitter} />;
const insta = <FontAwesomeIcon icon={faInstagram} />;
const tiktok = <FontAwesomeIcon icon={faTiktok} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="socials-holder">
        <button>{twitter}</button>
        <button>{insta}</button>
        <button>{tiktok}</button>
        <button>{youtube}</button>
      </div>
    </div>
  );
}
