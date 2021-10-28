/**
 * Module for type Dealer.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Participant } from './Participant.js'

/**
 *
 */
export class Dealer extends Participant {
  #sum
  #cardRepresentation
  #result
  /**
   * Creates a Javascript Dealer instance representing a dealer.
   *
   */
  constructor () {
    super()
    this.cards = []
    this.#sum = 0
    this.#cardRepresentation = []
    this.#result = ''
  }

  /**
   * Gets the final sum of dealer hand.
   *
   * @returns {number} The sum of the final hand of the dealer.
   */
  get sum () {
    return this.#sum
  }

  /**
   * Gets an array of string representations of every card on dealers final hand.
   *
   * @returns {string[]} An array with string representations of all cards.
   */
  get cardRepresentation () {
    return this.#cardRepresentation
  }

  /**
   * Returns the dealers result as a string of 'WIN', 'LOSE' or ''. The empty string means that the result is not decided yet.
   *
   */
  dealerHand () {
    const stop = Math.floor(Math.random() * (19 - 13) + 13)
    const cardsOnHand = this.cards
    let sumOfHand = this.checkSumOfHand(cardsOnHand)
    while (sumOfHand < stop && cardsOnHand.length < 5) {
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
   * @param {object} player A player object.
   * @returns {string|undefined} Returns game result as a string if outcome is decided, otherwise undefined
   */
  checkForImmediateWinOrLoss (player) {
    let gameResult
    if (this.#result === 'WIN') {
      gameResult = `${player.toString()}\n${this.toString()}\nDealer wins!\n`
    }
    if (this.#result === 'LOSE') {
      gameResult = `${player.toString()}\n${this.toString()} YOU HUGE!\nPlayer wins!\n`
    }
    return gameResult
  }

  /**
   * Returns a string representing the dealer hand.
   *
   * @returns {string} A string representing the player hand.
   */
  toString () {
    return `Dealer   : ${this.cardRepresentation.join(' ')} (${this.sum})`
  }
}
