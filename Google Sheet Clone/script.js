const spreadsheet = document.getElementById("spreadsheet");
const formulaInput = document.getElementById("formula-input");
const selectedCellDisplay = document.querySelector(".selected-cell");

const rows = 30;
const cols = 20;

let cellData = {}; // {"A1": {value: "123", formula: "=SUM(A1:A5)", bold: true, ...}}
let selectedCell = null;

const initSpreadsheet = () => {
  spreadsheet.appendChild(createCell("", "header"));

  for (let c = 0; c < cols; c++) {
    const colName = String.fromCharCode(65 + c);
    spreadsheet.appendChild(createCell(colName, "header"));
  }

  for (let r = 1; r <= rows; r++) {
    spreadsheet.appendChild(createCell(r, "header"));

    for (let c = 0; c < cols; c++) {
      const colName = String.fromCharCode(65 + c);
      const cellId = `${colName}${r}`;

      const cell = createCell("", "cell");
      cell.setAttribute("contenteditable", true);
      cell.dataset.cellId = cellId;
      cell.addEventListener("click", () => selectCell(cell));
      cell.addEventListener("blur", () => updateCellData(cell));
      cell.addEventListener("keydown", handleCellKeydown);

      spreadsheet.appendChild(cell);
    }
  }

  loadFromLocalStorage();
};

const createCell = (content, className) => {
  const cell = document.createElement("div");
  cell.className = className;
  cell.innerText = content;
  return cell;
};

const selectCell = (cell) => {
  if (selectedCell) {
    selectedCell.classList.remove("selected");
  }

  selectedCell = cell;
  selectedCell.classList.add("selected");
  const cellId = cell.dataset.id;
  selectedCellDisplay.innerText = cellId;

  if (cellData[cellId] && cellData[cellId].formula) {
    formulaInput.value = cellData[cellId].formula;
  } else {
    formulaInput.value = "";
  }

  updateToolbarState(cellId);
};

const updateToolbarState = (cellId) => {
  const data = cellData[cellId] || {};

  document
    .getElementById("bold-btn")
    .classList.toggle("active", data.bold === true);

  document
    .getElementById("italic-btn")
    .classList.toggle("active", data.italic === true);

  if (data.textColor) {
    document.getElementById("text-color").value = data.textColor;
  } else {
    document.getElementById("text-color").value = "#000000";
  }

  if (data.bgColor) {
    document.getElementById("bg-color").value = data.bgColor;
  } else {
    document.getElementById("bg-color").value = "#FFFFFF";
  }
};

const updateCellData = (cell) => {
  const cellId = cell.dataset.id;

  const cellValue = cell.innerText;

  if (!cellValue) {
    if (cellData[cellId]) {
      delete cellData[cellId];
    }
    return;
  }

  if (!cellData[cellId]) {
    cellData[cellId] = {};
  }

  cellData[cellId].value = cellValue;

  if (cellData[cellId].formula) {
    updateDependentCell(cellId);
  }

  saveToLocalStorage();
};

const handleCellKeydown = (event) => {};
