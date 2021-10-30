/**
 * Module for type Dealer.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Participant } from './Participant.js'

/**
 * Represents a dealer.
 *
 * @class
 * @augments {Participant}
 */
export class Dealer extends Participant {
  /**
   * An empty array to hold the cards of the dealer.
   *
   * @type {Array}
   * @public
   */
  cards
  /**
   * The total sum of dealer hand.
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
   * Gets the final sum of dealer hand.
   *
   * @returns {number} The sum of the final hand of the dealer.
   */
  get sum () {
    return this.#sum
  }

  /**
   * Returns the dealer hand as a string if dealer won or lost immediately, otherwise returns undefined.
   *
   * @param {object} playingCards A playingCards object.
   * @returns {string|undefined} The dealer hand as a string if dealer won or lost immediately, otherwise undefined.
   */
  dealerHand (playingCards) {
    let gameResult
    const stop = Math.floor(Math.random() * (19 - 13) + 13)
    const cardsOnHand = this.cards
    let sumOfHand = this.checkSumOfHand(cardsOnHand)
    while (sumOfHand < stop && cardsOnHand.length < 5) {
      cardsOnHand.push(playingCards.drawACard())
      sumOfHand = this.sumWithOptimalAce(cardsOnHand, stop)
    }
    this.#cardRepresentation = this.cardsAsStrings(cardsOnHand)
    this.#sum = sumOfHand
    const result = this.evaluate(cardsOnHand, sumOfHand)
    if (result === 'WIN') {
      gameResult = `\n${this.toString()}\nDealer wins!\n`
    }
    if (result === 'LOSE') {
      gameResult = `\n${this.toString()} YOU HUGE!\nPlayer wins!\n`
    }
    return gameResult
  }

  /**
   * Returns a string representing the dealer hand.
   *
   * @returns {string} A string representing the dealer hand.
   */
  toString () {
    return `Dealer   : ${this.#cardRepresentation.join(' ')} (${this.sum})`
  }
}
