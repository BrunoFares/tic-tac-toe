const Gameboard = (function() {
    const row = 3;
    const column = 3;
    const gameboard = [];

    for (let i = 0; i < row; i++) {
        gameboard[i] = [];
        for (let j = 0; j < column; j++) {
            gameboard[i][j] = 1;
        }
    }

    return gameboard;
})();

function inputToBoard(player, move) {
    let input;

    if (player === 1) input = 'x';
    else if (player === 2) input = '0';

    if (Gameboard[move[0]][move[1]] === 1) Gameboard[move[0]][move[1]] = input;
    else console.log("This cell has already been played in.")

    return {Gameboard};
};

const gridIsComplete = function() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (Gameboard[i][j] === 1) return false;
        }
    }
    return true;
}

const Game = function() {
    
}