import "./Footer.css";

export const Footer = () => {
  const footer = document.createElement("footer");
  const p = document.createElement("p");

  const currentYear = new Date().getFullYear();

  p.innerHTML = `&copy; ${currentYear} Marugandev / Cocinado a 🔥 lento...`;

  footer.appendChild(p);
  document.body.appendChild(footer);

  return footer;
};
