//your JS code here. If required.

// Select and store references to DOM elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");
const listBody = document.getElementById("book-list");

/**
 * Event listener for the "Add Book" button
 * Validates form inputs and adds a new book to the list
 */
submitBtn.addEventListener("click", function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get input values and remove whitespace
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  // Form validation - ensure all fields are filled
  if (!title || !author || !isbn) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a new table row element
  const tr = document.createElement("tr");
  // Set the HTML content of the row with book details
  tr.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">X</button></td>
  `;

  // Add the new row to the table body
  listBody.appendChild(tr);

  // Reset form fields after successful submission
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
});

/**
 * Event delegation for delete buttons
 * Uses event bubbling to handle clicks on delete buttons for all rows
 */
listBody.addEventListener("click", function (e) {
  // Check if the clicked element has the "delete" class
  if (e.target.classList.contains("delete")) {
    // Find and remove the parent row element
    e.target.closest("tr").remove();
  }
});
