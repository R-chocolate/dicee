
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
let diceCount = 1;

function rollDice() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < diceCount; i++) {
    let num = Math.floor(Math.random() * 6) + 1;
    ctx.beginPath();
    ctx.arc(100 + i * 120, 100, 50, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.font = "40px sans-serif";
    ctx.fillText(num, 85 + i * 120, 115);
  }
}

function shakeHandler(e) {
  rollDice();
}

window.addEventListener("devicemotion", shakeHandler);
document.getElementById("increase").onclick = () => {
  diceCount = Math.min(10, diceCount + 1);
  document.getElementById("dice-count").textContent = `🎲 ${diceCount}`;
};
document.getElementById("decrease").onclick = () => {
  diceCount = Math.max(1, diceCount - 1);
  document.getElementById("dice-count").textContent = `🎲 ${diceCount}`;
};

rollDice();
