const timerElement = document.getElementById("timer");

function update() {
  const cd = new Date();
  const month = cd.getMonth() + 1;
  // console.log(month);
  const date = cd.getDate();
  const year = cd.getFullYear();
  const hour = cd.getHours();
  // console.log(hour);
  const formatHour = String(hour % 12 || 12).padStart(2, "0");
  const minutes = cd.getMinutes();
  const seconds = String(cd.getSeconds()).padStart(2, "0");

  const ampm = hour >= 12 ? "PM" : "AM";

  const string = `${month}/${date}/${year}, ${formatHour}:${minutes}:${seconds} ${ampm}`;

  // string = "month/date/year, hour:minutes:second AM?PM";

  timerElement.innerText = string;
}

setInterval(update, 1000);
