// obtain three elements: loginForm 、loginFormSubmitBtn、deleteMessageBtn
// loginForm：a account form (including password and user input) on login page
// loginFormSubmitBtn：a submit button on the loginForm
// deleteMessageBtn： A button which can remove error message for incorrect user or password
const loginForm = document.querySelector('#login-form')
const loginFormSubmitBtn = document.querySelector('#login-form-submit-btn')
const deleteMessageBtn = document.querySelector('#delete-message-btn')


// event handler for submitting login form
function onLoginFormSubmitted(event) {
  // Cancel default submit handling
  if (!loginForm.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
}

// event handler for clicking the submit button
function onLoginFormSubmitBtnClicked(event) {
  loginForm.classList.add('was-validated')
}

// event handler for clicking the button which can delete error message
function onDeleteMessageBtnClicked(event) {
  // obtain error message
  const resultMessage = document.querySelector('#result-message')

  // delete error message
  resultMessage.remove()
}

// bind event handler to all three elements
loginForm.addEventListener('submit', onLoginFormSubmitted)
loginFormSubmitBtn.addEventListener('click', onLoginFormSubmitBtnClicked)

if (deleteMessageBtn) {
  deleteMessageBtn.addEventListener('click', onDeleteMessageBtnClicked)
}