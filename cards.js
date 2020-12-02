function newDeck() {
  const url = 'https://deckofcardsapi.com/api/deck/new/'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const element = document.getElementById("DeckId")
        element.innerHTML = JSON.stringify(data.deck_id)
      });
}

function shuffleDeck() {
  const deckId = document.getElementById("DeckId").innerText.replace(/['"]+/g, '').replace(/['"]+/g, '')
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle`
  fetch(url)
    .then(response => response.json())
}

function drawCard() {
  const deckId = document.getElementById("DeckId").innerText.replace(/['"]+/g, '').replace(/['"]+/g, '')

  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const imgSrc = data.cards[0].image
      const element = document.getElementById("CardData")
      element.innerHTML = '<img alt="cardImage" src='+imgSrc+' />'
    });
}
