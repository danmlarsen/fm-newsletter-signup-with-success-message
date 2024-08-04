const mainEl = document.querySelector("main");
const newsletterFormEl = document.querySelector(".newsletter__form");
const emailEl = document.querySelector(".newsletter__email");
const emailInputEl = document.querySelector(".newsletter__email-input");
const emailValidationTextEl = document.querySelector(
  ".newsletter__email-validation-text"
);
const successMessageEl = document.querySelector(".success-message");
const successMessageTextEl = successMessageEl.querySelector(
  ".success-message__text"
);

const emailRegExp = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/g;

let invalidForm = false;

const handleSubmit = function (e) {
  e.preventDefault();

  const emailInput = emailInputEl.value;

  if (emailInput.trim().length == 0 || !emailInput.match(emailRegExp)) {
    emailValidationTextEl.textContent = "Valid email required";

    emailEl.classList.add("invalid");

    invalidForm = true;

    return;
  }

  const successMessage = `A confirmation email has been sent to ${emailInput}. Please open it and click the button inside to confirm your subscription.`;
  successMessageTextEl.textContent = successMessage;

  newsletterFormEl.classList.add("hidden");
  successMessageEl.classList.remove("hidden");
};

newsletterFormEl.addEventListener("submit", handleSubmit);

emailInputEl.addEventListener("input", (e) => {
  if (!invalidForm) return;

  console.log(emailInputEl.value);
});
