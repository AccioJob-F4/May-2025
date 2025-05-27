/**
 * Google Sheet Clone - JavaScript Implementation
 * This script creates a spreadsheet-like interface with formula support,
 * cell formatting, and data persistence.
 */

// Get references to key DOM elements
const spreadsheet = document.getElementById("spreadsheet"); // Main spreadsheet container
const formulaInput = document.getElementById("formula-input"); // Formula input field
const selectedCellDisplay = document.querySelector(".selected-cell"); // Shows currently selected cell (e.g., "A1")
const rows = 30; // Number of rows in the spreadsheet
const cols = 20; // Number of columns in the spreadsheet (A to T)

// Main data storage for all cell information
let cellData = {}; // Structure: { "A1": { value: "123", formula: "=SUM(B1:B5)", bold: true, ... } }
let selectedCell = null; // Reference to the currently selected cell DOM element

/**
 * Initializes the spreadsheet grid and UI
 * Creates the header row, column headers, and all editable cells
 * Then loads any previously saved data
 */
function initSpreadsheet() {
  // Create the top-left empty corner cell
  spreadsheet.appendChild(createCell("", "header"));

  // Create the column headers (A, B, C, etc.)
  for (let c = 0; c < cols; c++) {
    const colName = String.fromCharCode(65 + c); // Convert 0 to 'A', 1 to 'B', etc.
    spreadsheet.appendChild(createCell(colName, "header"));
  }

  // Create row headers and cells for each row
  for (let r = 1; r <= rows; r++) {
    // Create row header (1, 2, 3, etc.)
    spreadsheet.appendChild(createCell(r, "header"));

    // Create editable cells for this row
    for (let c = 0; c < cols; c++) {
      const colName = String.fromCharCode(65 + c);
      const cellId = `${colName}${r}`; // Cell identifier (e.g., "A1", "B2")

      // Create the cell element
      const cell = createCell("", "cell");
      cell.setAttribute("contenteditable", "true"); // Make the cell editable
      cell.dataset.id = cellId; // Store the cell ID as a data attribute

      // Add event listeners for cell interactions
      cell.addEventListener("click", () => selectCell(cell)); // When cell is clicked
      cell.addEventListener("blur", () => updateCellData(cell)); // When focus leaves the cell
      cell.addEventListener("keydown", handleCellKeydown); // For keyboard navigation

      // Add the cell to the spreadsheet
      spreadsheet.appendChild(cell);
    }
  }

  // Load any previously saved spreadsheet data from local storage
  loadFromLocalStorage();
}

/**
 * Creates a new cell element (either header or data cell)
 * @param {string|number} content - The text content for the cell
 * @param {string} className - CSS class for styling ("header" or "cell")
 * @returns {HTMLElement} - The created cell element
 */
function createCell(content, className) {
  const cell = document.createElement("div"); // Create a div element
  cell.className = className; // Set the CSS class
  cell.textContent = content; // Set the cell content
  return cell;
}

/**
 * Handles cell selection when a cell is clicked
 * Updates UI to show which cell is selected and displays its formula if any
 * @param {HTMLElement} cell - The cell element that was selected
 */
function selectCell(cell) {
  // Remove selected class from previously selected cell
  if (selectedCell) {
    selectedCell.classList.remove("selected");
  }

  // Update the selected cell reference and add selected class
  selectedCell = cell;
  selectedCell.classList.add("selected");

  // Get the cell ID (e.g., "A1")
  const cellId = cell.dataset.id;

  // Update the cell identifier display in the UI
  selectedCellDisplay.textContent = cellId;

  // Update formula input to show the cell's formula (if it has one)
  if (cellData[cellId] && cellData[cellId].formula) {
    formulaInput.value = cellData[cellId].formula;
  } else {
    formulaInput.value = ""; // Clear the formula input if no formula
  }

  // Update toolbar buttons to reflect cell's formatting
  updateToolbarState(cellId);
}

