import  SliderItem  from "./sliderItem.js";
import { data } from "./data.js";

const sliderContainer = document.querySelector(".slider-container");

const SliderList=()=> {
  data.forEach((project,i) => {
    const newProject = SliderItem(project);
    console.log(i)
    sliderContainer.appendChild(newProject);
    console.log(newProject)
  });
}

export default SliderList;