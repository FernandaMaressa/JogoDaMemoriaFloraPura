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