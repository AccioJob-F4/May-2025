// Get references to the main form builder container and the preview area
const formBuilder = document.getElementById("formBuilder");
const preview = document.getElementById("preview");
// Initialize history stack for undo functionality
const historyStack = [];

/**
 * Creates a new form field based on the specified input type
 * @param {string} type - The input type (text, email, number)
 */
const createField = (type) => {
  // Generate a unique ID for the field using timestamp
  const fieldId = `field-${Date.now()}`;
  // Create the main container for the field
  const wrapper = document.createElement("div");
  wrapper.className = "field";
  wrapper.id = fieldId;
  // Make the field draggable for reordering
  wrapper.setAttribute("draggable", "true");

  // Create a label element for the field
  const label = document.createElement("label");
  label.innerText = `Label for ${type}`;

  // Add double-click event listener to edit the label text
  label.addEventListener("dblclick", () => {
    const newLabel = prompt("Enter new label");
    if (newLabel) {
      label.innerText = newLabel;
    }
  });

  // Create the input element with the specified type
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = `Enter ${type}`;

  // Prevent form submission when Enter key is pressed
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }

    // Special handling for email fields - prevent pasting
    if (type === "email") {
      input.addEventListener("paste", (e) => {
        e.preventDefault();
        alert("Email field, no pasting allowed");
      });
    }
  });

  // Assemble the field by appending elements to the wrapper
  wrapper.appendChild(label);
  wrapper.appendChild(document.createElement("br"));
  wrapper.appendChild(input);

  // Add drag-and-drop functionality to the field
  addDragListeners(wrapper);
  // Add the completed field to the form builder
  formBuilder.appendChild(wrapper);

  // Update the preview to show the new field
  updatePreview();
  // Save the current state for undo functionality
  saveState();
};

/**
 * Adds drag-and-drop event listeners to a field for reordering
 * @param {HTMLElement} field - The field element to make draggable
 */
const addDragListeners = (field) => {
  // When drag starts, store the field's ID in the data transfer
  field.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", field.id);
  });

  // Allow dropping by preventing the default behavior
  field.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  // Handle the drop event to reorder fields
  field.addEventListener("drop", (e) => {
    e.preventDefault();
    // Get the ID of the dragged element
    const draggedId = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedId);
    // Ensure we're not dropping an element onto itself
    if (draggedElement && draggedElement !== field) {
      // Reorder by inserting the dragged element before the drop target
      formBuilder.insertBefore(draggedElement, field);
      // Update the preview with the new order
      updatePreview();
      // Save the new state for undo functionality
      saveState();
    }
  });
};

// Event listener for adding a text field
document.getElementById("addtext").addEventListener("click", () => {
  createField("text");
});

// Event listener for adding an email field
document.getElementById("addEmail").addEventListener("click", () => {
  createField("email");
});

// Event listener for adding a number field
document.getElementById("addNumber").addEventListener("click", () => {
  createField("number");
});

// Prevent form submission when the form is submitted directly
formBuilder.addEventListener("submit", (e) => {
  e.preventDefault();
});

/**
 * Updates the preview area with the current content of the form builder
 */
const updatePreview = () => {
  preview.innerHTML = formBuilder.innerHTML;
};

/**
 * Saves the current state of the form builder to the history stack for undo functionality
 */
const saveState = () => {
  historyStack.push(formBuilder.innerHTML);
};

// Global keyboard event listener for Ctrl+Z (undo) functionality
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "z") {
    // Ensure there's a previous state to go back to
    if (historyStack.length > 1) {
      // Remove the current state
      historyStack.pop();
      // Get the previous state
      const prev = historyStack[historyStack.length - 1];
      // Restore the previous state
      formBuilder.innerHTML = prev;
      // Re-add drag listeners to all fields since they were lost when setting innerHTML
      Array.from(formBuilder.children).forEach(addDragListeners);
      // Update the preview with the restored state
      updatePreview();
    }
  }
});

// Save the initial empty state
saveState();
