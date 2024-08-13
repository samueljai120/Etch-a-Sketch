const body = document.querySelector("body");

// create a container that holds the boxes
const container = document.createElement("div");
container.setAttribute("id", "container");
container.style = "display: flex; flex-wrap: wrap; gap: 5px;"
body.appendChild(container);
// create button for the input prompt
const playButton = document.createElement("button");
playButton.innerText = "Play";
body.appendChild(playButton);
//reset
const resetButton = document.createElement("button");
resetButton.innerText = "Reset";
body.appendChild(resetButton);


playButton.addEventListener("click", () => {
    let side = prompt("Enter Your desire size (maximum 100per side): ");
if (side <= 100) {
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

const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        box.style.backgroundColor =  "#" + randomColor;  // Change to desired color on mouse enter
    });
    
    box.addEventListener("mouseleave", () => {
        box.style.backgroundColor = "pink";  // Revert to original color on mouse leave
    });
});  
} else {
    location.reload()
}}
)

resetButton.addEventListener("click", () => location.reload())
// desire number of boxes


