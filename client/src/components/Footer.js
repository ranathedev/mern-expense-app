import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box"></div>
      <div className="left">
        <ul className="list one">
          <li className="list-head">Sites</li>
          <li>
            <a href="https://wixware.com/?utm_source=ranajahanzaib.com&utm_action=footerLink">
              Spexware
            </a>
          </li>
          <li>
            <a href="https://wixware.com/?utm_source=ranajahanzaib.com&utm_action=footerLink">
              Wixware
            </a>
          </li>
        </ul>
        <ul className="list">
          <li className="list-head">Resources</li>
          <li>For Developers</li>
          <li>Open Source</li>
          <li>Blog</li>
          <li>Learn to Code</li>
          <li>Sitemap</li>
        </ul>
        <ul className="list">
          <li className="list-head">About</li>
          <li>Bio</li>
          <li>Contact</li>
          <li>Privacy policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
