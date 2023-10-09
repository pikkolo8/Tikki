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
const playerHand2 = document.getElementById('player2-hand');

function dealCards() {
    for (let i = 0; i < 5; i++) {
        playerHand.innerHTML += `<div>${deck.pop()}</div>`;
        playerHand2.innerHTML += `<div>${deck.pop()}</div>`;
    }
}

dealCards();

// Pelaajan korttipakan hallinta
const playCardButton = document.getElementById('play-card');
const player = document.getElementById('player');
const player2 = document.getElementById('player2');

function playCard() {
    const playerCard = playerHand.firstChild;

    if (playerCard) {
        playerHand.removeChild(playerCard);

       player.appendChild(playerCard);
    } else {
        alert('Käsi tyhjä!');
    }
}

function playCard2() {
    const playerCard2 = playerHand2.firstChild;

    if (playerCard2) {
        playerHand2.removeChild(playerCard2);

        player2.appendChild(playerCard2);
    } else {
        alert('Käsi tyhjä!');
    }
}