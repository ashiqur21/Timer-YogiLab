// Set your countdown target here
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 22);
countdownDate.setHours(countdownDate.getHours() + 8);
countdownDate.setMinutes(countdownDate.getMinutes() + 32);
countdownDate.setSeconds(countdownDate.getSeconds() + 46);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
