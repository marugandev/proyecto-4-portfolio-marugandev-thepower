import "./Contact.css";

import { ContactData } from "../../data/ContactData/ContactData";
import { AnchorLink } from "../AnchorLink/AnchorLink";

export const Contact = () => {
  const section = document.createElement("section");
  section.id = "contact";
  const ul = document.createElement("ul");
  ul.classList.add("flex-container");

  ContactData.forEach((data) => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const icon = data[key];

        const anchor = AnchorLink({
          href: icon.href,
          importance: "anchor-fixed",
          target: icon.target,
          title: icon.title,
          imgSrc: icon.imgSrc,
          imgAlt: icon.imgAlt
        });

        const li = document.createElement("li");
        li.appendChild(anchor);
        ul.appendChild(li);
      }
    }
  });

  section.append(ul);

  return section;
};
