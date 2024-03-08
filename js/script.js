const getWidth = function(){
    let width = prompt("Enter new width of sketch-grid (between 1-100):");
    return width;
}

const getHeight = function(){
    let height = prompt("Enter new height of sketch-grid (between 1-100):");
    return height;
}

const enableDrawing = function(color = "black"){
    const squareDivs = document.querySelectorAll(".square");
    squareDivs.forEach(square => square.addEventListener('mouseover', e => {
        square.style.backgroundColor = color;
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

    enableDrawing();
}

const enableCustomization = function(){
    const sizeBtn = document.querySelector('.size-btn');
    sizeBtn.addEventListener('click', () => {
        let width = getWidth();
        let height = getHeight();
        makeGrid(width, height);
    });
}

window.addEventListener('load', () => {
    makeGrid();
    enableCustomization();
})

