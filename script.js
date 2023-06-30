const mailBox = document.querySelector('#email');
const error = document.querySelector('.error');
const btnSubmit = document.querySelector('.sign-up-btn');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  if (!mailBox.value.includes('@')) {
    error.style.display = 'block';
  }
  else {error.style.display = 'none';}
});
