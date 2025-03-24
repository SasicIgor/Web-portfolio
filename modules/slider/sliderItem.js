const SliderItem = (project) => {
  const sliderComponent = document.createElement("div");
  sliderComponent.classList.add("slider-item");
  const { title, description, imageUrl, projectLink, codeLink } = project;
  sliderComponent.innerHTML = `
    <div class="slider-img">
        <img
          src=${imageUrl}
          alt=${title}
        />
    </div>
    <div class="slider-headline flex-center">
        <h3>${title}</h3>
    </div>
    `;
  let links =
    projectLink !== ""
      ? `<div class="slider-buttons flex-center">
      <a href="${projectLink}" target="_blank">Check the project</a>
      <a href="${codeLink}" target="_blank">Check the code</a>
    </div>`
      : `<div class="slider-buttons flex-center">
      <a href="${codeLink}" target="_blank">Check the code</a>
    </div>`;
  let descriptionContainer = `<div class="slider-description flex-center">
      <p>
        ${description}
      </p>
    </div>`;
  sliderComponent.innerHTML += links;
  sliderComponent.innerHTML += descriptionContainer;
  return sliderComponent;
};
export default SliderItem;
