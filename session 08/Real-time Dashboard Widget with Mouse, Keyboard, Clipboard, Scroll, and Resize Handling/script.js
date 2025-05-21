const widget = document.getElementById("widget");
const countEl = document.getElementById("count");
const thresholdEl = document.getElementById("threshold");

let count = 0;
let threshold = 5;

// Track click count
widget.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
  if (count >= threshold) {
    widget.style.backgroundColor = "lightcoral";

    // Dispatch a custom event
    const thresholdEvent = new CustomEvent("thresholdReached", {
      detail: { count },
    });
    document.dispatchEvent(thresholdEvent);
  }
});

// Change threshold using number keys
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key)) {
    threshold = parseInt(e.key, 10);
    thresholdEl.textContent = threshold;
    if (count < threshold) {
      widget.style.backgroundColor = "lightblue";
    }
  }
});

// Ctrl + C to copy stats
document.addEventListener("copy", (e) => {
  e.preventDefault();
  const text = `Widget Stats:\nClicks: ${count}\nThreshold: ${threshold}`;
  e.clipboardData.setData("text/plain", text);
  alert("Stats copied to clipboard!");
});

// Track scroll to widget
window.addEventListener("scroll", () => {
  const rect = widget.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    console.log("Widget in view");
  }
});

// Track window resize
window.addEventListener("resize", () => {
  console.log("Window resized");
});

// Listen to threshold custom event
document.addEventListener("thresholdReached", (e) => {
  console.log("🎯 Threshold reached!", e.detail);
});
