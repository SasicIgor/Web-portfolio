const SliderItem = (project) => {
  const sliderComponent = document.createElement("div");
  sliderComponent.classList.add("slider-item");

  sliderComponent.innerHTML = `
    <div class="slider-left>
        <img src='./assets/profil_photo.jpg' alt='project screenshot'/>
    </div>
    <div class="slider-right">
      <h2>${project.title}</h2>
      <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
      
      <div class="buttons">
        <button><a href="#">The project</a></button>
        <button><a href="#">The code</a></button>
      </div>
    </div>
    `;
  return sliderComponent;
};
export default SliderItem;
