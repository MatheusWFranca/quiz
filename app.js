const form = document.querySelector('form')
form.addEventListener('submit', checkAnwsers)

function checkAnwsers(event) {
  event.preventDefault()
  const correctAnwsers = ['A', 'A', 'B', 'B']
  let score = 0;
  
  const userAwnser = document.querySelectorAll('input[type=radio]:checked')
  userAwnser.forEach(({value}, index) => {
    if(value === correctAnwsers[index]) {
      score += 25
    }
  })
  
  setResult(score)
}

function setResult(score) {
  const result = document.querySelector('.result')
  let counter = 0;

  let timer = setInterval(() => {
    if(counter === score) {
      clearInterval(timer)
    }
    result.classList.remove('d-none')
    result.querySelector('span').textContent = `${counter} %`
    counter++
  }, 10)
  scrollTo(0,0)
}