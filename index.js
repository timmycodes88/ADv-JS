let cells = document.getElementsByClassName("cell");
let isX = true;
let counter = 0;

for (let cell of cells) {
    cell.addEventListener('click', function() {

        counter++;

        if (isX) {
            cell.textContent = `X`;
        } else {
           cell.textContent = `O`; 
        }
        isX = !isX;

    })
}



let myBtn = document.querySelector("button");
console.log(myBtn)
myBtn.addEventListener('click', () => {
    for (let cell of cells) {
        cell.textContent = "";
    }
});
