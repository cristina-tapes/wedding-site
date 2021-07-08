import * as React from "react";
import divider from "../images/divider.png";
import t from "../localization-events.json";
import { Languages } from "./interfaces";

export const Events: React.FunctionComponent<{ language: Languages }> = ({
  language,
}) => {
  const { title } = t[language];
  return (
    <section id="events">
      <img className="divider" src={divider} alt="" />
      <div className="row section-head">
        <h1 className="title">{title}</h1>
      </div>
      <div className="row">
        <div className="four columns eventsFlex">
          <div className="eveniment">
            <h2>Cununia civila</h2>
            <h3>Parcul Central - Foisorul</h3>
            <h4>ora 12:00</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d536.4148768322109!2d23.5776397457246!3d46.76906089847798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e8503713e93%3A0x85607277a9aa0aac!2sCasino!5e0!3m2!1sen!2scz!4v1625758293955!5m2!1sen!2scz"
              loading="lazy"
              className="eventMap"
              title="locatie cununia civila"
            ></iframe>
          </div>
          <div className="eveniment">
            <h2>Petrecerea</h2>
            <h3>Hotel Briliant</h3>
            <h4>ora 15:00</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.5287711345404!2d23.586231316015443!3d46.73475525578638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490deb71b371d7%3A0x64b310f3e448d0a2!2sHotel%20Briliant!5e0!3m2!1sen!2scz!4v1625758440367!5m2!1sen!2scz"
              loading="lazy"
              className="eventMap"
              title="locatie hotel briliant"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
