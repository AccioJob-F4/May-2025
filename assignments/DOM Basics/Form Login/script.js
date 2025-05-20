function getFormvalue() {
  event.preventDefault();
  let fName = document.getElementById("fname").value.trim();
  let lName = document.getElementById("lname").value.trim();

  if (fName === "" || lName === "") {
    alert("Please enter both first and last name.");
    return;
  }
  alert(fName + " " + lName);
}
