const board = [];
for (let y = 0; y < 4; y++) {
    board[y] = [];
    for (let x = 0; x < 4; x++) {
        board[y][x] = y * 4 + x + 1;
    }
}
board[3][3] = 0; // hole