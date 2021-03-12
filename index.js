const container = document.querySelector('.game')
let selections = []
let answers = []

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

function createCards () {
  const card = document.createElement('div')
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
      break;
  }
}

selections.map(function async (cardV) {
  const card = createCards();
  card.addEventListener('click', function() {
    answers.push(cardV)
    answers.push(card)
    console.log(cardV)
    selectBG(cardV, card)
    if (answers.length === 4) {
      if (answers[0] === answers[2]) {
        console.log('Conseguiste una pareja!!!')
        answers = []
      } else {
        console.log(answers[2])
        console.log('Fallaste')
        setTimeout(() => {
          selectBG(4, answers[1])
          selectBG(4, answers[3])
          answers = []
        }, 1000)
      }
    }
  })
})