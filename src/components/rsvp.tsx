import * as React from "react";
import { IUser, Languages, MenuType } from "./interfaces";
import divider from "../images/divider.png";
import t from "../localization-rsvp.json";

export const Rsvp: React.FunctionComponent<{
  language: Languages;
  rsvp: IUser;
  setRsvp: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}> = ({ language, rsvp, setRsvp }) => {
  const { title } = t[language];
  const onChange = (event: any) => {
    let value = event.target.value;
    let name = event.target.name;
    if (name === "attending" || name === "accommodationNeeded") {
      value = event.target.value === "true";
    }
    if (name === "accommodationStartDate" || name === "accommodationEndDate") {
      value = new Date(value);
    }
    setRsvp({ ...rsvp, [name]: value });
  };

  const onGuestChange = (index: number) => (event: any) => {
    let value = event.target.value;
    let name = event.target.name;
    if (event.target.localName === "label") {
      name = event.target.htmlFor;
    }
    if (name === "isComming") {
      value = !rsvp.guests[index].isComming;
    }
    if (name === "vaccinated") {
      value = !rsvp.guests[index].vaccinated;
    }
    const newObject = { ...rsvp };
    newObject.guests[index] = {
      ...rsvp.guests[index],
      [name]: value,
    };
    setRsvp(newObject);
  };

  const onSubmit = () => alert("Submited!");

  return (
    <section id="rsvp">
      <img className="divider transform" src={divider} alt="" />
      <div className="row section-head">
        <h1 className="title">{title}</h1>
      </div>

      <div className="row">
        <div className="four columns">
          <form onSubmit={onSubmit} id="contactForm" name="contactForm">
            <fieldset>
              <div className="row">
                <div className="two columns ">
                  <div className="">
                    <input
                      type="radio"
                      id="true"
                      name="attending"
                      onChange={onChange}
                      checked={rsvp.attending ? true : false}
                      value="true"
                    />
                    <label htmlFor="true">Venim!</label>
                  </div>

                  <div className="">
                    <input
                      type="radio"
                      id="false"
                      name="attending"
                      onChange={onChange}
                      checked={rsvp.attending ? false : true}
                      value="false"
                    />
                    <label htmlFor="false">
                      Va transmitem sincere felicitari!
                    </label>
                  </div>
                </div>
              </div>
              {rsvp.attending && (
                <>
                  <div className="row">
                    <h4>Va rog selectati persoanele care vor veni:</h4>
                    <div className="four column inlineGuests">
                      {rsvp.guests.map((guest, index) => (
                        <div className="guest" key={guest.name}>
                          <div
                            className={`four column inlineFields ${
                              guest.isComming ? "enabled" : "disabled"
                            }`}
                          >
                            <div className="field">
                              <input
                                type="checkbox"
                                name="isComming"
                                checked={guest.isComming}
                                onChange={onGuestChange(index)}
                              />
                              <label
                                htmlFor="isComming"
                                onClick={onGuestChange(index)}
                              >
                                {guest.name}
                              </label>
                            </div>
                            <div className="field">
                              <label htmlFor="menuType">Meniu</label>
                              <select
                                name="menuType"
                                id="menuType"
                                title=""
                                onChange={onGuestChange(index)}
                                disabled={guest.isComming ? false : true}
                              >
                                <option value={MenuType.regular}>
                                  {"Clasic"}
                                </option>
                                <option value={MenuType.vegetarian}>
                                  {"Vegetarian"}
                                </option>
                                <option value={MenuType.other}>
                                  {"Alte restrictii alimentare"}
                                </option>
                              </select>
                            </div>
                            <div className="field">
                              <label
                                htmlFor="vaccinated"
                                onClick={onGuestChange(index)}
                              >
                                {"Voi fi vaccinat(a)"}
                              </label>
                              <input
                                type="checkbox"
                                name="vaccinated"
                                checked={guest.vaccinated}
                                onChange={onGuestChange(index)}
                                disabled={guest.isComming ? false : true}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="row">
                    <h4>Avem nevoie de cazare:</h4>
                    <div className="two columns inlineAccommodation">
                      <div className="accommodationRadio">
                        <input
                          type="radio"
                          id="trueAccommodation"
                          name="accommodationNeeded"
                          onChange={onChange}
                          checked={rsvp.accommodationNeeded ? true : false}
                          value="true"
                        />
                        <label htmlFor="trueAccommodation">{"Da"}</label>
                      </div>

                      <div className="accommodationRadio">
                        <input
                          type="radio"
                          id="falseAccommodation"
                          name="accommodationNeeded"
                          onChange={onChange}
                          checked={rsvp.accommodationNeeded ? false : true}
                          value="false"
                        />
                        <label htmlFor="falseAccommodation">{"Nu"}</label>
                      </div>
                    </div>
                    {rsvp.accommodationNeeded && (
                      <div className="row">
                        <div className="inlineDates">
                          <div>
                            <label htmlFor="true">{"De la"}</label>
                            <input
                              type="date"
                              id="accommodationStartDate"
                              name="accommodationStartDate"
                              min="2021-09-02"
                              max="2021-09-03"
                              onChange={onChange}
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="true">{"Pana la"}</label>
                            <input
                              type="date"
                              id="accommodationEndDate"
                              name="accommodationEndDate"
                              min="2021-09-04"
                              max="2021-09-05"
                              onChange={onChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="row">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={rsvp.message || ""}
                      onChange={onChange}
                    />
                  </div>
                </>
              )}
              <div className="row">
                <button className="submit">
                  {rsvp.confirmed ? "Modificam" : "Confirmam!"}
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};
