const loginForm = document.querySelector('#login-form')
const loginFormSubmitBtn = document.querySelector('#login-form-submit-btn')




function onLoginFormSubmitted(event) {
  if (!loginForm.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
}

function onLoginFormSubmitBtnClicked(event) {
  loginForm.classList.add('was-validated')
  console.log('hi')
}

loginForm.addEventListener('submit', onLoginFormSubmitted)
loginFormSubmitBtn.addEventListener('click', onLoginFormSubmitBtnClicked)