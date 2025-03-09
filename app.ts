import { toggleMenu } from "./modules/nav-menu.js";
const links = document.getElementById("links") as HTMLElement;
const openButton = document.getElementById("open-menu") as HTMLElement;
const closeButton = document.getElementById("close-menu") as HTMLElement;

if (links && openButton && closeButton) {
  toggleMenu({ links, openButton, closeButton });
}
