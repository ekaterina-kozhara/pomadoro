const form = document.querySelector('form')

form.onsubmit =function startTimer(e) {
  event.preventDefault()

  setTimeout(function () {
    const input = e.target.querySelector('input[type=text]')

    console.log(input.value)
  }, 2000)
}
