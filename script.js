const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const nextBirthdate = '25 Apr 2021';

function countdown() {
  const newBirthdate = new Date(nextBirthdate);
  const currentDate = new Date();

  const totalSeconds = (newBirthdate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const mins = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = timeFormat(hours);
  minsEl.innerHTML = timeFormat(mins);
  secondsEl.innerHTML = timeFormat(seconds);
}

countdown();
setInterval(countdown, 1000);

function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}