/**
 * Updates toolbar button states to match the selected cell's formatting
 * @param {string} cellId - The ID of the selected cell (e.g., "A1")
 */
function updateToolbarState(cellId) {
  // Get the cell's data or create an empty object if no data exists
  const data = cellData[cellId] || {};

  // Update bold button active state
  document
    .getElementById("bold-btn")
    .classList.toggle("active", data.bold === true);

  // Update italic button active state
  document
    .getElementById("italic-btn")
    .classList.toggle("active", data.italic === true);

  // Update text color input to match cell's text color
  if (data.textColor) {
    document.getElementById("text-color").value = data.textColor;
  } else {
    document.getElementById("text-color").value = "#000000"; // Default black
  }

  // Update background color input to match cell's background color
  if (data.bgColor) {
    document.getElementById("bg-color").value = data.bgColor;
  } else {
    document.getElementById("bg-color").value = "#FFFFFF"; // Default white
  }
}

/**
 * Updates the data for a cell after it has been edited
 * @param {HTMLElement} cell - The cell element that was edited
 */
function updateCellData(cell) {
  const cellId = cell.dataset.id;
  const cellValue = cell.textContent;

  // If cell is empty, remove its data from storage
  if (!cellValue) {
    if (cellData[cellId]) {
      delete cellData[cellId];
    }
    return;
  }

  // Create cell data object if it doesn't exist yet
  if (!cellData[cellId]) {
    cellData[cellId] = {};
  }

  // Store the cell's visible value
  cellData[cellId].value = cellValue;

  // If this cell has a formula, update all cells that depend on it
  if (cellData[cellId].formula) {
    updateDependentCells(cellId);
  }

  // Save all changes to localStorage
  saveToLocalStorage();
}

/**
 * Handles keyboard events in cells for navigation and formula entry
 * @param {KeyboardEvent} event - The keyboard event
 */
function handleCellKeydown(event) {
  // Move to cell below when Enter key is pressed
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault(); // Prevent default behavior (new line in contenteditable)
    const currentId = selectedCell.dataset.id;
    const colName = currentId.charAt(0); // Get column letter (e.g., "A" from "A1")
    const rowNum = parseInt(currentId.substring(1)); // Get row number (e.g., 1 from "A1")

    // Move to the cell below if not at the last row
    if (rowNum < rows) {
      const nextCellId = `${colName}${rowNum + 1}`;
      const nextCell = document.querySelector(`.cell[data-id="${nextCellId}"]`);
      if (nextCell) {
        nextCell.focus();
        selectCell(nextCell);
      }
    }
  }

  // Move to cell to the right when Tab key is pressed
  if (event.key === "Tab") {
    event.preventDefault(); // Prevent default behavior (tab focus)
    const currentId = selectedCell.dataset.id;
    const colName = currentId.charAt(0);
    const rowNum = parseInt(currentId.substring(1));

    // Move to the cell to the right if not at the last column
    if (colName < "T") {
      // "T" is the 20th column (A-T)
      const nextColName = String.fromCharCode(colName.charCodeAt(0) + 1);
      const nextCellId = `${nextColName}${rowNum}`;
      const nextCell = document.querySelector(`.cell[data-id="${nextCellId}"]`);
      if (nextCell) {
        nextCell.focus();
        selectCell(nextCell);
      }
    }
  }

  // Handle formula entered directly in a cell
  if (event.key === "Enter" && selectedCell.textContent.startsWith("=")) {
    event.preventDefault();
    const formula = selectedCell.textContent;
    applyFormula(selectedCell, formula); // Process and apply the formula
  }
}

/**
 * Event listener for the formula input field
 * Applies the formula when Enter is pressed
 */
formulaInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && selectedCell) {
    event.preventDefault();
    const formula = formulaInput.value;
    if (formula.startsWith("=")) {
      applyFormula(selectedCell, formula);
    }
  }
});

