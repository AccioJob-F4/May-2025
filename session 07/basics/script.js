// const btn = document.getElementById("btn");

// const div = document.getElementById("app");

// btn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   alert("Btn is clicked");
// });

// div.addEventListener("click", (e) => {
//   alert("Div is clicked");
// });

const form = document.getElementById("form");
const usernameInput = document.getElementById("username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = usernameInput.value;
  let p = document.getElementById("username-status");
  if (p) p.innerText = "";

  if (!p) {
    p = document.createElement("p");
    p.id = "username-status";
  }

  if (username === "") {
    p.innerText = "Username is required";
    p.style.color = "red";
  } else {
    p.innerText = "Username is valid";
    p.style.color = "green";
  }

  form.appendChild(p);
});
