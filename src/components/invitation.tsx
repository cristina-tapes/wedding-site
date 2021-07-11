import * as React from "react";
import divider from "../images/divider.png";
import t from "../localization-invitation.json";
import { Languages } from "./interfaces";

export const Invitation: React.FunctionComponent<{
  language: Languages;
  greeting?: string;
}> = ({ language, greeting }) => {
  // eslint-disable-next-line
  const { title } = t[language];

  return (
    <section id="invitation">
      <img className="divider transform" src={divider} alt="" />
      <h1 className="title">{greeting ? greeting : "Stiamti invitati"}</h1>
      <div>
        <h3>Ne vom simţi onoraţi să vă avem alături pe</h3>
      </div>
      <div className="invitationDate">
        <h3>4 septembrie 2021</h3>
      </div>
      <div>
        <h3>cand în faţa părinţilor:</h3>
      </div>
      <div className="parents">
        <div className="invitationParent">
          <h3>Csaba şi Gabriela Kerezsi </h3>
        </div>
        <div className="invitationParent">
          <h4>şi</h4>
        </div>
        <div className="invitationParent">
          <h3>Valeriu şi Anna Tapes</h3>
        </div>
      </div>
      <div>
        <h3> şi a naşilor:</h3></div>
        <div className="spiritualParents">
        <div className="invitationSpiritualParent">
          <h3>Romeo Erdei şi Katalin Erdei </h3>
        </div>
        <div className="invitationSpiritualParent">
          <h4>şi</h4>
        </div>
        <div className="invitationSpiritualParent">
          <h3>Vasile Ciumac şi Maria Temtunic</h3>
        </div>
      </div>
      <div>
        <h3> vom spune </h3></div>
      <h1>DA!</h1>
      <p>Va rugam sa confirmati pana in 4 august.</p>
    </section>
  );
};
