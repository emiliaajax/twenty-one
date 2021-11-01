/**
 * Module for type Dealer.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.1.0
 */

import { Player } from './Player.js'

/**
 * Represents a dealer.
 *
 * @class
 * @augments {Player}
 */
export class Dealer extends Player {
  /**
   * Returns the hand as a string representation if dealer won or lost immediately, otherwise returns undefined.
   *
   * @param {object} playingCards A playingCards object.
   * @returns {string | undefined} The hand as a string representation if dealer won or lost immediately, otherwise undefined.
   */
  hand (playingCards) {
    let gameResult
    this.stop = Math.floor(Math.random() * (19 - 13) + 13)
    while (this.sum < this.stop && this.cards.length < 5) {
      this.cards.push(playingCards.drawACard())
      this.checkSumOfHand()
      this.sumWithOptimalAce()
    }
    this.cardsAsStrings()
    const result = this.evaluate()
    if (result === 'WIN') {
      gameResult = `\n${this.toString()}\nDealer wins!\n`
    }
    if (result === 'LOSE') {
      gameResult = `\n${this.toString()} YOU HUGE!\nPlayer wins!\n`
    }
    return gameResult
  }

  /**
   * Returns a string representating the dealer hand.
   *
   * @returns {string} A string representing the dealer hand.
   */
  toString () {
    return `Dealer   : ${this.cardRepresentation.join(' ')} (${this.sum})`
  }
}
