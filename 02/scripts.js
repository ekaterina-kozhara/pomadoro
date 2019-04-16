const form = document.querySelector('form')
const switchTo25 = document.querySelector('.switch.is-left')
const switchTo5 = document.querySelector('.switch.is-right')
let taskTime = 5000
const sectionFirst = document.getElementById('timer-section')
const sectionSecond = document.getElementById('stats-section')
const statisticToggle = document.getElementById('statisticToggle')
const footerImg = document.querySelector('footer > img')

switchTo25.onclick = function handleTimeSwitch() {
  this.classList.toggle('is-active')
  switchTo5.classList.toggle('is-active')
  taskTime = 5000
}

switchTo5.onclick = function handleTimeSwitch() {
  this.classList.toggle('is-active')
  switchTo25.classList.toggle('is-active')
  taskTime = 1000
}

form.onsubmit = function startTimer(e) {
  event.preventDefault()

  setTimeout(function () {
    const input = e.target.querySelector('input[type=text]')

    console.log(input.value)
  }, taskTime)
}

statisticToggle.onclick = function handleScreenToggle() {
  sectionFirst.style.display = "none"
  sectionSecond.style.display = "block"
  footerImg.src = "images/todolist.svg"
}

// handleScreenToggle()
