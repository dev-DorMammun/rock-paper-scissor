const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const decision = document.querySelector(".absolute");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const array = ["Rock", "Paper", "Scissor"];

function execution() {
  left.src = `./images/left/rock.png`;
  right.src = `./images/right/rock.png`;

  left.classList.add("animateL");
  right.classList.add("animateR");

  setTimeout(() => {
    left.classList.remove("animateL");
    right.classList.remove("animateR");
  }, 3000);

  let name = this.textContent;
  name = name.trim();
  let guess = Math.floor(Math.random() * 3);

  setTimeout(() => {
    left.src = `./images/left/${name}.png`;
    right.src = `./images/right/${array[guess]}.png`;

    if (name == array[0]) {
      if (guess == 0) {
        decision.textContent = "Draw";
      } else if (guess == 1) {
        decision.textContent = "You lost";
      } else {
        decision.textContent = "You won";
      }
    }
    if (name == array[1]) {
      if (guess == 1) {
        decision.textContent = "Draw";
      } else if (guess == 2) {
        decision.textContent = "You lost";
      } else {
        decision.textContent = "You won";
      }
    }
    if (name == array[2]) {
      if (guess == 2) {
        decision.textContent = "Draw";
      } else if (guess == 0) {
        decision.textContent = "You lost";
      } else {
        decision.textContent = "You won";
      }
    }
  }, 3000);
}

document.querySelector(".rock").addEventListener("click", execution);
document.querySelector(".paper").addEventListener("click", execution);
document.querySelector(".scissor").addEventListener("click", execution);
