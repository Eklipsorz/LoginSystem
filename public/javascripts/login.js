const loginForm = document.querySelector('#login-form')
const deleteMessageBtn = document.querySelector('#delete-message-btn')
const loginFormSubmitBtn = document.querySelector('#login-form-submit-btn')




function onLoginFormSubmitted(event) {
  if (!loginForm.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
}

function onLoginFormSubmitBtnClicked(event) {
  loginForm.classList.add('was-validated')
}

function onDeleteMessageBtnClicked(event) {
  const resultMessage = document.querySelector('#result-message')
  resultMessage.remove()
}

loginForm.addEventListener('submit', onLoginFormSubmitted)
loginFormSubmitBtn.addEventListener('click', onLoginFormSubmitBtnClicked)
deleteMessageBtn.addEventListener('click', onDeleteMessageBtnClicked)