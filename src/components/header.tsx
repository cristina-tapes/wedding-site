import * as React from "react";

const Header: React.FunctionComponent<{}> = () => {
  const name = "Cristina &Alex";
  const date = "4 September 2021";
  const place = "Cluj-Napoca";
  const navHome = "Home";
  const navInvitation = "Invitation";
  const navAboutUs = "About Us";
  const navEvents = "Events";
  const navRSVP = "RSVP";

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

          <li className="languages">
            <p className="selected">EN</p>
            <br />
            <hr />
            <p>RO</p>
            <br />
            <hr />
            <p>RU</p>
          </li>
        </ul>
      </nav>

      <div className="banner">
        <h1 className="banner-text">{name}</h1>
        <h3>
          {date} - {place}
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

export default Header;
