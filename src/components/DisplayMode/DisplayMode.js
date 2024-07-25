import "./DisplayMode.css";

export const DisplayMode = () => {
  const iconDisplayMode = document.createElement("img");
  iconDisplayMode.id = "modeIcon";

  const iconDarkMode = "/assets/icons/dark-mode.svg";
  const iconLightMode = "/assets/icons/light-mode.svg";

  iconDisplayMode.src = iconDarkMode;
  iconDisplayMode.alt = "Modo oscuro";
  iconDisplayMode.title = "Modo oscuro";

  const toggleDisplayModeContainer = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const imgLogo = document.querySelector("#mainLogo");

    const projects = document.querySelector("#projects");
    const projectItems = document.querySelectorAll(".project");

    const anchorsGithub = document.querySelectorAll("img[src*='github-logo-']");
    const anchorsFigma = document.querySelectorAll("img[src*='figma-logo-']");
    const anchorsEmail = document.querySelectorAll("img[src*='email-icon-']");
    const anchorsLinkedin = document.querySelectorAll(
      "img[src*='linkedin-logo-']"
    );

    if (body.classList.contains("dark-mode")) {
      iconDisplayMode.src = iconLightMode;
      iconDisplayMode.alt = "Modo claro";
      iconDisplayMode.title = "Modo claro";

      imgLogo.src = "./public/assets/logo-negativo.svg";

      projects.classList.add("dark-mode");
      projectItems.forEach((project) => {
        project.classList.add("dark-mode");
      });

      anchorsGithub.forEach((img) => {
        img.src = "/public/assets/icons/github-logo-negativo.svg";
      });
      anchorsFigma.forEach((img) => {
        img.src = "/public/assets/icons/figma-logo-negativo.svg";
      });
      anchorsEmail.forEach((img) => {
        img.src = "/public/assets/icons/email-icon-negativo.svg";
      });
      anchorsLinkedin.forEach((img) => {
        img.src = "/public/assets/icons/linkedin-logo-negativo.svg";
      });

      localStorage.setItem("displayMode", "dark");
    } else {
      body.removeAttribute("class");
      iconDisplayMode.src = iconDarkMode;
      iconDisplayMode.alt = "Modo oscuro";
      iconDisplayMode.title = "Modo oscuro";

      imgLogo.src = "./public/assets/logo-positivo.svg";

      projects.classList.remove("dark-mode");
      projectItems.forEach((project) => {
        project.classList.remove("dark-mode");
      });

      anchorsGithub.forEach((img) => {
        img.src = "/public/assets/icons/github-logo-positivo.svg";
      });
      anchorsFigma.forEach((img) => {
        img.src = "/public/assets/icons/figma-logo-positivo.svg";
      });
      anchorsEmail.forEach((img) => {
        img.src = "/public/assets/icons/email-icon-positivo.svg";
      });
      anchorsLinkedin.forEach((img) => {
        img.src = "/public/assets/icons/linkedin-logo-positivo.svg";
      });

      localStorage.setItem("displayMode", "light");
    }
  };

  /* const setInitialMode = () => {
    const savedMode = localStorage.getItem("displayMode");

    if (savedMode === "dark") {
      document.body.classList.add("dark-mode");
      iconDisplayMode.src = iconLightMode;
      iconDisplayMode.alt = "Modo claro";
      iconDisplayMode.title = "Modo claro";
    } else {
      document.body.classList.remove("dark-mode");
      iconDisplayMode.src = iconDarkMode;
      iconDisplayMode.alt = "Modo oscuro";
      iconDisplayMode.title = "Modo oscuro";
    }
  };
 */
  iconDisplayMode.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDisplayModeContainer();
  });

  /*  setInitialMode();
   */
  return iconDisplayMode;
};
