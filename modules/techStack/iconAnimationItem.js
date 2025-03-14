const iconAnimationItem = (src, alt) => {
  const newItem = document.createElement("div");
  newItem.classList.add("icon-animation");
  newItem.classList.add("flex-center");
  newItem.innerHTML = `
    <img src=${src} alt=${alt} class='icon' />
    `;

  return newItem;
};

export default iconAnimationItem;
