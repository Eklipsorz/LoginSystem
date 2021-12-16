
// Maximum second in countdown timer
const maxSecond = 10

// Start second in countdown timer
let restSecond = maxSecond

// set a timer to count down for each 1 sec
const countDownTimer = document.querySelector('#countdown-timer')
const intervalTimer = setInterval(countDownInErrorPage, 1000)

// set a handler of the timer 
function countDownInErrorPage() {

  // count down
  countDownTimer.innerHTML = --restSecond

  // if it count down to 0, then the system help user redirect to another page
  // another page: index for this service or previous page user looked up
  if (!restSecond) {

    // stop counting down
    clearInterval(intervalTimer)

    // back to index
    window.location.replace("/")

  }

}

