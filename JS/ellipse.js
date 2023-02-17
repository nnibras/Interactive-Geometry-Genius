document.getElementById("ellipse-btn").addEventListener("click", function () {
  const a = getTextValue("ell-a");
  const b = getTextValue("ell-b");

  if (isNaN(a) || isNaN(b)) alert("Fields Cannot be Empty.");
  else if (a <= 0 || b <= 0) alert("Dimensions Cannot be Negative or Zero.");
  else if (typeof a != "number" || typeof b != "number")
    alert("Please Enter Numbers Only.");
  else {
    const name = getTextInner("ell-name");

    const area = (3.14 * a * b).toFixed(2);

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

document.getElementById("ell").addEventListener("mouseenter", function () {
  colorChange("ell");
});
