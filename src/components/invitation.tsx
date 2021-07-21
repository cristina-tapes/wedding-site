import * as React from "react";
import divider from "../images/divider.png";
import t from "../localization-invitation.json";
import { Languages } from "./interfaces";

export const Invitation: React.FunctionComponent<{
  language: Languages;
  greeting?: string;
  plural: boolean;
}> = ({ language, greeting, plural }) => {
  const {
    genericGreeting,
    seeYou,
    seeYouPl,
    date,
    inFrontOfParents,
    alexParents,
    connector,
    cristinaParents,
    andSpiritualParents,
    alexSpiritualParents,
    cristinaSpiritualParents,
    willSay,
    yes,
    confirmMessage
  } = t[language];

  return (
    <section id="invitation">
      <img className="divider transform" src={divider} alt="" />
      <h1 className="title">{greeting ? greeting : genericGreeting}</h1>

      {language !== Languages.ru && (
        <>
          <div>
            <h3>{!greeting || plural ? seeYouPl : seeYou}</h3>
          </div>
          <div className="invitationDate">
            <h3>{date}</h3>
          </div>
          <div>
            <h3>{inFrontOfParents}</h3>
          </div>
          <div className="parents">
            <div className="invitationParent">
              <h3>{alexParents}</h3>
            </div>
            <div className="connector">
              <h4>{connector}</h4>
            </div>
            <div className="invitationParent">
              <h3>{cristinaParents}</h3>
            </div>
          </div>
          <div>
            <h3>{andSpiritualParents}</h3>
          </div>
          <div className="spiritualParents">
            <div className="invitationSpiritualParent">
              <h3>{alexSpiritualParents}</h3>
            </div>
            <div className="connector">
              <h4>{connector}</h4>
            </div>
            <div className="invitationSpiritualParent">
              <h3>{cristinaSpiritualParents}</h3>
            </div>
          </div>
          <div>
            <h3>{willSay}</h3>
          </div>
          <h1>{yes}</h1>{" "}
        </>
      )}
      {language === Languages.ru && (
        <>
          <div>
            <h3>{!greeting || plural ? seeYouPl : seeYou}</h3>
          </div> 
          <div>
            <h3>{inFrontOfParents}</h3>
          </div>
          <div className="invitationDate">
            <h3>{date}</h3>
          </div>
          <div>
            <h3>{willSay}</h3>
          </div>
          <div>
            <h3>{yes}</h3>
          </div>
        </>
      )}
      <p>{confirmMessage}</p>
    </section>
  );
};
