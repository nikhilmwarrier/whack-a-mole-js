alert("Play?");

const squares = document.querySelectorAll(".square");
const moles = document.querySelectorAll(".mole");
const timeLeftElem = document.getElementById("time-left");
const score = document.getElementById("score");

let result = 0;
let moleInterval = 750;
let hitpos = "";
let currentTime = timeLeftElem.textContent;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomPos = squares[Math.floor(Math.random() * 9)];
  randomPos.classList.add("mole");

  hitpos = randomPos.id;
}

squares.forEach((square) => {
  square.addEventListener("mouseup", (e) => {
    if (square.id === hitpos) {
      result++;
      moleInterval -= 10;
      score.textContent = result;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, moleInterval);
}
moveMole();

function countDown() {
  currentTime--;
  timeLeftElem.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(timerId);
    alert(`Game Over! Your score is ${result}
Play again?
    `);
    window.location.reload();
  }
}

let timerId = setInterval(countDown, 1000);
