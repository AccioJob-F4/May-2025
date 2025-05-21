//your JS code here. If required.

// Select the input button element from the document
const inpButton = document.querySelector("input");

// Add click event listener to the button
inpButton.addEventListener("click", function () {
  // Get the dropdown select element by its ID
  const selectElement = document.getElementById("colorSelect");
  // Get the index of the currently selected option
  const selectedIndex = selectElement.selectedIndex;
  // If no option is selected, exit the function
  if (selectedIndex === -1) return;

  // Remove the selected option from the dropdown list
  selectElement.remove(selectedIndex);
});
