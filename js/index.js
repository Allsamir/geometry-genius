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
 div.innerHTML = `<span>${sum}.${name}</span> <span>${value}</span><span class="cm-value pr-4">cm<sup>2</sup></span><button class="convert bg-buttonBg text-white p-2 rounded-lg">Convert to m<sup>2</sup></button>`;
 div.classList.add('py-2', 'pt-3', 'text-black', 'text-lg');
 resultContainer.appendChild(div)
 const allButtons = document.getElementsByClassName('convert');
 for (const singleButton of allButtons) {
  singleButton.addEventListener('click', (e) => {
    const cmValue = e.target.parentNode.childNodes[3];
    console.log(cmValue);
    const element = e.target.parentNode.childNodes[2];
    const value = e.target.parentNode.childNodes[2].innerText;
    const acctualValue = parseFloat(value);
    const meterValue = acctualValue / 100;
    element.innerText = meterValue;
    cmValue.innerHTML = `m<sup>2</sup>`
  })
 }
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
