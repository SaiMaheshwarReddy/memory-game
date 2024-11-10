import { data, shuffle } from "./utils.js";
const gameBoard = document.getElementById("gameBoard");
const container = document.querySelector(".container");
const matchPoint = document.getElementById("matchPoint");
const parent = document.querySelector(".life-box");
const restartBtn = document.querySelector(".restartBtn");

console.log("hello");

let countDown = 3;
let timer;
let selectedCards = [];
const matchCount = 2;
const lifeCount = 3;
const matchPoints = 0;

function handleCardFlip(e, i) {
  if (
    selectedCards.length < matchCount &&
    selectedCards[0] !== i &&
    selectedCards.length !== 2
  ) {
    e.target.children[0].src = data[i].imgSrc;
    selectedCards.push(i);
  }
  if (selectedCards.length === 2) {
    if (data[selectedCards[0]].name === data[selectedCards[1]].name) {
      const event1 = gameBoard.children[selectedCards[0]];
      const event2 = gameBoard.children[selectedCards[1]];
      event1.classList.remove("confettis-on");
      event2.classList.remove("confettis-on");
      // triggering reflow, so that the CSS animation restarts
      void event1.offsetWidth;
      void event2.offsetWidth;
      event1.classList.add("confettis-on");
      event2.classList.add("confettis-on");
      matchPoint.innerText = Number(matchPoint.innerText) + 1;
      selectedCards.length = 0;
    } else {
      setTimeout(() => {
        if (parent.children.length !== 0) {
          parent.removeChild(parent.lastChild);
          if (parent.children.length === 0) {
            createOverlay("Game Over !", true);
            return;
          }
        }
        gameBoard.children[selectedCards[0]].children[0].src =
          "./images/default.png";
        gameBoard.children[selectedCards[1]].children[0].src =
          "./images/default.png";
        selectedCards.length = 0;
      }, 500);
      // console.log( data[selectedCards[0]].name,gameBoard.children[selectedCards[0]].children[0])
      // console.log( gameBoard.children[selectedCards[1]].children[0])
      //    gameBoard.children[selectedCards[0]].src = ;
    }
  }
}

function resetLifes() {
  const lifeBox = document.querySelector(".life-box");
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < lifeCount; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", "./images/heart.svg");
    img.classList.add("life");
    fragment.appendChild(img);
  }
  lifeBox.appendChild(fragment);
}

function createBoard() {
  restartGame();
  shuffle(data);
  resetLifes();
  if(document.querySelector(".overlay")){
    const overlay = document.querySelector(".overlay");
    overlay.remove();
  }
  if(gameBoard.children.length > 0){
    gameBoard.innerHTML = "";
  }
  matchPoint.innerText = matchPoints;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    // card.style.width = "200px"
    // card.style.heoght = "200px"
    const img = document.createElement("img");
    img.setAttribute("src", data[i].imgSrc);
    setTimeout(() => {
      img.setAttribute("src", "./images/default.png");
    }, 3500);
    img.style.pointerEvents = "none";
    card.classList.add("card");
    card.addEventListener("click", (e) => handleCardFlip(e, i), false);
    img.classList.add("card-img");
    card.appendChild(img);
    fragment.append(card);
  }
  gameBoard.append(fragment);
}
createBoard();

const start = Date.now();

function updateTimer() {
  if (countDown >= 0) {
    console.log(countDown, "down");
    if (countDown === 0) {
      console.log("ffffff");
      createOverlay("GO!");
      setTimeout(() => {
        const overlay = document.querySelector(".overlay");
        overlay.remove();
      }, 500);
    } else {
      createOverlay(countDown);
    }
    countDown = countDown - 1;
  } else {
    clearInterval(timer);
  }
}

function restartGame() {
  timer = setInterval(updateTimer, 1000);
  updateTimer();
}

function createOverlay(overlayText, showButton = false) {
  if (document.querySelector(".overlay")) {
    document.querySelector(".overlay").children[0].textContent = overlayText;
  } else {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
    const inner = ` 
          <p>${overlayText}</p>
         `;
    overlayElement.innerHTML = inner;
    if (showButton) {
      const btn = document.createElement("button");
      btn.innerText = "Restart";
      btn.classList.add("restartBtn");
      if (btn) {
        btn.addEventListener("click", createBoard, false);
      }
      overlayElement.appendChild(btn);
    }
    container.appendChild(overlayElement);
  }
}
