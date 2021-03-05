let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let gameOver = false;

let symbols = ['o', 'x'];

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleMove(position) {

    if (gameOver) return;

    if (board[position] == "") {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (!gameOver) {
            if (playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    }

    return gameOver;
};

function isWin() {
    
    for (let i = 0; i < winStates.length; i++) {
        let sequences = winStates[i];

        let positionOne = sequences[0];
        let positionTwo = sequences[1];
        let positionThree = sequences[2];

        if (board[positionOne] == board[positionTwo] && board[positionOne] == board[positionThree] && board[positionOne] != "") {
            return true;
        }
    }

    return false;
};