const container = document.querySelector('.game')
let selections = []
let answers = []
let corrects = []

function createCards () {
  const card = document.createElement('button')
  const cardBG = document.createElement('img')
  cardBG.setAttribute('src', './images/cards-bg.jpg')
  cardBG.classList.add('img-bg')
  card.appendChild(cardBG)
  container.appendChild(card)
  return card
}

function selectBG (cardV, card) {
  switch(cardV) {
    case 0:
      card.children[0].setAttribute('src', './images/Sandy-card.png')
      break
      case 1:
        card.children[0].setAttribute('src', './images/Colette-card.png')
      break
      case 2:
        card.children[0].setAttribute('src', './images/Jesse-card.png')
        break
      default:
        card.children[0].setAttribute('src', './images/cards-bg.jpg')
  }
}

function selectCard(cardV, card) {
  if(!corrects.includes(cardV)) {
  selectBG(cardV, card)
  answers.push(cardV)
  answers.push(card)
  console.log(card)
  card.setAttribute('disabled', true)
  console.log(cardV)
    if (answers.length === 4) {
      if (answers[0] === answers[2]) {
        console.log('Conseguiste una pareja!!!')
        console.log(selections)
        corrects.push(answers[0])
        corrects.push(answers[2])
        answers = []
      } else {
        console.log(answers[2])
        console.log('Fallaste')
        answers[1].removeAttribute('disabled')
        answers[3].removeAttribute('disabled')
        setTimeout(() => {
          selectBG(null, answers[1])
          selectBG(null, answers[3])
          answers = []
        }, 1000)
      }
    }
  }
}

while(selections.length < 6) {
  const numberRandom = Math.floor(Math.random() * (3 + 0))
  if (selections.length === 0) {
    selections.push(numberRandom)
  } else {
    selections.push(numberRandom)
    let sec = selections.reduce(function(acc, act) {
      if(acc[act]) {
        acc[act]++
      }else {
        acc[act] = 1
      }
      return acc
    }, {})
    if (sec[numberRandom] > 2){
      selections.pop()
    }
  }
}

console.log(selections)
selections.map(function(cardV) {
  const card = createCards();
  card.addEventListener('click', () => selectCard(cardV, card))
})