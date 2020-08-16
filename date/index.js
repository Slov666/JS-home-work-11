const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  start: document.querySelector(".start"),
  stop: document.querySelector(".stop"),
};
const timer = {
    targetDate: new Date('August 31, 2020'),
    timeId: null,
    isActice: true,
    
    start() {
    if (this.isActice) {
      this.isActice = false;
      this.timeId = setInterval(() => {
        const carruntTime = Date.now();
        const time =  this.targetDate  - carruntTime;
        updateClockFace(time);
      }, 1000);
    }
  },
  stop() {
    clearInterval(this.timeId);
    this.timeId = null;
    this.isActice = true;
    updateClockFace(0);
  },
};
refs.start.addEventListener("click", timer.start.bind(timer));
refs.stop.addEventListener("click", timer.stop.bind(timer));

function updateClockFace(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, "0");
}
