import React from "react";
import downarrow from "../../assets/downarrow.svg";
import chromelogo from '../../assets/chrome-logo-landscape.svg'
import "./topbar.css";

const Topbar = () => {
  return (
    <nav className="topbar">
      <div className="logo-wrapper">
        <img src={chromelogo} alt="chromelogo" />
      </div>
      <div className="linkstoredirect">
        <a>Home</a>
        <a>The Browser by Google</a>
        <a className="anc-adjust">
          Features
          <img src={downarrow} alt="arrow" />
        </a>
        <a className="anc-adjust">
          Support
          <img src={downarrow} alt="arrow" />
        </a>
      </div>
    </nav>
  );
};

export default Topbar;
