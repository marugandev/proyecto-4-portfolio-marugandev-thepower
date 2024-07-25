import "./Nav.css";

import { AnchorLink } from "../AnchorLink/AnchorLink";
AnchorLink;
import { NavData } from "../../data/NavData/NavData.js";

export const Nav = () => {
  const nav = document.createElement("nav");
  nav.id = "nav";
  nav.classList.add("flex-container");

  const ul = document.createElement("ul");
  ul.classList.add("flex-container");

  NavData.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("flex-container");

    const a = AnchorLink({
      textContent: element.textContent,
      href: element.href,
      importance: "anchor-motion",
      title: element.title,
      ariaLabel: element.ariaLabel,
      imgSrc: element.imgSrc,
      imgAlt: element.imgAlt
    });

    li.append(a);
    ul.append(li);
  });

  nav.append(ul);

  return nav;
};
