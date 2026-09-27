/* Memory Match Challenge */

const cardSymbols = [
    "🍎","🍎",
    "🍌","🍌",
    "🍇","🍇",
    "🍉","🍉",
    "🍓","🍓",
    "🍍","🍍",
    "🥝","🥝",
    "🍒","🍒"
];

function shuffleCards(array) {

for (let i = array.length - 1; i > 0; i--) {

const randomIndex =
Math.floor(Math.random() * (i + 1));
[array[i], array[randomIndex]] =
[array[randomIndex], array[i]];
}

return array;
}

function createBoard() {

    const gameBoard =
        document.getElementById("game-board");

    gameBoard.innerHTML = "";

    const shuffledCards =
        shuffleCards([...cardSymbols]);

    shuffledCards.forEach(symbol => {

        const card =
        document.createElement("div");

        card.classList.add("memory-card");

        card.dataset.symbol = symbol;

        card.textContent = "?";

        gameBoard.appendChild(card);

    });

}

const startButton =
    document.getElementById("start-btn");

startButton.addEventListener(
    "click",
    createBoard
);