/**
 * Applies a formula to a cell, evaluates it, and updates the cell's display
 * @param {HTMLElement} cell - The cell to apply the formula to
 * @param {string} formula - The formula string (e.g., "=SUM(A1:A5)")
 */
function applyFormula(cell, formula) {
  const cellId = cell.dataset.id;

  // Store the formula in the cell's data
  if (!cellData[cellId]) {
    cellData[cellId] = {};
  }

  cellData[cellId].formula = formula;

  try {
    // Calculate the formula result (remove the = sign before evaluating)
    const result = evaluateFormula(formula.substring(1), cellId);

    // Update the cell with the calculated result
    cell.textContent = result;
    cellData[cellId].value = result;

    // Apply formula styling
    cell.classList.add("formula");
    cell.classList.remove("error");
  } catch (error) {
    // Handle formula evaluation errors
    console.error("Formula error:", error);
    cell.textContent = "#ERROR";
    cellData[cellId].value = "#ERROR";
    cell.classList.add("error");
    cell.classList.remove("formula");
  }

  // Save changes to localStorage
  saveToLocalStorage();
}

/**
 * Evaluates a formula and returns the result
 * Handles cell references, arithmetic operations, and functions like SUM, AVERAGE, MAX, MIN
 * @param {string} formula - The formula without the leading "=" (e.g., "SUM(A1:A5)")
 * @param {string} currentCellId - The ID of the cell containing this formula
 * @returns {number|string} - The evaluated result
 */
