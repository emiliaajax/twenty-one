
import { Hand } from './Hand.js'

/**
 *
 */
export class Player {
  /**
   * Creates a Javascript Player instance representing a player.
   *
   * @param {number} playerNumber The number of the player.
   */
  constructor (playerNumber) {
    this.playerNumber = playerNumber
  }

  /**
   * Returns one card as an array with number of player as first element, suit and rank as second and primite value as third.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @returns {Array} An array with number of player as first element, suit and rank as second, and primitive value as third.
   */
  playerFirstCard (playingCards) {
    const firstCard = Hand.onePlayingCard(playingCards)
    firstCard.unshift(this.playerNumber)
    return firstCard
    // return `Player #${this.playerNumber}: ${hand.join(' ')} (${sumOfHand})`
  }

  /**
   * Returns an array with player number at index 0, suits and ranks from full hand from index 1 until index length-2, and primitive value of whole hand at last index.
   *
   * @param {*} playingCards An array with PlayingCard objects.
   * @param {*} firstCard An object representing the first drawn card by the player.
   * @returns {Array} An array with player number, suits and ranks of all cards and primitve value of full hand.
   */
  playerHand (playingCards, firstCard) {
    const fullHand = Hand.handOfCards(playingCards, firstCard)
    fullHand.unshift(this.playerNumber)
    return fullHand
  }
}
