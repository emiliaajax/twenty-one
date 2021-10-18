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
  /**
   * Creates a Javascript Dealer instance representing a dealer.
   *
   */
  constructor () {
    super()
    this.cards = []
    this.#sum = 0
    this.#cardRepresentation = []
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
   * Returns the dealers result as a string of 'WIN', 'LOSE' or ''. The empty string means that the result is not decided yet.
   *
   * @returns {string} Returns the dealers result.
   */
  dealerHand () {
    const stop = Math.floor(Math.random() * (19 - 13) + 13)
    const cardsOnHand = this.cards
    let sumOfHand = this.checkSumOfHand(cardsOnHand)
    while (sumOfHand < stop && cardsOnHand.length < 5) {
      cardsOnHand.push(this.demandACard())
      sumOfHand = this.sumWithOptimalAce(cardsOnHand, stop)
    }
    const result = this.evaluate(cardsOnHand, sumOfHand)
    const strings = this.cardsAsStrings(cardsOnHand)
    this.#cardRepresentation = strings
    this.#sum = sumOfHand
    return result
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
