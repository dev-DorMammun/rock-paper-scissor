const rock = document.querySelector(".rock");
const textRock = document.querySelector(".text-rock");
const paper = document.querySelector(".paper");
const textPaper = document.querySelector(".text-paper");
const scissor = document.querySelector(".scissor");
const textScissor = document.querySelector(".text-scissor");
const decision = document.querySelector(".absolute");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const array = ["Rock", "Paper", "Scissor"];

function executionRock() {
  left.src = `./images/left/0.png`;

  let guess = Math.floor(Math.random() * 3);
  right.src = `./images/right/${guess}.png`;

  if (array[guess] == "Rock") {
    decision.textContent = "Draw";
  } else if (array[guess] == "Paper") {
    decision.textContent = "You lose";
  } else if (array[guess] == "Scissor") {
    decision.textContent = "You Win!";
  }
}
function executionPaper() {
  left.src = `./images/left/1.png`;

  let guess = Math.floor(Math.random() * 3);
  right.src = `./images/right/${guess}.png`;

  if (array[guess] == "Rock") {
    decision.textContent = "You Win!";
  } else if (array[guess] == "Paper") {
    decision.textContent = "Draw";
  } else if (array[guess] == "Scissor") {
    decision.textContent = "You lose";
  }
}
function executionScissor() {
  left.src = `./images/left/2.png`;

  let guess = Math.floor(Math.random() * 3);
  right.src = `./images/right/${guess}.png`;

  if (array[guess] == "Rock") {
    decision.textContent = "You lose";
  } else if (array[guess] == "Paper") {
    decision.textContent = "You Win!";
  } else if (array[guess] == "Scissor") {
    decision.textContent = "Draw";
  }
}
rock.addEventListener("click", executionRock);
paper.addEventListener("click", executionPaper);
scissor.addEventListener("click", executionScissor);
