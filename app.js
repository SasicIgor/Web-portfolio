import { toggleMenu } from "./modules/nav-menu.js";
import SliderList from "./modules/slider/sliderList.js";
import Slider from "./modules/slider/slider.js";
import handleFormSubmit from "./modules/form/formSubmitting.js";
import techStackList from "./modules/techStack/techStackList.js";
import iconAimationList from "./modules/techStack/iconAnimationList.js";

toggleMenu("links", "open-menu", "close-menu");
SliderList();
Slider();
const form = document.getElementById("form");

form.addEventListener("submit", handleFormSubmit);
techStackList();
iconAimationList();
