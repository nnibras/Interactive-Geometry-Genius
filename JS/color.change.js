function getRandomColorCode() {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert RGB to hex format
  const hex =
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return hex;
}

function colorChange(id) {
  let hexVal = getRandomColorCode();
  document.getElementById(id).style.backgroundColor = hexVal;
}
