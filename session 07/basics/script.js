/**
 * DOM EVENT HANDLING EXAMPLES - SESSION 07
 * This file demonstrates practical examples of:
 * - Event propagation (bubbling and capturing)
 * - Form validation with event handling
 * - DOM manipulation in response to events
 */

// =====================================================================
// EVENT PROPAGATION EXAMPLE (COMMENTED OUT)
// =====================================================================
// The example below demonstrates event bubbling and stopping propagation

// // Get references to DOM elements
// const btn = document.getElementById("btn");
// const div = document.getElementById("app");

// // Add click event listener to the button
// btn.addEventListener("click", (e) => {
//   e.stopPropagation();  // Prevents the event from bubbling up to parent elements
//   alert("Btn is clicked");
// });

// // Add click event listener to the parent div
// div.addEventListener("click", (e) => {
//   alert("Div is clicked");
// });

// =====================================================================
// FORM VALIDATION EXAMPLE
// =====================================================================
// This example demonstrates form validation using event handling

// Get references to the form and username input element
const form = document.getElementById("form");
const usernameInput = document.getElementById("username");

// Add submit event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the current value of the username input
  let username = usernameInput.value;

  // Look for an existing status message element
  let p = document.getElementById("username-status");

  // Clear any existing message
  if (p) p.innerText = "";

  // If the status element doesn't exist, create it
  if (!p) {
    p = document.createElement("p"); // Create a new paragraph element
    p.id = "username-status"; // Set its ID for future reference
  }

  // Validate the username and set appropriate message
  if (username === "") {
    p.innerText = "Username is required"; // Error message for empty username
    p.style.color = "red"; // Red text for error
  } else {
    p.innerText = "Username is valid"; // Success message
    p.style.color = "green"; // Green text for success
  }

  // Add the status message to the form
  form.appendChild(p);
});

/**
 * Event Handling Best Practices:
 *
 * 1. Use addEventListener instead of inline HTML event attributes or element.onclick
 * 2. Always consider event bubbling and when to use stopPropagation()
 * 3. For form submissions, use preventDefault() to handle validation before submission
 * 4. Clean up event listeners when they're no longer needed (removeEventListener)
 * 5. Be careful with event delegation (assigning events to parent elements)
 * 6. Use debouncing or throttling for performance-heavy events like scroll or resize
 */
