import * as React from "react";
import { Languages } from "../App";

import t from "../localization.json";


const Home: React.FunctionComponent<{ language: Languages }> = ({ language }) => {
  const name = "Cristina &Alex";
  const { date, location, navHome, navInvitation, navAboutUs, navEvents, navRsvp} = t[language];

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        <h3>{name}</h3>
        <ul id="nav" className="nav">
          <li>
            <a href="#home">{navHome}</a>
          </li>

          <li>
            <a href="#invitation">{navInvitation}</a>
          </li>

          <li>
            <a href="#about">{navAboutUs}</a>
          </li>

          <li>
            <a href="#events">{navEvents}</a>
          </li>

          <li>
            <a href="#rsvp">{navRsvp}</a>
          </li>
          {/* <li className="languages">
            <p className="selected">EN</p>
            <br />
            <hr />
            <p>RO</p>
            <br />
            <hr />
            <p>RU</p>
          </li> */}
        </ul>
      </nav>

      <div className="banner">
        <h1 className="banner-text">{name}</h1>
        <hr className="bookends" />
        <h3>
          <span className="weddingDate">{date}</span>
          <br />
          <span className="weddingTown">{location}</span>
        </h3>
        {/*      <p>
          <a href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p> */}
      </div>
    </header>
  );
};

export default Home;
