import { toggleMenu } from "./modules/nav-menu.js";
import { animationObserver } from "./modules/animation.js";
import SliderList from "./modules/slider/sliderList.js";
import Slider from "./modules/slider/slider.js";
import handleFormSubmit from "./modules/form/formSubmitting.js";

toggleMenu("links", "open-menu", "close-menu");
animationObserver(".tech-item", "show-item");
SliderList();
Slider();
const form = document.getElementById("form");

form.addEventListener("submit", handleFormSubmit);
const inputs=document.querySelectorAll('.input-box')
