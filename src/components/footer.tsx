import * as React from "react";
import { Languages } from "../App";

import t from "../localization-footer.json";

export const Footer: React.FunctionComponent<{ language:Languages}> = ({language}) => {
  const {thanks} = t[language];
  return (
    <footer>
      <div className="row">
          <ul className="social-links">{thanks}</ul>

          <ul className="copyright">
            <li>&copy; Cristina{"&"}Alex 2021</li>

          </ul>
        </div>

        <div id="go-top">
          <a title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>

    </footer>
  );
};
