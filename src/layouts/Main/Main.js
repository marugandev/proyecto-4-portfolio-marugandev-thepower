import "./Main.css";

import { Hero } from "../../components/Hero/Hero";
import { Projects } from "../../components/Projects/Projects";
import { Contact } from "../../components/Contact/Contact";

export const Main = () => {
  const main = document.createElement("main");
  main.id = "main";

  main.append(Hero());
  main.append(Projects());
  main.append(Contact());

  document.body.append(main);

  return main;
};
