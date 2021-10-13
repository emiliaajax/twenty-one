/**
 * Module for type Player.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

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
    this.numberOneCard = {}
    this.fullHand = []
  }

  /**
   * Returns an array with player number at index 0, suits and ranks from full hand from index 1 until index length-2, and primitive value of whole hand at last index.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @returns {Array} An array with player number, suits and ranks of all cards and primitive value of full hand.
   */
  playerHand (playingCards) {
    const fullHand = Hand.restOfCards(playingCards, this.numberOneCard)
    fullHand.unshift(this.playerNumber)
    return fullHand
  }

  /**
   * Returns a string representing the player hand.
   *
   * @returns {string} A string representing the player hand.
   */
  toString () {
    const playerArray = this.fullHand
    const cardsOfPlayerHand = playerArray.slice(1, playerArray.length - 2)
    const sumOfPlayerHand = playerArray.slice(-1)
    return `Player #${this.playerNumber}: ${cardsOfPlayerHand.join(' ')} (${sumOfPlayerHand})`
  }
}
