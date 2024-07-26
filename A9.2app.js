$(document).ready(function() {
    const rows = 6;
    const cols = 7;
    let board = [];
    let currentPlayer = 'red';
    let gameActive = true;

    function initializeBoard() {
        board = [];
        for (let r = 0; r < rows; r++) {
            let row = [];
            for (let c = 0; c < cols; c++) {
                row.push(null);
            }
            board.push(row);
        }
    }

    function createBoard() {
        $('#game-board').empty();
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let cell = $('<div>')
                    .addClass('cell')
                    .attr('data-row', r)
                    .attr('data-col', c);
                $('#game-board').append(cell);
            }
        }
    }

    function resetGame() {
        initializeBoard();
        createBoard();
        currentPlayer = 'red';
        gameActive = true;
    }

    function checkWin() {
        // Check horizontal, vertical and diagonal for a win
        function checkDirection(row, col, rowStep, colStep) {
            let count = 0;
            let color = board[row][col];
            if (!color) return false;

            for (let i = 0; i < 4; i++) {
                if (row >= rows || col >= cols || row < 0 || col < 0) return false;
                if (board[row][col] === color) {
                    count++;
                    if (count === 4) return true;
                } else {
                    break;
                }
                row += rowStep;
                col += colStep;
            }
            return false;
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (checkDirection(r, c, 0, 1) || // horizontal
                    checkDirection(r, c, 1, 0) || // vertical
                    checkDirection(r, c, 1, 1) || // diagonal down-right
                    checkDirection(r, c, 1, -1)) { // diagonal down-left
                    return true;
                }
            }
        }
        return false;
    }

    function computerMove() {
        let col;
        do {
            col = Math.floor(Math.random() * cols);
        } while (board[0][col] !== null);
        makeMove(col);
    }

    function makeMove(col) {
        if (!gameActive) return;

        for (let r = rows - 1; r >= 0; r--) {
            if (board[r][col] === null) {
                board[r][col] = currentPlayer;
                $(`.cell[data-row=${r}][data-col=${col}]`).addClass(currentPlayer);
                if (checkWin()) {
                    gameActive = false;
                    alert(`${currentPlayer} gewinnt!`);
                }
                currentPlayer = (currentPlayer === 'red') ? 'yellow' : 'red';
                if (currentPlayer === 'yellow' && gameActive) {
                    setTimeout(computerMove, 500);
                }
                return;
            }
        }
    }

    $('#game-board').on('click', '.cell', function() {
        if (currentPlayer !== 'red' || !gameActive) return;
        let col = $(this).data('col');
        makeMove(col);
    });

    $('#reset').click(function() {
        resetGame();
    });

    resetGame();
});
