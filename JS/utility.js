// this is used to change from one page to another
function pageChange(id, pageName) {
  document.getElementById(id).addEventListener("click", function () {
    window.location.href = pageName;
  });
}

// this is used to get the value of a particular input field
function getTextValue(id) {
  const inputValue = document.getElementById(id);
  const inputValueString = inputValue.value;
  const inputValueNumber = parseFloat(inputValueString);
  return inputValueNumber;
}

// this is used to get the value of a particular text field
function getTextInner(id) {
  const inputValue = document.getElementById(id);
  const inputString = inputValue.innerText;
  return inputString;
}

// this is used to set the value of something with a particular value
function setText(val, id) {
  const setValue = document.getElementById(id);
  setValue.innerText = val;
}

// this is used to dynamically add html in area calculation section
// it adds all the fields required and sets the value accordingly
// this function is used in all the calculations
function create(count, shapeName, area, onDelete) {
  const field = document.createElement("div");
  field.classList.add("my-2");
  field.classList.add("dynamic-field");

  const numberLabel = document.createElement("span");
  numberLabel.textContent = ` ${count}.  `;
  field.appendChild(numberLabel);

  const shapeLabel = document.createElement("span");
  shapeLabel.textContent = ` ${shapeName} `;
  shapeLabel.classList.add("pl-4");
  field.appendChild(shapeLabel);

  const sizeLabel = document.createElement("span");
  sizeLabel.textContent = ` ${area} cm²`;
  sizeLabel.classList.add("px-4");
  field.appendChild(sizeLabel);

  const button = document.createElement("button");
  button.textContent = "Convert to m";
  button.classList.add(
    "bg-blue-400",
    "text-white",
    "py-1",
    "px-2",
    "rounded-lg"
  );
  const sup = document.createElement("sup");
  sup.textContent = "2";
  button.appendChild(sup);
  field.appendChild(button);

  button.addEventListener("click", function () {
    const areaInMeterSquare = (area * 0.0001).toFixed(4);
    button.textContent = `${areaInMeterSquare} m²`;
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("ml-2", "text-neutral-400");
  field.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    field.remove();
    if (onDelete) {
      onDelete();
    }
  });

  return field;
}

// for keeping count of added fields
let count = 0;
