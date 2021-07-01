import * as React from "react";
import { Languages } from "../App";
import divider from "../images/divider.png";
import t from "../localization-invitation.json";

export const Invitation: React.FunctionComponent<{
  language: Languages;
  greeting?: string;
}> = ({ language, greeting }) => {
  // eslint-disable-next-line
  const { title } = t[language];

  return (
    <section id="invitation">
      <img className="divider transform" src={divider} alt="" />
      {greeting && <h1 className="title">{greeting}</h1>}
      <h2>
        Ne vom simţi onoraţi să vă avem alături pe <br />4 septembrie 2021
        <br />
        cand în faţa părinţilor:
        <br />
        Csaba şi Gabriela Kerezsi şi Valeriu şi Anna Tapes
        <br /> şi a naşilor:
        <br />
        Romeo şi Katalin Erdei şi Maria Temtunic şi Vasile Ciumac
        <br /> vom spune
      </h2>
      <h1>DA!</h1>
      <p>Va rugam sa confirmati pana in 4 august.</p>
    </section>
  );
};
