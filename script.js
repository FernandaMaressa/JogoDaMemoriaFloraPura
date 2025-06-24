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