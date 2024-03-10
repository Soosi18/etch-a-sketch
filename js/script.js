let mouseDown = false;
let currentColor = "black";
let eraser = false;

const getWidth = function(){
    let width = prompt("Enter new width of sketch-grid (between 1-100):");
    if (width === null) return width;
    width = parseInt(width);
    while(!Number.isInteger(width) || (width < 1 || width > 100)){
        width = prompt("Error! Please enter new width of sketch-grid (between 1-100):");
        if (width === null) return width;
        width = parseInt(width);
    }
    return width;
}

const getHeight = function(){
    let height = prompt("Enter new height of sketch-grid (between 1-100):");
    if (height === null) return height;
    height = parseInt(height);
    while(!Number.isInteger(height) || (height < 1 || height > 100)){
        height = prompt("Error! Please enter new height of sketch-grid (between 1-100):");
        if (height === null) return height;
        height = parseInt(height);
    }
    return height;
}

const generateRandomHex = function(){
    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    return randomColor;
}

const enableDrawing = function(color = "black"){
    let rainbowColors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
    const squareDivs = document.querySelectorAll(".square");
    squareDivs.forEach(square => square.addEventListener('mouseover', e => {
        e.preventDefault();
        if(mouseDown){
            if (color === "random"){
                currentColor = "random";
                square.style.backgroundColor = generateRandomHex();
            }
            else{
                currentColor = color;
                square.style.backgroundColor = currentColor;
            }
        }
    }));
}

const makeGrid = function(width=64, height=64){
    const container = document.querySelector(".container");
    //clear old grid
    container.innerHTML = "";

    let size = width * height;
    let boxWidth = container.clientWidth / width;
    let boxHeight = container.clientHeight / height;

    for (let i = 0; i < size; i++){
        const squareDiv = document.createElement('div');
        squareDiv.classList.toggle('square');
        squareDiv.setAttribute('style', `width: ${boxWidth}px; height: ${boxHeight}px;`);
        container.appendChild(squareDiv);
    };
}

const resizeGrid = function(){
    let width = getWidth();
    if (width === null){
        alert("Size Unchanged!");
        return;
    }
    let height = getHeight();
    if (height === null){
        alert("Size Unchanged!");
        return;
    }
    makeGrid(width, height);  
    enableDrawing(currentColor);
}

const clearGrid = function(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
}

const enableCustomization = function(){
    const sizeBtn = document.querySelector('.size-btn');
    let colorPicker = document.getElementById('color');
    const rainbowBtn = document.querySelector('.rainbow-btn');
    const clearBtn = document.querySelector('.clear-btn');
    const eraserBtn = document.querySelector('.eraser-btn');

    sizeBtn.addEventListener('click', resizeGrid);
    clearBtn.addEventListener('click', clearGrid);
    
    
    eraserBtn.addEventListener('click', () => {
        eraser = !eraser;
        if (eraser === true){
            enableDrawing("white");
        }
        if (eraser === false){
            let colorPicker = document.getElementById('color');
            enableDrawing(colorPicker.value);
        }
        
    });

    rainbowBtn.addEventListener('click', () => {
        enableDrawing("random");
    });

    colorPicker.addEventListener('input', () => {
        enableDrawing(colorPicker.value);
    });
}

const updateMouseState = function(){
    const container = document.querySelector('.container');
    container.addEventListener('mousedown', e => {
        e.preventDefault();
        mouseDown = true;
    });
    container.addEventListener('mouseup', e => {
        e.preventDefault();
        mouseDown = false;
    });
}

window.addEventListener('load', () => {
    makeGrid();
    enableDrawing(currentColor);
    updateMouseState();
    enableCustomization();
});

