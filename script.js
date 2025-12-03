const formCard = document.getElementById('form-card');
const successCard = document.getElementById('success-card');

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailErrorMsg = document.getElementById('email-error-msg');
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

    emailInput.classList.add('error');
    show(emailErrorMsg);
    return;
  }

  showSuccessMsg(email);
}

document.getElementById('dismiss-btn').addEventListener('click', showFormCard);
emailInput.addEventListener('input', () => {
  emailInput.classList.remove('error');
  hide(emailErrorMsg);
});
form.addEventListener('submit', handleSubmit);
