import * as React from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { IUser, Languages, MenuType } from "./interfaces";
import divider from "../images/divider.png";
import t from "../localization-rsvp.json";

export const Rsvp: React.FunctionComponent<{
  language: Languages;
  rsvp: IUser;
  setRsvp: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}> = ({ language, rsvp, setRsvp }) => {
  const {
    title,
    attendingYes,
    attendingNo,
    attendingNoPl,
    selectGuests,
    selectGuestsPl,
    plusOnePlaceholder,
    menu,
    menuType,
    vaccinated,
    accommodation,
    accommodationPl,
    accommodationYes,
    accommodationNo,
    from,
    to,
    message,
    messageSuccess,
    messageErrorGuests,
    messageErrorDates,
    confirmed,
    modified,
  } = t[language];

  const [showError, setError] = React.useState<{
    show: Boolean;
    text?: string;
  }>({ show: false });
  const [showSuccess, setSuccess] = React.useState<boolean>(false);
  const [plusOne, setPlusOne] = React.useState(
    rsvp.guests.find((guest) => guest.isPlusOne)?.name || ""
  );
  const { mutate, isSuccess, isLoading } = useMutation((rsvp: IUser) => {
    return axios.put(
      `https://wedding-cristina-alex.ew.r.appspot.com/api/rsvp/${rsvp.id}`,
      rsvp
    );
  });
  const isSingular =
    !rsvp.isPlural &&
    rsvp.guests.filter((guest) => guest.isComming).length <= 1;

  React.useEffect(() => {
    if (isSuccess) {
      setSuccess(isSuccess);
      setTimeout(() => setSuccess(false), 3000);
    }
  }, [isSuccess, isLoading]);

  const onChange = (event: any) => {
    setError({ show: false, text: undefined });
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
    setError({ show: false, text: undefined });
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

  const onPlusOneChange = (event: any) => {
    let value = event.target.value;
    setPlusOne(value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (rsvp.attending && !rsvp.guests.some((guest) => guest.isComming)) {
      setError({ show: true, text: messageErrorGuests });
      return;
    }
    if (
      rsvp.attending &&
      rsvp.accommodationNeeded &&
      rsvp.accommodationStartDate! >= rsvp.accommodationEndDate!
    ) {
      setError({
        show: true,
        text: messageErrorDates,
      });
      return;
    }
    const newValue = { ...rsvp, confirmed: true };
    newValue.guests = rsvp.guests.map((guest) => {
      if (guest.isPlusOne) {
        return { ...guest, name: plusOne };
      }
      return guest;
    });
    setRsvp(newValue);
    return mutate(newValue);
  };

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
                <div className="two columns attendingFlex">
                  <div className="attendingRadio">
                    <input
                      type="radio"
                      id="true"
                      name="attending"
                      onChange={onChange}
                      checked={rsvp.attending ? true : false}
                      value="true"
                    />
                    <label htmlFor="true">{attendingYes}</label>
                  </div>

                  <div className="attendingRadio">
                    <input
                      type="radio"
                      id="false"
                      name="attending"
                      onChange={onChange}
                      checked={rsvp.attending ? false : true}
                      value="false"
                    />
                    <label htmlFor="false">
                      {isSingular ? attendingNo : attendingNoPl}
                    </label>
                  </div>
                </div>
              </div>
              {rsvp.attending && (
                <div className="attending">
                  <div className="row">
                    <h4>{isSingular ? selectGuests : selectGuestsPl}</h4>
                    <div className="four column inlineGuests">
                      {rsvp.guests.map((guest, index) => (
                        <div className="guest" key={guest.name}>
                          <div
                            className={`four column inlineFields ${
                              guest.isComming ? "enabled" : "disabled"
                            }`}
                          >
                            {!guest.isPlusOne && (
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
                            )}
                            {guest.isPlusOne && (
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
                                  +1
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  value={plusOne}
                                  onChange={onPlusOneChange}
                                  placeholder={plusOnePlaceholder}
                                />
                              </div>
                            )}
                            <div className="field">
                              <label htmlFor="menuType">{menu}</label>
                              <select
                                name="menuType"
                                id="menuType"
                                title=""
                                onChange={onGuestChange(index)}
                                disabled={guest.isComming ? false : true}
                                value={guest.menuType}
                              >
                                <option value={MenuType.regular}>
                                  {menuType.regular}
                                </option>
                                <option value={MenuType.vegetarian}>
                                  {menuType.vegetarian}
                                </option>
                                <option value={MenuType.other}>
                                  {menuType.other}
                                </option>
                              </select>
                            </div>
                            <div className="field">
                              <label
                                htmlFor="vaccinated"
                                onClick={onGuestChange(index)}
                              >
                                {vaccinated}
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
                    <h4>{isSingular ? accommodation : accommodationPl}</h4>
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
                        <label htmlFor="trueAccommodation">
                          {accommodationYes}
                        </label>
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
                        <label htmlFor="falseAccommodation">
                          {accommodationNo}
                        </label>
                      </div>
                    </div>
                    {rsvp.accommodationNeeded && (
                      <div className="row">
                        <div className="inlineDates">
                          <div className="date">
                            <label htmlFor="true">{from}</label>
                            <input
                              type="date"
                              id="accommodationStartDate"
                              name="accommodationStartDate"
                              min="2021-09-01"
                              max="2021-09-04"
                              onChange={onChange}
                              value={`2021-09-${
                                rsvp.accommodationStartDate
                                  ?.getDate()
                                  .toLocaleString("en-US", {
                                    minimumIntegerDigits: 2,
                                    useGrouping: false,
                                  }) || "dd"
                              }`}
                              required
                            />
                          </div>
                          <div className="date">
                            <label htmlFor="true">{to}</label>
                            <input
                              type="date"
                              id="accommodationEndDate"
                              name="accommodationEndDate"
                              min="2021-09-04"
                              max="2021-09-05"
                              onChange={onChange}
                              value={`2021-09-${
                                rsvp.accommodationEndDate
                                  ?.getDate()
                                  .toLocaleString("en-US", {
                                    minimumIntegerDigits: 2,
                                    useGrouping: false,
                                  }) || "dd"
                              }`}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="row message">
                <label htmlFor="message">{message}</label>
                <textarea
                  cols={50}
                  rows={10}
                  id="message"
                  name="message"
                  value={rsvp.message || ""}
                  onChange={onChange}
                />
              </div>
              {showError.show && (
                <div className="message-warning">
                  <h4>{showError.text}</h4>
                </div>
              )}
              {showSuccess && (
                <div className="message-success">
                  <h4>{messageSuccess}</h4>
                </div>
              )}
              <div className="row">
                <button className="submit">
                  {rsvp.confirmed ? modified : confirmed}
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};
