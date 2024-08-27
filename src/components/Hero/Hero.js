import "./Hero.css";

import { heroData } from "../../data/HeroData/HeroData";

export const Hero = () => {
  const sectionHero = document.createElement("section");
  sectionHero.id = "hero";
  sectionHero.classList.add("flex-container");

  const imgLogo = document.createElement("img");
  imgLogo.id = "mainLogo";

  if (localStorage.getItem("displayMode") === "dark") {
    imgLogo.src = "/assets/logo-negativo.svg";
  } else {
    imgLogo.src = "/assets/logo-positivo.svg";
  }

  const divImg = document.createElement("div");
  divImg.classList.add("img-container");
  const imgPersonal = document.createElement("img");
  imgPersonal.classList.add("heroImg", "heroImgMain");
  imgPersonal.src = "/assets/images/IMG_519_NOBG.png";

  const imgPersonalHover = document.createElement("img");
  imgPersonalHover.classList.add("heroImg", "heroImgHover");
  imgPersonalHover.src = "/assets/images/IMG_512_NOBG.png";

  const div = document.createElement("div");
  div.id = "heroTextContainer";
  div.classList.add("flex-container");
  const h1 = document.createElement("h1");
  h1.textContent = "Hola!, soy Javier Marugán.";
  const h2 = document.createElement("h2");
  h2.innerHTML = `<span class="text-accent">Full Stack Developer</span> con estudios en publicidad y diseño gráfico.`;

  const skillsContainer = document.createElement("div");
  skillsContainer.classList.add("skills-container");
  const ul = document.createElement("ul");
  ul.classList.add("flex-container");
  ul.id = "skills";

  heroData.skills.forEach((skillCategory) => {
    skillCategory.items.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill.toUpperCase();
      ul.appendChild(li);
    });
  });

  const p = document.createElement("p");
  p.innerHTML = `
  Apasionado del 
  <span class="tooltip-parent">
    <span class="hoverable-text">proceso creativo.</span>
    <span class="tooltip">👨‍💻💡 ➡️ 📄 ➡️ 💻 ➡️ 🤔❓ ➡️ ☕📚 ➡️ 🔍📝 ➡️ 💡 ➡️ 👨‍💻⚡ ➡️ 😠🌩️ ➡️ 🔧⚙️ ➡️ 💻 ➡️ 🚀👏 ➡️ ✨🎉 ➡️ ♾️</span>
  </span>
`;
  const tooltip = () => {
    const hoverableText = document.querySelector(".hoverable-text");
    const tooltipElement = document.querySelector(".tooltip");

    let timeoutId;
    let time = 300;

    hoverableText.addEventListener("mouseover", () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        tooltipElement.style.display = "block";
      }, time);
    });

    hoverableText.addEventListener("mouseout", () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        tooltipElement.style.display = "none";
      }, time);
    });

    hoverableText.addEventListener("click", () => {
      clearTimeout(timeoutId);

      tooltipElement.style.display =
        tooltipElement.style.display === "block" ? "none" : "block";
    });
  };

  document.addEventListener("DOMContentLoaded", tooltip);

  const p2 = document.createElement("p");
  p2.textContent =
    "Mi objetivo es transformar ideas complejas en productos funcionales y visualmente atractivos, mejorando la UX en cada paso.";

  sectionHero.append(imgLogo);
  sectionHero.append(divImg);
  divImg.append(imgPersonal);
  divImg.append(imgPersonalHover);
  sectionHero.append(div);
  div.append(h1);
  div.append(h2);
  div.append(skillsContainer);
  skillsContainer.append(ul);
  div.append(p);
  div.append(p2);

  return sectionHero;
};
