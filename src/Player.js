/**
 * Module for type Player.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Dealer } from './Dealer.js'

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
    this.numberOneCard = []
    this.secondCard = []
    this.fullHand = []
  }

  /**
   * Returns the first two cards as an array.
   *
   * @returns {Array} array
   */
  get firstTwoCards () {
    const first = this.numberOneCard
    const second = this.secondCard
    const sumOfFirstTwo = first[1] + second[1]
    const firstTwoCardsArray = [first[0], second[0], sumOfFirstTwo]
    return firstTwoCardsArray
  }

  /**
   * Returns an array with player number at index 0, suits and ranks from full hand from index 1 until index length-2, and primitive value of whole hand at last index.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @returns {Array} An array with player number, suits and ranks of all cards and primitive value of full hand.
   */
  playerHand (playingCards) {
    const fullHand = Dealer.dealRestOfCards(playingCards, this.firstTwoCards)
    return fullHand
  }

  /**
   * Returns a string representing the player hand.
   *
   * @returns {string} A string representing the player hand.
   */
  toString () {
    const playerArray = this.fullHand
    const cardsOfPlayerHand = playerArray.slice(0, playerArray.length - 2)
    const sumOfPlayerHand = playerArray.slice(-1)
    return `Player #${this.playerNumber}: ${cardsOfPlayerHand.join(' ')} (${sumOfPlayerHand})`
  }
}
