let board  = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

let squares = document.querySelectorAll(".square");
let winnerText = document.querySelector(".winner-text")
let restartButton = document.querySelector(".restart-button")

let isSwitching = false;
let isWinner = [,];


squares.forEach(sqr => sqr.addEventListener("click", (event) => {
    let symbol = isSwitching ? 'o':'x';
    if (sqr.innerHTML === "" && isWinner[0] !== true) {
            let symbolEl = document.createElement("div");
            symbolEl.classList.add(symbol);

            insertSymbol([].indexOf.call(squares, event.target), symbol);
            sqr.appendChild(symbolEl);

            isWinner[0] = checker(symbol);
            isWinner[1] = symbol.toUpperCase();

            isSwitching = !isSwitching;
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
})

function checker(symbol){
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol || board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol || board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol || board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) return true;
    }

    return false;
}

function insertSymbol(index, symbol) {
    if (index < 3) board[0][index] = symbol;
    else if (index >= 3 && index < 6) board[1][index - 3] = symbol;
    else board[2][index - 6] = symbol;
}