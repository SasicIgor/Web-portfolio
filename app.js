import { toggleMenu } from "./modules/nav-menu.js";
import { animationObserver } from "./modules/animation.js";

toggleMenu("links", "open-menu", "close-menu");
animationObserver(".tech-item", "show-item");
