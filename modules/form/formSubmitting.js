import sendEmail from "./sendEmail.js";
import validateForm from "./validateForm.js";
import resetInputValue from "./resetInputValue.js";
import formInfo from "./formInfo.js";

const handleFormSubmit = async (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("name-input");
  const emailInput = document.getElementById("email-input");
  const subjectInput = document.getElementById("subject-input");
  const messageInput = document.getElementById("message-input");
  const infoBox = document.getElementById("form-info");

  const validForm = validateForm(
    nameInput,
    emailInput,
    subjectInput,
    messageInput
  );
  if (!validForm) {
    formInfo(infoBox, "Please fill up the form properly.", "red");
    return;
  }
  try {
    formInfo(infoBox, "Sending the email. Please wait!", "black");
    const emailSending = await sendEmail(validForm);
    if (emailSending.status == 200) {
      formInfo(infoBox, "Your message has been sent. Thank you", "green");
      resetInputValue();
    }
  } catch (error) {
    formInfo(infoBox, "Failed to send email. Please try again.", "red");
  }
};
export default handleFormSubmit;
