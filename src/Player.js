/**
 * Module for type Player.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Participant } from './Participant.js'

/**
 * Represents a player.
 *
 * @class
 * @augments {Participant}
 */
export class Player extends Participant {
  /**
   * An empty array to hold the cards of the current player.
   *
   * @type {Array}
   * @public
   */
   cards
  /**
   * The number of the player.
   *
   * @type {number}
   * @private
   */
  #playerNumber
  /**
   * The total sum of player hand.
   *
   * @type {number}
   * @private
   */
  #sum
  /**
   * The cards represented as an array of strings.
   *
   * @type {string[]}
   * @private
   */
  #cardRepresentation

  /**
   * Creates a Javascript Player instance representing a player.
   *
   * @param {number} playerNumber The number of the player.
   */
  constructor (playerNumber) {
    super()
    this.#playerNumber = playerNumber
    this.#sum = 0
    this.#cardRepresentation = []
    this.cards = []
  }

  /**
   * Gets the final sum of the player hand.
   *
   * @returns {number} The sum of the final hand of the player.
   * @readonly
   */
  get sum () {
    return this.#sum
  }

  /**
   * Returns the player hand as a string if player won or lost immediately, otherwise returns undefined.
   *
   * @param {object} playingCards A playingCard object.
   * @returns {string|undefined} The player hand as a string if dealer won or lost immediately, otherwise undefined.
   */
  playerHand (playingCards) {
    let gameResult
    const stop = Math.floor(Math.random() * (19 - 13) + 13)
    const cardsOnHand = this.cards
    let sumOfHand = this.checkSumOfHand(cardsOnHand)
    while ((sumOfHand < stop && cardsOnHand.length < 5) || cardsOnHand.length < 2) {
      cardsOnHand.push(playingCards.drawACard())
      sumOfHand = this.sumWithOptimalAce(cardsOnHand, stop)
    }
    this.#cardRepresentation = this.cardsAsStrings(cardsOnHand)
    this.#sum = sumOfHand
    const result = this.evaluate(cardsOnHand, sumOfHand)
    if (result === 'WIN') {
      gameResult = `${this.toString()}\nDealer   : -\nPlayer wins!\n`
    }
    if (result === 'LOSE') {
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
    return `Player #${this.#playerNumber}: ${this.#cardRepresentation.join(' ')} (${this.#sum})`
  }
}
