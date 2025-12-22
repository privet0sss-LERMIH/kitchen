
document.addEventListener("DOMContentLoaded", () => {

  const values = document.querySelectorAll(".promo__timer-segment .promo__timer-value");
  const [daysEl, hoursEl, minutesEl, secondsEl] = values;


  let days = parseInt(daysEl.textContent, 10);
  let hours = parseInt(hoursEl.textContent, 10);
  let minutes = parseInt(minutesEl.textContent, 10);
  let seconds = parseInt(secondsEl.textContent, 10);


  seconds = seconds - 30;
  if (seconds < 0) {
    seconds = 0;
  }
  secondsEl.textContent = String(seconds).padStart(2, "0");


  function tick() {
    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;

      if (minutes < 0) {
        minutes = 59;
        hours--;

        if (hours < 0) {
          hours = 23;
          days--;

          if (days < 0) {
            clearInterval(timerId);
            days = hours = minutes = seconds = 0;
          }
        }
      }
    }


    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }


  const timerId = setInterval(tick, 1000);
});
