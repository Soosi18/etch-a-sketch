const container = document.querySelector(".container");
container.setAttribute('style', 'padding: 0; margin: 0; display:flex; box-sizing: border-box; width: 200px; height: 200px; flex-wrap: wrap;');

for (let i = 0; i < 256; i++){
    const colDiv = document.createElement("div");
    colDiv.classList.toggle("column");
    colDiv.setAttribute('style', 'padding: 0; margin: 0; display: flex; box-sizing: border-box; border: 1px solid black; width: 12px; height: 12px;');
    container.appendChild(colDiv);
}