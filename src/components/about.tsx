import * as React from "react";
import { Languages } from "../App";
import cristinaAvatar from "../images/cristinaAvatar.jpeg";
import alexAvatar from "../images/alexAvatar.jpeg";
import lokiAvatar from "../images/lokiAvatar.jpeg";
import divider from "../images/divider.png";
import t from "../localization-about.json";

export const About: React.FunctionComponent<{
  language: Languages;
  floof: boolean;
}> = ({ language, floof }) => {
  const { title } = t[language];
  const lokiText = " si cu Loki";
  return (
    <section id="about">
      <img className="divider" src={divider} alt="" />
      <div className="row section-head">
        <h1 className="title">{title}</h1>
        {/* <h2>
          Daca am putut trece impreuna printr-o pandemie, vom putea trece si
          peste altele!
        </h2> */}
        <h3>
          In August 2016 am inceput sa fim colegi de serviciu, fara sa stim ca
          vom ajunge sa fim un cuplu din Noiembrie.
          <br />
          Ne-a fost foarte bine in doi, dar din primavara lui 2019 ne-a fost si
          mai bine logoditi{floof && lokiText}.
          <br />
          Pe cand ne bucuram de traiul nostru in Praga si ne pregateam sa va
          invitam la nunta in 2020 <br />
          ne-a lovit pandemia care ne-a convins ca inevitabil trebuie sa
        </h3>
        <h2 className="aboutCaps">ne casatorim!</h2>
      </div>
      <div className="row">
        <div className="four columns inlineFlex">
          <div className="info left">
            <h2>Cristina Tapes</h2>
          </div>
          <div className="info">
            <img className="foto" src={cristinaAvatar} alt="" />
            <div className="mobileInfo">
              <h2>Cristina Tapes</h2>
            </div>
          </div>
          <div className="info">
            <img className="foto" src={alexAvatar} alt="" />
            <div className="mobileInfo">
              <h2>Alex Kerezsi</h2>
            </div>
          </div>
          <div className="info right">
            <h2>Alex Kerezsi</h2>
          </div>
        </div>
      </div>
      {floof && (
        <div className="row">
          <div className="three columns inlineFlex">
            <div className="info loki">
              <img className="foto lokiImage" src={lokiAvatar} alt="" />
              <h2>Loki</h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
