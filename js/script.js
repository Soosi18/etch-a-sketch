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

const enableDrawing = function(color = "black"){
    let rainbowColors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
    const squareDivs = document.querySelectorAll(".square");
    squareDivs.forEach(square => square.addEventListener('mouseover', e => {
        if (color === "rainbow"){
            let random = Math.floor(Math.random() * rainbowColors.length);
            square.style.backgroundColor = rainbowColors[random];
        }
        else{
            square.style.backgroundColor = color;
        }
    }));
}

const makeGrid = function(width=32, height=32){
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
    enableDrawing();
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

    sizeBtn.addEventListener('click', resizeGrid);
    clearBtn.addEventListener('click', clearGrid);
    
    rainbowBtn.addEventListener('click', () => {
        enableDrawing("rainbow");
    });

    colorPicker.addEventListener('input', () => {
        enableDrawing(colorPicker.value);
    });
}

window.addEventListener('load', () => {
    console.log(parseInt(null));
    makeGrid();
    enableDrawing();
    enableCustomization();
});

