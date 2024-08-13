const body = document.querySelector("body");

// create a container that holds the boxes
const container = document.createElement("div");
container.setAttribute("id", "container");
container.style = "display: flex; flex-wrap: wrap; gap: 5px;"

body.appendChild(container);

// desire number of boxes
const side = 16;

for (let i = 0; i < side; i++) {
    const boxRow = document.createElement("div");
    boxRow.classList.add("boxRow");
    boxRow.style = "display: flex; flex-wrap: wrap; gap: 5px;"
    container.appendChild(boxRow);
    for (let i = 0; i < side; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style = "height: 40px; width: 40px; background-color: pink;"
        boxRow.appendChild(box);
    }
    
}


