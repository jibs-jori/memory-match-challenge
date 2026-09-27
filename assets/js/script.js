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

let firstCard = null;
let secondCard = null;

let lockBoard = false;

let moves = 0;

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
        card.addEventListener(
            "click",
            flipCard);

        gameBoard.appendChild(card);

    });

}

function flipCard() {

    if (lockBoard) {
        return;
    }

    if (this === firstCard) {
        return;
    }

    this.textContent =
        this.dataset.symbol;

    this.classList.add("flipped");

    if (!firstCard) {

        firstCard = this;

        return;
    }

    secondCard = this;

    checkForMatch();

}

const startButton =
    document.getElementById("start-btn");

startButton.addEventListener(
    "click",
    createBoard
);
