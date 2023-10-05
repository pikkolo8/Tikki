// Luodaan korttipakka
const suits = ['Hertta', 'Ruutu', 'Risti', 'Pata'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jätkä', 'Kuningatar', 'Kuningas', 'Ässä'];
const deck = [];

for (const suit of suits) {
    for (const rank of ranks) {
        deck.push(`${rank} ${suit}`);
    }
}

// Sekoitetaan kortit
deck.sort(() => Math.random() - 0.5);

// Jakelija
const playerHand = document.getElementById('player-hand');
const computerHand = document.getElementById('computer-hand');

function dealCards() {
    for (let i = 0; i < 7; i++) {
        playerHand.innerHTML += `<div>${deck.pop()}</div>`;
        computerHand.innerHTML += `<div>${deck.pop()}</div>`;
    }
}

dealCards();

// Pelaajan korttipakan hallinta
const playCardButton = document.getElementById('play-card');
const player = document.getElementById('player');
const computer = document.getElementById('computer');

function playCard() {
    const playerCard = playerHand.firstChild;
    const computerCard = computerHand.firstChild;

    if (playerCard && computerCard) {
        playerHand.removeChild(playerCard);
        computerHand.removeChild(computerCard);

        player.appendChild(playerCard);
        computer.appendChild(computerCard);
    } else {
        alert('Käsi tyhjä!');
    }
}

playCardButton.addEventListener('click', playCard);
