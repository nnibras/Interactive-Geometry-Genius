document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const b = getTextValue("par-b");
    const h = getTextValue("par-h");

    if (isNaN(b) || isNaN(h)) alert("Fields Cannot be Empty.");
    else if (b <= 0 || h <= 0) alert("Dimensions Cannot be Negative or Zero.");
    else if (typeof b != "number" || typeof h != "number")
      alert("Please Enter Numbers Only.");
    else {
      const name = getTextInner("par-name");

      const area = (b * h).toFixed(2);

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

document.getElementById("par").addEventListener("mouseenter", function () {
  colorChange("par");
});
