import * as React from "react";
import { Languages } from "../App";
import divider from "../images/divider.png";
import t from "../localization-events.json";

export const Events: React.FunctionComponent<{ language: Languages }> = ({
  language,
}) => {
    const { title } = t[language];
  return (
    <section id="events">
      <img className="divider" src={divider} alt="" />
      <h1 className="title">{title}</h1>
    </section>
  );
};
