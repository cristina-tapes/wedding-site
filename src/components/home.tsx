import * as React from "react";
import { Languages } from "../App";

const text = {
  en: {
    date: "4 September 2021",
    location: "Cluj-Napoca",
    navHome: "Home",
    navInvitation: "Invitation",
    navAboutUs: "About Us",
    navEvents: "Events",
    navRsvp: "RSVP"
  },
  ro: {
    date: "4 Septembrie 2021",
    location: "Cluj-Napoca",
    navHome: "Acasă",
    navInvitation: "Invitaţie",
    navAboutUs: "Despre noi",
    navEvents: "Evenimente",
    navRsvp: "Confirmare"
  },
  ru: {
    date: "4 Сентября 2021",
    location: "Клуж-Напока",
    navHome: "Acasă",
    navInvitation: "Invitaţie",
    navAboutUs: "Despre noi",
    navEvents: "Evenimente",
    navRsvp: "Confirmare"
  },
};

const Home: React.FunctionComponent<{ language: Languages }> = ({ language }) => {
  const name = "Cristina &Alex";
  const date = text[language]["date"];
  const place = text[language]["location"];
  const navHome = text[language]["navHome"];
  const navInvitation = text[language]["navInvitation"];
  const navAboutUs = text[language]["navAboutUs"];
  const navEvents = text[language]["navEvents"];
  const navRSVP = text[language]["navRsvp"];

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
            <a href="#rsvp">{navRSVP}</a>
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
          <span className="weddingTown">{place}</span>
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
