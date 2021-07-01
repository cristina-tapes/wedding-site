import * as React from "react";
import { Languages } from "../App";

export const Rsvp: React.FunctionComponent<{language: Languages}> = ({language}) => {

  const [formdata, setFormData] = React.useState({name: undefined, emailId:undefined, message:undefined})
  const onChange = (event: any) => setFormData({ ...formdata, [event.target.name]: event.target.value });

  return (
    <section id="rsvp">
      <div className="row section-head">
          <p className="lead">Message</p>
      </div>

      <div className="row">
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={formdata.name || ''}
                  size={35}
                  id="contactName"
                  name="name"
                  onChange={onChange}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={formdata.emailId || ''} 
                  size={35}
                  id="email"
                  name="email"
                  onChange={onChange}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols={50}
                  rows={15}
                  id="message"
                  name="message"
                  value={formdata.message || ''}
                  onChange={onChange}
                ></textarea>
              </div>
              <div>
                <button className="submit">Submit</button>
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
