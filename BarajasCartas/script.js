window.onload = function() {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
    let deck = [];
  
    suits.forEach(suit => {
      values.forEach(value => {
        deck.push({ suit, value });
      });
    });
  
    // Mezcla el mazo
    deck.sort(() => Math.random() - 0.5);
  
    // Agrega una carta aleatoria al DOM
    const deckElement = document.getElementById('baraja');
    const randomCard = deck[Math.floor(Math.random() * deck.length)];
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
      <div class="item front">${randomCard.value}${randomCard.suit}</div>
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
      <div class="item front">${randomCard.value}${randomCard.suit}</div>
      <div class="item back"></div>
    `;
    deckElement.appendChild(cardElement);
  
    // Agrega la clase 'flipped' a la carta después de un pequeño retraso
    setTimeout(() => {
      cardElement.classList.add('flipped');
    }, 1000); // 1000 milisegundos = 1 segundo
  });
  }