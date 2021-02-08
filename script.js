function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let numItems = 5;

let selected = getRandomInt(numItems);

function select() {
  selected = getRandomInt(numItems)
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
