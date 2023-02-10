const nums = [];
const board = [];
for (let y = 0; y < 4; y++) {
    nums[y] = [];
    board[y] = [];
    for (let x = 0; x < 4; x++) {
        nums[y][x] = y * 4 + x + 1;
        board[y][x] = null;
    }
}
nums[3][3] = 0;

const prepareBoard = () => {
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
            // Save div elements to board.
            board[y][x] = div;
        }
    }
};

const swapNums = () => {
    // swap 10000 times
    for (let i = 0; i < 500; i++) {
        let from;
        let to;
        // 0 <= Math.random() * 16 < 16
        // 0 <= Math.trunc(Math.random() * 16) <= 15
        do {
            from = Math.trunc(Math.random() * 16);
            to = Math.trunc(Math.random() * 16);
        } while (from === to);
        // alert("from: " + from + "\n" + "Math.trunc(from / 4): " + 
            // Math.trunc(from / 4) + "\n" + "from % 4: " + from % 4);
        [
            nums[Math.trunc(from / 4)][from % 4],
            nums[Math.trunc(to / 4)][to % 4]
        ] = [
            nums[Math.trunc(to / 4)][to % 4],
            nums[Math.trunc(from / 4)][from % 4]
        ]
    }
}

const showBoard = () => {
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            // write nums on board
            board[y][x].textContent = nums[y][x] !== 0 ? nums[y][x] : "";
        }
    }
}

onload = () => {
    prepareBoard();
    swapNums();
    showBoard();
}