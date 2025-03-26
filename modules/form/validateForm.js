import hideErrorMessage from "./hideErrorMessage.js";

const validateForm = (nameInput, emailInput, subjectInput, messageInput) => {
  const emailValidation = /^[\w-\.]+@([\w-]+\.){1,2}[\w-]{2,5}$/;
  const subjectValidation = /^[\w\s]{3,}$/;
  const nameValidation = /^[a-zA-Z]{1,}(\.?\s*[a-zA-Z]+)$/;
  const messageValidation = /^[a-zA-Z0-9., -]{20,}$/;

  const emailIsValid = emailValidation.test(emailInput.value.trim());
  const subjectIsValid = subjectValidation.test(subjectInput.value.trim());
  const nameIsValid = nameValidation.test(nameInput.value.trim());
  const messageIsValid = messageValidation.test(messageInput.value.trim());

  if (!emailIsValid) {
    document
      .getElementById("error-span-email")
      .classList.add("show-error-message");
    emailInput.addEventListener("focus", hideErrorMessage);
    return false;
  }
  if (!subjectIsValid) {
    document
      .getElementById("error-span-subject")
      .classList.add("show-error-message");
    subjectInput.addEventListener("focus", hideErrorMessage);
    return false;
  }
  if (!nameIsValid) {
    document
      .getElementById("error-span-name")
      .classList.add("show-error-message");
    nameInput.addEventListener("focus", hideErrorMessage);
    return false;
  }
  if (!messageIsValid) {
    document
      .getElementById("error-span-text")
      .classList.add("show-error-message");
    messageInput.addEventListener("focus", hideErrorMessage);
    return false;
  }

  return {
    name: nameInput.value,
    email: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value,
  };
};

export default validateForm;
