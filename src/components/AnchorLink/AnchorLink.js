import "./AnchorLink.css";

export const AnchorLink = ({
  textContent,
  href = "#",
  importance,
  size = "l",
  target = "_self",
  rel = "noopener norreferer",
  title,
  ariaLabel,
  imgSrc,
  imgAlt
}) => {
  const a = document.createElement("a");

  a.textContent = textContent;
  a.href = href;
  a.classList.add(importance, size);
  a.target = target;
  a.rel = rel;

  if (title) {
    a.setAttribute("title", title);
  }
  if (ariaLabel) {
    a.setAttribute("aria-label", ariaLabel);
  }

  if (imgSrc) {
    const img = document.createElement("img");

    img.src = imgSrc;
    img.alt = imgAlt;
    img.classList.add("anchor-img", importance, size);

    a.prepend(img);
  }

  return a;
};
