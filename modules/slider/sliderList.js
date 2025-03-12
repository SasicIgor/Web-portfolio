import  SliderItem  from "./sliderItem.js";
import { data } from "./data.js";

const sliderContainer = document.querySelector(".slider-container");

const SliderList=()=> {
  data.forEach((project,i) => {
    const newProject = SliderItem(project);
    sliderContainer.appendChild(newProject);
  });
}

export default SliderList;