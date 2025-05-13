const nameInput = document.getElementById("fname");

// Add an event listener for the 'blur' event
nameInput.addEventListener("blur", function () {
  // Convert the input value to uppercase when the field loses focus
  nameInput.value = nameInput.value.toUpperCase();
});
