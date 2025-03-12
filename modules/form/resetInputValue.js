const resetInputValue = () => {
  const inputs = document.querySelectorAll(".form-input");
  inputs.forEach((input) => {
    input.value = "";
  });
};

export default resetInputValue;
