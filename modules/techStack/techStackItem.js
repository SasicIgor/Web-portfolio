const techStackItem = (src, alt, text, direction) => {
  const techComponent = document.createElement("div");
  techComponent.classList.add("tech-item");
  techComponent.classList.add(`tech-item-${direction}`)
  techComponent.innerHTML = `
    
              <img
                src=${src}
                alt=${alt}
                class="icon"
              />
              <div class="tech-item-text">
                <p class="paragraph-text">
                  ${text}
                </p>
                <span class="tech-item-arrow tech-item-${direction}-arrow"></span>
              </div>
            
    
    `;
  return techComponent;
};

export default techStackItem;
