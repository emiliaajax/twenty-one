
import { Hand } from './Hand.js'

export class Player {

  constructor (playerNumber) {
    this.playerNumber = playerNumber
  }

  playerHand (playingCards) {
    const hand = Hand.currentHand(playingCards)
    hand.unshift(this.playerNumber)
    return hand
    // return `Player #${this.playerNumber}: ${hand.join(' ')} (${sumOfHand})`
  }
}
