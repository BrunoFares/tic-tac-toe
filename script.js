const div = document.querySelectorAll('div.gameboard div');
const p = document.querySelectorAll('div.gameboard div p');
const h2 = document.querySelector('h2');
const button = document.querySelector('button');

let playerTurn = 1;

const Gameboard = (function() {
    const row = 3;
    const column = 3;
    let gameboard = [];

    for (let i = 0; i < row; i++) {
        gameboard[i] = [];
        for (let j = 0; j < column; j++) {
            gameboard[i][j] = "";
        }
    }

    return gameboard;
})();

function inputToBoard(player, move) {
    let input;

    if (player === 1) input = 'x';
    else if (player === 2) input = 'o';

    if (Gameboard[move[0]][move[1]] === "") Gameboard[move[0]][move[1]] = input;
    else return ("This cell has already been played in.")

    return { Gameboard, input };
};

const gridIsComplete = function() {
    if (gameWin()) return true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (Gameboard[i][j] === "") return false;
        }
    }
    const draw = "It's a draw!";
    return draw;
}

function gameWin() {
    let sign = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            if (Gameboard[i][j] === Gameboard[i][j+1]) sign = Gameboard[i][j];
            else {
                sign = "";
                break;
            }
        }
        if (sign === 'x') return ('Player 1 wins!');
        else if (sign === 'o') return ('Player 2 wins!');
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            if (Gameboard[j][i] === Gameboard[j+1][i]) sign = Gameboard[j][i];
            else {
                sign = "";
                break;
            }
        }
        if (sign === 'x') return ('Player 1 wins!');
        else if (sign === 'o') return ('Player 2 wins!');
    }

    if (Gameboard[0][0] === Gameboard[1][1]) {
        if (Gameboard[1][1] === Gameboard[2][2]) {
            sign = Gameboard[0][0]; 
            if (sign === 'x') return ('Player 1 wins!');
            else if (sign === 'o') return ('Player 2 wins!');
        }
    }

    if (Gameboard[0][2] === Gameboard[1][1]) {
        if (Gameboard[1][1] === Gameboard[2][0]) {
            sign = Gameboard[0][2]; 
            if (sign === 'x') return ('Player 1 wins!');
            else if (sign === 'o') return ('Player 2 wins!');
        }
    }
}

function gameReset() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            Gameboard[i][j] = '';
        }
    }
    for (let k = 0; k < 9; k++) p[k].textContent = "";

    h2.textContent = "-";

    playerTurn = 1;
    return Gameboard;
}

for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', () => {
        let row, column;

        switch(i) {
            case 0:
                row = 0, column = 0;
                break;
            case 1:
                row = 0, column = 1;
                break;
            case 2:
                row = 0, column = 2;
                break;
            case 3:
                row = 1, column = 0;
                break;
            case 4:
                row = 1, column = 1;
                break;
            case 5:
                row = 1, column = 2;
                break;
            case 6:
                row = 2, column = 0;
                break;
            case 7:
                row = 2, column = 1;
                break;
            case 8:
                row = 2, column = 2;
                break;                                                                                                                        
        }
        
        if (playerTurn === 1) {
            inputToBoard(1, [row, column]);
            playerTurn = 2;
        }
        else {
            inputToBoard(2, [row, column]);
            playerTurn = 1;
        }

        showInput(i, row, column);

        if (gridIsComplete() === "It's a draw!") h2.textContent = gridIsComplete();
        else if (gridIsComplete()) h2.textContent = gameWin();
    });
}

function showInput(i, row, column) {
    p[i].textContent = Gameboard[row][column];
}

button.addEventListener('click', () => {
    gameReset();
});