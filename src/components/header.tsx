import * as React from "react";

const Header: React.FunctionComponent<{}> = () => {
  const name = "Cristina &Alex";
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
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="banner">
        <h1 className="banner-text">{name}</h1>
        {/*  <h3>4 Septembrie 2021 - Cluj-Napoca</h3>
       <p>
          <a href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p> */}
      </div>
    </header>
  );
};

export default Header;
