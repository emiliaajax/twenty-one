/**
 * Module for type Player.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Participant } from './Participant.js'

/**
 *
 */
export class Player extends Participant {
  /**
   * Creates a Javascript Player instance representing a player.
   *
   * @param {number} playerNumber The number of the player.
   */
  constructor (playerNumber) {
    super()
    this.playerNumber = playerNumber
    this.cards = []
    this.sum = 0
    this.cardRepresentation = []
  }

  /**
   * Returns the players result as a string of 'WIN', 'LOSE' or ''. The empty string means that the result is not decided yet.
   *
   * @returns {string} Returns the players result.
   */
  playerHand () {
    const stop = Math.floor(Math.random() * (19 - 13) + 13)
    const cardsOnHand = this.cards
    let sumOfHand = this.checkSumOfHand(cardsOnHand)
    while ((sumOfHand < stop && cardsOnHand.length < 5) || cardsOnHand.length < 2) {
      cardsOnHand.push(this.demandACard())
      sumOfHand = this.sumWithOptimalAce(cardsOnHand, stop)
    }
    const result = this.evaluate(cardsOnHand, sumOfHand)
    const strings = this.cardsAsStrings(cardsOnHand)
    this.cardRepresentation = strings
    this.sum = sumOfHand
    return result
  }

  /**
   * Returns a string representing the player hand.
   *
   * @returns {string} A string representing the player hand.
   */
  toString () {
    return `Player #${this.playerNumber}: ${this.cardRepresentation.join(' ')} (${this.sum})`
  }
}
