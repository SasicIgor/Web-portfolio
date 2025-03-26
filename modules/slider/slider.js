const Slider = () => {
  const sliderItemsArray = document.querySelectorAll(".slider-item");
  const itemsArray = Array.from(sliderItemsArray);
  let check = 0;
  let currentIndex = 0;
  let renderItems = [];

  const handleSliderMove = (event) => {
    const direction = event.target.dataset.direction;
    if (direction === "previous") {
      currentIndex = (currentIndex - 1 + itemsArray.length) % itemsArray.length;
    }
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % itemsArray.length;
    }
    updateRenderItems();
    renderSlider();
  };

  const updateRenderItems = () => {
    renderItems = itemsArray.slice(currentIndex, currentIndex + 3);
    if (renderItems.length < 3) {
      renderItems = [
        ...renderItems,
        ...itemsArray.slice(0, 3 - renderItems.length),
      ];
    }
  };

  const renderSlider = () => {
    Array.from(document.getElementsByClassName("overlay")).forEach((elem)=>elem.remove());
    itemsArray.forEach((item) => {
      item.classList.remove("slider-item-1", "slider-item-2", "slider-item-3");
      item.removeEventListener("click", handleSliderMove);
    });
    renderItems.forEach((item, i) => {
      if (i === 1) {
        item.classList.add("slider-item-2");
      }
      if (i === 0 || i === 2) {
        item.classList.add(`slider-item-${i + 1}`);
        if (i == 0) {
          let overlay = document.createElement("div");
          overlay.dataset.direction = "previous";
          overlay.classList.add("overlay");
          overlay.classList.add("overlay-1");
          overlay.addEventListener("click", handleSliderMove);
          item.insertAdjacentElement("afterend", overlay);
        }
        if (i == 2) {
          let overlay = document.createElement("div");
          overlay.dataset.direction = "next";
          overlay.classList.add("overlay");
          overlay.classList.add("overlay-3");
          overlay.addEventListener("click", handleSliderMove);
          item.insertAdjacentElement("afterend", overlay);
        }
      }
      check=2
    });
  };

  const previousArrow = document.querySelector(".slider-arrow-previous");
  const nextArrow = document.querySelector(".slider-arrow-next");
  previousArrow.addEventListener("click", handleSliderMove);
  nextArrow.addEventListener("click", handleSliderMove);

  if (check === 0) {
    check = 1;
    updateRenderItems();
    renderSlider();
  }
};

export default Slider;
