// stopwatch.js
// Counts in multiples of 3 seconds, stops automatically at 30s, supports pause/resume/reset.

// Internal state
let swTime = 0;        // seconds (0, 3, 6, ...)
let swTimer = null;    // interval id
let running = false;   // whether timer is running

// Helper to get the display element (supports different HTML ids)
function getDisplayEl() {
  return document.getElementById("display")
      || document.getElementById("stopwatch-display")
      || document.querySelector(".display");
}

// Update the visible display (e.g. "0s", "3s", "30s")
function updateDisplay() {
  const el = getDisplayEl();
  if (el) el.textContent = `${swTime}s`;
}

// Start: increments by 3 every 3 seconds. If already running, does nothing.
// If stopped before 30s, starting again resumes from last swTime.
function startTimer() {
  if (running) return;
  if (swTime >= 30) return; // already reached limit, do not start
  running = true;
  // Use 3-second interval to increment in steps of 3
  swTimer = setInterval(() => {
    swTime += 3;
    if (swTime > 30) swTime = 30; // safety clamp
    updateDisplay();
    if (swTime >= 30) {
      stopTimer(); // auto-stop at 30
    }
  }, 3000);
}

// Stop / pause the timer (keeps swTime so start resumes)
function stopTimer() {
  if (swTimer) {
    clearInterval(swTimer);
    swTimer = null;
  }
  running = false;
}

// Reset to 0 and stop
function resetTimer() {
  stopTimer();
  swTime = 0;
  updateDisplay();
}

// Wire up buttons after DOM ready; supports either id set in your HTML.
document.addEventListener("DOMContentLoaded", () => {
  // Find buttons by expected ids; if your HTML uses different ids update them here.
  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const resetBtn = document.getElementById("reset");

  // Attach listeners only if the buttons exist
  if (startBtn) startBtn.addEventListener("click", startTimer);
  if (stopBtn)  stopBtn.addEventListener("click", stopTimer);
  if (resetBtn) resetBtn.addEventListener("click", resetTimer);

  // initialize display
  updateDisplay();
});
