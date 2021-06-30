let cardsEl = document.getElementById("cards");
let total = document.getElementById("total");
let messageEl = document.getElementById("message-el");
let newCardBtn = document.getElementById("card-btn");
let points = document.getElementById('pts')

let count = 0;

const MAX = 10;
const MIN = 1;

let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let cards = [];

let winSound = new Audio();
winSound.src = "/sounds/win.mp3";

let loseSound = new Audio();
loseSound.src = "/sounds/lose.mp3";

let win1 = new Audio();
win1.src = "/sounds/winwin.mp3";

function getRandomInt() {
  return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

function start() {
  isAlive = true;
  hasBlackJack = false;
  cards[0] = getRandomInt();
  cards[1] = getRandomInt();
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " ";
  sum = cards[0] + cards[1];
  messageEl.textContent = "Game started.";
  total.innerText = "Total: " + sum;
}

newCardBtn.addEventListener("click", function () {
  getNewCard();
});

function getNewCard() {
  if (isAlive && hasBlackJack === false) {
    let newCard = getRandomInt();
    sum += newCard;
    cardsEl.textContent += newCard + " ";
    total.innerText = "Total: " + sum;

    if (sum <= 20) {
      message = "Draw another card.";
    } else if (sum === 21) {
      message = "You win!";
      hasBlackJack = true;
      win1.play();
      addPoint();
    } else {
      loseSound.play();
      message = "You lose!";
      isAlive = false;
    }
    messageEl.textContent = message;
  }
}

function addPoint(){
    count += 1;
    points.innerText = "Points: " + count;
}