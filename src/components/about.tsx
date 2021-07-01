import * as React from "react";
import { Languages } from "../App";
import cristinaAvatar from "../images/cristinaAvatar.jpeg";
import alexAvatar from "../images/alexAvatar.jpeg";
import lokiAvatar from "../images/lokiAvatar.jpeg"

export const About: React.FunctionComponent<{ language: Languages }> = ({
  language,
}) => {
  return (
    <section id="about">
      <div className="row">
        <div className="four columns inlineFlex">
          <div className="info left">
            <h2>♌ Cristina Tapes</h2>
            <p>Some text.</p>
          </div>
          <div className="info">
            <img src={cristinaAvatar} alt="" />
            <div className="mobileInfo">
              <h2>Cristina Tapes</h2>
              <p>Some text.</p>
            </div>
          </div>
          <div className="info">
            <img src={alexAvatar} alt="" />
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
            <img src={lokiAvatar} className="lokiImage" alt="" />
            <h2>Loki ♒</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
