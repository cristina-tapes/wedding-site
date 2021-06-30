import * as React from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/home";
import { About } from "./components/about";
import { Contact } from "./components/rsvp";
import { Footer } from "./components/footer";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import invitationContent from "./data.json";

export enum Languages {
  en = "en",
  ro = "ro",
  ru = "ru",
}

interface IUser {
  language: Languages;
  greeting: string;
}

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
  const [language, setLanguage] = React.useState<Languages>(lang || Languages.ro);
  const [content] = React.useState(invitationContent);
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
      <About data={content} />
      <Contact data={content} />
      <Footer data={content} />
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
