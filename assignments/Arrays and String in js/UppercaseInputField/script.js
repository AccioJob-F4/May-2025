// Get a reference to the input element with the ID "fname"
const nameInput = document.getElementById("fname");

// Add an event listener for the 'blur' event
nameInput.addEventListener("blur", function () {
  // Convert the input value to uppercase when the field loses focus
  // The blur event fires when the element loses focus (e.g., user clicks away from the input)
  nameInput.value = nameInput.value.toUpperCase();
});
