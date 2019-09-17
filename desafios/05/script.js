const btnLogin = document.querySelector('.btn-login');
const form = document.querySelector('form');

btnLogin.addEventListener('click', event => {
  event.preventDefault();
  form.classList.add('form-hide')
});

form.addEventListener('animationstart', event => {
  if (event.animationName === 'down') {
    document.body.style.overflow = 'hidden'
  }
})

form.addEventListener('animationend', event => {
  if (event.animationName === 'down')
    //form.style.display = 'none'
    document.body.style.overflow = 'none'
})
