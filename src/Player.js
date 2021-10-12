
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
  playerHand (playingCards) {
    const hand = Hand.onePlayingCard(playingCards)
    hand.unshift(this.playerNumber)
    return hand
    // return `Player #${this.playerNumber}: ${hand.join(' ')} (${sumOfHand})`
  }
}
