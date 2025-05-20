let title = document.getElementById("title");

let introParagraphs = document.getElementsByClassName("intro");

let listItems = document.getElementsByTagName("li");

let firstParagraph = document.querySelector(".intro");

let items = document.querySelectorAll(".item");

// Modifying HTML Elements

// innerText or textContent --> Sets or gets the text content of an element

// title.innerText = "Hello World";

// innerHTML --> Sets or gets the HTML content of an element

// title.innerHTML =
//   "<div><h1>Hello World</h1> <p>This is a paragraph parallel to the heading</p></div>";

// Modifying Attributes
const image = document.querySelector("img");

// image.setAttribute(
//   "src",
//   "data:image/jpeg;base64,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"
// );

// Alternatively, you can use the src attribute directly

// image.src =
//   "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

// Modifying Styles

// style --> Sets or gets the inline style of an element

// const button = document.querySelector("button");

// button.style.backgroundColor = "dodgerblue";
// button.style.color = "white";
// button.style.fontSize = "20px";
// button.style.padding = "10px";
// button.style.borderRadius = "5px";
// button.style.cursor = "pointer";

// Adding or Removing Classes

// const intro2 = document.querySelectorAll(".intro")[1];

// intro2.classList.add("intro3");
// intro2.classList.remove("intro2");

// intro2.classList.toggle("intro3");

// console.log(intro2.classList.contains("intro3"));

// change its text to “JavaScript is awesome!” and set its font size to “20px”.

// let description = document.querySelector(".description");

// description.innerText = "JavaScript is awesome!";
// description.style.fontSize = "20px";

// Creating and Inserting Elements

// const newParagraph = document.createElement("p");
// newParagraph.innerText = "I love JavaScript";

// const container = document.querySelector(".container");
// // container.appendChild(newParagraph);

// container.insertBefore(newParagraph, container.children[2]);

// console.log(document.querySelectorAll(".container p").length);

// const fruits = ["Apple", "Banana", "Cherry"];

// fruits.forEach((fruit) => {
//   const li = document.createElement("li");
//   li.innerText = fruit;
//   document.querySelector("ol").appendChild(li);
// });

// const ol = document.querySelector("ol");
// ol.removeChild(ol.children[1]);

// const container = document.querySelector(".container");
// container.remove();

// Event Handling

// const button = document.querySelector("button");

// button.addEventListener("click", (event) => {
//   console.log(event);
//   if (document.body.style.backgroundColor !== "dodgerblue") {
//     document.body.style.backgroundColor = "dodgerblue";
//   } else {
//     document.body.style.backgroundColor = "white";
//   }
// });
