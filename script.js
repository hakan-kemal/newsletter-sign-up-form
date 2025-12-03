const form = document.getElementById('form');
const formCard = document.getElementById('form-card');
const emailInput = document.getElementById('email');
const emailErrorMsg = document.getElementById('email-error-msg');
const successCard = document.getElementById('success-card');
const successEmail = document.getElementById('success-email');

const show = (el) => el.classList.remove('hidden');
const hide = (el) => el.classList.add('hidden');

const validateEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email.toLowerCase());
};

function showSuccessMsg(email) {
  successEmail.textContent = email;
  show(successCard);
  hide(formCard);

  form.reset();
  hide(emailErrorMsg);
  emailInput.classList.remove('error');
}

function showErrorMsg(hasError) {
  emailInput.setAttribute('aria-invalid', hasError ? 'true' : 'false');
  emailInput.classList.toggle('error', hasError);
  hasError ? show(emailErrorMsg) : hide(emailErrorMsg);
}

function showFormCard() {
  show(formCard);
  hide(successCard);
}

function handleSubmit(e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!email || !validateEmail(email)) {
    emailErrorMsg.textContent = !email
      ? 'Email is required'
      : 'Valid email required';

    showErrorMsg(true);
    return;
  }

  showSuccessMsg(email);
}

document.getElementById('dismiss-btn').addEventListener('click', showFormCard);
emailInput.addEventListener('input', () => {
  showErrorMsg(false);
});
form.addEventListener('submit', handleSubmit);
