    tailwind.config = {
      theme: {
        extend: {
          colors: {
            borderColor: "rgba(17, 17, 17, 0.10)",
            inputBg: "#F1F1F1",
            buttonBg: "#1090D8",
            hoverBg: "#FBBCED",
            textColor: "#414141",
            hoverBg2: "#69C7F0"
          }
        }
      }
    }
let sum = 0;
function calculateEveryThing(e,calculateFunction,firstParameter,secondParameter,functionName) {
  e.preventDefault();
  createResult(functionName,calculateFunction(getInputValues(firstParameter), getInputValues(secondParameter)))
  emptyValues(firstParameter);
  emptyValues(secondParameter);
}

function getInputValues(id) {
  const input = document.getElementById(id);
  return input.value;
}

function emptyValues(id) {
  const input = document.getElementById(id);
  input.value = '';
}

function createResult (name, value) {  
 sum++;
 const resultContainer = document.getElementById('result');
 const div = document.createElement('div');
 div.innerHTML = `<span>${sum}.${name}</span> <span class="cm-value">${value}cm<sup>2</sup></span>`;
 div.classList.add('space-x-4', 'py-2', 'pt-3', 'text-black', 'text-lg');
 resultContainer.appendChild(div)
}

function calculateTriangle(b, h) {
  const pointFive = 0.5;
  const area = pointFive * b * h;
  return area
}

function calculateReatangle(w, l) {
  return w * l;
}

function calculateParallelogram(b, h) {
  return b * h;
}

function calculateRhombus(d1, d2) {
  return 0.5 * d1 * d2
}

function calculatePentagon(p, b) {
  return 0.5 * p * b
}

function calculateEllipse(a, b) {
  return 3.14159 * a * b
}
