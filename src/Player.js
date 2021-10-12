
import { Deck } from './Deck.js'

export class Player {
  #playerNumber
  constructor(playerNumber) {
    this.playerNumber = playerNumber
  }

  get playerNumber () {
    return this.#playerNumber
  }

  static playerHand (playingCards) {
    let hand = []
    for (let sumOfHand = 0; sumOfHand < 17;) {
      const currentCard = Deck.drawPile(playingCards)
      hand.push(currentCard.toString())
      sumOfHand += currentCard.valueOf()
    }
    return `Player 1: ${hand.join(' ')}`
  }
}
