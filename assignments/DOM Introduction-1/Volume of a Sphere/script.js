function volume_sphere(event) {
  event.preventDefault();
  // (4/3)*pi*r*r*r
  const radiusInput = document.getElementById("radius").value;

  const volumeElement = document.getElementById("volume");
  const radius = parseFloat(radiusInput);
  if (isNaN(radius) || radius < 0) {
    volumeElement.value = "NaN";
    return;
  }

  const volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(4);

  document.getElementById("volume").value = volume;
}

window.onload = document.getElementById("MyForm").onsubmit = volume_sphere;