function evaluateFormula(formula, currentCellId) {
  console.log("Evaluating formula:", formula, "for cell:", currentCellId);

  // 1. Handle SUM function first (before cell references are processed)
  let processedFormula = formula.replace(
    /SUM\(([A-Z]+\d+:[A-Z]+\d+)\)/gi, // Match SUM function with range argument
    (match, range) => {
      console.log("Processing SUM function with range:", range);
      try {
        // Split the range into start and end cells (e.g., "A1:A5" into "A1" and "A5")
        const [start, end] = range.split(":");

        // Extract column letters and row numbers
        const startCol = start.replace(/\d+/g, ""); // Extract column letter(s)
        const startRow = parseInt(start.replace(/[A-Z]+/g, "")); // Extract row number
        const endCol = end.replace(/\d+/g, "");
        const endRow = parseInt(end.replace(/[A-Z]+/g, ""));

        // Validate the range format
        if (isNaN(startRow) || isNaN(endRow)) {
          console.error("Invalid row numbers in range:", range);
          throw new Error("Invalid range format");
        }

        // Initialize sum
        let sum = 0;

        // Convert column letters to ASCII codes for iteration
        const startColCode = startCol.charCodeAt(0);
        const endColCode = endCol.charCodeAt(0);

        // Iterate through all cells in the range
        for (let col = startColCode; col <= endColCode; col++) {
          const colLetter = String.fromCharCode(col);
          for (let row = startRow; row <= endRow; row++) {
            const cellId = `${colLetter}${row}`;
            console.log("Checking cell in SUM range:", cellId);

            // If the cell has data, try to add its value to the sum
            if (cellData[cellId]) {
              const value = cellData[cellId].value;
              const numValue = parseFloat(value);

              if (!isNaN(numValue)) {
                sum += numValue;
                console.log(`Added ${numValue} from ${cellId} to sum`);
              } else {
                console.log(`Cell ${cellId} value "${value}" is not a number`);
              }
            } else {
              console.log(`Cell ${cellId} has no data`);
            }
          }
        }
        console.log("SUM result:", sum);
        return sum; // Return the calculated sum to replace the SUM function call
      } catch (error) {
        console.error("Error processing SUM:", error);
        throw new Error("Invalid SUM function");
      }
    }
  );

  // 2. Handle cell references (e.g., A1, B2)
  // Replace each cell reference with its actual value
  processedFormula = processedFormula.replace(/[A-Z]+\d+/g, (match) => {
    // Check for circular references (a cell referring to itself)
    if (match === currentCellId) {
      throw new Error("Circular reference");
    }

    // Replace the cell reference with its value
    if (cellData[match] && cellData[match].value !== undefined) {
      // Check if the value is numeric
      const cellValue = cellData[match].value;
      if (!isNaN(parseFloat(cellValue)) && cellValue !== "") {
        return parseFloat(cellValue); // Return as number
      } else {
        return `"${cellValue}"`; // Return as string literal
      }
    }
    return 0; // Default to 0 for undefined cells
  });

  console.log("After cell reference replacement:", processedFormula);

  // 3. Handle AVERAGE function
  processedFormula = processedFormula.replace(
    /AVERAGE\(([A-Z]+\d+:[A-Z]+\d+)\)/gi,
    (match, range) => {
      console.log("Processing AVERAGE function with range:", range);
      try {
        // Split the range and extract column letters and row numbers
        const [start, end] = range.split(":");
        const startCol = start.replace(/\d+/g, "");
        const startRow = parseInt(start.replace(/[A-Z]+/g, ""));
        const endCol = end.replace(/\d+/g, "");
        const endRow = parseInt(end.replace(/[A-Z]+/g, ""));

        if (isNaN(startRow) || isNaN(endRow)) {
          console.error("Invalid row numbers in range:", range);
          throw new Error("Invalid range format");
        }

        let sum = 0;
        let count = 0;

        // Convert column letters to ASCII codes for iteration
        const startColCode = startCol.charCodeAt(0);
        const endColCode = endCol.charCodeAt(0);

        // Iterate through all cells in the range
        for (let col = startColCode; col <= endColCode; col++) {
          const colLetter = String.fromCharCode(col);
          for (let row = startRow; row <= endRow; row++) {
            const cellId = `${colLetter}${row}`;
            if (cellData[cellId]) {
              const value = cellData[cellId].value;
              const numValue = parseFloat(value);

              if (!isNaN(numValue)) {
                sum += numValue;
                count++;
              }
            }
          }
        }

        // Calculate average (sum ÷ count)
        const result = count > 0 ? sum / count : 0;
        console.log(
          "AVERAGE result:",
          result,
          "(sum:",
          sum,
          "count:",
          count,
          ")"
        );
        return result;
      } catch (error) {
        console.error("Error processing AVERAGE:", error);
        throw new Error("Invalid AVERAGE function");
      }
    }
  );

  // 4. Handle MAX function
  processedFormula = processedFormula.replace(
    /MAX\(([A-Z]+\d+:[A-Z]+\d+)\)/gi,
    (match, range) => {
      console.log("Processing MAX function with range:", range);
      try {
        // Split the range and extract column letters and row numbers
        const [start, end] = range.split(":");
        const startCol = start.replace(/\d+/g, "");
        const startRow = parseInt(start.replace(/[A-Z]+/g, ""));
        const endCol = end.replace(/\d+/g, "");
        const endRow = parseInt(end.replace(/[A-Z]+/g, ""));

        if (isNaN(startRow) || isNaN(endRow)) {
          console.error("Invalid row numbers in range:", range);
          throw new Error("Invalid range format");
        }

        let max = -Infinity;
        let foundValue = false;

        // Convert column letters to ASCII codes for iteration
        const startColCode = startCol.charCodeAt(0);
        const endColCode = endCol.charCodeAt(0);

        // Iterate through all cells in the range
        for (let col = startColCode; col <= endColCode; col++) {
          const colLetter = String.fromCharCode(col);
          for (let row = startRow; row <= endRow; row++) {
            const cellId = `${colLetter}${row}`;
            if (cellData[cellId]) {
              const value = cellData[cellId].value;
              const numValue = parseFloat(value);

              if (!isNaN(numValue)) {
                max = Math.max(max, numValue);
                foundValue = true;
              }
            }
          }
        }

        // Return maximum value found or 0 if no values found
        const result = foundValue ? max : 0;
        console.log("MAX result:", result);
        return result;
      } catch (error) {
        console.error("Error processing MAX:", error);
        throw new Error("Invalid MAX function");
      }
    }
  );

  // 5. Handle MIN function
  processedFormula = processedFormula.replace(
    /MIN\(([A-Z]+\d+:[A-Z]+\d+)\)/gi,
    (match, range) => {
      console.log("Processing MIN function with range:", range);
      try {
        // Split the range and extract column letters and row numbers
        const [start, end] = range.split(":");
        const startCol = start.replace(/\d+/g, "");
        const startRow = parseInt(start.replace(/[A-Z]+/g, ""));
        const endCol = end.replace(/\d+/g, "");
        const endRow = parseInt(end.replace(/[A-Z]+/g, ""));

        if (isNaN(startRow) || isNaN(endRow)) {
          console.error("Invalid row numbers in range:", range);
          throw new Error("Invalid range format");
        }

        let min = Infinity;
        let foundValue = false;

        // Convert column letters to ASCII codes for iteration
        const startColCode = startCol.charCodeAt(0);
        const endColCode = endCol.charCodeAt(0);

        // Iterate through all cells in the range
        for (let col = startColCode; col <= endColCode; col++) {
          const colLetter = String.fromCharCode(col);
          for (let row = startRow; row <= endRow; row++) {
            const cellId = `${colLetter}${row}`;
            if (cellData[cellId]) {
              const value = cellData[cellId].value;
              const numValue = parseFloat(value);

              if (!isNaN(numValue)) {
                min = Math.min(min, numValue);
                foundValue = true;
              }
            }
          }
        }

        // Return minimum value found or 0 if no values found
        const result = foundValue ? min : 0;
        console.log("MIN result:", result);
        return result;
      } catch (error) {
        console.error("Error processing MIN:", error);
        throw new Error("Invalid MIN function");
      }
    }
  );

  // 6. Evaluate the final processed formula
  console.log("Final processed formula:", processedFormula);
  try {
    // Using a safer approach to evaluate the expression
    const result = evaluateExpression(processedFormula);
    console.log("Formula result:", result);
    return result;
  } catch (error) {
    console.error("Formula evaluation error:", error);
    throw new Error("Invalid formula");
  }
}

