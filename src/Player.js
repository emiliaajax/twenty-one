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
   * The number of the player
   *
   * @type {number}
   */
  #playerNumber
  #sum
  #cardRepresentation
  #result
  /**
   * Creates a Javascript Player instance representing a player.
   *
   * @param {number} playerNumber The number of the player.
   */
  constructor (playerNumber) {
    super()
    this.#playerNumber = playerNumber
    this.cards = []
    this.#sum = 0
    this.#cardRepresentation = []
    this.#result = ''
  }

  /**
   * Gets the number of the player represented by this object.
   *
   * @returns {number} The number of the player expressed as a number between 1 and 7, and 20 and 50.
   */
  get playerNumber () {
    return this.#playerNumber
  }

  /**
   * Gets the final sum of the player hand.
   *
   * @returns {number} The sum of the final hand of the player.
   */
  get sum () {
    return this.#sum
  }

  /**
   * Gets an array of string representations of every card on players final hand.
   *
   * @returns {string[]} An array with string representations of all cards.
   */
  get cardRepresentation () {
    return this.#cardRepresentation
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
    this.#result = this.evaluate(cardsOnHand, sumOfHand)
    this.#cardRepresentation = this.cardsAsStrings(cardsOnHand)
    this.#sum = sumOfHand
  }

  /**
   * Returns a final game result as a string if the outcome is decided already, otherwise returns undefined.
   *
   * @returns {string|undefined} Returns game result as a string if outcome is decided, otherwise undefined
   */
  checkForImmediateWinOrLoss () {
    let gameResult
    if (this.#result === 'WIN') {
      gameResult = `${this.toString()}\nDealer   : -\nPlayer wins!\n`
    }
    if (this.#result === 'LOSE') {
      gameResult = `${this.toString()} YOU HUGE!\nDealer   : -\nDealer wins!\n`
    }
    return gameResult
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
