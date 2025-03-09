type toggleMenuProps = {
  links: HTMLElement;
  openButton: HTMLElement;
  closeButton: HTMLElement
}

export function toggleMenu({links, openButton, closeButton}:toggleMenuProps) {
  function openMenu() {
    links.classList.add("show");
    openButton.classList.add("hidden");
    closeButton.addEventListener("click", closeMenu);
    openButton.removeEventListener("click", openMenu);
  }
  function closeMenu() {
    links.classList.remove("show");
    openButton.classList.remove("hidden");
    openButton.addEventListener("click", openMenu);
    closeButton.removeEventListener("click", closeMenu);
  }
  openButton.addEventListener("click", openMenu);
}
