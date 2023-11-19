const Gameboard = (function() {
    const row = 3;
    const column = 3;
    const gameboard = [];

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
    else if (player === 2) input = '0';

    if (Gameboard[move[0]][move[1]] === "") Gameboard[move[0]][move[1]] = input;
    else console.log("This cell has already been played in.")

    return {Gameboard};
};

const gridIsComplete = function() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (Gameboard[i][j] === "") return false;
        }
    }
    return true;
}

const Game = function() {
    let sign = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            if (Gameboard[i][j] === Gameboard[i][j+1]) sign = Gameboard[i][j];
            else {
                sign = "";
                break;
            }
        }
        if (sign === 'x' || sign === '0') return ("player win");
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            if (Gameboard[j][i] === Gameboard[j+1][i]) sign = Gameboard[j][i];
            else {
                sign = "";
                break;
            }
        }
        if (sign === 'x' || sign === '0') return ("player win");
    }

    if (Gameboard[0][0] === Gameboard[1][1]) {
        if (Gameboard[1][1] === Gameboard[2][2]) {
            sign = Gameboard[0][0]; 
            return 'player win';
        }
    }

    if (Gameboard[0][2] === Gameboard[1][1]) {
        if (Gameboard[1][1] === Gameboard[2][0]) {
            sign = Gameboard[0][2]; 
            return 'player win';
        }
    }
}

const gameReset = function() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            Gameboard[i][j] = '';
        }
    }
    return Gameboard;
}