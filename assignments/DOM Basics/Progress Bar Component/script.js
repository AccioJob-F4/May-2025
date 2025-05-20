const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

let currentActive = 1;

nextButton.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;

  updateUI();
});

prevButton.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;

  updateUI();
});

function updateUI() {
  circles.forEach((circle, idx) => {
    idx < currentActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  lines.forEach((line, idx) => {
    idx < currentActive - 1
      ? line.classList.add("active")
      : line.classList.remove("active");
  });

  prevButton.disabled = currentActive === 1;
  nextButton.disabled = currentActive === circles.length;
}
