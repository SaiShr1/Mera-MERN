const secondhand = document.querySelector(".second-hand");
const minhand = document.querySelector(".min-hand");
const hourhand = document.querySelector(".hour-hand");

function setClock() 
{
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  if (secondsDegree == 90) {
    secondhand.classList.add("no-transition");
  } else {
    secondhand.classList.remove("no-transition");
  }
  secondhand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + secondsDegree / 60 + 90;
  if (minutesDegree == 90) {
    minhand.classList.add("no-transition");
  } else {
    minhand.classList.remove("no-transition");
  }
  minhand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;
  if (hoursDegree == 90) {
    hourhand.classList.add("no-transition");
  } else {
    hourhand.classList.remove("no-transition");
  }
  hourhand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(function () {
  setClock();
}, 1000);

setClock();
