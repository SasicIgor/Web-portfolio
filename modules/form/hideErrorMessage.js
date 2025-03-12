const hideErrorMessage = (e) => {
  e.target.nextElementSibling.classList.remove("show-error-message");
  e.target.removeEventListener("focus", hideErrorMessage);
};
export default hideErrorMessage;
