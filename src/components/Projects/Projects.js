import "./Projects.css";

import { ProjectsData } from "../../data/ProjectsData/ProjetsData";
import { AnchorLink } from "../../components/AnchorLink/AnchorLink";

export const Projects = () => {
  const sectionProjects = document.createElement("section");
  sectionProjects.id = "projects";
  sectionProjects.classList.add("flex-container");
  /* const h2 = document.createElement("h2"); */
  /* h2.textContent = "Projectos"; */

  ProjectsData.forEach((element) => {
    const project = document.createElement("article");
    project.classList.add("project");
    const figure = document.createElement("figure");
    figure.classList.add("flex-container");
    const a = AnchorLink({
      href: element.href,
      target: element.target,
      imgSrc: element.imgSrc,
      imgAlt: element.imgAlt
    });
    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("flex-container");
    const h3Back = document.createElement("h3");
    h3Back.textContent = element.name;
    h3Back.classList.add("h3-back");
    const h3 = document.createElement("h3");
    h3.textContent = element.name;
    const p = document.createElement("p");
    p.textContent = element.description;
    const div = document.createElement("div");
    div.classList.add("flex-container");
    if (element.github.href) {
      const aGithub = AnchorLink({
        href: element.github.href,
        importance: "anchor-fixed",
        target: element.github.target,
        rel: element.github.rel,
        title: element.github.title,
        imgSrc: element.github.src,
        imgAlt: element.github.alt
      });

      div.append(aGithub);
    }
    if (element.figma.href) {
      const afigma = AnchorLink({
        href: element.figma.href,
        importance: "anchor-fixed",
        target: element.figma.target,
        rel: element.figma.rel,
        title: element.figma.title,
        imgSrc: element.figma.src,
        imgAlt: element.figma.alt
      });
      div.append(afigma);
    }

    sectionProjects.append(project);
    project.append(figure);
    figure.append(a);
    figure.append(figcaption);
    figcaption.append(h3Back);
    figcaption.append(h3);
    figcaption.append(p);

    figcaption.append(div);
  });

  /* sectionProjects.prepend(h2); */

  return sectionProjects;
};
