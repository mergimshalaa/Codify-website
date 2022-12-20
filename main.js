window.addEventListener('DOMContentLoaded', main)

function main() {
    renderSmiley();
}

const countdown = () => {
  const countDate = new Date("Dec 10, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //how to get time to work.
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minutes").innerText = textMinute;
  document.querySelector(".seconds").innerText = textSecond;
};

setInterval(countdown, 1000);

function renderSmiley() {
  const canvas = document.getElementById("myCanvas");

  // Canvas get Context
  const ctx = canvas.getContext("2d");

  // FACE
  ctx.beginPath();
  ctx.arc(100, 100, 75, 0, 2 * Math.PI); // outer circle
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // EYES
  ctx.beginPath();
  ctx.arc(75, 75, 10, 0, 2 * Math.PI); // left
  ctx.arc(125, 75, 10, 0, 2 * Math.PI); // right
  ctx.fillStyle = "black";
  ctx.fill();

  // MOUTH
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI); // half circle
  ctx.stroke();
};
