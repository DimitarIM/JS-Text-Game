

let squares = document.querySelectorAll(".square");
let winnerText = document.querySelector(".winner-text")
let restartButton = document.querySelector(".restart-button")

let isSwitching = false;
let isWinner = [,];


squares.forEach(sqr => sqr.addEventListener("click", (event) => {
    if (sqr.innerHTML === "" && isWinner[0] !== true) {
        if (isSwitching === false) {
            let x = document.createElement("div");
            x.classList.add('x');

            insertSymbol([].indexOf.call(squares, event.target), 'x');
            sqr.appendChild(x);

            isWinner[0] = checker('x');
            isWinner[1] = 'X';

            isSwitching = true;
        }
        else {
            let o = document.createElement("div");
            o.classList.add('circle');
            
            insertSymbol([].indexOf.call(squares, event.target), 'o');
            sqr.appendChild(o);

            isWinner[0] = checker('o');
            isWinner[1] = 'O';

            isSwitching = false;
        }
    }
    if (isWinner[0] === true) winnerText.textContent = `${isWinner[1]} wins!`;
    else if (isWinner[0] === false && board.every(arr => arr.every(el => el !== null) === true)) winnerText.textContent = "Draw!";
}));

restartButton.addEventListener('click', () => {
    isWinner = [,];
    isSwitching = false;

    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

    squares.forEach(sqr => sqr.innerHTML = "");
    winnerText.textContent = ""

    console.log(board);
    console.log(isWinner);
    console.log(isSwitching);
})

