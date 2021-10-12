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
  }

  /**
   * Returns one card as an array with number of player as first element, suit and rank as second and primite value as third.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @returns {Array} An array with number of player as first element, suit and rank as second, and primitive value as third.
   */
  playerFirstCard (playingCards) {
    const first = Hand.firstCard(playingCards)
    first.unshift(this.playerNumber)
    return first
  }

  /**
   * Returns an array with player number at index 0, suits and ranks from full hand from index 1 until index length-2, and primitive value of whole hand at last index.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @param {object} first An object representing the first drawn card by the player.
   * @returns {Array} An array with player number, suits and ranks of all cards and primitive value of full hand.
   */
  playerHand (playingCards, first) {
    const fullHand = Hand.restOfCards(playingCards, first)
    fullHand.unshift(this.playerNumber)
    return fullHand
  }

  /**
   * Returns a string representing the player hand.
   *
   * @param {object[]} playingCards An array with PlayingCard objects.
   * @param {object} first An object representing the first drawn card by the player.
   * @returns {string} A string representing the player hand.
   */
  toString (playingCards, first) {
    const playerArray = this.playerHand(playingCards, first)
    const cardsOfPlayerHand = playerArray.slice(1, playerArray.length - 2)
    const sumOfPlayerHand = playerArray.slice(-1)
    return `Player #${this.playerNumber}: ${cardsOfPlayerHand.join(' ')} (${sumOfPlayerHand})`
  }
}
