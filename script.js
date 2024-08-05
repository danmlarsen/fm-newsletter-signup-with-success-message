const mainEl = document.querySelector('main');
const newsletterFormEl = document.querySelector('.newsletter__form');
const emailEl = document.querySelector('.newsletter__email');
const emailInputEl = document.querySelector('.newsletter__email-input');
const emailValidationTextEl = document.querySelector('.newsletter__email-validation-text');
const successMessageEl = document.querySelector('.success-message');
const successMessageTextEl = successMessageEl.querySelector('.success-message__text');
const dismissBtn = document.querySelector('.success-message__dismiss-btn');

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const invalidEmailText = 'Valid email required';
const validEmailText = 'Valid email';

const isValidEmail = function (email) {
    const trimmedEmail = email;
    return trimmedEmail.length > 0 && trimmedEmail.match(emailRegExp);
};

const handleInvalidForm = function () {
    emailValidationTextEl.textContent = invalidEmailText;
    emailEl.classList.add('invalid');

    emailInputEl.addEventListener('input', handleInput);
};

const handleValidForm = function (email) {
    const successMessage = `A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`;
    successMessageTextEl.innerHTML = successMessage;

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

const handleInput = function (e) {
    const emailInput = emailInputEl.value.trim();

    if (isValidEmail(emailInput)) {
        emailValidationTextEl.textContent = validEmailText;
        emailEl.classList.remove('invalid');
        emailEl.classList.add('valid');
    } else {
        emailValidationTextEl.textContent = invalidEmailText;
        emailEl.classList.remove('valid');
        emailEl.classList.add('invalid');
    }
};

const handleDismiss = function () {
    location.reload();
};

newsletterFormEl.addEventListener('submit', handleSubmit);
dismissBtn.addEventListener('click', handleDismiss);
