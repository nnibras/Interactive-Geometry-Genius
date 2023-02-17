document.getElementById("rectangle-btn").addEventListener("click", function () {
  const w = getTextValue("rec-w");
  const l = getTextValue("rec-l");

  if (isNaN(w) || isNaN(l)) alert("Fields Cannot be Empty.");
  else if (w <= 0 || l <= 0) alert("Dimensions Cannot be Negative or Zero.");
  else if (typeof w != "number" || typeof l != "number")
    alert("Please Enter Numbers Only.");
  else {
    const name = getTextInner("rec-name");

    const area = (w * l).toFixed(2);

    const areaDiv = document.getElementById("area-div");

    //   for dynamic updating of count
    function updateCount() {
      for (let i = 1; i < areaDiv.children.length; i++) {
        const field = areaDiv.children[i];
        const shapeLabel = field.querySelector("span");
        if (shapeLabel) {
          shapeLabel.textContent = ` ${i}.  `;
        }
      }
      count--;
    }
    count++;
    const field = create(count, name, area, updateCount);
    areaDiv.appendChild(field);
  }
});

document.getElementById("rec").addEventListener("mouseenter", function () {
  colorChange("rec");
});
