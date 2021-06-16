const board = document.querySelector('#board')

const colors = [
  '#F71313',
  '#F603D6',
  '#6403F6',
  '#0627FD',
  '#06FDFD',
  '#06FD58',
  '#348306',
  '#FCFC07',
  '#E28A05',
]

const SQUARES_NUMBER = 2400

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  // событие добавляет цвет
  square.addEventListener('mouseover', setColor)
  // событие удаляет цвет
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  // Math.floor округляет в меньшую сторону
  return colors[Math.floor(Math.random() * colors.length)]
}
