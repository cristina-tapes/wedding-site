import * as React from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/home";
import { About } from "./components/about";
import { Rsvp } from "./components/rsvp";
import { Footer } from "./components/footer";
import { Invitation } from "./components/invitation";
import { Events } from "./components/events";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export enum Languages {
  en = "en",
  ro = "ro",
  ru = "ru",
}

interface IUser {
  language: Languages;
  greeting: string;
}

const FooterTransitionMobile: React.FunctionComponent<{}> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="footerTransitionMobile"
      viewBox="0 0 1440 320"
    >
  <path fill="#7DA58C" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,112C640,117,800,139,960,133.3C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
  );
};

const FooterTransitionDesktop: React.FunctionComponent<{}> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="footerTransition"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#7DA58C"
        fill-opacity="1"
        d="M0,224L80,234.7C160,245,320,267,480,266.7C640,267,800,245,960,240C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  );
};

const AppInternal: React.FunctionComponent<{}> = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const lang = queryParams.get("lang") as Languages;

  console.log("id: ", id);

  const fetchUser = (id: any) =>
    axios
      .get(`<api-url-here>`)
      .then((res) => res.data);

  const { data, error, isLoading } = useQuery("user", () => fetchUser(id));

  console.log(JSON.stringify(data), error, isLoading);
  // eslint-disable-next-line
  const [language, setLanguage] = React.useState<Languages>(
    lang || Languages.ro
  );
  // eslint-disable-next-line
  const [invitationRsvp, setRsvp] = React.useState<IUser>(data);

  React.useEffect(() => {
    if (data) {
      setLanguage(data.language);
      setRsvp(data);
    }
  }, [data]);
  return (
    <div className="App">
      <Home language={language} />
      <About language={language} />
      <Invitation language={language} />
      <Events language={language} />
      <Rsvp language={language} />
      <FooterTransitionDesktop />
      <FooterTransitionMobile />
      <Footer language={language} />
    </div>
  );
};

const queryClient = new QueryClient();

export const App: React.FunctionComponent<{}> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppInternal />
    </QueryClientProvider>
  );
};
