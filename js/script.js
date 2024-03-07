const getWidth = function(){

}

const getHeight = function(){

}

const enableDrawing = function(){
    const squareDivs = document.querySelectorAll(".square");
    squareDivs.forEach(square => square.addEventListener('mouseover', e => {
        square.style.backgroundColor = 'black';
    }));
}

const makeGrid = function(width=32, height=32){
    const container = document.querySelector(".container");
    let size = width * height;
    let boxWidth = container.clientWidth / width;
    let boxHeight = container.clientHeight / height;

    for (let i = 0; i < size; i++){
        const squareDiv = document.createElement('div');
        squareDiv.classList.toggle('square');
        squareDiv.setAttribute('style', `width: ${boxWidth}px; height: ${boxHeight}px;`);
        container.appendChild(squareDiv);
    }

    enableDrawing();
}

window.addEventListener('load', function() {
    makeGrid();
})

