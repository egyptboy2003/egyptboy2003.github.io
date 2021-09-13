const poss_options = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
var used_nums = []
const squares = document.getElementsByClassName('square');
var num = 0;

function changeColor() {
    this.style.backgroundColor = "blue";
}

function setupGrid() {
    Array.from(squares).forEach(element => {
        do {
            num = Math.floor(Math.random() * 9);
        } while (used_nums.includes(num));
        used_nums.push(num);
        element.innerHTML = poss_options[num];
    });
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeColor);
}

setupGrid();