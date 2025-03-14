import { iconAnimationData } from "./iconAnimationData.js";
import { iconAnimationInfo } from "./iconAnimationInfo.js";
import iconAnimationItem from "./iconAnimationItem.js";

const iconAimationList = () => {
  const iconData = iconAnimationData;
  const animationData = iconAnimationInfo;
  const animationContainer = document.getElementById(
    "tech-background-animation"
  );

  iconData.map((icon, i) => {
    const newIcon = iconAnimationItem(icon.src, icon.alt);
    newIcon.style.top = animationData[i].top;
    newIcon.style.left = animationData[i].left;
    newIcon.style.animation = animationData[i].animation;
    animationContainer.appendChild(newIcon);
  });
};

export default iconAimationList;
