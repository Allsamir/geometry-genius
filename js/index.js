    tailwind.config = {
      theme: {
        extend: {
          colors: {
            borderColor: "rgba(17, 17, 17, 0.10)",
            inputBg: "#F1F1F1",
            buttonBg: "#1090D8"
          }
        }
      }
    }
let sum = 0;
function calculateEveryThing(e,calculateFunction,b,h,functionName) {
  e.preventDefault();
  createResult(functionName,calculateFunction(getInputValues(b), getInputValues(h)))
  emptyValues(b);
  emptyValues(h);
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
 const div = document.createElement('div')
 div.innerHTML = `<span>${sum}.${name}</span> <span>${value}cm<sup>2</sup></span> <button class="bg-buttonBg rounded-sm text-white p-1">Convert to m<sup>2</sup></button>`;
 div.classList.add('space-x-4', 'py-2', 'pt-3')
 resultContainer.appendChild(div)
}

function calculateTriangle(b, h) {
  const pointFive = 0.5;
  const area = pointFive * b * h;
  return area
}