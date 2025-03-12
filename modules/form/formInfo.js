import hideFormInfo from "./hideFormInfo.js";

const formInfo = (infoBox, infoMessage, infoColor) => {
  infoBox.innerHTML = infoMessage;
  infoBox.style.color = `${infoColor}`;
  setTimeout(() => {
    hideFormInfo(infoBox);
  }, 4000);
};
export default formInfo;
