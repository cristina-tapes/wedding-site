import * as React from "react";

export const Footer: React.FunctionComponent<{ data?: any }> = (props) => {
  if (!props.data) return null;

  const networks = props.data.social.map(function (network:any) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className} />
        </a>
      </li>
    );
  });

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>&copy; Copyright 2021 </li>
            <li>
              Design by Cristina{"&"}Alex
            </li>
          </ul>
        </div>

        <div id="go-top">
          <a title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
