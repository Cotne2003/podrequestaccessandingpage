const emailValue = document.getElementById("emailValue");
const button = document.getElementById("button");
const emailError = document.getElementById("error");
const emailPassed = document.getElementById("passed");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emailFunct = () => {
  if (emailValidation.test(emailValue.value)) {
    emailError.style.display = "none";
    emailPassed.style.display = "block";
    emailValue.style.border = "green";
  } else {
    emailError.style.display = "block";
    emailPassed.style.display = "none";
    emailValue.style.border = "red";
  }
};

button.addEventListener("click", emailFunct);
