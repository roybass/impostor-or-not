const defaultColors = ['Red', 'Green', 'Yellow', 'Blue', 'White'];

const allColors = ['Red', 'Green', 'Yellow', 'Blue', 'White', 'Purple', 'Aqua', 'Gold', 'Hotpink'];

const checks = document.getElementById('checks');
for (let i = 0; i < allColors.length; i++) {
  const input = document.createElement('input');
  input.type = "checkbox";
  input.id = "check-" + i;
  input.className = "inputCheckbox";
  input.onclick = () => {updateBoxes();};
  input.checked = defaultColors.indexOf(allColors[i]) >= 0;
  
  const label = document.createElement('label');
  label.for = input.id;
  label.style = "color:" + allColors[i] + ";";
  label.innerHTML = allColors[i];
  
  checks.appendChild(input);
  checks.appendChild(label);
  checks.appendChild(document.createElement('br'));
}

let boxes = [];

function updateBoxes() {
  boxes = [];
  for (let i = 0; i < allColors.length; i++) {
      let checkbox = document.getElementById("check-" + i);
      if (checkbox.checked === true) {
        boxes.push(allColors[i]);
      }
  }
  const container = document.getElementById("container");
  container.innerHTML = '';
  for (let i = 0; i < boxes.length; i++) {
    const div = document.createElement('div');
    div.className="box";
    div.onclick = () => { onClickDiv(i); }
    div.style = "background:" + boxes[i] + ";"
    container.appendChild(div);
  }
  select();
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let selected = getRandomInt(boxes.length);

function select() {
  selected = getRandomInt(boxes.length)
  ani();
  setTimeout(ani, 1000);
}

function onClickDiv(idx) {
  let text = (idx === selected) ? "Impostor" : "Crewmate"
  let resultDiv = document.getElementsByClassName("result")[0];
  resultDiv.innerHTML = text;
  resultDiv.className = "result " + text;
  setTimeout(() => {resultDiv.innerHTML = "";}, 1000)
}

function ani(){
  let boxes = document.getElementsByClassName('box')
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].className = toggle(boxes[i].className, 'spinning');
  } 
}

function toggle(str1, str2) {
  if (str1.indexOf(str2) == -1) {
    return str1 + " " + str2;
  } else {
    return str1.replace(str2, "").trim();
  }
}


updateBoxes();
