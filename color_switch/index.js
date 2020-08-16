const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
let timerId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.body;

btnStart.addEventListener("click", switchColor);
btnStop.addEventListener("click", stopSwichColor);

function switchColor() {
  timerId = setInterval(() => {
    let numberOfColor = 0;
      numberOfColor = randomIntegerFromInterval(0, colors.length);
      body.style.backgroundColor = colors[numberOfColor]
  }, 1000);
  btnStart.setAttribute('disabled', 'disabled');
}

function stopSwichColor() {
clearInterval(timerId)
btnStart.removeAttribute('disabled');
}
