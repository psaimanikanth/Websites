// Replace this placeholder with the couple's YouTube livestream URL.
const YOUTUBE_LIVE_URL = "https://www.youtube.com/";

document.querySelector("#youtube-link").href = YOUTUBE_LIVE_URL;

// The invitation time is 10:00 AM in India Standard Time (UTC+05:30).
const eventTime = new Date("2026-11-14T10:00:00+05:30").getTime();
const countdown = document.querySelector("#countdown");
const countdownMessage = document.querySelector("#countdown-message");
const countdownParts = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds")
};

let countdownTimer;

function updateCountdown() {
  const remaining = eventTime - Date.now();

  if (remaining <= 0) {
    countdown.hidden = true;
    countdownMessage.hidden = false;
    window.clearInterval(countdownTimer);
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const values = {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };

  for (const [unit, value] of Object.entries(values)) {
    countdownParts[unit].textContent = String(value).padStart(2, "0");
  }
}

updateCountdown();
countdownTimer = window.setInterval(updateCountdown, 1000);
