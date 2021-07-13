import * as React from "react";
import cristinaAvatar from "../images/cristinaAvatar.jpeg";
import alexAvatar from "../images/alexAvatar.jpeg";
import lokiAvatar from "../images/lokiAvatar.jpeg";
import divider from "../images/divider.png";
import t from "../localization-about.json";
import { Languages } from "./interfaces";

export const About: React.FunctionComponent<{
  language: Languages;
  floof: boolean;
}> = ({ language, floof }) => {
  const {
    title,
    nameAlex,
    nameCristina,
    nameLoki,
    // invincibleStyle,
    // invitation1,
    // invitation2,
    // invitation2WithLoki,
    // invitation3,
    // invitation4,
  } = t[language];
  return (
    <section id="about">
      <img className="divider" src={divider} alt="" />
      <div className="row section-head">
        <h1 className="title">{title}</h1>
        {/* <h2>
          Daca am putut trece impreuna printr-o pandemie, vom putea trece si
          peste altele!
        </h2> */}
        {/* <h3>
          {invitation1}
          <br />
          {floof ? invitation2WithLoki : invitation2}
          <br />
          {invitation3}
          <br />
          {invitation4}
        </h3>
        <h2 className="aboutCaps">{invincibleStyle}</h2> */}
      </div>
      <div className="row">
        <div className="four columns inlineFlex">
          <div className="info left">
            <h2>{nameCristina}</h2>
          </div>
          <div className="info">
            <img className="foto" src={cristinaAvatar} alt="" />
            <div className="mobileInfo">
              <h2>{nameCristina}</h2>
            </div>
          </div>
          <div className="info">
            <img className="foto" src={alexAvatar} alt="" />
            <div className="mobileInfo">
              <h2>{nameAlex}</h2>
            </div>
          </div>
          <div className="info right">
            <h2>{nameAlex}</h2>
          </div>
        </div>
      </div>
      {floof && (
        <div className="row">
          <div className="three columns inlineFlex">
            <div className="info loki">
              <img className="foto lokiImage" src={lokiAvatar} alt="" />
              <h2>{nameLoki}</h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
