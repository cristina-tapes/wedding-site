import * as React from "react";
import { Languages } from "../App";
import divider from "../images/divider.png";
import t from "../localization-invitation.json";

export const Invitation: React.FunctionComponent<{ language: Languages }> = ({
  language,
}) => {
  const { title } = t[language];
  return (
    <section id="invitation">
      <img className="divider transform" src={divider} alt="" />
      <h1 className="title">{title}</h1>
    </section>
  );
};
