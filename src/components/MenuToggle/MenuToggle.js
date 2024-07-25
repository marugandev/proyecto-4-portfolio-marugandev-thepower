import "./MenuToggle.css";

export const MenuToggle = () => {
  const menuIcon = document.createElement("img");
  menuIcon.id = "menuIcon";

  const openMenuIcon = "/assets/icons/toggle-menu.svg";
  const closeMenuIcon = "/assets/icons/toggle-menu-close.svg";

  menuIcon.src = openMenuIcon;
  menuIcon.alt = "Abrir menú";
  menuIcon.title = "Abrir menú";

  const toggleMenu = () => {
    const header = document.querySelector("header");
    header.classList.toggle("active");

    const nav = document.querySelector("#nav");
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      menuIcon.src = closeMenuIcon;
      menuIcon.alt = "Cerrar menú";
      menuIcon.title = "Cerrar menú";
    } else {
      nav.removeAttribute("class");
      menuIcon.src = openMenuIcon;
      menuIcon.alt = "Abrir menú";
      menuIcon.title = "Abrir menú";
    }
  };

  menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  return menuIcon;
};
