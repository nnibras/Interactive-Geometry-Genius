document.getElementById("rhombus-btn").addEventListener("click", function () {
  const d1 = getTextValue("rho-d1");
  const d2 = getTextValue("rho-d2");

  if (isNaN(d1) || isNaN(d2)) alert("Fields Cannot be Empty.");
  else if (d1 <= 0 || d2 <= 0) alert("Dimensions Cannot be Negative or Zero.");
  else if (typeof d1 != "number" || typeof d2 != "number")
    alert("Please Enter Numbers Only.");
  else {
    const name = getTextInner("rho-name");

    const area = (d1 * d2).toFixed(2);

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

document.getElementById("rho").addEventListener("mouseenter", function () {
  colorChange("rho");
});
