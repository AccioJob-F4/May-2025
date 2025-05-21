// Create a button element to calculate total price
const getSumBtn = document.createElement("button");
// Set the button text
getSumBtn.append("Get Total Price");
// Add the button to the document body
document.body.appendChild(getSumBtn);

// Function to calculate and display the total price
const getSum = () => {
  // Disable the button to prevent multiple clicks
  getSumBtn.disabled = true;
  // Select all elements with class "price"
  const prices = document.querySelectorAll(".price");
  // Initialize sum variable
  let sum = 0;
  // Loop through each price element
  prices.forEach((price) => {
    // Convert the text content to an integer
    const value = parseInt(price.textContent);
    // Check if the value is a valid number
    if (!isNaN(value)) {
      // Add the value to the running sum
      sum += value;
    }
  });

  // Create a new table row to display the total
  const totalPriceRow = document.createElement("tr");
  // Set an id for the row for easy reference
  totalPriceRow.id = "ans";
  // Create table cells for label and value
  const totalPriceData = document.createElement("td");
  const totalPriceAns = document.createElement("td");
  // Append cells to the row
  totalPriceRow.appendChild(totalPriceData);
  totalPriceRow.appendChild(totalPriceAns);
  // Set the text content for both cells
  totalPriceData.append("Total Price (in Rs): ");
  totalPriceAns.append(sum);

  // Select the table body
  const table = document.querySelector("tbody");
  // Append the new row to the table
  table.appendChild(totalPriceRow);
};

// Add click event listener to the button
getSumBtn.addEventListener("click", getSum);
