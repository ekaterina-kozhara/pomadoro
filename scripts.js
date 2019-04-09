const form = document.querySelector('form')
const tasks = document.querySelector('ul')
const progress = document.querySelector('.progress')
const WORK_TIME = 2000

function startTimer(e) {
  e.preventDefault()

  const input = e.target.querySelector('input')
  input.disabled = true
  progress.style.width = '100vw'
  progress.style.transitionDuration =  WORK_TIME + 'ms'

  setTimeout(function() {
    input.disabled = false
    input.focus()
    progress.style.transitionDuration = ''
    progress.style.width = ''
    const listItem = document.createElement('li')
    listItem.innerText = input.value
    tasks.appendChild(listItem)
    input.value = ''

  },  WORK_TIME)
}


form.onsubmit = startTimer