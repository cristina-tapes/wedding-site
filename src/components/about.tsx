import * as React from "react";
import { Languages } from "../App";
import cristinaAvatar from "../images/cristinaAvatar.jpeg";
import alexAvatar from "../images/alexAvatar.jpeg";
import lokiAvatar from "../images/lokiAvatar.jpeg";
import divider from "../images/divider.png";
import t from "../localization-about.json";

export const About: React.FunctionComponent<{ language: Languages }> = ({
  language,
}) => {
  const { title } = t[language];
  return (
    <section id="about">
      <img className="divider" src={divider} alt="" />
      <div className="row section-head">
        <h1 className="title">{title}</h1>
      </div>
      <div className="row">
        <div className="four columns inlineFlex">
          <div className="info left">
            <h2>♌ Cristina Tapes</h2>
            <p>Some text.</p>
          </div>
          <div className="info">
            <img className="foto" src={cristinaAvatar} alt="" />
            <div className="mobileInfo">
              <h2>Cristina Tapes</h2>
              <p>Some text.</p>
            </div>
          </div>
          <div className="info">
            <img className="foto" src={alexAvatar} alt="" />
            <div className="mobileInfo">
              <h2>Alex Kerezsi</h2>
              <p>Some text.</p>
            </div>
          </div>
          <div className="info right">
            <h2>Alex Kerezsi ♒</h2>
            <p>Some text.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="three columns inlineFlex">
          <div className="info loki">
            <img className="foto lokiImage" src={lokiAvatar} alt="" />
            <h2>Loki ♒</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
