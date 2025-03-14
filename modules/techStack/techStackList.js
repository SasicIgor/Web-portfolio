import { animationObserver } from "../animationObserver.js";
import { techStackData } from "./techStackData.js";
import techStackItem from "./techStackItem.js";

const techStackList = () => {
  const techContainer = document.getElementById("tech-stack");
  techStackData.map((item) => {
    const newItem = techStackItem(
      item.src,
      item.alt,
      item.text,
      item.direction
    );
    techContainer.appendChild(newItem);
  });
  animationObserver(".tech-item", "show-item");
};

export default techStackList;
