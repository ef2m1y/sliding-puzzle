const board = [];
for (let y = 0; y < 4; y++) {
    board[y] = [];
    for (let x = 0; x < 4; x++) {
        board[y][x] = y * 4 + x + 1;
    }
}
board[3][3] = 0;

// UI
const init = () => {
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            const div = document.createElement("div");
            document.body.appendChild(div);
            Object.assign(div.style, {
                position: "absolute",
                width: "80px",
                height: "80px",
                top: `${y * 80}px`,
                left: `${x * 80}px`,
                border: "4px solid #f80",
                backgroundColor: "#840",
                fontSize: "50px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            });
        }
    }
};

window.onload = () => {
    init();
}