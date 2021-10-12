
import { Deck } from './Deck.js'

export class Player {

  constructor(playerNumber) {
    this.playerNumber = playerNumber
  }

  playerHand (playingCards) {
    const hand = []
    let sumOfHand = 0
    let currentCard = 0
    while (sumOfHand < 17) {
      if (playingCards.length > 1) {
        currentCard = playingCards.shift()
      } else {
        playingCards = Deck.create()
        playingCards = Deck.shuffle(playingCards)
        currentCard = playingCards.shift()
      }
      hand.push(currentCard.toString())
      sumOfHand += currentCard.valueOf()
    }
    return `Player #${this.playerNumber}: ${hand.join(' ')} (${sumOfHand})`
  }
}
