import { toggleMenu } from "./modules/nav-menu.js";
import { animationObserver } from "./modules/animation.js";
import SliderList from "./modules/slider/sliderList.js";
import Slider from "./modules/slider/slider.js";

toggleMenu("links", "open-menu", "close-menu");
animationObserver(".tech-item", "show-item");
SliderList();
Slider();
