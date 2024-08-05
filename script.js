const mainEl = document.querySelector('main');
const newsletterFormEl = document.querySelector('.newsletter__form');
const emailEl = document.querySelector('.newsletter__email');
const emailInputEl = document.querySelector('.newsletter__email-input');
const emailValidationTextEl = document.querySelector('.newsletter__email-validation-text');
const successMessageEl = document.querySelector('.success-message');
const successMessageTextEl = successMessageEl.querySelector('.success-message__text');

const emailRegExp = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/g;

let invalidForm = false;

const isValidEmail = function (email) {
    const trimmedEmail = email;
    return trimmedEmail.length > 0 && trimmedEmail.match(emailRegExp);
};

const handleInvalidForm = function () {
    emailValidationTextEl.textContent = 'Valid email required';

    emailEl.classList.add('invalid');

    invalidForm = true;
};

const handleValidForm = function (email) {
    const successMessage = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
    successMessageTextEl.textContent = successMessage;

    newsletterFormEl.classList.add('hidden');
    successMessageEl.classList.remove('hidden');
};

const handleSubmit = function (e) {
    e.preventDefault();

    const emailInput = emailInputEl.value.trim();

    if (!isValidEmail(emailInput)) {
        handleInvalidForm();
    } else {
        handleValidForm(emailInput);
    }
};

newsletterFormEl.addEventListener('submit', handleSubmit);

emailInputEl.addEventListener('input', e => {
    if (!invalidForm) return;

    const emailInput = emailInputEl.value.trim();

    if (isValidEmail(emailInput)) {
        emailValidationTextEl.textContent = '';
        emailEl.classList.remove('invalid');
        emailEl.classList.add('valid');
    }

    console.log(emailInputEl.value);
});
