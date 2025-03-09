import { toggleMenu } from "./modules/nav-menu.js";
const links = document.getElementById("links");
const openButton = document.getElementById("open-menu");
const closeButton = document.getElementById("close-menu");

toggleMenu(links, openButton, closeButton);
