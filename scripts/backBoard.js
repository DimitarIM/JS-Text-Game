let board  = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function checker(symbol){
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol) return true;

        else if (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol) return true;
    }

    if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) return true;

    if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) return true;

    return false;
}

function insertSymbol(index, symbol) {
    if (index < 3) board[0][index] = symbol;
    else if (index >= 3 && index < 6) board[1][index - 3] = symbol;
    else board[2][index - 6] = symbol;
}

