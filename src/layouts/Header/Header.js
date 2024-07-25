import "./Header.css";

import { Nav } from "../../components/Nav/Nav";
import { DisplayMode } from "../../components/DisplayMode/DisplayMode";
import { MenuToggle } from "../../components/MenuToggle/MenuToggle";

export const Header = () => {
  const header = document.createElement("header");

  header.id = "header";
  header.classList.add("flex-container");

  document.addEventListener("scroll", function (e) {
    e.preventDefault();
    const header = document.querySelector("#header");

    if (window.scrollY > 0) {
      header.classList.add("blur-header");
    } else {
      header.classList.remove("blur-header");
    }
  });

  const iconsContainer = document.createElement("div");
  iconsContainer.id = "iconsContainer";
  iconsContainer.classList.add("flex-container");

  header.append(Nav());
  iconsContainer.append(DisplayMode());
  iconsContainer.append(MenuToggle());
  header.append(iconsContainer);
  document.body.append(header);

  return header;
};