/**
 * Safely evaluates a mathematical expression string
 * @param {string} expression - The expression to evaluate (e.g., "2+3*4")
 * @returns {number|string} - The result of the evaluation
 */
function evaluateExpression(expression) {
  // Replace any leftover cell references with 0
  expression = expression.replace(/[A-Z]+\d+/g, "0");

  // Handle strings in expressions by replacing them with placeholders
  const stringLiterals = {};
  let stringCounter = 0;

  expression = expression.replace(/"([^"]*)"/g, (match) => {
    const placeholder = `__STRING_${stringCounter}__`;
    stringLiterals[placeholder] = match;
    stringCounter++;
    return placeholder;
  });

  // Handle basic arithmetic evaluation
  try {
    // Security check: ensure expression contains only safe characters
    if (
      !/^[0-9+\-*/(). \t_]+$/.test(expression.replace(/__STRING_\d+__/g, ""))
    ) {
      throw new Error("Expression contains unsafe characters");
    }

    // Use Function constructor to evaluate the expression
    // Note: This approach has security implications if used with user input
    let result = Function(`"use strict"; return (${expression})`)();

    // Replace string placeholders back with their original values
    if (typeof result === "string") {
      for (const [placeholder, value] of Object.entries(stringLiterals)) {
        result = result.replace(placeholder, value);
      }

      // Remove quotes from final string result
      if (result.startsWith('"') && result.endsWith('"')) {
        result = result.substring(1, result.length - 1);
      }
    }

    return result;
  } catch (e) {
    console.error("Error evaluating expression:", expression, e);
    throw new Error(`Cannot evaluate expression: ${expression}`);
  }
}
