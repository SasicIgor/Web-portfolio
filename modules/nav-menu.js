export function toggleMenu(navLinks, openMenuIcon, closeMenuIcon) {
  const links = document.getElementById(navLinks);
  const openButton = document.getElementById(openMenuIcon);
  const closeButton = document.getElementById(closeMenuIcon);

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
