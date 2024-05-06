window.onload = function () {
    const suits = ['./img/dado1.2.jpg', './img/dado2.jpg', './img/dado3.jpg', './img/dado4.jpg', './img/dado5.2.jpg', './img/dado6.jpg'];
    const values = ['./img/dado1.2.jpg', './img/dado2.jpg', './img/dado3.jpg', './img/dado4.jpg', './img/dado5.2.jpg', './img/dado6.jpg'];

    let deck = [];

    suits.forEach(suit => {
        values.forEach(value => {
            deck.push({ suit, value });
        });
    });

    // Mezcla el mazo
    deck.sort(() => Math.random() - 0.5);

    // Agrega una carta aleatoria al DOM
    const deckElement = document.getElementById('domino');
    const randomCard = deck[Math.floor(Math.random() * deck.length)];
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
      <div class="item front"><img src="${randomCard.value}" alt="value"></br><img src="${randomCard.suit}" alt="suit"></div>
      <div class="item back"></div>
    `;
    deckElement.appendChild(cardElement);

    // Agrega un evento de clic a la carta para seleccionar una nueva carta aleatoria
    deckElement.addEventListener('click', () => {
        // Elimina la carta actual
        while (deckElement.firstChild) {
            deckElement.firstChild.remove();
        }

        // Selecciona una nueva carta aleatoria
        const randomCard = deck[Math.floor(Math.random() * deck.length)];

        // Agrega la nueva carta al DOM
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
      <div class="item front">
      <div><img src="${randomCard.value}" alt="value"><img src="${randomCard.suit}" alt="suit"></div>
      </div>
      <div class="item back"></div>
    `;
        deckElement.appendChild(cardElement);

        // Agrega la clase 'flipped' a la carta después de un pequeño retraso
        setTimeout(() => {
            cardElement.classList.add('flipped');
        }, 1000); // 1000 milisegundos = 1 segundo
    });
}