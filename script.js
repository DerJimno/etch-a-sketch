const container = document.querySelector(".container");
const baseColor = "#ff8040" 

function createGrid(size = 16) {
  for (i = 0; i < (size * size); i++){
    const square = document.createElement("div");
    square.className = "square"
    container.appendChild(square);
  };
  colorSquare();
  changeColor();
  randomizeSquare();
  clearGrid();
};

function changeGrid() {
  const range = document.querySelector(".range")
  range.addEventListener('change', e => {
    container.innerHTML = '';
    const value = e.target.value
    for (i = 0; i < ( value * value); i++){
      const square = document.createElement("div");
      square.className = "square"
      container.appendChild(square);
    };
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
      square.style.flexBasis = `calc(100% / ${value})`;
    });
    colorSquare();
    changeColor();
    randomizeSquare();
    setTheme();
    clearGrid();
  });
};

function colorSquare(color = baseColor) {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => { 
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `${color}`;
    });
  });
};

function changeColor(){
  const color = document.querySelector(".color");
  color.addEventListener('click',  () => {
    color.addEventListener('mouseout', e => {
      colorSquare(e.target.value)
      setTheme(e.target.value)    
    });
  });
}; 

function getRandomColor() {
  const randomR = Math.floor(Math.random() * 256)
  const randomG = Math.floor(Math.random() * 256)
  const randomB = Math.floor(Math.random() * 256)   
  return `rgb(${randomR}, ${randomG}, ${randomB})`
};

function randomizeSquare() {
  const rainbowBtn = document.querySelector("#rainbowBtn")
  rainbowBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
    squares.forEach((square) => { 
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = `${getRandomColor()}`;
      });
    });
  });
};

function setTheme (color = baseColor){
  const root = document.documentElement
  root.style.setProperty('--clr-change', color)
  const inputColor = document.querySelector(".color")
  inputColor.value = color
};

function clearGrid() {
  const clearBtn = document.querySelector(".clearBtn")
  const squares = document.querySelectorAll(".square");
  clearBtn.addEventListener("click", () => {
    squares.forEach((square) => { 
      square.style.backgroundColor = "white";
    });
  });
};

createGrid();
changeGrid();
