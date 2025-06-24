const board = document.getElementById('game-board');
const parabens = document.getElementById('parabens');
const restartContainer = document.getElementById('restart-container');
const bgMusic = document.getElementById('bg-music');
const soundButton = document.getElementById('sound-button');

let isMusicPlaying = false;

const cardsArray = [
  'assets/energyFlora.png', 'assets/energyFlora.png',
  'assets/creatinaLaranja.png', 'assets/creatinaLaranja.png',
  'assets/creatinaMorango.png', 'assets/creatinaMorango.png',
  'assets/creatinaLimao.png', 'assets/creatinaLimao.png',
  'assets/frutasSabores.png', 'assets/frutasSabores.png',
  'assets/3sabores.png', 'assets/3sabores.png'
];

let flippedCards = [];
let matched = 0;

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function createCard(src) {
  const card = document.createElement('div');
  card.classList.add('card');

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = url('${src}');

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', () => {
    if (card.classList.contains('flip') || card.classList.contains('matched')) return;

    if (flippedCards.length === 2) {
      flippedCards.forEach(c => c.classList.remove('flip'));
      flippedCards = [];
    }

    card.classList.add('flip');
    flippedCards.push(card);

    if (flippedCards.length === 2) checkMatch();
  });

  return card;
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  const img1 = card1.querySelector('.back').style.backgroundImage;
  const img2 = card2.querySelector('.back').style.backgroundImage;

  if (img1 === img2) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matched += 2;

    if (matched === cardsArray.length) {
      setTimeout(() => {
        parabens.classList.remove('hidden');
        restartContainer.classList.remove('hidden');

        // 🔓 ATIVA A ROLAGEM QUANDO APARECE PARABÉNS
        document.body.style.overflowY = 'auto';
      }, 500);
    }

    flippedCards = [];
  }
}

function initGame() {
  const shuffled = shuffle([...cardsArray]);
  shuffled.forEach(src => {
    const card = createCard(src);
    board.appendChild(card);
  });
}

function restartGame() {
  board.innerHTML = '';
  parabens.classList.add('hidden');
  restartContainer.classList.add('hidden');
  matched = 0;
  flippedCards = [];
  document.body.style.overflow = 'hidden';
  initGame();
}

