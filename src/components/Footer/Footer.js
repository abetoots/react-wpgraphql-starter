import React from "react";
import "./Footer.scss";

const Footer = props => (
  <footer className="Footer">
    <div>{new Date().getFullYear()} &copy; All rights reserved.</div>
  </footer>
);

export default Footer;
